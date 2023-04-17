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
  },


  onAddButtonClick: function () {
    this.setData({ showInputBox: true });
  },

  onInput: function (e) {
    this.setData({ inputName: e.detail.value });
  },

  onConfirm: function () {
    const newName = this.data.inputName;
    if (newName) {
      const updatedNameList = this.data.nameList.concat(newName);
      this.setData({ nameList: updatedNameList, showInputBox: false });
      wx.setStorageSync("nameList", updatedNameList);
    }
  },
  onNavigateButtonClick: function () {
    wx.navigateTo({
      url: '/pages/test-choose/test-choose',
    });
  },
  onTabItemClick1: function (event) {
    console.log("Tab item 1 clicked");
    wx.navigateTo({
      url: '/pages/tatal/tatal',
    });
    // 在这里处理点击事件，例如切换页面等
  },
  onTabItemClick2: function (event) {
    console.log("Tab item 3 clicked");
    wx.navigateTo({
      url: '/pages/main/main',
    });
  },
  onSearchInput: function (event) {
    this.setData({ searchText: event.detail.value.trim() });
  },

  onViewResult: function(event) {
    console.log("查看结果按钮被点击");
    // 在这里处理查看结果的逻辑，例如跳转到结果页面等
  },
  onDelete: function (event) {
    const index = event.currentTarget.dataset.index;
    const updatedNameList = this.data.nameList.filter((_, i) => i !== index);
    this.setData({ nameList: updatedNameList });
    wx.setStorageSync("nameList", updatedNameList);
  },

  /**
   * 生命周期函数--监听页面加载
   */

    onLoad: function () {
      const storedNameList = wx.getStorageSync("nameList");
      if (storedNameList) {
        this.setData({ nameList: storedNameList });
      }
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