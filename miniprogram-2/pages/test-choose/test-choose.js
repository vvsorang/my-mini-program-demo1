// pages/test-choose/test-choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '2',
    names: [],
  },

  switchTab: function (e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab,
    });
  },
  onInput: function (e) {
    const value = e.detail.value;
    const names = this.data.names;
    const matchedNames = names.filter((item) => item.name.includes(value));
    this.setData({
      names: matchedNames,
    });
  },

  goToTest1: function() {
    wx.navigateTo({
      url: '/pages/test1/test1',
    });
  },
  

  navigateBack: function() {
    wx.navigateTo({
      url: '/pages/main/main',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const nameList = wx.getStorageSync('nameList') || [];
    this.setData({ names: nameList });
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