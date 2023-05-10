"use strict";

// pages/first-page/first-page.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    totalScore: 0,
    selectedBar: -1,
    testId: '',
    item:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
   
    const totalScore = parseInt(options.totalScore);
    const testId = options.testId;
    const controlValue = options.controlValue;
    var item = JSON.parse(decodeURIComponent(options.item));
    var index = decodeURIComponent(options.index); 
    let selectedBar = -1;
    if (totalScore >= 0 && totalScore <= 40) {
      selectedBar = 0;
    } else if (totalScore >= 45 && totalScore <= 60) {
      selectedBar = 1;
    } else if (totalScore >= 65 && totalScore <= 95) {
      selectedBar = 2;
    } else if (totalScore == 100) {
      selectedBar = 3;
    }

    this.setData({
      totalScore: totalScore,
      selectedBar: selectedBar,
      testId: testId,
      item:item,
      controlValue:controlValue,
      index:index
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
    var testId = this.data.testId; // 获取当前页面的 testId
    var controlValue = this.data.controlValue; // 获取当前页面的 controlValue
    var itemJson = encodeURIComponent(JSON.stringify(this.data.item)); // 获取当前页面的 item 数据，并将其转换为 JSON 字符串

   // 当 controlValue 为 1 时跳转到 test-choose 页面
  if (controlValue == 1) {
    wx.navigateTo({
      url: '/pages/test-choose/test-choose?testId=' + testId
    });
  }
  // 当 controlValue 为 2 时跳转到 profile 页面并传输 item 数据
  else if (controlValue == 2) {
    wx.navigateTo({
      url: '/pages/profile/profile?item=' + itemJson
    });
  }
  else if (controlValue == 3) {
    wx.navigateTo({
      url: '/pages/total/total' 
    });
  }
  },
  onScrollButtonClick: function onScrollButtonClick() {
    // 在这里实现滚动按钮的点击事件处理逻辑
    // 例如，你可以让滚动视图滚动到某个特定位置
    // 或者根据需要添加其他逻辑
  },
  onRetestButtonClick: function onRetestButtonClick() {
    var index = this.data.index;
  var testId = this.data.testId;
  var controlValue = this.data.controlValue;
    wx.navigateTo({
      url: `/pages/test1/test1?index=${encodeURIComponent(index)}&testId=${testId}&controlValue=${encodeURIComponent(controlValue)}`
    });
  }
});