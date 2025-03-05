import socket
import sqlite3
import time
from Cloud import Cloud_blue
from flask import Flask, render_template, request
app = Flask(__name__)
app.secret_key = 'secret'
app.register_blueprint(Cloud_blue)
def goods_list_num():
    lists_text="品类 text,名称 text,材质 text,规格 text,备注 text,单价 text,单重 text,单位 text,数量 text,操作 text"
    lists=lists_text.replace(" text","")
    num=lists.count(",") + 1; val_num=(",?"*num)[1:]
    return (lists_text,lists,val_num)

app.json.ensure_ascii = False
@app.route('/', methods = ['GET'])
def login():
    return render_template("main.html")

@app.route('/get_password', methods = ['POST'])
def get_password():
    select_username=request.form["select_username"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute(f"select * from usernames where 名字 = ?",(select_username,))
    data=cur_data.fetchall()
    cur_data.close() 
    conn_data.close()   
    return data

@app.route('/get_username', methods = ['POST'])
def get_username():
    select_id=request.form["select_id"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    if select_id !="":
        cur_data.execute(f"select * from usernames where id = ?",(select_id,))
        data=cur_data.fetchall()
        cur_data.close() 
        conn_data.close() 
        return data
    cur_data.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cur_data.fetchall() # Tables 为元组列表
    if ("usernames",) not in tables:
        cur_data.execute(f'create table usernames (id integer primary key autoincrement ,名字 text,密码 text,权限 text)')
        cur_data.execute(f'insert into usernames (名字,密码,权限) values(?,?,?)',("admin","","管理员"))
        conn_data.commit() 
        cur_data.close() 
        conn_data.close() 
        return "new_add"
    else:
        table=[]
        for each in tables:
            if each != ('sqlite_sequence',) and each != ('usernames',) and "出入库记录" not in each[0]:
                table.append(each[0])
        cur_data.execute(f"select * from usernames")
        usernames = cur_data.fetchall()
        cur_data.execute(f"pragma table_info(usernames)")
        name_list=[]
        for each in cur_data.fetchall():
            name_list.append(each[1])
        cur_data.close() 
        conn_data.close() 
        usernames=[name_list]+usernames
        ip = socket.gethostbyname(socket.gethostname())
        login_ip = request.remote_addr
        return [usernames,table,ip,login_ip] 

@app.route('/add_username', methods = ['POST'])
def add_username():
    name_rows=(request.form["name_row1"],request.form["name_row2"],request.form["name_row3"])
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute(f'insert into usernames (名字,密码,权限) values(?,?,?)',name_rows)
    conn_data.commit() 
    cur_data.close() 
    conn_data.close() 
    return []

@app.route("/change_username" , methods=['post'])# 连接
def change_username():
    name_rows=(request.form["name_row1"],request.form["name_row2"],request.form["name_row3"],request.form["name_row0"])
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute(f"update usernames  set 名字=?,密码=?,权限=? where id=?",name_rows)
    conn_data.commit() 
    cur_data.close() 
    conn_data.close() 
    return []
@app.route("/delete_username" , methods=['post'])# 连接
def delete_username():
    delete_id=request.form["delete_id"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor() 
    cur_data.execute(f"delete from usernames where id = ?",(delete_id,))
    conn_data.commit() 
    cur_data.close() 
    conn_data.close()
    return "success"

@app.route('/add_table', methods = ['POST'])
def add_table():
    storename=request.form["storename"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    try:
        lists_text,lists,val_num=goods_list_num()
        cur_data.execute(f'create table {storename} (id integer primary key autoincrement ,{lists_text})')
        cur_data.execute(f'create table {storename+"出入库记录"} (id text,{lists_text},操作员 text,时间 text)')
        conn_data.commit() 
        cur_data.close() 
        conn_data.close() 
        return "new_add"
    except:
        cur_data.close() 
        conn_data.close() 
        return "error"
@app.route('/add_edit_goods', methods = ['POST'])
def add_edit_goods():
    storename=request.form["storename"]
    username=request.form["username"]
    n=int(request.form["n"])
    goods_rows=(request.form["good_num"],)
    add_edit=request.form["add_edit"]
    for i in range(n-1,0,-1):
        goods_rows=(request.form[f"good_row{i}"],)+goods_rows
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    lists_text,lists,val_num=goods_list_num()
    if add_edit=="新增":
        cur_data.execute(f'insert into {storename} ({lists}) values({val_num})',goods_rows+("",))
        cur_data.execute(f"select * from {storename}");good_id=cur_data.lastrowid
    else:
        set_list=lists_text.replace(" text","=?")
        good_id=request.form["good_id"]
        cur_data.execute(f"update {storename}  set {set_list} where id=?",goods_rows+("",good_id))
        
    cur_data.execute(f'insert into {storename+"出入库记录"} (id,{lists},操作员,时间) values(?,{val_num},?,?)',(good_id,) + goods_rows +(add_edit,username,dtime()))
    conn_data.commit() 
    cur_data.close() 
    conn_data.close() 
    return []

@app.route("/change_goods" , methods=['post'])# 连接
def change_goods():
    storename=request.form["storename"] 
    good_id=request.form["good_id"]
    sum_sl=request.form["sum_sl"]
    username=request.form["username"]
    outin=request.form["outin"]
    n=int(request.form["n"])
    goods_rows=(request.form["good_num"],)
    for i in range(n-1,0,-1):
        goods_rows=(request.form[f"good_row{i}"],)+goods_rows
    goods_rows=(good_id,)+goods_rows
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    lists_text,lists,val_num=goods_list_num()
    cur_data.execute(f"update {storename}  set 数量=? where id=?",(sum_sl,good_id))
    cur_data.execute(f'insert into {storename+"出入库记录"} (id,{lists},操作员,时间) values(?,{val_num},?,?)',goods_rows+(outin,username,dtime()))
    conn_data.commit() 
    cur_data.close() 
    conn_data.close() 
    return []


@app.route("/select_goods" , methods=['post'])# 连接
def select_goods():
    storename=request.form["storename"] 
    select_row1=request.form["select_row1"] 
    select_row2=request.form["select_row2"]
    select_row3=request.form["select_row3"]
    select_row4=request.form["select_row4"]
    select_row5=request.form["select_row5"]
    select_row6=request.form["select_row6"]
    select_id=request.form["select_id"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor()  
    if select_id=="":
        cur_data.execute(f"select * from {storename} where 品类 like ? and 名称 like ? and 材质 like ? and 规格 like ?",("%"+select_row1+"%","%"+select_row2+"%","%"+select_row3+"%","%"+select_row4+"%"))
    elif select_id == "outin":
        cur_data.execute(f"select * from {storename} where 品类 like ? and 名称 like ? and 材质 like ? and 规格 like ? and 操作 like ? and 操作员 like ?",("%"+select_row1+"%","%"+select_row2+"%","%"+select_row3+"%","%"+select_row4+"%","%"+select_row5+"%","%"+select_row6+"%"))
    else:
        cur_data.execute(f"select * from {storename} where id = ?",(select_id,))
    data=cur_data.fetchall()
    cur_data.execute(f"pragma table_info({storename})")
    name_list=[]
    for each in cur_data.fetchall():
        name_list.append(each[1])
    cur_data.close() 
    conn_data.close() 
    data=[name_list]+data
    return data

@app.route("/delete_goods" , methods=['post'])# 连接
def delete_goods():
    storename=request.form["storename"] 
    delete_id=request.form["delete_id"]
    czy=request.form["czy"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor() 
    cur_data.execute(f"select * from {storename} where id = ?",(delete_id,))
    data=cur_data.fetchall()
    if data[0][-2]!="0":
        return "false"
    else:
        data=data[0][0:-1]+ ("删除",czy,dtime())
        lists_text,lists,val_num=goods_list_num()
        cur_data.execute(f"delete from {storename} where id = ?",(delete_id,))
        cur_data.execute(f'insert into {storename+"出入库记录"} (id,{lists},操作员,时间) values(?,{val_num},?,?)',data)
        conn_data.commit() 
        cur_data.close() 
        conn_data.close()
        return "success"


@app.route("/up_excel" , methods=['post'])# 连接
def up_excel():
    storename=request.form["storename"]
    csv_str=request.form["csv_str"]
    conn_data = sqlite3.connect('store.db') 
    cur_data = conn_data.cursor() 
    up_excel_list=[]
    for each in csv_str.splitlines():
        up_excel_list.append((each+",").split(",")[1:])
    lists_text,lists,val_num=goods_list_num()
    print(up_excel_list[1:][0])
    if up_excel_list[0][0:-1] == lists.split(",")[0:-1]:
        try:
            cur_data.executemany(f'insert into {storename} ({lists}) values({val_num})',up_excel_list[1:])
            conn_data.commit() 
            cur_data.close() 
            conn_data.close() 
            return "success"
        except:
            return "error"
    else: 
        return "error"
def dtime():
    t=time.localtime()
    dtime="{}/{:02d}/{:02d}-{:02d}:{:02d}".format(t.tm_year,t.tm_mon,t.tm_mday,t.tm_hour,t.tm_min)
    return dtime
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=666)