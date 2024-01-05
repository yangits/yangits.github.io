from flask import Flask,request,redirect,render_template,jsonify
#   pyinstaller -F app.py
import webbrowser

app = Flask(__name__)

@app.route('/', methods = ['GET','POST'])
def login():
    if request.method == 'POST':
        return jsonify()
    else:
        return render_template("main.html")
if __name__ == '__main__':
    webbrowser.open("http://127.0.0.1:668/")
    app.run(host='0.0.0.0', port=668)