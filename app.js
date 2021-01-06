App({
  onLaunch() {
    console.log("小程序启动")
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  gIsPlayingMusic: false,
  gIsPlayingPostId: -1,
  gBaseUrl:"http://t.talelin.com/v2/movie/"
})