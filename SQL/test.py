import pymysql
import traceback
from time import sleep

class PyMySQL(object):
    create_table = """
        CREATE TABLE stu (   
            id INT not null PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            age INT, 
            sex VARCHAR(255)
        ) DEFAULT CHARSET = utf8
    """
    select = 'SELECT * FROM stu'
    update = 'UPDATE stu SET name = "点对点明" WHERE id=2'
    delete = 'DELETE FROM stu WHERE id=9'
    insert = 'INSERT INTO stu(name, age, sex) VALUES("%s", "%d", "%s")' % ('小明', 10, "男")

    def __init__(self, host, user, passwd, db):
        self.conn = pymysql.connect(host =host, user =user, passwd = passwd,port = 3306, db=db ,charset = 'utf8')
        self.cursor = self.conn.cursor()
        print("数据库连接成功!")
    
    def closeAll(self):
        self.conn.close()
        self.cursor.close()
        print("资源释放完毕!")

    def create_table_func(self):
        self.cursor.execute("DROP TABLE IF EXISTS stu")
        self.cursor.execute(PyMySQL.create_table)
        print('数据表创建完毕')

    def insert_date(self):
        try:
            self.cursor.execute(PyMySQL.insert)
            self.conn.commit()
            print("数据插入成功!")
        except:
            print(traceback.format_exc())
            self.conn.rollback()
            print("数据插入失败!")

    def update_data(self):
        try:
            self.cursor.execute(PyMySQL.update)
            self.conn.commit()
            print("数据更新成功!")
        except:
            print(traceback.format_exc())
            self.conn.rollback()
            print("数据更新失败!")

    def delete_data(self):
        try:
            self.cursor.execute(PyMySQL.delete)
            self.conn.commit()
            print("数据删除成功!")
        except:
            print(traceback.format_exc())
            self.conn.rollback()
            print("数据删除失败!")

    def select_data(self):
        self.cursor.execute(PyMySQL.select)
        all_data = self.cursor.fetchall()
        for i in all_data:
            print('查询结果为：{}'.format(i))

if __name__ == '__main__':
    my = PyMySQL('localhost','root','0000','data')
    # my.create_table_func()
    my.insert_date()
    my.update_data()
    my.delete_data()
    my.select_data()
    my.closeAll()
