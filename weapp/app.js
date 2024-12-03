//app.js
App({
    onLaunch: function () {
        this.globalData = {}
        let that = this;
        wx.getSystemInfo({
            success(res) {
                that.windowWidth = res.windowWidth;
                that.windowHeight = res.windowHeight;
            }
        })

    },

    
})
