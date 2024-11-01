from flask import Flask, request, session, jsonify
from flask_cors import CORS
import os
import mysql.connector
from mysql.connector import Error
from config import db_config
app = Flask(__name__)
cors = CORS(app, supports_credentials=True)
app.config['SESSION_COOKIE_SECURE'] = False
app.config['SECRET_KEY'] = 'cb02820a3e94d72c9f950ee10ef7e3f7a35b3f5b'

def create_connection_db(db_host, user_name, user_password, db_name = None):
    connection_db = None
    try:
        connection_db = mysql.connector.connect(
            host = db_host,
            user = user_name,
            passwd = user_password,
            database = db_name
        )
        print('Nice')
    except Error as db_connection_error:
        print("Ошибка: ",db_connection_error)
    return connection_db

conn = create_connection_db(db_config["mysql"]["host"],
                            db_config["mysql"]["user"],
                            db_config["mysql"]["pass"],
                            "Test")



def url():
    pul = __file__.split('\\')
    urls = []
    for x in pul:
        if x != 'server':
            urls.append(x)
        else:
            break
    return '/'.join(urls) + '/'
@app.route('/articles/<filter1>/<filter2>/<article>', methods = ['GET'])
def statis(filter1,filter2,article):
    with open(url() +'client/public/Articles/'+filter1+'/'+filter2+ '/' + article.replace(" ", "_") + '.html', 'r', encoding='utf-8') as file:
        data = file.read()

    return jsonify(
        {
            "users": [
                data
            ]
        }
    )
@app.route('/articles/<filter1>/<filter2>', methods = ['GET'])
def twofilir(filter1,filter2):
    files = os.listdir(url() +'client/public/Articles/' +filter1+'/'+filter2)
    files = [id[:-5] for id in files]
    return jsonify(
        {
            "users": [
                files
            ]
        }
    )
@app.route('/articles/<filter1>', methods = ['GET'])
def filtr(filter1):
    files = os.listdir(url() +'client/public/Articles/' +filter1)
    return jsonify(
        {
            "users": [
                files
            ]
        }
    )
@app.route('/log', methods = ['POST'])
def login():
    data = request.get_json()
    cursor = conn.cursor()
    select_users_table = '''
    SELECT id, name, email, password FROM users WHERE email = %s;
    '''
    cursor.execute(select_users_table,(data['name'],) )
    query_result = cursor.fetchall()

    for item in query_result:
        if item[2] == data['name'] and item[3] == data['password']:
            session['id'] = item[0]
            return jsonify(
                {
                'id': item[0],
                'name': item[1],
                'pass': item[3],
                'email': item[2],
                'imgAdress': 'https://www.google.com/imgres?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D1%83%D1%81%D0%B0&imgurl=https%3A%2F%2Fvinyl-market.ru%2Fimages%2Fshop_items%2F63.jpg.webp&imgrefurl=https%3A%2F%2Fvinyl-market.ru%2F63i&docid=rpoo7WxTP2HURM&tbnid=c-_Z615ozMQ5qM&vet=12ahUKEwjK0aP-laeJAxWO9LsIHTT5IJMQM3oECHgQAA..i&w=1655&h=1655&hcb=2&ved=2ahUKEwjK0aP-laeJAxWO9LsIHTT5IJMQM3oECHgQAA',
                'isLogged': True
                }
            )

    return jsonify(
        {
          'isLogged': False
        }
    )
@app.route('/user', methods = ['GET'])
def user():
    if session.get('id'):

        cursor = conn.cursor()
        select_users_table = '''
        SELECT id, name FROM users WHERE id = %s;
        '''
        cursor.execute(select_users_table, (session.get('id'),))
        query_result = cursor.fetchone()
        print(query_result[1])
        return jsonify(
            {
                "users": query_result[1]
            }
        )
    else:
        return jsonify(
            {
                'isLogged': False
            }
        )

@app.route('/reg', methods = ['GET'])
def reg():
    return jsonify(
        {
            "users": '22'
        }
    )
if __name__ == "__main__":
    app.run(debug=True,port=8080)