from flask import Flask,render_template, request,send_from_directory
import os
app = Flask(__name__, static_url_path='', static_folder='yangits.github.io', template_folder='yangits.github.io')
BASE_PATH = os.path.dirname(os.path.abspath(__file__))
@app.route("/")
def index():
    return render_template("/index.html")
@app.route("/1")
def index1():
    html="""<html>
        <head>
          <title>File Upload</title>
        </head>
        <body>
            <form action="/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="file" multiple="multiple" />
                <input type="submit" value="提交" />
            </form>
        </body>
        </html>"""
    return html
@app.route("/upload", methods=["POST"])
def upload_file():
    try:
        for f in request.files.getlist('file'):
            filename = os.path.join(BASE_PATH, "upload", f.filename)
            print(filename)
            f.save(filename)
        return "file upload successfully!"
    except Exception as e:
        return "failed!"
def mkdir(dirname):
    dir = os.path.join(BASE_PATH, dirname)
    if not os.path.exists(dir):       
         os.makedirs(dir)

if __name__ == '__main__':
    # mkdir('upload')
    app.run(host='0.0.0.0', port=325)