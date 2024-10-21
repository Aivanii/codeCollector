from flask import *
from flask_cors import CORS
import os
app = Flask(__name__)
cors = CORS(app)
pul = __file__.split('\\')
@app.route('/articles/<filter1>/<filter2>/<article>', methods = ['GET'])
def statis(filter1,filter2,article):
    with open(pul[0] + '/' + pul[1] + '/' + pul[2] + '/' + pul[3] + '/codeCollector/client/public/Articles/'+filter1+'/'+filter2+ '/' + article.replace(" ", "_") + '.html', 'r', encoding='utf-8') as file:
        data = file.read()

    return jsonify(
        {
            "users": [
                data
            ]
        }
    )
@app.route('/articles/<filter1>/<filter2>', methods = ['GET'])
def twofiltir(filter1,filter2):
    files = os.listdir(pul[0] + '/' + pul[1] + '/' + pul[2] + '/' + pul[3] + '/codeCollector/client/public/Articles/' +filter1+'/'+filter2)
    files = [id[:-5] for id in files]
    return jsonify(
        {
            "users": [
                files
            ]
        }
    )
@app.route('/articles/<filter1>', methods = ['GET'])
def filtir(filter1):
    files = os.listdir(pul[0] + '/' + pul[1] + '/' + pul[2] + '/' + pul[3] + '/codeCollector/client/public/Articles/' +filter1)
    return jsonify(
        {
            "users": [
                files
            ]
        }
    )
if __name__ == "__main__":
    app.run(debug=True,port=8080)