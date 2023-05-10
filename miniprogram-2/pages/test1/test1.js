// pages/first-page/first-page.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    allQuestions:[
     [{
      question: '每周有氧运动的频率',
      options: ['几乎不进行有氧运动', '偶尔', '每周1-2次', '每周3-4次', '每周5次及以上']
    }, {
      question: '能否完成十次标准下蹲',
      options: ['无法完成', '完成1-2次', '只能完成一半', '勉强完成', '轻松完成']
    }, {
      question: '过去6个月是否因健康原因摔倒过',
      options: ['经常摔倒', '摔倒过3次及以上', '摔倒过2次', '仅摔倒过1次', '从未摔倒']
    }, {
      question: '伸直双腿尝试触碰脚尖',
      options: ['无法尝试此动作', '与脚尖相差甚远', '未能触碰脚尖但距离不远', '勉强触碰脚尖', '轻松触碰脚尖']
    }, {
      question: '30秒单脚站立测试',
      options: ['无法尝试此动作', '完成少于10秒（严重失衡）', '完成10-19秒（中度失衡）', '完成20-29秒（仅轻微失衡）', '完成30秒（无倾倒）']
    }], [{
      question: '进食',
      options: ['较大或完全依赖（或有留置营养管）', '需部分帮助（夹菜、盛饭）', '自理']
    }, {
      question: '穿衣',
      options: ['依赖他人', '需要部分帮助（如拉拉链）', '自理']
    }, {
      question: '面部与口腔清洁',
      options: ['需要帮助', '独立洗脸、梳头、刷牙、剃须']
    }, {
      question: '大便控制',
      options: ['失禁（完全依赖他人完成排泄）', '偶有失禁（需要他人提示）', '能控制']
    }, {
      question: '小便控制',
      options: ['失禁（完全依赖他人完成）或置留导尿管（但无法自行管理导尿管）', '偶有失禁（需要他人提示）', '能控制或置留导尿管（可自行管理导尿管）']
    }, {
      question: '用厕',
      options: ['需要极大的帮助或完全依赖他人', '需要部分帮助（如整理衣物或帮助坐上便器）', '选自理（能够使用厕纸、穿脱裤子等）']
    }, {
      question: '平地行走',
      options: ['卧床不起（移动需要帮助）', '需多人搀扶或依赖他人帮助使用轮椅等', '需少量帮助（如1人搀扶或他人在旁提示使用轮椅等）', '独立步行（包括自行使用辅助工具）']
    }, {
      question: '床椅转移',
      options: ['完全依赖他人，不能坐好', '需多人帮助完成，能坐好', '需1人或拐杖等帮助(包括需要他人在旁监护、提示）', '自理']
    }, {
      question: '上下楼',
      options: ['需极大帮助或完全依赖他人', '需部分帮助（如扶着楼梯、他人搀扶）', '独立上下楼（可借助电梯）']
    }, {
      question: '洗澡',
      options: ['洗澡过程需他人帮助', '准备好洗澡水后，可自己独立完成']
    }], [{
      question: '时间定向',
      options: ['无时间观念', '时间观念很差（不知年月日，可知上午或下午）', '时间观念较差（不清楚年月日，可知上半年或下半年）', '时间观念下降（清楚年月日，但有时相差一周以上）', '时间观念清楚']
    }, {
      question: '空间定向',
      options: ['不能单独外出', '只能在左邻右舍间串门，对现住地不知名称和方位 ', '只能单独在家附近行动，对现住地只知名称，不知道方位 ', '可单独来往于近街，知道现住地的名称和方位，但不知回家路线 ', '可单独出远门，能很快掌握新环境的方位 ']
    }, {
      question: '人物定向',
      options: ['只认识保护人 ', '只认识常同住的亲人', '只能称呼家中人，或只能照样称呼 ', '只知家中亲密近亲的关系 ', '知道周围人们的关系；可分辨陌生人并可用适当称呼 ']
    }, {
      question: '记忆',
      options: ['记忆完全紊乱', '出现重度的记忆紊乱或回忆不能（不能回忆远期记忆，不记得自己的老朋友）', '出现中度的记忆紊乱或回忆不能（不能回忆近期记忆，不记得上一顿饭吃了什么）', '出现轻度的记忆紊乱或回忆不能（不能回忆即时信息，3 个词语经过5 分钟后仅能回忆0～ 1 个） ', '总是能够保持与社会、年龄所适应的长、短时记忆，能够完整的回忆 ']
    }, {
      question: '财物管理',
      options: ['无法管理', '接触金钱机会少，主要由家属代管 ', '因担心算错，每月管理约 300 元 ', '因担心算错，每月管理约 1 000 元 ', '金钱的管理、支配、使用，能独立完成 ']
    }],
     [{
      question: '意识水平',
      options: ['昏迷', '昏睡 ', '嗜睡', '轻度意识障碍', '神志清醒，对周围环境警觉']
    }, {
      question: '视力',
      options: ['没有视力，眼睛不能跟随物体移动', '辨认物体有困难，但眼睛能跟随物体移动', '视力有限，看不清报纸标准字体 ', '视力完好，能看清书报上的标准字体']
    }, {
      question: '听力',
      options: ['完全听不见', '正常交流有些困难，需在安静的环境、大声说话或语速很慢，才能听到', '在轻声说话或说话距离超过 2 米时听不清', '可正常交谈，能听到电视、电话、门铃的声音']
    }, {
      question: '沟通交流',
      options: ['不能表达需要或理解他人的话 ', '选勉强可与人交往，谈吐内容不清楚，表情不恰当', '能够表达自己的需要或理解别人的话，但需要增加时间或给予帮助 ', '无困难，能与他人正常沟通和交流']
    }], [{
      question: '在过去六个月里的体重变化',
      options: ['体重增加/减少 5公斤以上', '体重增加 1-5公斤', '体重减少 1-5公斤', '体重保持稳定 ']
    },{
      question: '食欲',
      options: ['几乎无食欲，吃东西困难', '食欲不振，部分食物无法下咽', '食欲正常', '食欲旺盛']
    }, {
      question: '饮食习惯（每天摄入的食品种类）',
      options: ['饮食极度不均衡，长期缺乏多种营养物质', '不太均衡，总是缺乏某类食物', '基本均衡，偶尔忽略某类食物', '营养均衡，摄入蛋白质、脂肪、碳水化合物、膳食纤维和各类维生素']
    }, {
      question: '每天喝水的量',
      options: ['每天喝少于1000毫升水', '每天喝1000-2000毫升水', '每天至少喝2000毫升水']
    }, {
      question: '一日三餐进食情况',
      options: ['不规律进食，餐次和餐量不稳定', '规律三餐，但餐量较少或较多', '规律三餐，餐量适中']
    }, {
      question: '是否定期服用保健品或营养补充剂',
      options: ['从不服用 ', '偶尔服用', '是，按医生或营养师建议定期服用']
    }, {
      question: '口腔健康',
      options: ['严重牙齿和牙龈问题，影响饮食 ', '有轻微牙齿和牙龈问题，但不影响饮食 ', '良好，没有牙齿和牙龈问题']
    }, {
      question: '饮酒和吸烟情况',
      options: ['经常饮酒，或吸烟', '偶尔饮酒，不吸烟', '不饮酒，不吸烟']
    }, ],
    ],
    questions:[],
    selectedOptions: {} ,// 用于存储用户的选择
    item:{},
    questionCount: [5, 10, 5, 4, 8], // 每套题目的数量
  optionScores: [[0, 5, 10,15,20], [0, 5, 10,15], [0, 5, 10,15,20], [0, 7,13, 20,40], [0, 5, 10,15]], // 每个选项的分数
  },

  selectOption(event) {
    const questionIndex = event.currentTarget.dataset.question;
    const optionIndex =  parseInt(event.detail.value);
    const testId = this.data.testId;
    const selectedOptions = this.data.selectedOptions || [];
    const score = this.data.optionScores[testId - 1][optionIndex]; // 根据 testId 和选项的索引计算得分
    selectedOptions[questionIndex] = {
      optionIndex: optionIndex,
      score: score
    };
    this.setData({
      selectedOptions: selectedOptions
    });
  },
  
  calculateTotalScore() {
    const selectedOptions = this.data.selectedOptions || {};
    let totalScore = 0;
    for (let questionIndex in selectedOptions) {
      const option = selectedOptions[questionIndex];
      if (option) {
        totalScore += option.score;
      }
    }
    return totalScore;
  },
  
  
  isSelected(questionIndex, optionIndex) {
    const selectedOptions = this.data.selectedOptions || [];
    return selectedOptions[questionIndex] === optionIndex;
  },
  submitQuiz: function submitQuiz() {
    const totalScore = this.calculateTotalScore();
    var app = getApp();
    var nameList = app.globalData.nameList;
    var index = this.data.index; // 使用保存的 index 值
    var testId = this.data.testId; // 获取当前页面的 testId
    nameList[index]['data' + testId] = totalScore; // 根据 testId 修改对应的 data 字段
    var controlValue=this.data.controlValue;
    app.globalData.nameList = nameList;// 将修改后的 nameList 保存回全局变量
    wx.setStorageSync('nameList', nameList);
    const currentItem = nameList[index];
    const itemJson = encodeURIComponent(JSON.stringify(currentItem));
          wx.navigateTo({
           url: `/pages/test-result/test-result?totalScore=${totalScore}&testId=${testId}&controlValue=${controlValue}&item=${itemJson}`
          });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var app = getApp();
  var index = decodeURIComponent(options.index);
  var item = app.globalData.nameList[index];
  var testId = parseInt(options.testId); 
  var controlValue = decodeURIComponent(options.controlValue);
  console.log("Received testId:", options.testId);
  var currentQuestions = this.data.allQuestions[testId - 1] || [];
  this.setData({
    index: index, // 保存 index 值
    item: item,
    testId: testId,
    questions: currentQuestions,
    controlValue:controlValue
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