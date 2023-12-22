import pymysql

class DataBase:
    # 定义连接数据库对象和游标对象
    db=None
    cursor=None

    # 连接数据库
    def condatabase(self,user,password):
        try:
            self.db=pymysql.Connect(
                user=user,
                password=password,
                host="localhost",
                database="practice",
                port=3306,
                charset="utf8"
            )
            self.cursor=self.db.cursor()
            return True
        except:
            return False

    # 添加学生信息
    def add_student(self,user,password,sno,sname,sex,birthday,phone,dorm):
        self.condatabase(self,user,password)
        sql="insert into students values(%s,%s,%s,%s,%s,%s)"
        add_data=[sno,sname,sex,birthday,phone,dorm]
        try:
            self.cursor.execute(sql,add_data)
            self.db.commit()
        except:
            self.db.rollback()
        finally:
            self.cursor.close()
            self.db.close()

    # 删除学生信息
    def delete_student(self,user,password,sno):
        self.condatabase(self,user,password)
        sql="delete from students where sno=%s"
        del_data=[sno]
        try:
            self.cursor.execute(sql,del_data)
            self.db.commit()
        except:
            self.db.rollback()
        finally:
            self.cursor.close()
            self.db.close()

    # 查询指定学生信息
    def select_student(self,user,password,sno):
        self.condatabase(self,user,password)
        sql="select * from students where sno=%s"
        sel_data=sno
        try:
            self.cursor.execute(sql,sel_data)
            result=self.cursor.fetchone()
            print("学号：%s  姓名：%s  性别：%s  年龄：%s  电话：%s  宿舍号：%s" % (result[0],result[1],result[2],result[3],result[4],result[5]))
            return result[0],result[1],result[2],result[3],result[4],result[5]
        except:
            self.db.rollback()
        finally:
            self.cursor.close()
            self.db.close()

    # 修改学生信息，学号不可修改
    def modify_student(self,user,password,sno,sname,sex,birthday,phone,dorm):
        self.condatabase(self,user,password)
        sql="update students set sname=%s,sex=%s,birthday=%s,phone=%s,dorm=%s where sno=%s"
        mod_data=[sname,sex,birthday,phone,dorm,sno]
        try:
            self.cursor.execute(sql,mod_data)
            self.db.commit()
        except:
            self.db.rollback()
        finally:
            self.cursor.close()
            self.db.close()

    # 判断学号是否存在
    def determine_student(self, user, password, sno):
        self.condatabase(self, user, password)
        sql = "select * from students where sno = %s"
        sel_data=sno
        try:
            self.cursor.execute(sql,sel_data)
            row = self.cursor.fetchone()
            if row is not None:
                return True
        except:
            self.db.rollback()
            return False
        finally:
            self.cursor.close()
            self.db.close()

    # 输出学生信息
    def show_student(self, user, password):
        self.condatabase(self, user, password)
        sql = "select * from students"
        try:
            self.cursor.execute(sql)
            students = self.cursor.fetchall()
            if len(students)==0:
                print("系统中没有学生信息，请先添加！")
            else:
                for row in students:
                    print("学号：%s  姓名：%s  性别：%s  年龄：%s  电话：%s  宿舍号：%s" % (row[0], row[1], row[2], row[3], row[4], row[5]))
        except:
            self.db.rollback()
        self.db.close()

    # 另存学生信息
    def save_student(self,user,password):
        self.condatabase(self,user,password)
        sql="select * from students"
        try:
            self.cursor.execute(sql)
            result=self.cursor.fetchall()
            if len(result)==0:
                print("系统中没有学生信息，请先添加！")
            else:
                file=open("学生信息.txt","a")
                for row in result:
                    file.write("学号：%s\t姓名：%s\t性别：%s\t年龄：%s\t电话：%s\t宿舍号：%s\n" % (row[0], row[1], row[2], row[3], row[4], row[5]))
        except:
            self.db.rollback()
        finally:
            self.cursor.close()
            self.db.close()
            file.close()
