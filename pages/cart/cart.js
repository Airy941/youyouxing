// pages/cart/cart.js
import {
  getLikeMe
} from "../../service/cart";

Page({
  creat:function(){
    //请求响应的数据
    this.setData({})
  },
  /**
   * 页面的初始数据
   */
  onLoad:function(option){
    getLikeMe().then(
      res =>{
        console.log(res);
      }
    )
  },
  LikedMe: function (e) {
    this.setData({
      liked: true,
    });
  },
  MyPick: function (e) {
    this.setData({
      liked: false,
    })

  },
  data: {
    liked: true,
    list: [
      {
      matter: '约自习',
      listType: '物理',
      listId: 0,
      listAddr: '老校门', //地点
      listName: 'Airy491', //姓名
      listMajor: '计算机科学与技术', //学院
      listClass: '',
      listTime: '9-10节课',
      listImgUrl: '/img/head.JPG', //头像
      listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
      like: false, //是否点了   ‘喜欢’
      //事件类型 '' '自习' '运动' '拼车'
      //'老图书馆', '数字图书馆', '第二教学楼', '第四教学楼', '第五教学楼'
      //'风华操场', '太极操场', '风雨操场', '灯光篮球场', '桂花篮球场', '健身房'
      //'新校门', '老校门', '西校门', '北校门', '南校门'
    },
      {
        matter: '约自习',
        listType: '高数',
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
        matter: '约运动',
        listType: '篮球',
        listId: 2,
        listName: 'Naruto', //姓名
        listImgUrl: '/img/head.JPG', //头像
        listMajor: '计算机科学与技术', //学院
        listTime: '15:00', //时间
        listAddr: '老校门', //地点
        listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
        like: true,
        //select
      },
      {
        matter: '约拼车',
        listType: '',
        listId: 3,
        listName: 'Airy491', //姓名
        listImgUrl: '/img/head.JPG', //头像
        listMajor: '计算机科学与技术', //学院
        listTime: '7:00', //时间
        listAddr: '老校门', //地点
        listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
        like: true,
        //select
      },
      {
        matter: '约运动',
        listType: '排球',
        listId: 4,
        listName: 'Airy491', //姓名
        listImgUrl: '/img/head.JPG', //头像
        listMajor: '计算机科学与技术', //学院
        listTime: '7:00', //时间
        listAddr: '老校门', //地点
        listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
        like: true,

        //select
      },
    ],
}

});