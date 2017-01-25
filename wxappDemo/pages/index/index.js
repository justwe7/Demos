//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello 腾腾',
    userInfo: {},
    test: '微信名：'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../test/test1',
      complete: function(ev){
        console.log(ev)
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
