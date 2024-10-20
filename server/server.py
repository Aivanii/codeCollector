from flask import *
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
@app.route('/articles/<filter1>/<filter2>/<article>', methods = ['GET'])
def users(filter1,filter2,article):
    with open('C:/Users/bobr8/Desktop/codeCollector-master/client/public/Articles/'+article+'.html', 'r', encoding='utf-8') as file:
        data = file.read()
        print(data)
    return jsonify(
        {
            "users": [
                filter1,
                filter2,
                article,
                data
            ]
        }
    )
if __name__ == "__main__":
    app.run(debug=True,port=8080)