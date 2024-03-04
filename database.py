import sqlite3

connection = sqlite3.connect(data.db)

with connection:
    connection.execute(
        "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, password TEXT, method TEXT, rating INTEGER);"
        )
