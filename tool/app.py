import os ,sys,time,zipfile
from io import BytesIO
from flask import Flask, redirect, request, send_file
from flask_sock import Sock
#   pyinstaller -F app.py
filepath =os.path.dirname(os.path.realpath(sys.argv[0]))
app = Flask(__name__, static_url_path='', static_folder=filepath, template_folder=filepath)
html0="""<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>共享文件列表</title>
    <script>
        function upload() {
            const f = document.querySelector('#file');
            const fdata = new FormData();
            fdata.append('file', f.files[0]);
            const xhr = new XMLHttpRequest();
            xhr.open('post', '/upload_file', true);
            xhr.upload.addEventListener("progress", function (e) {
                if (e.lengthComputable) {
                let percentComplete = e.loaded / e.total; // 计算上传进度（比例）
                document.getElementById("myElement").innerHTML = Math.round(percentComplete*10000)/100
                } })
            xhr.send(fdata);
            }
    </script>
</head>
<body >
    <div style="max-width:600px;margin: 0 auto;">
        <table border='1' style="border-spacing: 0px;font-size:12px;">
        <caption style="height:40px;line-height: 40px;font-size:16px;">文件共享列表</caption>
        <tr>
            <td width=380px>文件或文件夹</td>
            <td width=80px>文件大小</td>
            <td width=100px>修改日期</td>
            <td width=80px>链接</td>
        </tr>
"""
# WebSocket 路由
active_clients = []
sock = Sock(app)
@sock.route("/chat")
def chat(sock):
    active_clients.append(sock)
    try:
        while True:
            msg = sock.receive()
            for client in active_clients:
                client.send(msg)
    finally:
        active_clients.remove(sock)
@app.route("/" , methods=['GET','post'])
def index():
    # return render_template("./index.html")
    file_list = os.listdir(filepath)
    html=html0
    for file in file_list:
        size,mtime=get_size_time(filepath+"/"+file)
        if os.path.isfile(filepath+"/"+file):
            file2=file;file1=file
        else:
            file2="path_file/"+file;file1=file+"/"
        html=html+ """<tr>
                        <td><a href="/%s">%s</a></td>
                        <td>%s</td>
                        <td>%s</td>
                        <td><a href="/dload_file/%s">下载</a></td>
                    </tr>""" %(file2,file1,size,mtime,file)
    html=html+ """</table> <br>
        <form action="/upload_file/path_file" enctype='multipart/form-data' method='POST'>
            <input type="file" name="file"  id="file" multiple>
            <input type="submit" value="上传/首页"  id="upload-btn" onclick="upload()">
            <span>上传进度<span id="myElement">0</span>%</span>
        </form>
        <div id="output" style="height:100px;overflow-y:scroll; border:1px solid #ccc;"></div>
        <input type="text" id="msg" placeholder="输入消息" style="width:68%;" onkeydown="if(event.keyCode==13){send()}">
        <button onclick="send()" style="width:28%;">发送</button>
        <script>
            const ws = new WebSocket("ws://" + window.location.host + "/chat");
            ws.onmessage = (e) => {
                document.getElementById("output").innerHTML += e.data + "<br>";
            };
            function send() {
                const msg = document.getElementById("msg");
                ws.send(msg.value);
                msg.value = '';
            }
        </script>
    </div>
    </body>
    </html>"""
    return html
        
@app.route("/path_file/<path:path>")
def path_file(path):
    file_list = os.listdir(filepath +"/" + path)
    html=html0
    for file in file_list:
        size,mtime=get_size_time(filepath+"/"+path+"/"+file)
        if os.path.isfile(filepath+"/"+path+"/"+file):
            file1=file;path1=path
        else:
            file1=file+"/";path1="path_file/"+path
        html=html+ """<tr>
                        <td><a href="/%s/%s">%s</a></td>
                        <td>%s</td>
                        <td>%s</td>
                        <td><a href="/dload_file/%s/%s">下载</a></td>
                    </tr>""" %(path1,file,file1,size,mtime,path,file)
    html=html+ """</table> <br>
        <form action='/upload_file/"""+path+"""' enctype='multipart/form-data' method='POST'>
            <input type='file' name='file'  id='file'>
            <input type='submit' value='上传/首页'  id='upload-btn' onclick='upload()'>
            <span>上传进度<span id="myElement">0</span>%</span>
        </form></div>
    </body>
    </html>"""
    return html
@app.route("/dload_file/<path:downpath>")
def download_file(downpath):
    folder = filepath +"/"+downpath# 指定要打包的目录
    if os.path.isfile(folder):
        return send_file(folder, as_attachment=True)
    else:
        in_memory_zip = BytesIO()# 创建一个空的内存文件，用于存储压缩文件
        with zipfile.ZipFile(in_memory_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zf: # 创建一个ZipFile对象
            for root, dirs, files in os.walk(downpath):# 遍历目录下的所有文件
                for file in files:
                    file_path = os.path.join(root,file)
                    zf.write(file_path)#, arcname=file)# 将文件添加到zip文件中
        in_memory_zip.seek(0)# 将内存文件指针移动到文件开头
        return send_file(in_memory_zip, download_name=downpath+'.zip', as_attachment=True)
@app.route('/upload_file/<path:ulpath>', methods=['POST', 'GET'])
def upload_file(ulpath):
    if request.method == 'POST':
        upload_file = request.files['file']
        if upload_file.filename =="":
            return redirect("/")
        if ulpath=="path_file": 
            if os.path.exists(upload_file.filename):
                upload_file.save(str(round(time.time()))+"-"+upload_file.filename)
            else:
                upload_file.save(upload_file.filename)
            return redirect("/")
        else:
            if os.path.exists(ulpath+"/"+upload_file.filename):
                upload_file.save(ulpath+"/"+str(round(time.time()))+"-"+upload_file.filename)
            else:
                upload_file.save(ulpath+"/"+upload_file.filename)
            return redirect("/path_file/"+ulpath)
    return redirect("/") 
def get_size_time(path):# 获取文件信息的函数
    size =0
    if os.path.isdir(path):
        for root, dirs, files in os.walk(path):# 遍历目录下的所有文件
            for file in files:
                size += os.path.getsize(os.path.join(root,file))
    elif os.path.isfile(path):
        size = os.path.getsize(path)# 统计文件的大小
    size = file_size_fomat(size)
    mtime = time.localtime(os.path.getmtime(path))
    mtime="{}/{}/{}".format(mtime.tm_year, mtime.tm_mon, mtime.tm_mday)
    return size,mtime
def file_size_fomat(size):
    if size < 1024:
        return '%i' % size + 'B'
    elif 1024 < size <= 1048576:
        return '%.1f' % float(size/1024) + 'KB'
    elif 1048576 < size <= 1073741824:
        return '%.1f' % float(size/1048576) + 'MB'
    else:
        return '%.1f' % float(size/1073741824) + 'GB'
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=666)