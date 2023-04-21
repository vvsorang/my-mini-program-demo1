"use strict";

// pages/total/total.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    options: [
      { label: '男', value: 'male', selected: false },
      { label: '女', value: 'female', selected: false },
      { label: '其他', value: 'other', selected: false },
    ]
  },
  selectOption(event) {
    console.log('选项被点击了');
    const optionIndex = event.currentTarget.dataset.option;
    this.setData({
      selectedOption: optionIndex
    });
  }
,  
  submitQuiz() {
    const { options } = this.data
    const selectedOption = options.find((option) => option.selected)
    console.log('您选择的是：', selectedOption.label)
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