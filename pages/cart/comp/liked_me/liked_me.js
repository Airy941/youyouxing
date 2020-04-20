// components/liked_me/liked_me.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo: {
      'type': Object,
      'value': null        //接受父组件的信息
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pointed:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem:function (e) {
      this.setData({
      pointed : true,
      });
      wx.navigateTo(
        {
          url:'/pages/cart/check/check?item='+this.properties.itemInfo.listId,   //把子组件收到的 id传给 check的界面
        }
        )
    }
  }
})
