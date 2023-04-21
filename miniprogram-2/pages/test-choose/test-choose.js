"use strict";

// pages/test-choose/test-choose.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '2',
    names: [],
    originalnames: [],
    searchText: ''
  },
  switchTab: function switchTab(e) {
    var tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
  },
  onInput: function onInput(e) {
    var searchText = e.detail.value.trim();
    var matchedNames = this.data.originalnames.filter(function (item) {
      return item.indexOf(searchText) !== -1;
    });
    this.setData({
      searchText: searchText,
      names: matchedNames
    });
  },
  goToTest1: function goToTest1() {
    wx.navigateTo({
      url: '/pages/test1/test1'
    });
  },
  navigateBack: function navigateBack() {
    wx.navigateTo({
      url: '/pages/main/main'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var storednames = wx.getStorageSync('nameList') || [];
    this.setData({
      names: storednames,
      originalnames: storednames
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
  onShareAppMessage: function onShareAppMessage() {}
});