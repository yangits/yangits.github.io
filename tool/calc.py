﻿import pulp as lp
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QLabel, QLineEdit, QTextEdit
#pyinstaller -F -w cal.py --collect-data pulp
class Mywindow(QWidget):
    def __init__(self):
        super(Mywindow, self).__init__()
        self.setWindowTitle("管材排料计算 - 星愿 QQ:934550145")      # 设置窗口标题
        self.resize(800, 650)          # 窗口的大小
        label1 = QLabel("原材料长度: ", self)
        label2 = QLabel("需下料长度: ", self)
        label3 = QLabel("需下料数量: ", self)
        label4 = QLabel("最长废料: ", self)
        label5 = QLabel("最短可利用料: ", self)
        label7 = QLabel("限定N#最大值: ", self)
        label1.setGeometry(50, 10, 100, 35)  # 显示位置与大小 ： x, y , w, h
        label2.setGeometry(50, 50, 100, 35)
        label3.setGeometry(50, 90, 100, 35)
        label4.setGeometry(50, 130, 100, 35)
        label5.setGeometry(400, 130, 100, 35)
        label7.setGeometry(400, 10, 100, 35)
        self.edit1 = QLineEdit(self)
        self.edit2 = QLineEdit(self)
        self.edit3 = QLineEdit(self)
        self.edit4 = QLineEdit(self)
        self.edit5 = QLineEdit(self)
        self.edit6 = QTextEdit(self)
        self.edit7 = QLineEdit(self)
        self.edit1.setGeometry(150, 10, 220, 35)
        self.edit2.setGeometry(150, 50, 600, 35)
        self.edit3.setGeometry(150, 90, 600, 35)
        self.edit4.setGeometry(150, 130, 220, 35)       
        self.edit5.setGeometry(530, 130, 220, 35)
        self.edit6.setGeometry(50, 220, 700, 400)
        self.edit7.setGeometry(530, 10, 220, 35)
        self.edit1.setText("6000")
        self.edit2.setText("2300,1988,1050,601,503,459,359")
        self.edit3.setText("912,320,1248,320,912,320,1248")
        self.edit4.setText("100")
        self.edit5.setText("1000")
        self.edit6.setText("N#最大值默认不限制,请合理修改限定值!!!"
        "\n建议优先限定废料,再限定可利用料,保证有足够方案计算,最后限定N#值!!!")
        self.edit7.setText("0")
        btn = QPushButton("开始计算",self)
        btn.setGeometry(50, 180, 700, 35)
        btn.clicked.connect(self.run)     #点击按钮连接运行程序
    def run(self):  
        self.edit6.clear()
        try:
            max_weight = eval(self.edit1.text())
            weights = eval(self.edit2.text())
            nums = eval(self.edit3.text())
            L1 = eval(self.edit4.text())
            L2 = eval(self.edit5.text())
            n = eval(self.edit7.text())
        except:
            self.edit6.append('输入框不是整数或逗号格式错误,请参考默认数值')
            return
        if not (isinstance(L1, int) and isinstance(L2, int) and isinstance(max_weight, int) and isinstance(n, int)):
            self.edit6.append('输入框不是整数或逗号格式错误,请参考默认数值')
            return 
        self.edit6.append("开始计算...\n开始动态规划, 计算所有下料分布可能...")    
        self.edit6.repaint()
        try:
            num_arrs= bag_program(weights, nums, max_weight)     #计算可能下料方案
        except:
            self.edit6.append('动态规划失败，请检查数据!!!') 
            return         
        weight_num=[]
        for vals in num_arrs:
            if max_weight-sumarrys(vals,weights) <= L1  or max_weight-sumarrys(vals,weights) >= L2: #不可利用且余料太长的方案删除
                weight_num.extend([vals])
        num_arrs=weight_num
        self.edit6.append("动态规划结束,开始线性规划选择最优分布...")
        self.edit6.repaint()
        print(list(zip(*num_arrs)),nums)
        try:
            re=integer_program(list(zip(*num_arrs)),nums,n)        #求解最优方案
        except:
            self.edit6.append('线性规划失败，请检查数据!!!') 
            return
        if sum(re) <= 0 :
            self.edit6.append('没有任何方案，请修改参数!!!') 
            return 
        self.edit6.append("线性规划完成, 等待输出结果...")
        self.edit6.repaint()
        j=1;l=0
        for i in range(len(re)):
            if re[i] != 0:
                self.edit6.append(f'{j}#: 余{max_weight-sumarrys(weights,num_arrs[i])},需{int(re[i])}根*{sumf(weights,num_arrs[i])}')
                j += 1
                l += sumarrys(weights,num_arrs[i])*re[i]
        self.edit6.append(f'所需原料总数目为: {int(sum(re))}根') 
        self.edit6.append('管材平均利用率为: {:.2f}%'.format(l/sum(re)/max_weight*100)) 
        self.edit6.append("此程序仅供学习和参考，计算结果自行承担风险!!!\n")        
        self.edit6.repaint()
def bag_program(weights, nums, max_weight):
    weight_num =[[] for i in range(max_weight)]
    for il, l in enumerate(weights):
        val = [0]*len(weights)
        for i in range(l, max_weight + 1, l):
            val[il] += 1
            if val[il] <= nums[il]:
                weight_num[i - 1].append(deepcopy(val))
        for i in range(max_weight):
            if weight_num[i]:
                if i + l < max_weight:
                    for vals in weight_num[i]:
                        val=deepcopy(vals)
                        val[il] += 1
                        if val[il] <= nums[il]:
                             weight_num[i + l].append(deepcopy(val))
    num_arrays_list = []
    for vals in weight_num:
          num_arrays_list.extend(vals)
    num_arrs= dellarrys(num_arrays_list)#去重
    return num_arrs
def integer_program(A_gq,B_gq,n): 
    ma=max(B_gq) 
    m = lp.LpProblem(sense=lp.LpMinimize)      # 确定最大最小化问题，当前确定的是最小化问题
    x = [lp.LpVariable(f'x{i}',lowBound=0,cat='Integer') for i in range(len(A_gq[0]))]    # 定义变量放到列表中 生成x1 x2 x3
    y = [lp.LpVariable(f'y{i}',lowBound=0, upBound=1 ,cat='Integer') for i in range(len(A_gq[0]))]    
    m += lp.lpSum(x) # 定义目标函数，并将目标函数加入求解的问题中 
    if n > 0:
        for i in range(len(A_gq[0])):# 设置比较条件
            m += (x[i] <= y[i]*ma)
        m += (lp.lpSum(y) <= n) 
    for i in range(len(A_gq)):# 设置比较条件
        m += (lp.lpDot(A_gq[i],x) >= B_gq[i])# 等于 
    m.solve()     # 求解
    re=[lp.value(var) for var in x]
    return re
def deepcopy (a):  #模拟深拷贝
    demo=[0]*len(a)
    for i in range(len(a)):
        demo[i]=a[i]
    return demo
def sumf (a,b):   #方案具化
    re=[]
    for i in range(len(a)):
        if b[i] !=0:
            for j in range(b[i]):
                re.append(a[i])
    return re
def sumarrys (weights,num_arrs):  #两个数组对应元素积的和
    re=0
    for i in range(len(weights)):
        re =re+ weights[i]*num_arrs[i]
    return re
def dellarrys (a):#去重
    re=[]
    for i in a :
        if i not in re :
            re.append(i)
    return re

if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Mywindow()
    # 展示窗口
    w.show()
    # 程序进行循环等待状态
    app.exec()