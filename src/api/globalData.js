import { request, config } from '../utils'
const { api } = config
const {
    carStyle
  } = api
let carList = null

export async function getCarStyle (params) {  //  获取图片
  if (!carList) {
    return request({
      url: carStyle,
      method: 'get',
      data: params
    }).then(val => {
      if (val.success) {
        let carStyleList = val.list.reduce((accumulator, currentValue) => {
          let first = {
            name: currentValue.name,
            value: currentValue.id.toString(),
            parent: 0
          }
          let second = []
          if (currentValue.blist.length > 0) {
            second = currentValue.blist.map((item) => {
              return {
                name: item.bname,
                value: currentValue.id.toString() + '-' + item.bid.toString(),
                parent: currentValue.id.toString()
              }
            })
          } else {
            second = [
              {
                name: '',
                value: currentValue.id.toString() + '-kong',
                parent: currentValue.id.toString()
              }
            ]
          }
          return accumulator.concat([first, ...second])
        }, [])
        carList = carStyleList
        val.list = carStyleList
      }
      return val
    })
  }
  return Promise.resolve({
    success: true,
    list: carList
  })
}
