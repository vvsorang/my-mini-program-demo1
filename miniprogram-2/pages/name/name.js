"use strict";

// pages/name/name.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showInputBox: false,
    inputName: "",
    nameList: [],
    searchText: '',
    originalNameList: []
  },
  onAddButtonClick: function onAddButtonClick() {
    this.setData({
      showInputBox: true
    });
  },
  onInput: function onInput(e) {
    this.setData({
      inputName: e.detail.value
    });
  },
  onConfirm: function onConfirm() {
    var newName = this.data.inputName;
    if (newName) {
      var updatedNameList = this.data.nameList.concat(newName);
      this.setData({
        nameList: updatedNameList,
        showInputBox: false
      });
      wx.setStorageSync("nameList", updatedNameList);
    }
  },
  onNavigateButtonClick: function onNavigateButtonClick() {
    wx.navigateTo({
      url: '/pages/test-choose/test-choose'
    });
  },
  onTabItemClick1: function onTabItemClick1(event) {
    console.log("Tab item 1 clicked");
    wx.navigateTo({
      url: '/pages/tatal/tatal'
    });
    // 在这里处理点击事件，例如切换页面等
  },

  onTabItemClick2: function onTabItemClick2(event) {
    console.log("Tab item 3 clicked");
    wx.navigateTo({
      url: '/pages/main/main'
    });
  },
  onSearchInput: function onSearchInput(event) {
    var searchText = event.detail.value.trim();
    var filteredNameList = this.data.originalNameList.filter(function (item) {
      return item.indexOf(searchText) !== -1;
    });
    this.setData({
      searchText: searchText,
      nameList: filteredNameList
    });
  },
  onViewResult: function onViewResult(event) {
    console.log("查看结果按钮被点击");
    // 在这里处理查看结果的逻辑，例如跳转到结果页面等
  },

  onDelete: function onDelete(event) {
    var index = event.currentTarget.dataset.index;
    var updatedNameList = this.data.nameList.filter(function (_, i) {
      return i !== index;
    });
    this.setData({
      nameList: updatedNameList
    });
    wx.setStorageSync("nameList", updatedNameList);
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function onLoad() {
    var storedNameList = wx.getStorageSync("nameList");
    if (storedNameList) {
      this.setData({
        nameList: storedNameList,
        originalNameList: storedNameList
      });
    }
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