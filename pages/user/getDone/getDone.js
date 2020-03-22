//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    matterArray: ['', '自习', '运动', '拼车'],
    obectMatterArray: [{
      id: 0,
      name: '自习'
    },
    {
      id: 1,
      name: '运动'
    },
    {
      id: 2,
      name: '拼车'
    }
    ],
    matterIndex: 0,

    timeArray: [
      ['', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      ['', '课时选择', '具体时间选择'],
      ['']
      // ,'1-2节课', '3-4节课', '5-6节课', '7-8节课', '9-10节课', '11-12节课'
      // '7:00', '8:00', "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    obejctTimeArray: [
      [{
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: '星期一'
      },
      {
        id: 2,
        name: '星期二'
      },
      {
        id: 3,
        name: '星期三'
      },
      {
        id: 4,
        name: '星期四'
      },
      {
        id: 5,
        name: '星期五'
      },
      {
        id: 6,
        name: '星期六'
      },
      {
        id: 7,
        name: '星期日'
      },
      ],
      [{
        id: 0,
        name: ''
      }, {
        id: 1,
        name: '课时选择'
      }, {
        id: 2,
        name: '具体时间选择'
      }],
      [{
        id: 1,
        name: 'wu'
      }]
      
    ],
    timeIndex: [0, 0, 0],


    addrArray: [
      ['', '教学楼', '运动场', '校外'],
      ['']
    ],
    obectAddrArray: [{
      id: 0,
      name: '自习'
    },
    {
      id: 1,
      name: '运动'
    },
    {
      id: 2,
      name: '拼车'
    }
    ],
    addrIndex: [0, 0],

    list: [{
      listId: 0,
      listName: 'Airy491', //姓名
      listImgUrl: '/img/head.JPG', //头像
      listMajor: '计算机科学与技术', //学院
      listTime: '7:00', //时间
      listAddr: '老校门', //地点
      listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
      like: false, //是否点了   ‘喜欢’
      matter: '', //事件类型 '' '自习' '运动' '拼车'
      time: 'Mon 9:00', //时间 'Mon 9:00' 'Mon 1-2节课'
      addr: '老图书馆' //'老图书馆', '数字图书馆', '第二教学楼', '第四教学楼', '第五教学楼'
      //'风华操场', '太极操场', '风雨操场', '灯光篮球场', '桂花篮球场', '健身房'
      //'新校门', '老校门', '西校门', '北校门', '南校门'
    },
    {
      listId: 1,
      listName: 'FunORMA', //姓名
      listImgUrl: '/img/head.JPG', //头像
      listMajor: '计算机科学与技术', //学院
      listTime: '9-10节课', //时间
      listAddr: '新图书馆', //地点
      listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
      like: false,
       //select
    },
    {
      listId: 2,
      listName: 'Airy491', //姓名
      listImgUrl: '/img/head.JPG', //头像
      listMajor: '计算机科学与技术', //学院
      listTime: '7:00', //时间
      listAddr: '老校门', //地点
      listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
      like: true,

      //select
    },

    ]
  },
  //事件处理函数
  onPullDownRefresh: function () {
    console.log('下拉刷新');
  },
  
    //绑定单选改变事件
    bindPickerChange: function (e) {
      // console.log(e);
      this.setData({
        matterIndex: e.detail.value
      })
    },
    //改变多选事件
    bindMultiPickerChangeTime: function (e) {
      // console.log(e);
      this.setData({
        timeIndex: e.detail.value
      })
    },
    bindMultiPickerChangeAddr: function (e) {
      // console.log(e);
      this.setData({
        addrIndex: e.detail.value
      })
    },
    //多选联动事件
    bindMultiPickerColumnChangeAddr: function (e) {
      // console.log(e);
      var data = {
        addrArray: this.data.addrArray,
        addrIndex: this.data.addrIndex
      }
      data.addrIndex[e.detail.column] = e.detail.value;
      switch (data.addrIndex[0]) {
        case 0:
          data.addrArray[1] = [''];
          break;
        case 1:
          data.addrArray[1] = ['', '老图书馆', '数字图书馆', '第二教学楼', '第四教学楼', '第五教学楼'];
          // data.addrIndex[1] = 0;
          break;
        case 2:
          data.addrArray[1] = ['', '风华操场', '太极操场', '风雨操场', '灯光篮球场', '桂花篮球场', '健身房'];
          // data.addrIndex[1] = 0;
          break;
        case 3:
          data.addrArray[1] = ['', '新校门', '老校门', '西校门', '北校门', '南校门'];
          // data.addrIndex[1] = 0;
          break;
      }
      this.setData(data);

    },
    bindMultiPickerColumnChangeTime: function (e) {
      // console.log(e.detail.column,e.detail.value);
      var data = {
        timeArray: this.data.timeArray,
        timeIndex: this.data.timeIndex
      }

      data.timeIndex[e.detail.column] = e.detail.value;
      switch (data.timeIndex[1]) {
        case 0:
          data.timeArray[2] = [''];
          break;
        case 1:
          data.timeArray[2] = ['', '1-2节课', '3-4节课', '5-6节课', '7-8节课', '9-10节课', '11-12节课'];
          // data.timeIndex[2] = 1;
          break;
        case 2:
          data.timeArray[2] = ['', '7:00', '8:00', "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
          // data.timeIndex[2] = 1;
          break;
      }
      this.setData(data);
    },
  
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  onReady: function (e) {
    // let height;
    // let res = wx.getSystemInfoSync();
    // let winHeight = res.windowHeight;
    // let query = wx.createSelectorQuery();
    // query.select('.tabs').boundingClientRect();
    // query.exec((res) => {
    //   height = res[0].height;
    //   this.setData({
    //     sortHeight: winHeight - height,
    //     scrollFixedTop: res[0].top
    //   })
    // })
  },
  onPageScroll: function (e) {
    if (e.scrollTop >= this.data.scrollFixedTop && !this.data.showFixed) {
      this.setData({
        showFixed: true
      })
    } else if (e.scrollTop < this.data.scrollFixedTop && this.data.showFixed) {
      this.setData({
        showFixed: false
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  select(id) {
    wx.navigateTo({
      url: `../store/store?storeId=${id}`
    })
  },
  getTabsInfo(e) {
    wx.pageScrollTo({
      scrollTop: e.target.offsetTop - 1,
      duration: 300
    })
    setTimeout(() => {
      if (e.target.dataset.index == 0) {
        this.setData({
          showSort: !this.data.showSort
        })
      }
      if (e.target.dataset.index) {
        this.setData({
          showFixed: true,
          sortIndex: e.target.dataset.index
        })
      }
    }, 350)
  },
  getFixedTabsInfo(e) {
    if (e.target.dataset.index) {
      this.setData({
        sortIndex: e.target.dataset.index
      })
    }
    if (e.target.dataset.index == 0) {
      this.setData({
        showSort: !this.data.showSort
      })
    } else {
      this.setData({
        showSort: false
      })
    }
  },
  move() {},
  selectSort(e) {
    if (e.target.dataset.sortindex || e.target.dataset.sortindex == 0) {
      this.setData({
        sortListIndex: e.target.dataset.sortindex,
        showSort: false
      })
    } else {
      this.setData({
        showSort: false
      })
    }
  }
})