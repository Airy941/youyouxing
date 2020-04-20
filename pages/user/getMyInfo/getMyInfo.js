const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ids: 0,
    idm:0,
    name: null,
    sid: null,
    sex: null,
    major: null,
    classid:null,
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
  chooseSex(e) {
    this.setData({
      sex: this.data.gender[e.detail.value],
      ids: e.detail.value
    })
    this.data.userInfo.sex = this.data.gender[e.detail.value];
    //下面这种办法无法修改页面数据
    /* this.data.ids = e.detail.value;*/
  },
  chooseMajor(e) {
    this.setData({
      major: this.data.college[e.detail.value],
      idm: e.detail.value
    })
    this.data.userInfo.major = this.data.college[e.detail.value];
    //下面这种办法无法修改页面数据
    /* this.data.ids = e.detail.value;*/
  },
  nameInput(e) {
    this.data.userInfo.name = e.detail.value;
  },
  sidInput(e) {
    this.data.userInfo.sid = e.detail.value;
  },
  classInput(e) {
    this.data.userInfo.classid = e.detail.value;
  },
  formSubmit: function(e) {
    //校检
    let name = this.data.userInfo.name;
    let num = this.data.userInfo.sid;
    let sex = this.data.userInfo.sex;
    let major = this.data.userInfo.major;
    let classid = this.data.userInfo.classid;
    if(name == null || num==null||sex==null||major==null||classid==null){
      wx.showModal({
        title: '对叭起',
        content: '请完成所有填空题哦！',
      })
    }else{
      // 表单请求
      var that = this;
      wx.request({
        url: '',
        seccess(){
          //设置到本地setStorage
          wx.setStorage({
            key: 'userInfo',
            data: that.userInfo
          })
        }
      })
    }
  },
  onLoad: function() {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        console.log(res);
        that.setData({
          userInfo: res.data
        })
      },
      fail: function(res) {
        app.login();
      }
    })
  }
})