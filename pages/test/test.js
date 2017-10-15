var app = getApp();
var common = require('../../common/common.js')
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    username:"璇狼之风",
    userpass:null,
    id:3,
    bol:false,
    arr:[1,2,3,4,5],
    item: {
      index: 0,
      msg: 'this is a template'
    }
  }, 
  show:function(){
    var boll = this.data.bol;
    this.setData({
      bol: !boll
    });
  },
  say: function () {
    common.sayHello(this.data.username);
  },
  tianzhuan: function () {
    //tabBar中进行页面跳转的话需要用 switchTab 别的 wx.navigateTo 再说
    wx.switchTab({
      url: '../index/index'
    })
  },
  tiaozhuanNavi:function(){
    wx.navigateTo({
      url: '../navi/navi',
      success:function(){
        console.log("跳转到Navi.wxml 页面");
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userpass: app.globalData.userpass
    })
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
    console.log("test页显示的时候加载onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("test页隐藏的时候加载onHide");
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