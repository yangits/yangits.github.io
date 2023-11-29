from flask import Flask,send_file
import os,time
import sys
import zipfile
from io import BytesIO
#   pyinstaller -F app.py
filepath =os.path.dirname(os.path.realpath(sys.argv[0]))
app = Flask(__name__, static_url_path='', static_folder=filepath, template_folder=filepath)
html1="""<html>
        <head>
          <title>共享文件列表</title>
          <br>
        </head>
        <body style="display: flex; justify-content: center;">
            <div>
                <table border='1'>
                <caption style="height:30px;">文件共享列表</caption>
                <tr>
                    <td width=380px>文件或文件夹</td>
                    <td width=80px>文件大小</td>
                    <td width=100px>修改日期</td>
                    <td width=70px>下载链接</td>
                </tr>
        """
@app.route("/")
def index():
    # return render_template("./index.html")
    file_list = os.listdir(filepath)
    html=html1
    for file in file_list:
        size,mtime=get_size_time(filepath+"/"+file)
        if os.path.isfile(filepath+"/"+file):
            html=html+ """<tr>  
                            <td><a href="/%s">%s</a></td>
                            <td>%s</td>
                            <td>%s</td>
                            <td><a href="/dload/%s">下载</a></td>    
                        </tr>""" %(file,file,size,mtime,file) 
        else:
            html=html+ """<tr>
                            <td><a href="/path/%s">%s/</a></td>
                            <td>%s</td>
                            <td>%s</td>
                            <td><a href="/dload/%s">打包下载</a></td>
                        </tr>""" %(file,file,size,mtime,file)
    html=html+ """</table>
                <a href="/">上传文件</a>
            </div>
        </body>
        </html>"""
    return html
@app.route("/path/<path:path>")
def path_file(path):
    file_list = os.listdir(filepath +"/" + path)
    html=html1
    for file in file_list:
        size,mtime=get_size_time(filepath+"/"+path+"/"+file)
        if os.path.isfile(filepath+"/"+path+"/"+file):
            html=html+ """<tr>  
                            <td><a href="/%s/%s">%s</a></td>
                            <td>%s</td>
                             <td>%s</td>
                            <td><a href="/dload/%s/%s">下载</a></td>    
                        </tr>""" %(path,file,file,size,mtime,path,file) 
        else:
            html=html+ """<tr>
                            <td><a href="/path/%s/%s">%s/</a></td>
                            <td>%s</td>
                             <td>%s</td>
                            <td><a href="/dload/%s/%s">打包下载</a></td>
                        </tr>""" %(path,file,file,size,mtime,path,file)
    html=html+ """</table>
            <a href="/">上传文件</a>
        </body>
        </html>"""
    return html

@app.route("/dload/<path:downpath>")
def download_file(downpath):
    folder = filepath +"/"+downpath# 指定要打包的目录
    if os.path.isfile(folder):
        return send_file(folder, as_attachment=True)
    else:
        in_memory_zip = BytesIO()# 创建一个空的内存文件，用于存储压缩文件
        with zipfile.ZipFile(in_memory_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zf: # 创建一个ZipFile对象，将压缩文件写入内存文件
            for root, dirs, files in os.walk(downpath):# 遍历目录下的所有文件，并将文件添加到zip文件中
                for file in files:
                    file_path = os.path.join(root,file)
                    zf.write(file_path)#, arcname=file)# 将文件添加到zip文件中，并指定压缩文件中的文件名为文件相对路径
        in_memory_zip.seek(0)# 将内存文件指针移动到文件开头
        return send_file(in_memory_zip, download_name=downpath+'.zip', as_attachment=True)# 返回压缩文件，指定文件名为download.zip

def get_size_time(path):# 获取文件信息的函数
    # 获取指定路径下的所有文件、文件夹的信息
    size =0
    if os.path.isdir(path):
        # 遍历目录下的所有文件的大小
        for root, dirs, files in os.walk(path):
            for file in files:
                size += os.path.getsize(os.path.join(root,file))
    elif os.path.isfile(path):
        size = os.path.getsize(path)# 如果是文件则直接统计文件的大小
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
    elif 1073741824 < size <= 1099511627776:
        return '%.1f' % float(size/1073741824) + 'GB'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=666)