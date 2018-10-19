# wechatapp-canlendar
一个微信小程序的日期组件 -😊
## 接受的参数
```
   properties: {
    // 默认显示的年份
    year: {
      type: Number,
      value: defaultYear
    },
    // 默认显示的月份
    month: {
      type: Number,
      value: defaultMonth+1
    },
    // 标记选中的时间 可以在info 中标记内容
    // {day:Number 日期 ,info:String 消息内容}
    markDay: {
      type: Array,
      value: []
    },
    isShowDayInfo: {
      type: Boolean,
      value: false
    }
  }
 ```
 ## 事件
 ```
 lastMonth/nextMonth 返回:e.deatil 包含 
  {
    type:事件tpye 'lastMonth'/'nextMonth', 
    year: 当前年份,         
    month: 当前显示的月份
  }
  
 tapdata:  返回:e.deatil 包含 
  {
    type: 'tapDay', //事件tpye
    tapid: 点击的domid,         
    date: 点击的日期
  }
  }
 ```
