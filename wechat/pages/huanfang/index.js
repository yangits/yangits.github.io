const app = getApp();
Page({
  data: {
    windowWidth: app.windowWidth, // 屏幕宽度
    numData: [],
    nownum: 3,    // 当前系数 
    sumnum:0,
  },

  onLoad() {
    this.initNum(this.data.nownum);
  },
  // 重置
  reset() {
    this.initNum(this.data.nownum);
  },

  // 初始化题目
  initNum(n) {
    let numData = [];
    let numDatas=this.magicMatrix(n);
    for (let i =0; i < n; i++) {
      for (let j =0; j < n; j++) {
          numData.push({ num: numDatas[i][j]});
      };
    };

    this.setData({
      numData,sumnum:(n*n+1)*n/2
    })
  },
  magicMatrix(n) {
    var matrix = [];
    var x = 0;
    var y = (n-1)/2; // 奇数的中心位置
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
    // 按升序依次填写
    for (let i = 0; i < n * n; i++) {
        // 填写当前位置的值
        matrix[x][y] = i + 1;
        // 存住当前位置
        var tx = x;
        var ty = y;
        // 默认更新为右上角位置
        x--;
        if (x < 0) {
            x += n;
        }
        y++;
        if (y >= n) {
            y -= n;
        }
        // 右上角已有数据, 则回退到正下方位置
        if (matrix[x][y] !== 0) {
            x = tx + 1;
            if (x === n) {
                x -= n;
            }
            y = ty;
        }
    }
    return matrix;
},
  // 选择系数
  choose() {
    let that = this, nownum = this.data.nownum
    wx.showActionSheet({
      itemList: ['3 × 3', '5 × 5', '7 × 7', '9 × 9', '11 × 11', '13 × 13'],
      success(res) {
        if (res.tapIndex*2 + 3 != nownum) {
          that.setData({ nownum: res.tapIndex*2+3})
          that.reset();
        }
      }
    })
  },

  onShareAppMessage(e) {
    return {
      title: '幻方',
      path: 'huanfang/index'
    }
  }
})
