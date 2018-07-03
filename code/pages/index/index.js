//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies: [
      { url: 'http://sudajiaxiao.tech/uploads/allimg/171019/1-1G01Z942250-L.jpg' },
      { url: 'http://sudajiaxiao.tech/uploads/allimg/171019/1-1G01Z942570-L.jpg' },
      { url: 'http://sudajiaxiao.tech/uploads/allimg/171019/1-1G01Z942430-L.jpg' },
    ]
  },
  intobrief:function(event){
    wx.navigateTo({
      url:"/pages/brief/brief",
    })
  },
  intonavigation: function (event) {
    wx.navigateTo({
      url: "/pages/navigation/navigation",
    })
  },
  intoenvironmental: function (event) {
    wx.navigateTo({
      url: "/pages/environmental/environmental",
    })
  },
  intocharacteristics: function (event) {
    wx.navigateTo({
      url: "/pages/characteristics/characteristics",
    })
  },
  intogrow: function (event) {
    wx.navigateTo({
      url: "/pages/grow/grow",
    })
  },
  intointogoutong:function(){
    wx.navigateTo({
      url: "/pages/shopping/shopping",
    })


  },
  onPullDownRefresh:function(){
      wx.vibrateShort({
        
      })

  },

  


})
