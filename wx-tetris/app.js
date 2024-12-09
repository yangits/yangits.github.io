// app.js
App({
  onLaunch() {
    // 获取系统信息
    try {
      const systemInfo = wx.getSystemInfoSync();
      this.globalData.systemInfo = systemInfo;
    } catch (error) {
      console.error('获取系统信息失败:', error);
    }
  },

  // 全局数据
  globalData: {
    systemInfo: null,
    settings: {
      theme: 'classic',
      showGrid: true,
      showGhost: true,
      isMuted: false,
      sensitivity: 50
    }
  }
});
