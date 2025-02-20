const app = getApp();

Page({
    data: {
        max_weight_data:"6000", // 屏幕宽度
        weights_data: "2300,1988,1050,601,503,459,359",
        nums_data: "912,320,1248,320,912,320,1248",
        text_result: "计算结果:"
    },
    max_weight_set: function(e) {
      e.detail.value=e.detail.value.replace(/[^0-9\.]/g,'');
      this.setData({max_weight_data: e.detail.value});},
    weights_data_set: function(e) {
      e.detail.value=e.detail.value.replace(/[^0-9\,\.]/g,'');
      this.setData({weights_data: e.detail.value});},
    nums_data_set: function(e) {
      e.detail.value=e.detail.value.replace(/[^0-9\,\.]/g,'');
      this.setData({nums_data: e.detail.value});},

    getResult (goal, limit) {
        //调用getLoosen函数 将原先的限制条件矩阵进行扩充
        //加入松弛变量，基变量和价值系数
        var loosen = this.getLoosen(limit, goal);
        //建立一个新矩阵 存储扩充后的决策变量及其价值系数
        var cb = [];
        for (let i = 0; i < (goal.length + loosen.length); i++) {
            //插入决策变量，基变量和价值系数
            cb.push([goal[i] || 0, i]);
        }
        while (true) {
            //判断是否存在为负数项的约束条件
            var needAssist = false;
            for (let i of loosen) {
                if (i[1] < 0) {needAssist = true;}
            }
            //如果存在，则需要使用对偶单纯形法消去负数项
            if (needAssist) {
                var min = 0; var min_index = null;
                //寻找b列值最小的负数项 决定换出变量
                for (let i = 0; i < loosen.length; i++) {
                    if (loosen[i][1] < min) {
                        min = loosen[i][1];
                        min_index = i;
                    }
                }
                //在决定换出变量后 决定换入变量
                var min2 = Infinity; var min_index2 = null;
                for (let i = 0; i < cb.length; i++) {
                    var num = loosen[min_index][0][i];
                    if (num >= 0) continue;
                    if (this.getCheckNum(cb, loosen, i) >= 0) continue;
                    var check = (this.getCheckNum(cb, loosen, i)) / num;
                    if (check < min2) {
                        min2 = check;
                        min_index2 = i;
                    }
                }
                if (typeof min_index2 == 'number') {
                    //若成功寻找到换入变量 则对矩阵进行初等变换
                    loosen[min_index][2] = min_index2;
                    loosen[min_index][3] = cb[min_index2][0];
                    this.updateMartix(loosen, min_index, min_index2);
                }else return false;// 若找不到换入变量 则该矩阵不存在最优解 返回false值 结束函数运行
            }
            //结束循环判断
            else break;
        }
        var result = [];
        //将该数组进行初始化
        for (let i = 0; i < loosen.length; i++) {
          if(loosen[i][2]>goal.length) {return false}
          result.push([]);
        //将b列的值读取入该数组
          result[i] =[loosen[i][2],loosen[i][1]];
        }
        //返回该数组
        return result;
    },
    //进行初等行变换
    updateMartix (loosen, index1, index2) {
        var list = loosen[index1], num = list[0][index2];
        //对中心点所在行进行除法运算 将该中心点的值变为1
        for (let i = 0; i < list[0].length; i++) {
            list[0][i] /= num;
        }
        list[1] /= num;
        //通过加法和乘法运算 将中心点所在列的值变为0
        for (let i = 0; i < loosen.length; i++) {
            if (i == index1) continue;
            var num2 = loosen[i][0][index2];
            for (let j = 0; j < loosen[i][0].length; j++) {
                loosen[i][0][j] -= (loosen[index1][0][j] * num2);
            }
            loosen[i][1] -= loosen[index1][1] * num2;
        }
    },
    //使用比值判别法 获取比值数θ
    getBizhiNum (cb, loosen, index, maxIndex) {
        var num = loosen[index][0][maxIndex];
        //若系数为负 则该行不可能被换出 返回null
        if (num <= 0) return null;
        return loosen[index][1] / num;
    },
    //获取检验数σ
    getCheckNum (cb, loosen, index) {
        var num = cb[index][0];
        for (let i = 0; i < loosen.length; i++) {
            num -= (loosen[i][3] * loosen[i][0][index]);
        }
        return num;
    },
    //插入松弛变量，决策变量和价值系数
    getLoosen(limit, goal) {
        var loosen = limit.slice(0);
        for (let i = 0; i < limit.length; i++) {
            //插入松弛变量
            for (let j = 0; j < limit.length; j++) {
                limit[i][0].push(i == j ? 1 : 0);
            }
            //插入决策变量
            limit[i].push(i + goal.length);
            //插入价值系数
            limit[i].push(0);
        }
        return loosen;
    },

    bag_program(weights, max_weight) {
      const result = [];
      const re = new Array(weights.length).fill(0);
      function backtrack(start, re, currentWeight) {
          // 如果当前重量超过背包容量，直接返回
          if (currentWeight > max_weight) {
              re = new Array(weights.length).fill(0);
              return;
          }
          result.push([...re]);
          for (let i = start; i < weights.length; i++) {
              // 添加当前物品到组合中
              re[i]++;
              // 递归调用，尝试添加下一个物品
              backtrack(i, re, currentWeight + weights[i]);
              // 移除当前物品，回溯
              re[i]--;
          }
      }
      // 从第一个物品开始，当前组合为空，当前重量为0
      backtrack(0, re, 0);
      return result;
    },
    sumf(a, b) {   //方案具化
        let re = [];
        for (let i = 0; i < a.length; i++) {
            if (b[i] > 0) {
                for (let j = 0; j < b[i]; j++) {
                    re.push(a[i]);
                }
            }
        }
        return re;
    },
    sumarrys(weights, nums) {    //两个数组对应元素积的和
        let re = 0;
        for (let i = 0; i < weights.length; i++) {
            re += weights[i] * nums[i];
        }
        return re;
    },
    sumar (weights, num) {    //两个数组对应元素的积
        let re = [];
        for (let i = 0; i < weights.length; i++) {
            re.push(weights[i] * num);
        }
        return re;
    },
    sum(num1, num2) {    //两个数组对应元素的和
        let re = [];
        for (let i = 0; i < num1.length; i++) {
            re.push(num1[i] + num2[i]);
        }
        return re;
    },
    get_result() {
        var weights=this.data.weights_data.split(",").map(Number);
        var nums=this.data.nums_data.split(",").map(Number);
        var max_weight=Number(this.data.max_weight_data);
        var texts= "开始计算……\n开始动态规划，计算所有下料分布可能……";
        this.setData({text_result:texts});
        for (let j = 0; j < weights.length; j++) {
            if(weights[j]>max_weight){texts += "\n计算停止，出现未知错误，请调整数据。";
                this.setData({text_result:texts});
                return;}
        }
        let num_arrs = this.bag_program(weights, max_weight);
        texts += "\n动态规划结束，开始线性规划选择最优分布……";
        this.setData({text_result:texts});
        let num_arrs_T = [];     //转置矩阵
        for (let i = 0; i < num_arrs[0].length; i++) { num_arrs_T[i] = []; };
        for (let i = 0; i < num_arrs.length; i++) {
            for (let j = 0; j < num_arrs[i].length; j++) { num_arrs_T[j][i] = num_arrs[i][j] * -1; }
        };
        let goals = [];        //目标变量系数
        let x = [];            //定义变量x[i]
        for (let i = 0; i < num_arrs_T[0].length; i++) {
            goals[i] = -1; x[i] = "x" + i;
        };
        let limits = [];       //定义基矩阵
        for (let i = 0; i < num_arrs_T.length; i++) {
            limits[i] = [num_arrs_T[i], nums[i] * -1];
        };
        // 调用getResult函数 对该线性规划问题求解
        let result =false;
        result = this.getResult(goals, limits);
        //若该线性规划问题无最优解 则将报错提示输出到网页 并退出函数
        if (!result) {
            texts += "\n计算停止，出现未知错误，请调整数据。";
            this.setData({text_result:texts});
            return;
        }
        //生成求解后的结果文本
        var Numbers = [];
        var z = 0; var l = 0; var re = 0;
        for (let i = 0; i < result.length; i++) {
          re = Math.round(result[i][1]+0.2);
          texts += "\n" + (i+1) + "#：余" +  Math.round((max_weight - this.sumarrys(weights, num_arrs[result[i][0]]))*100)/100;
          texts += "，需" + re + "根" + JSON.stringify(this.sumf(weights, num_arrs[result[i][0]]));
          z += re;   //计算目标函数的值
          l += this.sumarrys(weights, num_arrs[result[i][0]]) * re;
          if (i < 1) {
              Numbers = this.sumar(num_arrs[result[i][0]], re);
              }
          else {
              Numbers = this.sum(Numbers ,this.sumar(num_arrs[result[i][0]], re))
          };
        };
        texts += "\n下料数量分别为：" + JSON.stringify(Numbers);
        texts += "\n所需原料总数目为：" + z;
        texts += "\n管材平均利用率为：" + Math.round(l / z / max_weight * 10000) / 100 + "%";
        texts += "\n此程序仅供学习和参考，计算结果自行承担风险！";
        this.setData({text_result:texts});
    },
    onShareAppMessage(e) {
        return {
        title: '排管计算',
        path: 'calc/index'
        }
    }
})
