from database import DataBase

class Student(object):
    # 定义用户名和密码
    user = None
    password = None

    # 添加学生信息
    def add_student(self):
        student_number = int(input("请输入添加的学生人数："))
        for i in range(student_number):
            sno = input("请输入学号：")
            if not DataBase.determine_student(DataBase, self.user, self.password, sno):
                sname = input("请输入姓名：")
                sex = input("请输入性别：")
                birthday = input("请输入出生日期：")
                phone = input("请输入电话：")
                dorm = input("请输入宿舍号：")
                DataBase.add_student(DataBase, self.user, self.password, sno, sname, sex, birthday, phone, dorm)
                print("成功添加学号为【%s】的学生！\n"%sno)
            else:
                print("系统已存在学号为【%s】的学生信息，请勿重复添加！"%sno)

    # 删除学生信息
    def delete_student(self):
        sno=input("请输入需要删除的学生学号：")
        if DataBase.determine_student(DataBase,self.user,self.password,sno):
            DataBase.delete_student(DataBase,self.user,self.password,sno)
            print("成功删除学号为【%s】的学生!"%sno)
        else:
            print("系统中不存在学号为【%s】的学生，无法删除！"%sno)

    # 实现修改学生信息时，用户不输入则学生属性不发生改变的功能
    def user_input(self,message,info):
        s=input(message)
        if s=="":
            return info
        else:
            return s

    # 修改学生信息，学号不可修改
    def modify_student(self):
        sno=input("请输入需要修改的学生学号：")
        if DataBase.determine_student(DataBase,self.user,self.password,sno):
            sno, sname, sex, birthday, phone, dorm = DataBase.select_student(DataBase, self.user, self.password, sno)
            sname=self.user_input("请输入学生姓名：【回车不修改】",sname)
            sex = self.user_input("请输入学生性别：【回车不修改】",sex)
            birthday = self.user_input("请输入学生出生日期：【回车不修改】",birthday)
            phone = self.user_input("请输入学生电话：【回车不修改】",phone)
            dorm = self.user_input("请输入学生宿舍号：【回车不修改】",dorm)
            DataBase.modify_student(DataBase,self.user,self.password,sno,sname,sex,birthday,phone,dorm)
            print("成功修改学号为【%s】的学生信息!"%sno)
        else:
            print("系统中不存在学号为【%s】的学生，无法修改！"%sno)

    # 查询学生信息
    def select_student(self):
        sno = input("请输入需要查询的学生学号：")
        if DataBase.determine_student(DataBase, self.user, self.password, sno):
            DataBase.select_student(DataBase,self.user,self.password,sno)
        else:
            print("系统中不存在学号为【%s】的学生！" % sno)

    # 输出学生信息
    def show_students(self):
        DataBase.show_student(DataBase,self.user,self.password)

    # 保存学生信息
    def data(self):
        DataBase.save_student(DataBase, self.user, self.password)
        print("保存成功！")

    # 功能菜单打印
    @staticmethod
    def menu():
        print("**************************")
        print("**  输入：0  --退出程序--  **")
        print("**  输入：1  --添加学生--  **")
        print("**  输入：2  --输出学生--  **")
        print("**  输入：3  --删除学生--  **")
        print("**  输入：4  --查询学生--  **")
        print("**  输入：5  --修改学生--  **")
        print("**  输入：6  --另存学生--  **")
        print("**************************")

    # 登录界面
    def ui(self):
        print("*********************************")
        print("**     欢迎使用学生信息管理系统    **")
        print("**   请输入用户名和密码以进入系统   **")
        print("*********************************")
        self.user = input("请输入用户名（用户名输入 exit 则退出程序）：")
        self.password = input("请输入密码：")
        print("-"*33)

    # 程序调用
    def run(self):
        while True:
            self.ui()
            if DataBase.condatabase(DataBase, self.user, self.password):
                print("登陆成功！！！")
                while True:
                    self.menu()
                    number = input("请输入功能前面的代码：")
                    if number == "1":
                        self.add_student()
                    elif number == "2":
                        self.show_students()
                    elif number == "3":
                        self.delete_student()
                    elif number == "4":
                        self.select_student()
                    elif number == "5":
                        self.modify_student()
                    elif number == "6":
                        self.data()
                    elif number == "0":
                        print("感谢使用，欢迎下次登陆！")
                        exit()
                    else:
                        print("您输入的序号不对，请重新输入！")

            elif self.user == "exit":
                exit()
            else:
                print("-"*33)
                print("用户名或密码错误，请重新输入！")
s=Student()
s.run()