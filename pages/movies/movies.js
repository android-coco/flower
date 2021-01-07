// pages/movies/movies.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    searchResult:false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //const _this = this
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      method:"GET",
      data:{
        start:5,
        count:3
      },
      // success(res) {
      //   _this.setData({
      //     inTheaters: res.data.subjects
      //   })
      // }
      success:(res) => {
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    }),
    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      method:"GET",
      data:{
        start:10,
        count:3
      },
      // success(res) {
      //   _this.setData({
      //     comingSoon: res.data.subjects
      //   })
      // }
      success:(res) => {
        this.setData({
          comingSoon:res.data.subjects
        })
      }
    }),
    wx.request({
      url:  app.gBaseUrl +  'top250',
      method:"GET",
      data:{
        start:6,
        count:3
      },
      // success(res) {
      //   _this.setData({
      //     top250: res.data.subjects
      //   })
      // }
      success:(res) => {
        this.setData({
          top250:res.data.subjects
        })
      }
    })
  },

  onGotoMore(event){
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },

  onConfirm(event){
    this.setData({
      searchResult:true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        this.setData({
          searchData:res.data.subjects
        })
      },
    })
   
  },

  onSearchCancel(event){
    this.setData({
      searchResult:false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})