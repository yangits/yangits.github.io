
import sqlite3
import time
from flask import Flask , redirect, render_template , request

#   pyinstaller -F app.py

app = Flask(__name__)
def add_db(nickname,input):
    conn_data = sqlite3.connect('data.db') 
    cur_data = conn_data.cursor()  
    t=time.localtime()
    ltime="{:02d}:{:02d}".format(t.tm_hour, t.tm_min)
    cur_data.execute('insert into text(ltime,name,data) values(?,?,?)',(ltime,nickname,input))
    conn_data.commit() 
    cur_data.close() 
    conn_data.close() 

@app.route("/" , methods=['GET'])
def index():
    return render_template("chat.html")
@app.route("/connect" , methods=['GET'])# 连接
def connect():
    conn_data = sqlite3.connect('data.db') 
    cur_data = conn_data.cursor()  
    cur_data.execute("select count(*) from text")   
    j = cur_data.fetchone()[0]
    cur_data.execute("select * from text")
    data=cur_data.fetchall()
    cur_data.close() 
    conn_data.close() 
    data_text=""
    for i in range(j):
        data_text=data_text +" "*22+ data[i][1] + "\n" + data[i][2] + ": " + data[i][3]+"\n"
    return data_text
    
@app.route("/sendMsg" , methods=['GET','post'])
def sendMsg():
    add_db(request.args["nickname"],request.args["input"])
    return redirect("/connect")

conn_data = sqlite3.connect('data.db') 
cur_data = conn_data.cursor()  
try:
    cur_data.execute('create table  text (id integer primary key autoincrement ,ltime text ,name text ,data text)')
except:
    cur_data.execute("delete from text")
conn_data.commit() 
cur_data.close() 
conn_data.close() 
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=666)