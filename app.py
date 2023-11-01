from flask import Flask,render_template
import os ,sys
#pyinstaller -F app.py
filepath = os.path.dirname(os.path.realpath(sys.argv[0]))
app = Flask(__name__, static_url_path='', static_folder=filepath, template_folder=filepath)
@app.route("/")
def index():
    # return render_template("./index.html")
    file_list = os.listdir(filepath)
    html="""<html>
        <head>
          <title>共享文件列表</title>
        </head>
        <body>
                <ul>"""
    for file in file_list:
        html=html+ """<li><a href="./%s"> %s</a> </li>""" %(file,file)

    html=html+ """</ul>
        </body>
        </html>"""
    return html
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=666)