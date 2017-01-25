var test1_app = getApp();

Page({
  data:{
   msg: test1_app.globalData.AAA,
   num: 4,
   show: true
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  ontap1: function(){{
    console.log('自定义的点击');
  }},
  backpage: function(){
    wx.navigateBack()
  },
  changeShow: function(){
    if(this.data.num > 5){
      this.data.num = 0;
    }else if(this.data.num < 2){
      this.data.num = 4;
    }else{
      this.data.num = 8;
    }
    this.data.show = false;
    console.log(this.data.num)
  }
})