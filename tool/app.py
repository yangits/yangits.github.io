import os ,sys,time,zipfile
from io import BytesIO
from flask import Flask, request, send_file
from flask_sock import Sock
#   pyinstaller -F app.py
filepath =os.path.dirname(os.path.realpath(sys.argv[0]))
app = Flask(__name__, static_url_path='', static_folder=filepath, template_folder=filepath)
html0="""<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>共享文件列表</title>
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
@app.route("/" , methods=['GET'])
@app.route("/bin/<path:path>", methods=['GET'])
def path_file(path=""):
    current_dir = os.path.join(filepath, path)
    file_list = os.listdir(current_dir)
    html=html0
    for file in file_list:
        file0=os.path.join(current_dir, file)
        size,mtime=get_size_time(file0)
        if os.path.isfile(file0):
            file2=os.path.join(path, file)
        else:
            file2="bin/"+os.path.join(path, file);file=file+"/"
        html=html+ """<tr>
                        <td><a href="/%s">%s</a></td>
                        <td>%s</td>
                        <td>%s</td>
                        <td><a href="/dload_file/%s">下载</a></td>
                    </tr>""" %(file2,file,size,mtime,os.path.join(path,file))
    html=html+ """</table> <br>
        <input type="file" name="file" id="file" multiple>
        <input type="button" value="上传/首页"  onclick="upload();">
        <span>上传进度<span id="myElement">0</span>%</span>
        <div id="output" style="height:100px;overflow-y:scroll; border:1px solid #ccc;margin: 10px auto;"></div>
        <input type="text" id="msg" placeholder="输入消息" style="width:68%;" onkeydown="if(event.keyCode==13){send()}">
        <button onclick="send()" style="width:28%;">发送/Enter</button>
        <script>
            function upload() {
                const f = document.getElementById('file');
                if (f.files.length===0){window.location.href = "/";return false;}
                const fdata = new FormData();
                for (let i = 0; i < f.files.length; i++) {fdata.append('file', f.files[i]);}
                const xhr = new XMLHttpRequest();
                xhr.open('post', '/upload_file/"""+path+"""', true);
                xhr.upload.addEventListener("progress", function (e) {
                    if (e.lengthComputable) {
                    let percentComplete = e.loaded / e.total; // 计算上传进度（比例）
                    document.getElementById("myElement").innerHTML = Math.round(percentComplete*10000)/100
                    } })
                xhr.onload = function(){window.location.reload();};
                xhr.send(fdata);
            }
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
@app.route("/dload_file/<path:downpath>", methods=['GET'])
def download_file(downpath):
    folder = os.path.join(filepath, downpath)
    if os.path.isfile(folder):
        return send_file(folder, as_attachment=True)
    else:
        in_memory_zip = BytesIO()# 创建一个空的内存文件，用于存储压缩文件
        with zipfile.ZipFile(in_memory_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zf: # 创建一个ZipFile对象
            for root, dirs, files in os.walk(folder):# 遍历目录下的所有文件
                for file in files:
                    file_path = os.path.join(root,file)
                    zf.write(file_path, arcname=os.path.relpath(file_path, folder))# 将文件添加到zip文件中
        in_memory_zip.seek(0)# 将内存文件指针移动到文件开头
        return send_file(in_memory_zip, download_name=downpath.split("/")[-2]+'.zip', as_attachment=True)
@app.route('/upload_file/<path:ulpath>', methods=['POST'])
@app.route('/upload_file/', methods=['POST'])
def upload_file(ulpath=""):
    path = os.path.join(filepath, ulpath)
    for file in request.files.getlist('file'):
        if os.path.exists(path+"/"+file.filename):
            file.save(path+"/"+str(round(time.time()))+"-"+file.filename)
        else:
            file.save(path+"/"+file.filename)
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