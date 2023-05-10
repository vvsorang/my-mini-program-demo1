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
    originalNameList: [],
    testResults:[],
    isInitialDataLoaded: false,
    initialData: [
      {name: 'John', data1: 100, data2: 100, data3: 100, data4: 100, data5: 95},
  {name: 'Sarah', data1: 80, data2: 60, data3: 90, data4: 95, data5: 85},
  {name: 'Michael', data1: 100, data2: 86, data3: 75, data4: 95, data5: 95},
  {name: 'Emily', data1: 65, data2: 100, data3: 20, data4: 40, data5: 75},
  {name: 'David', data1: 15, data2: 45, data3: 90, data4: 25, data5: 100},
  {name: 'Laura', data1: 40, data2: 50, data3: 15, data4: 80, data5: 30},
  {name: 'Daniel', data1: 95, data2: 35, data3: 60, data4: 100, data5: 45},
  {name: 'Emma', data1: 50, data2: 55, data3: 70, data4: 90, data5: 40},
  {name: 'James', data1: 75, data2: 20, data3: 100, data4: 35, data5: 60},
  {name: 'Olivia', data1: 100, data2: 65, data3: 40, data4: 50, data5: 85},
  {name: '张三', data1: 25, data2: 65, data3: 100, data4: 45, data5: 80},
  {name: '李四', data1: 10, data2: 90, data3: 70, data4: 100, data5: 55},
  {name: '王五', data1: 60, data2: 15, data3: 85, data4: 40, data5: 100},
  {name: '赵六', data1: 45, data2: 100, data3: 30, data4: 95, data5: 70},
  {name: '孙七', data1: 20, data2: 35, data3: 95, data4: 50, data5: 100},
  {name: '周八', data1: 55, data2: 45, data3: 40, data4: 75, data5: 65},
  {name: '吴九', data1: 80, data2: 55, data3: 100, data4: 30, data5: 40},
  {name: '郑十', data1: 30, data2: 75, data3: 85, data4: 100, data5: 50},
  {name: '陈一', data1: 70, data2: 40, data3: 50, data4: 80, data5: 95},
  {name: '胡二',data1: 90, data2: 60, data3: 100, data4: 55, data5: 75},
    ]
  },
  onLoadInitialData: function() {
    if (!this.data.isInitialDataLoaded) {
      var app = getApp();
      app.globalData.nameList = app.globalData.nameList.concat(this.data.initialData);
      this.setData({
        nameList: app.globalData.nameList,
        originalNameList: app.globalData.nameList,
        isInitialDataLoaded: true
      });
      wx.setStorageSync("nameList", app.globalData.nameList);
    } else {
      wx.showToast({
        title: '初始数据已加载',
        icon: 'none',
        duration: 2000
      });
    }
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
      // 将新数组添加到nameList中
      var newEntry = {
        name: newName,
        data1: 0,
        data2: 0,
        data3: 0,
        data4: 0,
        data5: 0
      };
      var app = getApp();
      var updatedNameList = app.globalData.nameList.concat(newEntry);
      app.globalData.nameList = updatedNameList;
      this.setData({
        nameList:updatedNameList,
        originalNameList: updatedNameList,
        showInputBox: false
      });
  
      // 如果您仍然希望将 nameList 存储在本地存储中，可以在此处调用 wx.setStorageSync
      wx.setStorageSync("nameList", updatedNameList);
    }
    
  },

  onTabItemClick1: function onTabItemClick1(event) {
    wx.navigateTo({
      url: '/pages/total/total'
    });
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
      return item.name.indexOf(searchText) !== -1;
    });
    this.setData({
      searchText: searchText,
      nameList: filteredNameList
    });
  },
  onViewResult: function onViewResult(event) {
    console.log("查看结果按钮被点击");
    const index = event.currentTarget.dataset.index;
    const item = this.data.nameList[index];
    wx.navigateTo({
      url: `/pages/profile/profile?item=${encodeURIComponent(JSON.stringify(item))}&index=${encodeURIComponent(index)}`
    });
  },
  

  onDelete: function onDelete(event) {
    var index = event.currentTarget.dataset.index;
    var app = getApp();
    var updatedNameList = app.globalData.nameList.filter(function (_, i) {
      return i !== index;
    });
    app.globalData.nameList = updatedNameList;
    this.setData({
      nameList: updatedNameList,
      originalNameList: updatedNameList
    });
    wx.setStorageSync("nameList", updatedNameList);
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function onLoad() {
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    var app = getApp();
    var globalNameList = app.globalData.nameList;

    if (globalNameList) {
      this.setData({
        nameList: globalNameList,
        originalNameList: globalNameList
      });
    }
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