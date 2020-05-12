
const app = getApp();
Page({
  data: {
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    custom: app.globalData.custom
  },
  goBack(){
    wx.navigateBack({
      delta: 1
    });
  }
 
})
 