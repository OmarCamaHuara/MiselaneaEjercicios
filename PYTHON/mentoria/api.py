from flask import Flask, render_template, request

app = Flask(__name__, template_folder="./src/views")

@app.route("/", methods=["GET", "POST"])
def home():
    if(request.method == "GET"):
        return render_template("index.html")
    else:
        return "Voce esta acessando via otro Verbo"


@app.errorhandler(404)
def not_found(error):
    return render_template("error.html")

@app.errorhandler(405)
def not_found2(error):
    return {
        "Mensage": "NOT"
    }

# @app.route("/", methods=["POST"])
# def sobre():
#     return "POST"

app.run(port = 8080, debug=True)