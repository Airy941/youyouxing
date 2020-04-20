// pages/getcomfirm/getcomfirm.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backType:'index'
  },
  bindGetUserInfo: function (e) {
    // console.log(app.globalData)
    // console.log(e.detail)
    app.globalData.userInfo = e.detail.userInfo;
    wx.switchTab({
                  url: '../index/index'
              })
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function (res) {
              
    //           wx.switchTab({
    //               url: '../index/index'
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
    // let backtype = this.data.backType;
    // if (e.detail.userInfo) {
    //   app.globalData.userInfo = e.detail.userInfo
    //   if (backtype == 'index') {
    //     wx.switchTab({
    //       url: '../index/index'
    //     })
    //   } else if (backtype == 'mine') {
    //     wx.switchTab({
    //       url: '../mine/mine'
    //     })
    //   } else {
    //     wx.redirectTo({
    //       url: '../detail/detail?blogId=' + backtype
    //     })
    //   }
    // } else {
    //   this.showZanTopTips('很遗憾，您拒绝了微信授权，宝宝很伤心');
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
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