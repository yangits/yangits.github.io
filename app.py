from flask import Flask,send_file
import os ,sys
import zipfile
from io import BytesIO
#pyinstaller -F app.py
filepath =os.path.dirname(os.path.realpath(sys.argv[0]))
app = Flask(__name__, static_url_path='', static_folder='', template_folder=filepath)
@app.route("/")
def index():
    # return render_template("./index.html")
    file_list = os.listdir(filepath)
    html="""<html>
        <head>
          <title>共享文件列表</title>
        </head>
        <body>
            <ul>"""
    for file in file_list:
        if os.path.isfile(filepath+"/"+file):
            html=html+ """<li>文件--------<a href="/%s">%s</a>------<a href="/dload/%s">下载</a> </li>""" %(file,file,file) 
        else:
            html=html+ """<li>文件夹------<a href="/path/%s">%s</a>------<a href="/dload/%s">打包下载</a></li>""" %(file,file,file)
    html=html+"""<li><a href="/">上传文件</a> <a href="/dload/all ">全部打包下载</a></li>"""
    html=html+ """</ul>
        </body>
        </html>"""
    return html
@app.route("/path/<path:path>")
def path_file(path):
    file_list = os.listdir(filepath +"/" + path)
    html="""<html>
        <head>
          <title>共享文件列表</title>
        </head>
        <body>
            <ul>"""
    for file in file_list:
        if os.path.isfile(filepath+"/"+path+"/"+file):
            html=html+ """<li>文件--------<a href="/%s/%s"> %s</a>------<a href="/dload/%s/%s">下载</a> </li>""" %(path,file,file,path,file)
        else:
            html=html+ """<li>文件夹------<a href="/path/%s/%s"> %s</a>------<a href="/dload/%s/%s">打包下载</a> </li>""" %(path,file,file,path,file)
    html=html+"""<li><a href="/">上传文件</a></li>"""
    html=html+ """</ul>
        </body>
        </html>"""
    return html

@app.route("/dload/<path:downpath>")
def download_file(downpath):
        # 指定要打包的目录
    print (downpath)
    if downpath =="all":
        folder = filepath
    else:
        folder = filepath +"/"+downpath
    if os.path.isfile(folder):
        return send_file(folder, as_attachment=True)
    else:
        # 创建一个空的内存文件，用于存储压缩文件
        in_memory_zip = BytesIO()
        # 创建一个ZipFile对象，将压缩文件写入内存文件
        with zipfile.ZipFile(in_memory_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
            # 遍历目录下的所有文件，并将文件添加到zip文件中
            for root, dirs, files in os.walk(folder):
                for file in files:
                    file_path = os.path.join(root,file)
                    # 将文件添加到zip文件中，并指定压缩文件中的文件名为文件相对路径
                    zf.write(file_path, arcname=file)
        # 将内存文件指针移动到文件开头
        in_memory_zip.seek(0)
        # 返回压缩文件，指定文件名为download.zip
        return send_file(in_memory_zip, download_name=downpath+'.zip', as_attachment=True)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=666)