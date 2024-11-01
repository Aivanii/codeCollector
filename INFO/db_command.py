import mysql.connector
from mysql.connector import Error
from config import db_config

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
                            db_config["mysql"]["pass"])
cursor = conn.cursor()
create_db_sql = 'CREATE DATABASE {}'.format('Test')
cursor.execute(create_db_sql)
cursor.close()
conn.close()

conn = create_connection_db(db_config["mysql"]["host"],
                            db_config["mysql"]["user"],
                            db_config["mysql"]["pass"],
                            "Test")

try:
    cursor = conn.cursor()
    create_table = ''' 
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB'''
    cursor.execute(create_table)
    conn.commit()

    insert_users_table = '''
    INSERT INTO
    `users` (`name`, `email`, `password`)
    VALUES
    ('James', 'surname@gmail.com', '123456789'),
    ('gfh', 'surname@gmail.com', '1a2s3d4frewq'),
    ('john', 'surname@gmail.com', '987654321');'''
    cursor.execute(insert_users_table)
    conn.commit()

    select_users_table = '''
    SELECT name, email, password FROM users WHERE id = 1;
    '''
    cursor.execute(select_users_table)
    query_result = cursor.fetchall()
    for user in query_result:
        print(user)
    update_users_table = '''
    UPDATE USERS SET name = 'bambaleyla' WHERE id = 1;
    '''
    cursor.execute(update_users_table)
    conn.commit()
    delete_users_table = '''
    DELETE FROM users WHERE name = 'gfh'
    '''
    cursor.execute(delete_users_table)
    conn.commit()
except Error as error:
    print(error)
finally:
    cursor.close()
    conn.close()