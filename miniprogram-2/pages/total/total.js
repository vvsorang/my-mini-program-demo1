// pages/total/total.js
var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var pieChart = null;
var chartData = {
    main: {
        title: '各项评估本月完成人数',
        data: [15, 20, 45, 37,20],
        categories: ['体适能', '日常生活活动', '认知能力', '感知觉与沟通','营养']
    },
    sub: [{
        title: '体适能评估',
        data: [70, 40, 65, 100],
        categories: ['能力完好', '轻度受损', '中度受损', '重度受损']    
    }, {
        title: '日常生活活动能力评估',
        data: [55, 30, 45, 36],
        categories: ['能力完好', '轻度受损', '中度受损', '重度受损']    
    }, {
        title: '认知能力评估',
        data: [76, 45, 32, 74],
        categories: ['能力完好', '轻度受损', '中度受损', '重度受损']                
    }, {
        title: '感知觉与沟通能力评估',
        data: [76, 54, 23, 12],
        categories: ['能力完好', '轻度受损', '中度受损', '重度受损']    
    },{
        title: '营养评估',
        data: [76, 54, 23, 12],
        categories: ['能力完好', '轻度受损', '中度受损', '重度受损']    
    }]
};

Page({
  /**
   * 页面的初始数据
   */
  data: {
    chartTitle: '各项评估本月完成人数',
    isMainChartDisplay: false,
    nameList:[],
    chartData:chartData,
    displayedNames: [],
    currentTab: 0,
    unfinishedNames:[],
    disabilityCounts: {
      severe: 0,
      moderate: 0,
      mild: 0,
      intact: 0
  },
  disabilityNames : [
    { title: '重度失能', names: [] },
    { title: '中度失能', names: [] },
    { title: '轻度失能', names: [] },
    { title: '能力完好', names: [] },
  ]
  },

  onButton1Click: function onButton1Click() {
    this.setData({
      currentTab: 0
    });
  },
  onButton2Click: function onButton2Click() {
    this.setData({
      currentTab: 1
    });
  },
  backToMainChart: function () {
    this.setData({
        chartTitle: chartData.main.title,
        isMainChartDisplay: true
    });
    columnChart.updateData({
        categories: chartData.main.categories,
        series: [{
            name: '完成人数',
            data: this.data.chartData.main.data,
            format: function (val, name) {
                return Math.round(val);
            }
        }]
    });
},
touchHandler1: function (e) {
  var index = columnChart.getCurrentDataIndex(e);
  var selectedNames;
  if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
          chartTitle: chartData.sub[index].title,
          isMainChartDisplay: false
      });
      columnChart.updateData({
          categories: chartData.sub[index].categories,
          series: [{
              name: '各个状况人数',
              data: this.data.chartData.sub[index].data,
              format: function (val, name) {
                return Math.round(val);
              }
          }]
      });
     
      var displayedNames = [
        {
          title: '重度受损',
          names: this.data.nameList.filter(item => item['data' + (index + 1)] >= 5 && item['data' + (index + 1)] <= 40).map(item => item.name)
        },
        {
          title: '中度受损',
          names: this.data.nameList.filter(item => item['data' + (index + 1)] >= 45 && item['data' + (index + 1)] <= 60).map(item => item.name)
        },
        {
          title: '轻度受损',
          names: this.data.nameList.filter(item => item['data' + (index + 1)] >= 65 && item['data' + (index + 1)] <= 95).map(item => item.name)
        },
        {
          title: '能力完好',
          names: this.data.nameList.filter(item => item['data' + (index + 1)] === 100).map(item => item.name)
        }
      ];
      this.setData({
        displayedNames: displayedNames,
      
      });

    }
},
touchHandler2: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
},        

  onTabItemClick2: function onTabItemClick2(event) {
    console.log("Tab item 3 clicked");
    wx.navigateTo({
      url: '/pages/main/main'
    });
  },

  onTabItemClick3: function onTabItemClick3(event) {
    console.log("Tab item 3 clicked");
    wx.navigateTo({
      url: '/pages/name/name'
    });
  },
  onNameClick1: function(event) {
    const name = event.currentTarget.dataset.name;
  const groupTitle = event.currentTarget.dataset.groupTitle;
  let testId;

  switch (groupTitle) {
    case '体适能评估未完成':
      testId = 1;
      break;
    case '日常生活活动能力评估未完成':
      testId = 2;
      break;
    case '认知能力评估未完成':
      testId = 3;
      break;
    case '感知觉与沟通能力评估未完成':
      testId = 4;
      break;
    case '营养评估未完成':
      testId = 5;
      break;
  }
  const index = this.data.nameList.findIndex(item => item.name === name);
  const controlValue = 3;

  wx.navigateTo({
    url: `/pages/test1/test1?index=${encodeURIComponent(index)}&testId=${encodeURIComponent(testId)}&controlValue=${encodeURIComponent(controlValue)}`,
  });  
  },

  calculateDisabilityScores: function () {
    const nameList = this.data.nameList;
    const disabilityCounts = {
      severe: 0,
      moderate: 0,
      mild: 0,
      intact: 0,
    };
  
    // 创建一个新对象以存储每个类别的人名
    const disabilityNames = [
      { title: '重度失能', names: [] },
      { title: '中度失能', names: [] },
      { title: '轻度失能', names: [] },
      { title: '能力完好', names: [] },
    ];
  
    this.data.nameList.forEach(person => {
      const { data1, data2, data3, data4, data5 } = person;
  
      if (data1 && data2 && data3 && data4 && data5) {
        const score = data1 * 0.25 + data2 * 0.25 + data3 * 0.25 + data4 * 0.15 + data5 * 0.1;
        person.disabilityScore = score;
  
        if (score >= 5 && score <= 60) {
          disabilityCounts.severe++;
          person.disabilityCategory = '重度失能';
          disabilityNames[0].names.push(person.name); // 添加人名到重度失能数组中
        } else if (score > 60 && score <= 80) {
          disabilityCounts.moderate++;
          person.disabilityCategory = '中度失能';
          disabilityNames[1].names.push(person.name); // 添加人名到重度失能数组中
        } else if (score > 80 && score <= 95) {
          disabilityCounts.mild++;
          person.disabilityCategory = '轻度失能';
          disabilityNames[2].names.push(person.name); // 添加人名到重度失能数组中
        } else if (score > 95 && score <= 100) {
          disabilityCounts.intact++;
          person.disabilityCategory = '能力完好';
          disabilityNames[3].names.push(person.name); // 添加人名到重度失能数组中
        }
      }
    });
  
    this.setData({
      nameList: this.data.nameList,
      disabilityCounts: disabilityCounts,
      disabilityNames: disabilityNames // 将新的类别人名列表对象添加到页面数据中
    });
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var windowWidth = 320;
    var app = getApp();
    var nameList = app.globalData.nameList;
    console.log(nameList);
   // 将 nameList 设置到页面的 data 对象中
  this.setData({
    nameList: nameList,
    isMainChartDisplay: true
  });
  this.calculateDisabilityScores();
    var countData1 = nameList.filter(item => item.data1 !== 0).length;
    var countData2 = nameList.filter(item => item.data2 !== 0).length;
    var countData3 = nameList.filter(item => item.data3 !== 0).length;
    var countData4 = nameList.filter(item => item.data4 !== 0).length;
    var countData5 = nameList.filter(item => item.data5 !== 0).length;
   
    //data1
    var countData1_100 = nameList.filter(item => item.data1 === 100).length;
    var countData1_65_95 = nameList.filter(item => item.data1 >= 65 && item.data1 <= 95).length;
    var countData1_45_60 = nameList.filter(item => item.data1 >= 45 && item.data1 <= 60).length;
    var countData1_0_40 = nameList.filter(item => item.data1 >= 5 && item.data1 <= 40).length;

    // data2
    var countData2_100 = nameList.filter(item => item.data2 === 100).length;
    var countData2_65_95 = nameList.filter(item => item.data2 >= 65 && item.data2 <= 95).length;
    var countData2_45_60 = nameList.filter(item => item.data2 >= 45 && item.data2 <= 60).length;
    var countData2_0_40 = nameList.filter(item => item.data2 >= 5 && item.data2 <= 40).length;

    // data3
    var countData3_100 = nameList.filter(item => item.data3 === 100).length;
    var countData3_65_95 = nameList.filter(item => item.data3 >= 65 && item.data3 <= 95).length;
    var countData3_45_60 = nameList.filter(item => item.data3 >= 45 && item.data3 <= 60).length;
    var countData3_0_40 = nameList.filter(item => item.data3 >= 5 && item.data3 <= 40).length;

    // data4
    var countData4_100 = nameList.filter(item => item.data4 === 100).length;
    var countData4_65_95 = nameList.filter(item => item.data4 >= 65 && item.data4 <= 95).length;
    var countData4_45_60 = nameList.filter(item => item.data4 >= 45 && item.data4 <= 60).length;
    var countData4_0_40 = nameList.filter(item => item.data4 >= 5 && item.data4 <= 40).length;

    // data5
    var countData5_100 = nameList.filter(item => item.data5 === 100).length;
    var countData5_65_95 = nameList.filter(item => item.data5 >= 65 && item.data5 <= 95).length;
    var countData5_45_60 = nameList.filter(item => item.data5 >= 45 && item.data5 <= 60).length;
    var countData5_0_40 = nameList.filter(item => item.data5 >= 5 && item.data5 <= 40).length;
 this.setData({
        'chartData.main.data[0]': countData1,
        'chartData.main.data[1]': countData2,
        'chartData.main.data[2]': countData3,
        'chartData.main.data[3]': countData4,
        'chartData.main.data[4]': countData5,

        'chartData.sub[0].data[0]': countData1_100,
        'chartData.sub[0].data[1]': countData1_65_95,
        'chartData.sub[0].data[2]': countData1_45_60,
        'chartData.sub[0].data[3]': countData1_0_40,

        'chartData.sub[1].data[0]': countData2_100,
        'chartData.sub[1].data[1]': countData2_65_95,
        'chartData.sub[1].data[2]': countData2_45_60,
        'chartData.sub[1].data[3]': countData2_0_40,

        'chartData.sub[2].data[0]': countData3_100,
        'chartData.sub[2].data[1]': countData3_65_95,
        'chartData.sub[2].data[2]': countData3_45_60,
        'chartData.sub[2].data[3]': countData3_0_40,

        'chartData.sub[3].data[0]': countData4_100,
        'chartData.sub[3].data[1]': countData4_65_95,
        'chartData.sub[3].data[2]': countData4_45_60,
        'chartData.sub[3].data[3]': countData4_0_40,

        'chartData.sub[4].data[0]': countData5_100,
        'chartData.sub[4].data[1]': countData5_65_95,
        'chartData.sub[4].data[2]': countData5_45_60,
        'chartData.sub[4].data[3]': countData5_0_40,

  });
    try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
    } catch (e) {
        console.error('getSystemInfoSync failed!');
    }
    var unfinishedNames = [
      {
        title: '体适能评估未完成',
        names: this.data.nameList.filter(item => item.data1 === 0 ).map(item => item.name)
      },
      {
        title: '日常生活活动能力评估未完成',
        names: this.data.nameList.filter(item => item.data2 === 0 ).map(item => item.name)
      },
      {
        title: '认知能力评估未完成',
        names: this.data.nameList.filter(item => item.data3 === 0 ).map(item => item.name)
      },
      {
        title: '感知觉与沟通能力评估未完成',
        names: this.data.nameList.filter(item => item.data4 === 0 ).map(item => item.name)
      },
      {
          title: '营养评估未完成',
          names: this.data.nameList.filter(item => item.data5 === 0 ).map(item => item.name)
        }
    ];
    this.setData({
      unfinishedNames: unfinishedNames
    });
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    const disabilityCounts = this.data.disabilityCounts;
    columnChart = new wxCharts({
        canvasId: 'columnCanvas',
        type: 'column',
        animation: true,
        categories: chartData.main.categories,
        series: [{
            name: '完成人数',
            data: this.data.chartData.main.data,
            format: function (val, name) {
                return Math.round(val);
            }
        }],
        yAxis: {
            format: function (val) {
                return val ;
            },
            title: '',
            min: 0
        },
        xAxis: {
            disableGrid: false,
            type: 'calibration'
        },
        extra: {
            column: {
                width: 15
            }
        },
        width: windowWidth,
        height: 200,
    });
    pieChart = new wxCharts({
        animation: true,
        canvasId: 'pieCanvas',
        type: 'pie',
        series: [{
            name: '轻度失能',
            data: disabilityCounts.mild,
            color: '#1296DB' 
        }, {
            name: '中度失能',
            data: disabilityCounts.moderate,
            color: '#E98F36' 
        }, {
            name: '重度失能',
            data:disabilityCounts.severe,
            color: '#D81E06' 
        }, {
            name: '能力完好',
            data: disabilityCounts.intact,
            color: '#63B14E' 
        }],
        width: windowWidth,
        height: 300,
        dataLabel: true,
    });
},
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