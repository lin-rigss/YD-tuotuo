
// const xinyu = 'http://192.168.2.181:10002'  // 微信测试环境
// const API = 'http://47.95.11.24:8101'  // 正式环境
// const API_MOCK = 'API_MOCK'

const HOST = 'tuotuoyunche.com/tuoche'// 妥妥
const API = 'https://' + HOST + '/order'
const API1 = 'https://' + HOST + '/dispatch'
const API2 = 'https://' + HOST + '/dictionary'
const API3 = 'https://' + HOST + '/authority'

let config = {
  name: '妥妥运车',
  hotline: '400-877-1107',
  appid: 'wx04eedf6d6a91e04f',  // 正式的 wx04eedf6d6a91e04f  测试的  wx7021ae83c524a7f9
  prefix: 'findBaby',
  bacBody: ['/tuonews', '/ordersuccess'], // 需要背景是灰色的
  activeId: 1,
  api: {
    carStyle: `${API2}/dict/car/model?type=3`,
    getPrice: `${API}/web_rescue_order/direction`, // 获取报价结果
    submitorder: `${API}/web_rescue_order/webSave`, // 提交订单
    newsList: `${API}/web_rescue_order/newsList`, // 新闻列表
    newsDetail: `${API}/web_rescue_order/newsContent`, // 新闻详情
  }
}

export default config
