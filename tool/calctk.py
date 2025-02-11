import tkinter
import pulp as lp
import numpy as np
from scipy.optimize import linprog
#pyinstaller -F -w calctk.py --collect-data pulp
def bag_program(weights, max_weight):
    result=[]
    ren=[0]*len(weights)
    def backtrack(start,ren, current_weight):
        # 如果当前重量超过背包容量，直接返回
        if current_weight > max_weight:
            ren=[0]*len(weights)
            return
        result.append(list(ren))
        for i in range(start, len(weights)):
            # 添加当前物品到组合中
            ren[i]+=1
            # 递归调用，尝试添加下一个物品
            backtrack(i, ren, current_weight + weights[i])
            # 移除当前物品，回溯
            ren[i]-=1
    # 从第一个物品开始，当前组合为空，当前重量为0
    backtrack(0, ren, 0)
    return result
def integer_program(A_gq,B_gq): 
    c = np.ones(len(A_gq[0]))
    # 线性约束：-A_gq * x >= -B_gq
    a = np.array(A_gq)*(-c)
    b = -np.array(B_gq)
    bounds=()
    for i in range(len(A_gq[0])):
        bounds += ((0, None),)# 下界是0，上界没有
    # 求解最值
    re = linprog(c, A_ub=a, b_ub=b, bounds=bounds)
    return re.x
    # ---------以上是scipy求解-------------以下是pulp求解--------
    # m = lp.LpProblem(sense=lp.LpMinimize)      # 确定最大最小化问题，当前确定的是最小化问题
    # x = [lp.LpVariable(f'x{i}',lowBound=0) for i in range(len(A_gq[0]))]    # 定义变量放到列表中 生成x1 x2 x3  ,cat='Integer'
    # m += lp.lpSum(x) # 定义目标函数，并将目标函数加入求解的问题中 
    # for i in range(len(A_gq)):# 设置比较条件
    #     m += (lp.lpDot(A_gq[i],x) >= B_gq[i])# 等于 
    # m.solve()     # 求解
    # re=[lp.value(var) for var in x]
    # return re
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
def sumnums (num1,num2):  #两个数组对应元素的和
    re=[]
    for i in range(len(num1)):
        re.append(num1[i]+num2[i])
    return re
def dellarrys (a):#去重
    re=[]
    for i in a :
        if i not in re :
            re.append(i)
    return re
def sumar(weights, num):
    re = []
    for i in range(len(weights)):
        re.append(weights[i] * num)
    return re


class tkapp(tkinter.Tk):
    def __init__(self):
        super().__init__()
        self.title("管材排料计算")
        self.geometry("600x600")
        self.label1 = tkinter.Label(self, text="原材料长度: ")
        self.label2 = tkinter.Label(self, text="需下料长度: ")
        self.label3 = tkinter.Label(self, text="需下料数量: ")
        self.edit1 = tkinter.Entry(self)
        self.edit2 = tkinter.Entry(self)
        self.edit3 = tkinter.Entry(self)
        self.textarea=tkinter.Text(self)
        self.button = tkinter.Button(self, text="开始计算", command=self.run)
        self.label1.place(x=20, y=10, width=80, height=35)
        self.label2.place(x=20, y=50, width=80, height=35)
        self.label3.place(x=20, y=90, width=80, height=35)
        self.edit1.place(x=100, y=10, width=220, height=35)
        self.edit2.place(x=100, y=50, width=450, height=35)
        self.edit3.place(x=100, y=90, width=450, height=35)
        self.textarea.place(x=20, y=180, width=550, height=400)
        self.button.place(x=120, y=130, width=350, height=35)
        self.edit1.insert(0, "6000")
        self.edit2.insert(0, "2300,1988,1050,601,503,459,359")
        self.edit3.insert(0, "912,320,1248,320,912,320,1248")
        self.append_text('计算结果...')

    def append_text(self,text):
        self.textarea.insert('end',text+ "\n")
        self.update()

    def run(self):  
        self.textarea.delete(1.0, 'end')
        try:
            max_weight = eval(self.edit1.get())
            weights = eval(self.edit2.get())
            nums = eval(self.edit3.get())
        except:
            self.append_text('输入框不是整数或逗号格式错误,请参考默认数值')
            return
        if not ( isinstance(max_weight, int)):
            self.append_text('输入框不是整数或逗号格式错误,请参考默认数值')
            return 
        self.append_text("开始计算...\n开始动态规划, 计算所有下料分布可能...")    
        try:
            num_arrs= bag_program(weights, max_weight)     #计算可能下料方案
        except:
            self.append_text('动态规划失败，请检查数据!!!') 
            return   
        print(len(num_arrs))      
        weight_num=[]
        for vals in num_arrs:
            weight_num.extend([vals])
        num_arrs=weight_num
        self.append_text("动态规划结束,开始线性规划选择最优分布...")
        try:
            re=integer_program(list(zip(*num_arrs)),nums)        #求解最优方案
        except:
            self.append_text('线性规划失败，请检查数据!!!') 
            return
        if sum(re) <= 0 :
            self.append_text('没有任何方案，请修改参数!!!') 
            return 
        self.append_text("线性规划完成, 等待输出结果...")
        numbers=[]
        j=0;l=0;z=[]
        for i in range(len(re)):
            if re[i] != 0:
                z.append(round(re[i]+0.2))
                self.append_text(f'{j+1}#: 余{max_weight-sumarrys(weights,num_arrs[i])},需{z[j]}根*{sumf(weights,num_arrs[i])}')
                l += sumarrys(weights,num_arrs[i])*z[j]
                if j==0:
                    numbers=sumar(num_arrs[i],z[j])
                else:
                    numbers=sumnums(numbers,sumar(num_arrs[i],z[j]))
                j += 1
        self.append_text(f'下料数量分别为: {numbers}')        
        self.append_text(f'所需原料总数目为: {sum(z)}根') 
        self.append_text('管材平均利用率为: {:.2f}%'.format(l/sum(re)/max_weight*100)) 
        self.append_text("此程序仅供学习和参考，计算结果自行承担风险!!!")        
if __name__ == '__main__':
    app = tkapp()
    app.mainloop()    # 进入消息循环