from flask import Flask, render_template
from flask_sock import Sock


app = Flask(__name__)
sock = Sock(app)
app.config['SOCK_SERVER_OPTIONS'] = {'ping_interval': 25}


@app.route('/')
def index():
    return render_template('socket.html')


@sock.route('/echo')
def echo(ws):
    while True:
        data = ws.receive()
        if data == '[exit]':
            ws.close()
            break
        ws.send(f'回显：{data}')


if __name__ == '__main__':
    app.run('127.0.0.1', 5000)