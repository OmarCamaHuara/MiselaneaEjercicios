from flask import Flask, render_template, request

app = Flask(__name__, template_folder="./src/views")

@app.route("/", methods=["GET", "POST"])
def home():
    if(request.method == "GET"):
        return render_template("index.html")
    else:
        return "POST"

# @app.route("/", methods=["POST"])
# def sobre():
#     return "POST"

app.run(port = 8080, debug=True)