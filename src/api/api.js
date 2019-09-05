import { request, config } from '../utils'
const { api } = config
const {
  getPrice,
  submitorder
} = api

export async function getPriceResult (params = {}) { // 获取车型
  return request({
    url: getPrice,
    method: 'post',
    data: params
  })
}

// 提交下单
export async function submitOrder (params = {}) {
  return request({
    url: submitorder,
    method: 'post',
    data: params
  })
}
// 新闻列表
export async function getNewsList (params = {}) {
  return request({
    url: api.newsList,
    method: 'post',
    data: params
  })
}

// 新闻详情
export async function getNewsDetail (params = {}) {
  return request({
    url: api.newsDetail,
    method: 'post',
    data: params
  })
}

