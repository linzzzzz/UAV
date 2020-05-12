//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
		success:e => {
			 this.globalData.statusBar = e.statusBarHeight; //状态栏高度
			 let custom = wx.getMenuButtonBoundingClientRect();//菜单按钮
			 this.globalData.custom = custom;
			 this.globalData.customBar = custom.bottom + custom.top - e.statusBarHeight;
			        //计算得到定义的状态栏高度
			
		}
	})
    
    wx.navigateTo({
      url:"/package-admin/pages/admin-about"
    })
  },
  globalData: {
    userInfo: null
  }
})