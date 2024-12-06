
const Sudoku = require('./core/sudoku')
const Checker = require('./core/checker')
const Toolkit = require('./core/tooltik')
let gameTimer = null
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sudokuTypes: [
      {
        label: '入门',
        value: 'init',
        level: 2
      },
      {
        label: '中等',
        value: 'medium',
        level: 4
      },
      {
        label: '大师',
        value: 'master',
        level: 6
      }
    ],
    sudokuType: 'init', // init(入门), medium(中等), master(大师)
    gameLevel: 2,
    sudokuNumbers: [],
    cloneSudokuNumbers: [],
    fixedNumbers_top: [1, 2],
    fixedNumbers_bottom: [3, 4, 5, 6, 7, 8, 9],
    rowGroupClass: ['row_g_top', 'row_g_middle', 'row_g_bottom'],
    colGroupClass: ['col_g_left', 'col_g_center', 'col_g_right'],
    selectRowIndex: null,
    selectCellIndex: null,
    selectData: null,
    selectCellNumber: 0,
    selectPopNumber: 0,
    isMarkText: false,
    allNumbers: [],
    isClick: false,
    isFlag: false,
    isCheck: false,
    checkNumbers: [],
    equalNumbers: [],
    flagInitNumbers: Toolkit.matrix.makeMatrix(false),
    flagNumbers: [],
    timer: '00:00:00',
    hours: 0,
    minutes: 0,
    seconds: 0,
    stopText: '开始'
  },
  /**
   * 重置刷新游戏
   */
  gameFresh: function () {
    this.initGame(this.data.gameLevel)
    this.timeCalculate()
    this.clearGameTime()
    this.setData({
      isClick: false,stopText: '开始',selectRowIndex: null,selectCellIndex: null,
      flagNumbers:JSON.parse(JSON.stringify(this.data.flagInitNumbers))
    })
  },
  /**
   * clearTime
   */
  clearGameTime: function () {
    clearInterval(gameTimer)
    this.setData({
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: '00:00:00'
    })
  },
  /**
   * 暂停游戏
   */
  gameStop: function () {
    clearInterval(gameTimer)
    if (this.data.stopText === '暂停') { 
      this.setData({stopText: '继续',selectRowIndex: null,selectCellIndex: null})
    } else if (this.data.stopText !== '结束') { // 继续和开始
      gameTimer = setInterval(this.timeCalculate, 1000)
      this.setData({stopText: '暂停'})
    }
  },
  /**
   * 选择数独类型
   */
  sudokuTypeFun: function (e) {
    let el = e.currentTarget
    this.setData({
      sudokuType: el.dataset.type,
      gameLevel: el.dataset.level,
      selectRowIndex: null,
      selectCellIndex: null
    })
    this.clearGameTime()
    clearInterval(gameTimer)
    this.gameFresh()
  },
  /**
   * 清空
   */
  gameClear: function () {
    let _self = this
    wx.showModal({
      title: '警告！！！',
      content: '将会清空所有已填数据，请确认。',
      success: function (res) {
        if (res.confirm) {
          _self.setData({
            isCheck: false,
            sudokuNumbers: JSON.parse(JSON.stringify(_self.data.cloneSudokuNumbers)),
            flagNumbers:JSON.parse(JSON.stringify(_self.data.flagInitNumbers))
          })
        }
      }
    })
  },
  /**
   * 检查
   */
  gameCheck: function () {
    const checker = new Checker(this.data.sudokuNumbers)
    if (checker.check()) {
      return true
    }
    this.setData({
      isCheck: true,
      checkNumbers: checker.matrixMarks
    })
  },
  /* 当前选中的cell标记
   * 如果标记，当前数组对应的位置显示为true
   */
  gameCellRemark: function () {
    if (this.checkNumberisChecked(this.data.selectRowIndex, this.data.selectCellIndex)) {
      let arr = this.data.flagNumbers
      arr[this.data.selectRowIndex][this.data.selectCellIndex] = !arr[this.data.selectRowIndex][this.data.selectCellIndex]
      this.setData({
        isFlag: true,
        flagNumbers:  JSON.parse(JSON.stringify(arr))
      })
    }
  },
  /**
   * 删除已填写的
   */
  gameCellDelete: function () {
    let data = this.data.sudokuNumbers
    if (this.data.cloneSudokuNumbers[this.data.selectRowIndex][this.data.selectCellIndex] === 0
      && data[this.data.selectRowIndex][this.data.selectCellIndex] !== 0) {
      data[this.data.selectRowIndex][this.data.selectCellIndex] = 0
    }
    let flagData = this.data.flagNumbers
    if (flagData.length) {
      flagData[this.data.selectRowIndex][this.data.selectCellIndex] = false
    }
    this.setData({
      sudokuNumbers: data,
      flagNumbers: flagData
    })
  },
  /**
   * 填写数独
   */
  gameCellNumber: function (e) {
    let el = e.currentTarget
    this.setData({
      selectPopNumber: el.dataset.number
    })
    if (this.checkNumberisChecked(this.data.selectRowIndex, this.data.selectCellIndex)) {
      let data = this.data.sudokuNumbers
      data[this.data.selectRowIndex][this.data.selectCellIndex] = this.data.selectPopNumber
      this.setData({
        sudokuNumbers: data
      })
    }
    this.checkNumberIsEqual(this.data.selectRowIndex, this.data.selectCellIndex)
    if (this.isFillAll()) {
      this.checkFillNumbers()
    }
  },
  /**
   * 判断是否全部填写完成
   */
  isFillAll () {
    let data = this.data.sudokuNumbers
    let _return = true
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!data[i][j]) {
          _return = false
          return false
        }
      }
    }
    return _return
  },
  /**
   * 当全部完成后，自动检查是否填写正确
   * 1. 如果检查通过，则弹出通过
   * 2. 如果检查不通过，提示不通过且标记出错误的填写数字
   */
  checkFillNumbers () {
    const checker = new Checker(this.data.sudokuNumbers)
    if (checker.check()) {
      clearInterval(gameTimer),
      wx.showModal({
        title: '提示',
        content: '您已过关啦！',
        showCancel: false
      }),
      this.setData({
        selectRowIndex: null,
        selectCellIndex: null,
        stopText: '结束'
      })
    } else {
      wx.showToast({
        title: '失败了哦, 再检查一下下吧, 加油！',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        isCheck: true,
        checkNumbers: checker.matrixMarks
      })
    }
  },
  checkNumberisChecked (x, y) {
     /**
     * 1. 如果选中未填写的cell，填写
     * 2. 如果选中已填写的cell或没有选中，return
     * 3. 如果选中的位置有原始数据，则return
     */
    if (x === null || x === undefined || x === '') {
      return false
    } else if (y === null || y === undefined || y === '') {
      return false
    } else if (this.data.cloneSudokuNumbers[this.data.selectRowIndex][this.data.selectCellIndex]){
      return false
    } else {
      return true
    }
  },
  /**
   * 初始化游戏 入门级
   */
  initGame: function (level = 2) {
    const sudoku = new Sudoku()
    sudoku.make(level)
    const matrix = sudoku.puzzleMatrix
    this.setData({
      sudokuNumbers: matrix,
      cloneSudokuNumbers: JSON.parse(JSON.stringify(matrix))
    })
  },
  /**
   * 点击单个
   */
  clickCell: function (e) {
    const el = e.currentTarget
    this.setData({
      selectPopNumber: 0,
      selectRowIndex: el.dataset.row,
      selectCellIndex: el.dataset.cell,
      selectCellNumber: el.dataset.number,
      isClick: true,
      isCheck: false
    })
    if (this.data.sudokuNumbers[el.dataset.row][el.dataset.cell] === el.dataset.number) {
      this.setData({
        isMarkText: true
      })
    } else {
      this.setData({
        isMarkText: false
      })
    }
    this.checkNumberIsEqual(el.dataset.row, el.dataset.cell)
  },
  /**
   * 检查所选择数据与所有数据相同，如果相同，该索引所对应的值为true
   */
  checkNumberIsEqual: function (x, y) {
    let arr = Toolkit.matrix.makeMatrix(false)
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.data.sudokuNumbers[x][y] === this.data.sudokuNumbers[i][j]) {
          arr[i][j] = true
        }
      }
    }
    this.setData({
      equalNumbers: arr
    })
  },
  /**
   * 计时
   */
  timeCalculate: function () {
    if (this.data.seconds >= 60) {
      let params = this.data.minutes
      this.setData({
        seconds: 0,
        minutes: params + 1
      })
    } else {
      let params = this.data.seconds
      this.setData({
        seconds: params + 1
      })
    }
    if (this.data.minutes >= 60) {
      let params = this.data.hours
      this.setData({
        minutes: 0,
        hours: params + 1
      })
    }
    let timer = `${this.addZero(this.data.hours)}:${this.addZero(this.data.minutes)}:${this.addZero(this.data.seconds)}`
    this.setData({
      timer: timer
    })
  },
  /**
   * 补0
   */
  addZero: function (n) {
    if (n < 10) {
      return `0${n}`
    } else {
      return n
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
         
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.initGameTime()
    this.gameFresh()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '数独',
      path: 'shudu/index'
    }
  }
})
