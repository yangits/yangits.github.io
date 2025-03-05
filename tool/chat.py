from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from typing import List
import uvicorn
app = FastAPI()

# 存储所有活跃的WebSocket连接
active_connections: List[WebSocket] = []

# 简单前端页面
html = """
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>群聊室</title>
    </head>
    <body>
        <h1>FastAPI群聊室</h1>
        <input id="message" placeholder="输入消息"><button onclick="send()">发送</button>
        <div id="chat" style="height:300px; overflow-y:scroll; border:1px solid #ccc; padding:10px;"></div>
        <script>
            const ws = new WebSocket("ws://" + window.location.host + "/ws");
            ws.onmessage = function(event) {
                const div = document.createElement('div');
                div.textContent = event.data;
                document.getElementById('chat').appendChild(div);
            };
            function send() {
                const input = document.getElementById('message');
                ws.send(input.value);
                input.value = '';
            }
        </script>
    </body>
</html>
"""

@app.get("/")
async def get():
    return HTMLResponse(html)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    active_connections.append(websocket)
    
    try:
        while True:
            # 接收消息
            message = await websocket.receive_text()
            
            # 广播给所有连接
            for connection in active_connections:
                await connection.send_text(f"用户{id(websocket)}: {message}")
    except:
        # 连接断开时移除
        active_connections.remove(websocket)
if __name__ == '__main__':
    uvicorn.run(app="chat:app",host="0.0.0.0", port=666,reload=True)