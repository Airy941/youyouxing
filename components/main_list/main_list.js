// components/main_list/main_list.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        listInfo: {
            'type': Object,
            'value': null
        }
    },
    attached() {
        var animationlist = wx.createAnimation({
            duration: 400,
            timingFunction: 'ease'
        })

        animationlist.opacity(0).step();
        this.data.animationlist = animationlist.export();
    },

    /**
     * 组件的初始数据
     */
    data: {
      
    },

    /**
     * 组件的方法列表
     */
    methods: {
        starChange: function(e) {
            // console.log(e);
            wx.checkSession({
                fail() {
                    wx.showToast({
                        icon: fail,
                        title: '请登录'
                    })
                }
            })
            this.triggerEvent('select', this.data.listInfo.listId);
        }
    }
})