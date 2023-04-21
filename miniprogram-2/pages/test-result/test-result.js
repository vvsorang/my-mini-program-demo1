"use strict";

// pages/first-page/first-page.js
Page({
  /**
   * 页面的初始数据
   */

  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    const totalScore = options.totalScore;
    this.setData({
      totalScore: totalScore
    });
  },
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
  onShareAppMessage: function onShareAppMessage() {},
  navigateBack: function navigateBack() {
    wx.navigateTo({
      url: '/pages/test-choose/test-choose'
    });
  },
  onScrollButtonClick: function onScrollButtonClick() {
    // 在这里实现滚动按钮的点击事件处理逻辑
    // 例如，你可以让滚动视图滚动到某个特定位置
    // 或者根据需要添加其他逻辑
  },
  onRetestButtonClick: function onRetestButtonClick() {
    wx.navigateTo({
      url: '/pages/test1/test1'
    });
  }
});