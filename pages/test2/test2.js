var order = ["a","b","c","d","e"];
var index = 0;
var progressNum = 0;
//用户返回豆瓣前250名的电影
var api = "https://api.douban.com/v2/movie/top250";
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
    ],
    citys:["北京","上海","广州","深圳"],
    index:0,
    time:"09:01",
    date:"2015-01-02",
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    imageSrc:"../../Image/0.jpg",
    imageArray: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }],
    markers: [{
      //iconPath: "../../Image/500691.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../Image/500692.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  PickerChange:function(e){
    this.setData({
      index:e.detail.value
    });
    console.log(e.detail.value);
  },
  PickerDateChange:function(e){
    this.setData({
      date:e.detail.value
    });
    console.log(e.detail.value);
  },
  PickerTimeChange:function(e){
    console.log(e.detail.value);
    this.setData({
      time:e.detail.value
    });
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
  radioChange:function(e){
    console.log(e.detail.value);
  },
  sliderChange:function(e){
    console.log(e.detail.value);
  },
  swichchange:function(e){
    console.log(e.detail.value);    
  },
  textarealineChange:function(e){
    console.log(e.detail);
  },
  ShowAction:function(){
    wx:wx.showActionSheet({
      itemList: ["A","B","C"],
      itemColor: 'red',
      success: function(res) {
        console.log(res.tapIndex);
      },
      fail: function(res) {
        console.log(res.tapIndex);
      },
      // complete: function(res) {
      //   console.log(res.tapIndex);
      // },
    })
  },
  ShowModal:function(){
    wx:wx.showModal({
      title: '提示',
      content: '我是一个模态弹窗！',
      showCancel: true,
      cancelText: '关掉',
      cancelColor: 'Red',
      confirmText: 'OK!',
      confirmColor: 'Green',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  ShowToast:function(){
    wx:wx.showToast({
      title: '删除成功！',
      icon: 'success',
      //image: '../../Image/500698.png',
      duration: 10000,
      mask: true,
      success: function(res) {
        console.log("显示消息提示成功！")
      }
    });
    wx.request({
      url: api, 
      data: {},
      header: {
        "Content-Type": "json"// 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx:wx.hideToast();
      }
    })
    //5 秒以后隐藏Toast
    // setTimeout(function(){
    //   wx:wx.hideToast();
    // },5000)
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  getPos:function(){
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        //console.log(latitude,longitude,speed,accuracy);
        wx:wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale:28,
          name:"wodeweizhi"
        })
      }
    })
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
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
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