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
            cur_data.execute(f'create table if not exists {storename} (id integer primary key autoincrement ,代码 text,名称 text,规格 text,单价 text,单重 text,数量 text,备注 text)')
            for i in range(1,2):
                cur_data.execute(f'insert into {storename}(代码,名称,规格,单价,单重,数量,备注) values(?,?,?,?,?,?,?)',(f"rm{i}","外六角螺栓",f"M10*{i*5}",f"{i*3}",f"{i*2}",i*6,""))
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
    storename=request.form["storename"]
    csv_str=request.form["csv_str"]
    # up_excel=request.files["up_file_excel"]
    # up_excel.save("d:/"+up_excel.filename)
    # up_excel_str=up_excel.read().decode("ansi")
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor() 
    cur_data.execute(f"pragma table_info({storename})")
    name_list=[]
    for each in cur_data.fetchall()[1:]:
        name_list.append(each[1])
    up_excel_list=[]
    for each in csv_str.splitlines():
        up_excel_list.append(each.split(","))
    if up_excel_list[0] == name_list:
        try:
            cur_data.executemany(f'insert into {storename}(代码,名称,规格,单价,单重,数量,备注) values(?,?,?,?,?,?,?)',up_excel_list[1:])
            conn_data.commit() 
            cur_data.close() 
            conn_data.close() 
            return "success"
        except:
            return "error"
    else: 
        return "error"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=666)

