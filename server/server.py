from flask import *
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
@app.route('/articles/<filter1>/<filter2>/<article>', methods = ['GET'])
def users(filter1,filter2,article):
    pul = __file__.split('\\')
    with open(pul[0]+'/'+pul[1]+'/'+pul[2]+'/'+pul[3]+'/codeCollector/client/public/Articles/'+article+'.html', 'r', encoding='utf-8') as file:
        data = file.read()
        print(data)
    return jsonify(
        {
            "users": [
                data
            ]
        }
    )
if __name__ == "__main__":
    app.run(debug=True,port=8080)