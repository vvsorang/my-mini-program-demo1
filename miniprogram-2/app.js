// app.js
App({
  
  globalData: {
    nameList:[]
  },
  onLaunch: function () {
    // 在这里可以设置从存储中获取的初始值，如果有的话
    const storedNameList = wx.getStorageSync('nameList');
    if (storedNameList && storedNameList.length > 0) {
      this.globalData.nameList = storedNameList;
    }
  },
  onShow: function () {
    // 将全局变量存入缓存中
    wx.setStorageSync('nameList', this.globalData.nameList);
  }

})
