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
    searchText: '',
    completedCount: 0,
    uncompletedCount: 0,
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
      return item.name.indexOf(searchText) !== -1;
    });
    this.setData({
      searchText: searchText,
      names: matchedNames
    });


  },
  goToTest1: function(event) {
    var index = event.currentTarget.dataset.index;
    console.log(index);
    var app = getApp();
    var item = app.globalData.nameList[index];
    var testId = this.data.testId; // 获取当前页面的 testId
    var controlValue = 1; // 设置 controlValue 为 1
    wx.navigateTo({
      url: '/pages/test1/test1?testId=' + encodeURIComponent(testId) + // 将 testId 添加到跳转的 URL
          '&index=' + encodeURIComponent(index) +
          '&name=' + encodeURIComponent(item.name) +
          '&data1=' + encodeURIComponent(item.data1) +
          '&data2=' + encodeURIComponent(item.data2) +
          '&data3=' + encodeURIComponent(item.data3) +
          '&data4=' + encodeURIComponent(item.data4) +
          '&data5=' + encodeURIComponent(item.data5)+
          '&controlValue=' + encodeURIComponent(controlValue) // 将 controlValue 添加到跳转的 URL
    });
  },
  navigateBack: function navigateBack() {
    wx.navigateTo({
      url: '/pages/main/main'
    });
    
  },
  updateCounts: function() {
    let completedCount = 0;
    let uncompletedCount = 0;
  
    for (let item of this.data.names) {
      if (item['data' + this.data.testId] !== 0) {
        completedCount++;
      } else {
        uncompletedCount++;
      }
    }
  
    this.setData({
      completedCount: completedCount,
      uncompletedCount: uncompletedCount
    });
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var app = getApp();
  var storednames = app.globalData.nameList || [];
    const testId = options.testId;
    let testDataKey = '';
    switch (testId) {
      case '1':
        testDataKey = 'data1';
        break;
      case '2':
        testDataKey = 'data2';
        break;
      case '3':
        testDataKey = 'data3';
        break;
      case '4':
        testDataKey = 'data4';
        break;
      case '5':
        testDataKey = 'data5';
        break;
      default:
        // Handle cases when testId is not one of the expected values
        console.error('Invalid testId:', testId);
        break;
    }
    this.setData({
      names: storednames,
      originalnames: storednames,
      testId: testId,
      testDataKey: testDataKey
    });
    this.updateCounts();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    this.updateCounts();

  },
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