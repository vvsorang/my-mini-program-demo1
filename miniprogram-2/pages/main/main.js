// pages/main/main.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    nameList: getApp().globalData.nameList
  },

  checkAllData1NonZero: function () {
    const nameList = getApp().globalData.nameList;
    for (let i = 0; i < nameList.length; i++) {
      console.log(nameList[i].data1);
      if (nameList[i].data1 == 0) {
        return false;
      }
    }
    return true;
  },
  checkAllData2NonZero: function () {
    for (let i = 0; i < this.data.nameList.length; i++) {
      if (this.data.nameList[i].data2 == 0) {
        return false;
      }
    }
    return true;
  },
  checkAllData3NonZero: function () {
    for (let i = 0; i < this.data.nameList.length; i++) {
      if (this.data.nameList[i].data3 == 0) {
        return false;
      }
    }
    return true;
  },
  checkAllData4NonZero: function () {
    for (let i = 0; i < this.data.nameList.length; i++) {
      if (this.data.nameList[i].data4 == 0) {
        return false;
      }
    }
    return true;
  },
  checkAllData5NonZero: function () {
    for (let i = 0; i < this.data.nameList.length; i++) {
      if (this.data.nameList[i].data5 == 0) {
        return false;
      }
    }
    return true;
  },
  onStartTest: function(event) {
    const testId = event.currentTarget.id;
    wx.navigateTo({
      url: '/pages/test-choose/test-choose?testId=' + testId
    });
  },
  
  onButton1Click: function onButton1Click() {
    this.setData({
      currentTab: 0
    });
  },
  onButton2Click: function onButton2Click() {
    this.setData({
      currentTab: 1
    });
  },
  onButton3Click: function onButton3Click() {
    this.setData({
      currentTab: 2
    });
  },
  onTabItemClick1: function onTabItemClick1(event) {
    console.log("Tab item 1 clicked");
    wx.navigateTo({
      url: '/pages/total/total'
    });
  },

  onTabItemClick3: function onTabItemClick3(event) {
    console.log("Tab item 3 clicked");
    wx.navigateTo({
      url: '/pages/name/name'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {}
});