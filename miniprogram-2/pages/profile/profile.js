var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var radarChart = null;
// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[]
 
  },
touchHandler: function (e) {
    console.log(radarChart.getCurrentDataIndex(e));
},
onRectangleTap: function (event) {
  // 获取按钮的id和对应的data-id
  const testId = event.currentTarget.id;
  const totalScore = event.currentTarget.dataset.id;
  const index = this.data.index; // 从 data 对象中获取 index 的值
// 将整个item转换为JSON字符串
const itemJson = encodeURIComponent(JSON.stringify(this.data.item));
  // 将id和data-id添加到url中并导航到test-result页面
  wx.navigateTo({
    url: `/pages/test-result/test-result?testId=${testId}&totalScore=${totalScore}&controlValue=2&item=${itemJson}&index=${encodeURIComponent(index)}`
  });
},
navigateBack: function navigateBack() {
  wx.navigateTo({
    url: '/pages/name/name'
  });
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 解码并获取传递过来的 item
    const item = JSON.parse(decodeURIComponent(options.item));
    var index = decodeURIComponent(options.index);
    // 将 item 设置为页面数据
    this.setData({
      item: item,
      index:index
    });
    
  },
  
  
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var windowWidth = 400;
    try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
    } catch (e) {
        console.error('getSystemInfoSync failed!');
    }

    radarChart = new wxCharts({
        canvasId: 'radarCanvas',
        type: 'radar',
        categories: ['体适能', '日常生活', '认知', '感知觉', '营养'],
        series: [{
            name: '评估分数',
            data: [
              this.data.item.data1, // 使用从item中获取的data1
              this.data.item.data2, // 使用从item中获取的data2
              this.data.item.data3, // 使用从item中获取的data3
              this.data.item.data4, // 使用从item中获取的data4
              this.data.item.data5  // 使用从item中获取的data5
            ],

        }],
        width: 400,
        height: 300,
        
        extra: {
            radar: {
                max: 100
            }
        }
    });

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