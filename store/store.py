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
    storename=request.form["storename"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cur_data.fetchall() # Tables 为元组列表
    if (storename,) not in tables:
        try:
            cur_data.execute(f'create table  {storename} (id integer primary key autoincrement ,名称 text ,规格 text ,备注 text,价格 text,数量 text)')
            for i in range(1,20):
                cur_data.execute(f'insert into {storename}(名称,规格,备注,价格,数量) values(?,?,?,?,?)',("外六角螺栓",f"M10*{i*10}","",f"{i*1}",i*100))
            conn_data.commit() 
            cur_data.close() 
            conn_data.close() 
            return "new_add"
        except:
            return "error"
    else:
        cur_data.close() 
        conn_data.close() 
        return "open"
@app.route("/goods" , methods=['post'])# 连接
def goods():
    # storename=request.args["storename"]
    storename=request.form["storename"] 
    select_name=request.form["select_name"]
    select_specs=request.form["select_specs"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute(f"select * from {storename} where 名称 like ? and 规格 like ?",("%"+select_name+"%","%"+select_specs+"%"))
    data=cur_data.fetchall()
    cur_data.close() 
    conn_data.close() 
    return data
@app.route("/up_excel" , methods=['post'])# 连接
def up_excel():
    storename=request.args["storename"]
    # print(storename)
    up_excel=request.files["up_file_excel"]
    up_excel_str=up_excel.read().decode("utf-8")
    up_excel.save("d:/"+up_excel.filename)
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor() 
    # print(up_excel_str.splitlines()[1])
    if up_excel_str.splitlines()[0]!="名称,规格,备注,价格,数量":
        try:
            for each in up_excel_str.splitlines()[1:]:
                aaa=each.split(",")
                cur_data.execute(f'insert into {storename}(名称,规格,备注,价格,数量) values(?,?,?,?,?)',(aaa[0],aaa[1],aaa[2],aaa[3],aaa[4]))
            conn_data.commit() 
            cur_data.close() 
            conn_data.close() 
            return "success"
        except:
            return "error"
    else: 
        return "error"

    
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=888)

