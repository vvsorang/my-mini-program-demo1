// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,

  },

  onStartTest: function() {
    wx.navigateTo({
      url: '/pages/test-choose/test-choose',
    });
  },


  onButton1Click: function() {
    this.setData({ currentTab: 0 });
  },

  onButton2Click: function() {
    this.setData({ currentTab: 1 });
  },

  onButton3Click: function() {
    this.setData({ currentTab: 2 });
  },

  onTabItemClick1: function (event) {
    console.log("Tab item 1 clicked");
    wx.navigateTo({
      url: '/pages/tatal/tatal',
    });
    // 在这里处理点击事件，例如切换页面等
  },
  onTabItemClick3: function (event) {
    console.log("Tab item 3 clicked");
    wx.navigateTo({
      url: '/pages/name/name',
    });
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

  }
})