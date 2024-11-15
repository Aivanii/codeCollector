from flask import Flask, request, session, jsonify
from flask_cors import CORS
import os
import mysql.connector
from mysql.connector import Error
from config import db_config
import json
from transliterate import translit
import re
app = Flask(__name__)
CORS(app)
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
                            db_config["mysql"]["database"])
cursor = conn.cursor()

pul = __file__.split('\\')
urls = []
for x in pul:
    if x != 'server':
        urls.append(x)
    else:
        break
url = '/'.join(urls) + '/'
def protect(str1, str2):
    i = 0
    for char1, char2 in zip(str1, str2):
        if char1 == char2:
            i += 1
    if i / len(str1) * 100 >= 30:
        return str1
    else:
        return False
@app.route('/articles/<filter1>/<filter2>/<article>', methods = ['GET'])
def statis(filter1,filter2,article):
    try:
        with open(url +'client/public/Articles/'+filter1+'/'+filter2+ '/' + article.replace(" ", "_") + '.html', 'r', encoding='utf-8') as file:
            data = file.read()
    except FileNotFoundError:
        data = []
    return jsonify(
        {
            "users": [
                data
            ]
        }
    )
@app.route('/articles/<filter1>/<filter2>', methods = ['GET'])
def twofilir(filter1,filter2):
    try:
        files = os.listdir(url +'client/public/Articles/' +filter1+'/'+filter2)
    except FileNotFoundError:
        files = []
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
    try:
        files = os.listdir(url +'client/public/Articles/' +filter1)
    except FileNotFoundError:
        files = []
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
        select_users_table = '''
        SELECT * FROM users WHERE id = %s;
        '''
        cursor.execute(select_users_table, (session.get('id'),))
        query_result = cursor.fetchone()
        return jsonify(
            {
                'id': query_result[0],
                'name': query_result[1],
                'email': query_result[2],
                'pass': query_result[3],
                'imgAdress': 'https://images.hdqwalls.com/download/anonymus-cyber-guy-p3-1336x768.jpg',
                'isLogged': True
            }
        )
    else:
        return jsonify(
            {
                'isLogged': False
            }
        )

@app.route('/reg', methods = ['POST'])
def reg():
    data = request.get_json()
    select_users_table = '''
    SELECT email FROM users WHERE email = %s;
    '''
    cursor.execute(select_users_table, (data['email'],))
    query_result = cursor.fetchall()
    if query_result:
        return jsonify(
            "Данная почта занята", {'isLogged': False}
        )
    else:
        insert_users_table = '''
        INSERT INTO
        `users` (`name`, `email`, `password`)
        VALUES
        (%s, %s, %s);'''
        cursor.execute(insert_users_table, (data['name'],data['email'],data['password']))
        conn.commit()
        select_users = '''
        SELECT id FROM users WHERE email = %s;
        '''
        cursor.execute(select_users, (data['email'],))
        result = cursor.fetchone()
        session['id'] = result[0]
        return jsonify(
            {
                'id': result[0],
                'name': data['name'],
                'pass': data['password'],
                'email': data['email'],
                'imgAdress': 'https://www.google.com/imgres?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D0%B0%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC%D1%83%D1%81%D0%B0&imgurl=https%3A%2F%2Fvinyl-market.ru%2Fimages%2Fshop_items%2F63.jpg.webp&imgrefurl=https%3A%2F%2Fvinyl-market.ru%2F63i&docid=rpoo7WxTP2HURM&tbnid=c-_Z615ozMQ5qM&vet=12ahUKEwjK0aP-laeJAxWO9LsIHTT5IJMQM3oECHgQAA..i&w=1655&h=1655&hcb=2&ved=2ahUKEwjK0aP-laeJAxWO9LsIHTT5IJMQM3oECHgQAA',
                'isLogged': True
            }
        )
@app.route('/set_history', methods = ['GET'])
def set_history():
    print(session.get('id'))
    select_users_table_history = '''
    SELECT history 
    FROM users
    WHERE 
        id = %s;
    '''
    cursor.execute(select_users_table_history, (session.get('id'),))
    result = cursor.fetchone()
    print(json.loads(result[0]))
    return jsonify(
        json.loads(result[0])
    )
@app.route('/user_out', methods = ['POST'])
def user_out():
    session['id'] = None
    return jsonify(
        {
            'isLogged': False
        }
    )

@app.route('/send_history', methods = ['POST'])
def send_history():
    data = request.get_json()
    select_users_table_history = '''
    SELECT history 
    FROM users
    WHERE 
        id = %s;
    '''
    cursor.execute(select_users_table_history, (session.get('id'),))
    result = json.loads(cursor.fetchone()[0])
    flag = False
    for x in result:
        if json.dumps(x) == json.dumps(data):
            result = [lst for lst in result if lst != x]
            result.append(data)
            flag = True
            break

    if len(result) == 10 and not flag:
        result = result[1:]
        result.append(data)
    elif not flag:
        result.append(data)

    update_users_table = '''
    UPDATE USERS SET history = %s WHERE id = %s;
    '''
    cursor.execute(update_users_table, (json.dumps(result), session.get('id'),))
    conn.commit()
    return jsonify(
        result
    )
@app.route('/search/<quest>', methods=['GET'])
def search(quest):
    quest = re.split('[,;:.\n?!@#$%^&*() ]+', quest)
    result = []
    s = url + 'client/public/Articles/'
    files = os.listdir(s)
    filtir1 = list()
    def add_to_results(path, title):
        """Добавляет элемент в результат, если он уникален."""
        href = '..' + s.split('public')[1] + path
        if not any(item['title'] == title and item['href'] == href for item in result):
            result.append({'title': title, 'href': href})
    def add_filtir1(mas, filtir1):
        if len(filtir1) == 0 or not mas[0] in filtir1:
            filtir1.append(mas[0])
            if len(mas) == 2 and (len(filtir1) == 2 and not mas[1] in filtir1 or len(filtir1) == 1 and mas[0] in filtir1):
                filtir1.append(mas[1])
        elif len(mas) == 2 and mas[0] in filtir1 and not mas[1] in filtir1 and len(filtir1) != 2 and not isinstance(filtir1, str):
            filtir1.append(mas[1])
        elif len(mas) == 1 and mas[0] in filtir1 and len(filtir1) == 2 and not isinstance(filtir1, str):
            pass
        else:
            filtir1 = str(filtir1)

        return filtir1
    for qur in quest:
        qur = translit(qur, language_code='ru', reversed=True)
        for x in files:
            res = protect(x, qur)
            if res:
                filtir1 = add_filtir1([res], filtir1)
                fil1 = os.listdir(s + res)
                for y in fil1:
                    fil2 = os.listdir(s + res + '/' + y)
                    for z in fil2:
                        add_to_results(f"{res}/{y}/{z}", z[:-5])

            fil2 = os.listdir(s + x)
            for y in fil2:
                res = protect(y, qur)
                if res:
                    filtir1 = add_filtir1([x,res], filtir1)
                    product = os.listdir(s + x + '/' + res)
                    for z in product:
                        add_to_results(f"{x}/{res}/{z}", z[:-5])

                prod = os.listdir(s + x + '/' + y)
                for z in prod:
                    res = protect(z[:-5], qur)
                    if res:
                        filtir1 = add_filtir1([x,y], filtir1)
                        add_to_results(f"{x}/{y}/{res}.html", z[:-5])
    if isinstance(filtir1, str):
        result.insert(0,[])
    else:
        result.insert(0,list(filtir1))
    return jsonify(result)

@app.route('/database', methods = ['GET'])
def database():
    return jsonify(
        {
            "Frontend Development": [
                "JavaScript",
                "React",
                "Vue.js",
                "Angular",
                "HTML",
                "CSS",
                "Sass",
                "TypeScript"
            ],
            "Backend Development": [
                "Python",
                "Java",
                "Ruby",
                "Fortran",
                "Node.js",
                "PHP",
                "Go",
                "C#",
                "Rust"
            ],
            "Game Development": [
                "C#",
                "C++",
                "Lua",
                "Unity",
                "Unreal Engine",
                "Godot",
                "GameMaker"
            ],
            "AI": [
                "Python",
                "TensorFlow",
                "PyTorch",
                "Keras",
                "Scikit-learn",
                "OpenAI Gym"
            ],
            "Mobile Development": [
                "Swift",
                "Kotlin",
                "React Native",
                "Flutter"
            ],
            "DevOps": [
                "Docker",
                "Kubernetes",
                "Ansible",
                "Terraform"
            ],
            "Database Management": [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "SQLite"
            ],
            "Cloud Computing": [
                "AWS",
                "Azure",
                "Google Cloud Platform"
            ]
        }
    )
@app.route('/api/check')
def check():
    return "hello"
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True,port=8080)