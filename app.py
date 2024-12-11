import os
import sys
import webbrowser
from flask import Flask,render_template

#   pyinstaller -F app.py
filepath =os.path.dirname(os.path.realpath(sys.argv[0]))
app = Flask(__name__, static_url_path='', static_folder=filepath, template_folder=filepath)
@app.route("/" , methods=['GET','post'])
def index():
        return render_template("./index.html")
if __name__ == '__main__':
    webbrowser.open("http://127.0.0.1:666/")
    app.run(host='0.0.0.0', port=666)