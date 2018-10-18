//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectedDay: [
      20181004,
      20181018,
      {
        day: 20181022,
        info:'info22'
      }
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