#   pyinstaller -F app.py
import sqlite3

from flask import Flask, jsonify, redirect, render_template, request

app = Flask(__name__)

app.json.ensure_ascii = False
@app.route('/', methods = ['GET','POST'])
def login():
    if request.method == 'POST':
        return []
    else:
        return render_template("main.html")
@app.route('/new_add', methods = ['POST'])
def create_db():
    storename=request.args["storename"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cur_data.fetchall() # Tables 为元组列表
    if (storename,) not in tables:
        cur_data.execute(f'create table  {storename} (id integer primary key autoincrement ,name text ,specs text ,notes text,price text,num float)')
        for i in range(1,50):
            cur_data.execute(f'insert into {storename}(name,specs,notes,price,num) values(?,?,?,?,?)',("螺栓",f"M10*{i*10}","",f"{i*1}",i*100))
        for i in range(1,50):
            cur_data.execute(f'insert into {storename}(name,specs,notes,price,num) values(?,?,?,?,?)',("燕尾丝",f"M10*{i*10}","",f"{i*1}",i*100))
        conn_data.commit() 
        cur_data.close() 
        conn_data.close() 
        return tables
    else:
        cur_data.close() 
        conn_data.close() 
        return ""
@app.route("/goods" , methods=['post'])# 连接
def goods():
    storename=request.args["storename"]
    select_name=request.args["select_name"]
    select_specs=request.args["select_specs"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute(f"select * from {storename} where name like ? and specs like ?",("%"+select_name+"%","%"+select_specs+"%"))
    data=cur_data.fetchall()
    cur_data.close() 
    conn_data.close() 
    return data

    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=888)

