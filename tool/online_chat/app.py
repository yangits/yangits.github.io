from flask import Flask, render_template
from flask_socketio import SocketIO, join_room, leave_room, send
import webbrowser

app = Flask(__name__)
app.secret_key = 'secret'
socketio = SocketIO(app)

# 主页路由
@app.route('/')
def index():
    return render_template('index.html')

# 用户加入聊天室事件
@socketio.on('join', namespace='/chat')
def join(message):
    room = message['room']
    join_room(room)
    send({'msg': message['username'] + " 加入了聊天室."}, room=room)

# 用户发送消息事件
@socketio.on('text', namespace='/chat')
def text(message):
    room = message['room']
    send({'msg': message['username'] + ": " + message['msg']}, room=room)

# 用户离开聊天室事件
@socketio.on('left', namespace='/chat')
def left(message):
    room = message['room']
    leave_room(room)
    send({'msg': message['username'] + " 离开了聊天室."}, room=room)

if __name__ == '__main__':
    webbrowser.open("http://127.0.0.1:666/")
    socketio.run(app , host='0.0.0.0', port=666)
