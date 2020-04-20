// components/request_add/request_add.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        myProperty: { // 属性名
            type: String,
            value: ''
        },
    },

    /**
     * 组件的初始数据
     */
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

        dateArray: [
            ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
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
        dateIndex: [0, 0],

        startTimeArray: ['', '6:00', '7:00', '8:00', "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        startTimeIndex: 0,
        endTimeArray: ['', '6:00', '7:00', '8:00', "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        endTimeIndex: 0,

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

        openid:null,
        id:null
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //绑定单选改变事件
        bindPickerChange: function(e) {
            // console.log(e);
            this.setData({
                matterIndex: e.detail.value
            })
        },
        bindPickerChangeStartTime: function(e) {
            // console.log(e);
            this.setData({
                startTimeIndex: e.detail.value
            })
        },
        bindPickerChangeEndTime: function(e) {
            // console.log(e);
            this.setData({
                endTimeIndex: e.detail.value
            })
        },
        //改变多选事件
        bindMultiPickerChangeDate: function(e) {
            // console.log(e);
            this.setData({
                dateIndex: e.detail.value
            })
        },

        bindMultiPickerChangeAddr: function(e) {
            // console.log(e);
            this.setData({
                addrIndex: e.detail.value
            })
        },
        //多选联动事件
        bindMultiPickerColumnChangeAddr: function(e) {
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
        bindMultiPickerColumnChangeDate: function(e) {
            // console.log(e.detail.column,e.detail.value);
            var m29 = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'];
            var m30 = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
            var m31 = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

            var data = {
                dateArray: this.data.dateArray,
                dateIndex: this.data.dateIndex
            }

            data.dateIndex[e.detail.column] = e.detail.value;

            if (data.dateIndex[0] == 0) {
                data.dateArray[1] = [''];
            } else if (data.dateIndex[0] == 1 || data.dateIndex[0] == 3 || data.dateIndex[0] == 5 || data.dateIndex[0] == 7 || data.dateIndex[0] == 8 || data.dateIndex[0] == 10 || data.dateIndex[0] == 12) {
                data.dateArray[1] = m31;
            } else if (data.dateIndex[0] == 2) {
                data.dateArray[1] = m29;
            } else {
                data.dateArray[1] = m30;
            }

            this.setData(data);
        },
        formSub: function(e) {

            if (e.detail.value.matter == "0") {
                return this.alertPlain();
            }
            if (e.detail.value.date == [0, 0]) {
                return this.alertPlain();
            }
            if (e.detail.value.start_time == 0) {
                return this.alertPlain();
            }
            if (e.detail.value.end_time == 0) {
                return this.alertPlain();
            }
            if (e.detail.value.place[1] == 0) {
                return this.alertPlain();
            }
            console.log(e);
            var type = e.detail.value.type;
            var matter = this.data.matterArray[e.detail.value.matter];
            var date = this.data.dateArray[0][e.detail.value.date[0]] + '-' + this.data.dateArray[1][e.detail.value.date[1]];
            var start_time = this.data.startTimeArray[e.detail.value.start_time];
            var end_time = this.data.endTimeArray[e.detail.value.end_time];
            var place = this.data.addrArray[1][e.detail.value.place[1]];
            var description= e.detail.value.description || ' ';
            var that = this;
            wx.getStorage({
              key: 'userInfo',
              success: function(res) {
                console.log(res)
                that.setData({
                  id : res.data.sid
                })
              },
            })

          this.setData({
            openid: wx.getStorageSync('openid')
          })
          var openid = this.data.openid;
          console.log(openid)
            //请求
            wx.request({
              url: `https://www.youyougongqianxing.xyz:4430/test/add/${openid}/${matter}/${type}/${start_time}/${end_time}/${place}/${description}`,
              method:'GET',
              success(res){
                console.log(1);
              }
            })

            this.triggerEvent('changeTab2');

        },
        alertPlain: function() {
            wx.showModal({
                title: '对叭起',
                content: '请完成所有填空题哦！',
            })
        }
    }
})