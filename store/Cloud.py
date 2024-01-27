import os
import time
import zipfile
from io import BytesIO

from flask import Blueprint, request, send_file


def get_path():
    filepath =os.getcwd()+"/Cloud"
    try:
        if not os.path.exists(filepath):
            #判断文件夹是否存在,如果不存在则创建文件夹
            os.makedirs(filepath)
    except Exception as e:
        filepath =os.getcwd()
    return filepath

Cloud_blue = Blueprint("Cloud",__name__,)
@Cloud_blue.route("/add_dirs" , methods=['post'])
def add_dirs():
    filepath=get_path()
    path = filepath + request.form["new_dirsname"]
    try:
        if not os.path.exists(path):
            #判断文件夹是否存在,如果不存在则创建文件夹
            os.makedirs(path)
            return "success"
        else: return "文件夹已存在！"
    except Exception as e:
        return "名称无效不能包含(/ : *  < > | ？\")等特殊字符"

@Cloud_blue.route("/Cloud/<path:path>" , methods=['GET'])
def UpCloud(path):
    filepath=get_path()
    return send_file(filepath+"/"+path)
@Cloud_blue.route("/path_file",methods=['post'])
def path_file():
    filepath=get_path()
    file_path = filepath + request.form["path"]
    file_list = os.listdir(file_path)
    file_size_mtime=[]
    for file_name in file_list:
        list_path=file_path+file_name
        if os.path.isdir(list_path):
            size =0
            for root, dirs, files in os.walk(list_path):# 遍历目录下的所有文件
                for file in files:
                    size += os.path.getsize(os.path.join(root,file))
            file_name=file_name+"/"
        elif os.path.isfile(list_path):
            size = os.path.getsize(list_path)# 统计文件的大小
        size = file_size_fomat(size)
        mtime = time.localtime(os.path.getmtime(list_path))
        mtime="{}/{}/{}-{:02d}:{:02d}".format(mtime.tm_year, mtime.tm_mon, mtime.tm_mday,mtime.tm_hour,mtime.tm_min)
        file_size_mtime.append([file_name,size,mtime])
    
    return  [filepath,file_size_mtime]

@Cloud_blue.route("/dload_file", methods=['get'])
def download_file():
    filepath=get_path()
    downpath =request.args["path"]
    file_name =request.args["file"]
    folder = filepath + downpath + file_name # 指定要打包的目录
    if os.path.isfile(folder):
        return send_file(folder, as_attachment=True)
    else:
        size =0
        for root, dirs, files in os.walk("Cloud"+downpath + file_name):# 遍历目录下的所有文件
            for file in files:
                size += os.path.getsize(os.path.join(root,file))
        if size>1024*1024*100:
            return "文件大于100M，服务器打包速度太慢，建议分项下载！"
        in_memory_zip = BytesIO()# 创建一个空的内存文件，用于存储压缩文件
        with zipfile.ZipFile(in_memory_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zf: # 创建一个ZipFile对象
            for root, dirs, files in os.walk("Cloud"+downpath + file_name):# 遍历目录下的所有文件
                for file in files:
                    file_path = os.path.join(root,file)
                    zf.write(file_path)#, arcname=file)# 将文件添加到zip文件中
        in_memory_zip.seek(0)# 将内存文件指针移动到文件开头
        return send_file(in_memory_zip, download_name=file_name+'.zip', as_attachment=True)
@Cloud_blue.route('/upload_file', methods=['POST'])
def upload_file():
    filepath=get_path()
    file_path=filepath + request.form["path"]
    upload_file = request.files['file']
    t=time.localtime()
    dtime="{:02d}-{:02d}-{:02d}".format(t.tm_hour,t.tm_min,t.tm_sec)
    if os.path.exists(file_path+"/"+upload_file.filename):
        i=1
        print(os.path.exists(file_path+"/("+str(i)+")"+upload_file.filename))
        while os.path.exists(file_path+"/("+str(i)+")"+upload_file.filename):
            i += 1
        else:
            upload_file.save(file_path+"/("+str(i)+")"+upload_file.filename)
            return "success"
    else:
        upload_file.save(file_path+"/"+upload_file.filename)
    return "success"


def file_size_fomat(size):
    if size < 1024:
        return '%i' % size + 'B'
    elif 1024 < size <= 1048576:
        return '%.1f' % float(size/1024) + 'KB'
    elif 1048576 < size <= 1073741824:
        return '%.1f' % float(size/1048576) + 'MB'
    else:
        return '%.1f' % float(size/1073741824) + 'GB'
