// pages/first-page/first-page.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    questions: [{
      question: '进食',
      options: ['较大或完全依赖', '需部分帮助', '自理']
    }, {
      question: '穿衣',
      options: ['依赖他人', '选项2', '选项3']
    }, {
      question: '问题3',
      options: ['选项1', '选项2', '选项3']
    }, {
      question: '问题4',
      options: ['选项1', '选项2', '选项3']
    }, {
      question: '问题5',
      options: ['选项1', '选项2', '选项3']
    }, {
      question: '问题6',
      options: ['选项1', '选项2', '选项3']
    }, {
      question: '问题7',
      options: ['选项1', '选项2', '选项3']
    }, {
      question: '问题8',
      options: ['选项1', '选项2', '选项3']
    }, {
      question: '问题9',
      options: ['选项1', '选项2', '选项3']
    }, {
      question: '问题10',
      options: ['选项1', '选项2', '选项3']
    }],
    selectedOptions: {} // 用于存储用户的选择
  },

  indexToLetter: function indexToLetter(index) {
    return String.fromCharCode(65 + index);
  },
  selectOption: function selectOption(event) {
    console.log('选项被点击了');
    var questionIndex = event.currentTarget.dataset.question;
    var optionIndex = event.currentTarget.dataset.option;
    var selectedOptions = Object.assign({}, this.data.selectedOptions);
    if (selectedOptions[questionIndex] === optionIndex) {
      delete selectedOptions[questionIndex];
    } else {
      selectedOptions[questionIndex] = optionIndex;
    }
    this.setData({
      selectedOptions: selectedOptions
    });
  },
  
  isSelected: function isSelected(questionIndex, optionIndex) {
    return this.data.selectedOptions[questionIndex] === optionIndex;
  },
  submitQuiz: function submitQuiz() {
    wx.navigateTo({
      url: '/pages/test-result/test-result'
    });
    console.log('测试完成');
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
  onShareAppMessage: function onShareAppMessage() {},
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  onScrollButtonClick: function onScrollButtonClick() {
    // 在这里实现滚动按钮的点击事件处理逻辑
    // 例如，你可以让滚动视图滚动到某个特定位置
    // 或者根据需要添加其他逻辑
  },
  onRetestButtonClick: function onRetestButtonClick() {
    // 在这里实现重新测试按钮的点击事件处理逻辑
    // 例如，你可以跳转到测试页面或重新开始测试
  }
});