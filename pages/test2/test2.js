var order = ["a","b","c","d","e"];
var index = 0;
var progressNum = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:"a",
    imageUrl:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    inter:1000,
    autoplay:true,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    progressVal:0,
    country:[
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ]
  },
  inputFn:function(e){
    var a = e.detail.value;
    console.log(e.detail.value);
    return a;
  },
  inputfocusFn:function(e){
    console.log("聚焦了！");
  },
  inputBlurFn:function(){
    console.log("失去焦点了！");
  },
  scrolltoupper:function(e){
    console.log(e);
  },
  scrolltolower:function(e){
    console.log(e);
  },
  bindscroll:function(e){
    console.log(e);
  },
  tapChange:function(){
    index++;
    if(index>order.length-1)
    {
      index=0;
    }
    this.setData({
      toView:order[index]
    })
  },
  ChangSwiper:function(e){
    console.log(e);
  },
  innervalChange:function(e){
    var interValue = e.detail.value;
    this.setData({
      inter:interValue
    });
  },
  ChangeAutoPlay:function(){
    this.setData({
      autoplay:!this.data.autoplay
    });
  },
  subFn:function(){
    console.log("提交表单");
  },
  resetFn:function(){
    console.log("点击了重置按钮！");
  },
  CheckChange:function(e){
    console.log(e.detail.value);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    var timer = setInterval(function(){
      progressNum++;
      if(progressNum>=100)
      {
        clearInterval(timer);
        //progressNum=0;
      }
      that.setData({
        progressVal:progressNum
      });
    },30)
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