//app.js

//俄罗斯方块需要
require("./common/runtime.js"), require("./common/vendor.js"), require("./common/main.js");

App({

  onLaunch: function () {
    this.globalData = {}
  },
  globalData: {
    userInfo: null
  }
})
