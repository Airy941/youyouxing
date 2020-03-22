// pages/user/user.js
const app = getApp();
Page({
  // 显示个人详细资料
  showMine:function() {
    wx.navigateTo({
      url: 'getMyInfo/getMyInfo',
    })
  },
  getDone: function()
  {
    wx.navigateTo({
      url: 'getDone/getDone',
    })
  },

  
  /**
   * 页面的初始数据
   */
  data: {
    title: "陈俊霖",
    studentnum: 2017211752,
    done_sports: '23',
    done_study: '37',
    done_fun: '77',
    done_pals: '07',

    doing_sports: '12',
    doing_study: '17',
    doing_fun: '01',
    doing_pals: '02',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

})