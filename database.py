import sqlite3

# define connection and cursor
connection = sqlite3.connect("data.db")

cursor = connection.cursor()

# create stores table 
command1 = """CREATE TABLE IF NOT EXISTS
users(user_id INTEGER PRIMARY KEY, user TEXT, password TEXT)"""

cursor.execute(command1)

# create rewards table 
command2 = """CREATE TABLE IF NOT EXISTS
rewards(reward_id INTEGER PRIMARY KEY, user_id, total_rewards INTEGER,
FOREIGN KEY(user_id) REFERENCES users(user_id))"""

cursor.execute(command2)

# add to users (all users Primary IDs are by 10s)
cursor.execute("INSERT INTO users VALUES(10, 'Admin', 'TCpassword')")
cursor.execute("INSERT INTO users VALUES(20, 'AmySantjer', '123abc')")
cursor.execute("INSERT INTO users VALUES(30, 'testdum', 'test123')")

# add to rewards (all rewards Primary IDs are 1-9 only)
cursor.execute("INSERT INTO rewards VALUES(11, 10, 350)")
cursor.execute("INSERT INTO rewards VALUES(12, 20, 650)")
cursor.execute("INSERT INTO rewards VALUES(13, 30, 950)")

# get results 
cursor.execute("SELECT * FROM rewards")

results = cursor.fetchall()
print(results)

# update 
cursor.execute("UPDATE rewards SET total_rewards = 750 WHERE reward_id = 13")

# delete 
cursor.execute("DELETE FROM rewards WHERE reward_id = 13")
