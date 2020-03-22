const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ids: -1,
    name: '',
    sid: '',
    gender: [{
        name: '保密',
        id: -1
      },
      {
        name: '男',
        id: 1
      },
      {
        name: '女',
        id: 2
      }
    ],
    class: '',
    college: [{
        name: '',
        id: -1
      },
      {
        name: '通信',
        id: 0
      },
      {
        name: '计算机',
        id: 1
      },
      {
        name: '土木',
        id: 2
      },
      {
        name: '新闻',
        id: 3
      },
      {
        name: '数统',
        id: 4
      },
      {
        name: '物理',
        id: 5
      },
      {
        name: '化工',
        id: 6
      },
      {
        name: '生物',
        id: 7
      },
      {
        name: '其它',
        id: 8
      }
    ]
  },
  choose(e) {
    let that = this;
    that.setData({
      ids: e.detail.value
    })
    //下面这种办法无法修改页面数据
    /* this.data.ids = e.detail.value;*/
  },
  nameInput(e) {
    this.data.name = e.detail.value;
  },
  sidInput(e) {
    this.data.sid = e.detail.value;
  },
  genderInput(e) {
    this.data.gender = e.detail.value;
  },
  classInput(e) {
    this.data.class = e.detail.value;
  },
  getUserInfo(e) {
    let that = this;
    console.log(e);
    let test = e.detail.errMsg.indexOf("ok");
    if (test == '-1') {
      wx.showToast({
        title: '请授权后方可使用',
        icon: 'none',
        duration: 2000
      });
    } else {
      that.setData({
        userInfo: e.detail.userInfo
      })
    }
  },
  formSubmit: function(e) {
    var that = this;

    //校检
    let name = that.data.name;
    if (name == '') {
      wx.showToast({
        title: '请先获取您的姓名',
        icon: 'none',
        duration: 2000
      });
      return false
    }

    //校检学院
    let ids = that.data.ids;
    let college = that.data.college;
    if (ids == -1) {
      wx.showToast({
        title: '请先获取您的学院',
        icon: 'none',
        duration: 2000
      });
    }
    wx.showLoading({
      title: '正在提交',
    })
    this.setData({
      'userInfo.province': this.data.province,
      'userInfo.city': this.data.city,
      'userInfo.county': this.data.county,
      'userInfo.nickName': e.detail.value.nickName,
      'userInfo.phone': e.detail.value.phone
    })
    wx.request({
      url: '',
      data: {
        'userInfo': that.data.userInfo,
      },
      method: 'POST',
      header: {
        'Content-type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        if (res.data.status == '1') {
          app.setUserInfo(res.data.user);
          wx.navigateBack({
            delta: 1
          })
        } else {;
        }
      },
      fail: function(res) {
        console.log(res);
      }
    })

  },
  onLoad: function() {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userInfo: res.data,
          gender: res.data.gender,
          'province': res.data.province,
          'city': res.data.city,
          'county': res.data.county
        })
      },
      fail: function(res) {
        app.login();
      }
    })
    console.log(that.userInfo);

    console.log('初始化完成');
  }
})