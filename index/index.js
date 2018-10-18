//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectedDay: [{
        day: 2018911,
        info: '2018911'
      },
      {
        day: 20180930,
        info: '20180930'
      },
      {
        day: 20181020,
        info: '20181020'
      },
      {
        day: 20181101,
        info: '20181101'
      },
      20181102,
      20181102,
    ]
  },
  onLoad: function () {

  },
  changeMonth: function (e) {
    console.log('changeMonth:', e);

  },
  tapday: function (e) {
    let selectedDay = this.data.selectedDay;
    let tapdata = e.detail;
    let delindex = []
    let hasin = selectedDay.filter((e, i) => {
      if (tapdata.date == e) {
        delindex.push(i);
        return true;
      } else if (tapdata.date == e.day) {
        delindex.push(i);
        return true;
      }
    })

    if (delindex.length > 0) {
      delindex.forEach(e => {
        selectedDay[e] = "";
      })
      selectedDay.forEach((e, i) => {
        if (!e) {
          selectedDay.splice(i, 1)
        }
      })
    } else {
      selectedDay.push(tapdata.date)
    }
    
    this.setData({
      selectedDay: selectedDay
    })

  }
})