import axios from 'axios'
import qs from 'qs'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'

let token = ''
const fetch = (options) => {
  let {
    method = 'get',
    data,
    fetchType,
    url
  } = options
  const cloneData = lodash.cloneDeep(data)

//   if (!token) {
//     let XinToken= sessionStorage.getItem('XinToken')
//     if (XinToken&&XinToken!='null') {
//       token = XinToken
//     }
//   }
  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    return {
      success: false, statusCode: 500, message: e.message
    }
  }
//   if (fetchType === 'JSONP') {
//     return new Promise((resolve, reject) => {
//       jsonp(url, {
//         param: `${qs.stringify(data)}&callback`,
//         name: `jsonp_${new Date().getTime()}`,
//         timeout: 4000
//       }, (error, result) => {
//         if (error) {
//           reject(error)
//         }
//         resolve({ statusText: 'OK', status: 200, data: result })
//       })
//     })
//   }
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData
        // headers: {'token': token}
      })
    case 'post':
      return axios({
        method: 'post',
        url: url,
        data: cloneData
        // headers: { token: token }
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData
      })
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request (options) {
//   if (options.url && options.url.indexOf('//') > -1) {
//     const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
//     if (window.location.origin !== origin) {
//       if (CORS && CORS.indexOf(origin) > -1) {
//         options.fetchType = 'CORS'
//       } else {
//         options.fetchType = 'JSONP'
//       }
//     }
//   }

  return fetch(options).then((response) => {
    const { statusText, status } = response
    let data = response.data
    // console.log(data)
    if (data.hasOwnProperty('code')) {
      if (data.code.toString() === '0') {
        // 成功
      } else if (data.code.toString() === '999') {
        // 认证失效，跳回登录页c
        localStorage.removeItem('user')
        window.router.replace('/login')
      } else {
        // 服务端错误
        // Message.error({
        //   showClose: true,
        //   message: data.message
        // })
        return { success: false, statusCode: 500, message: data.msg }
      }
    }
    if (data instanceof Array) {
      data = {
        list: data
      }
    }

    return {
      success: true,
      message: data.msg,
      statusCode: status,
      ...data
    }
  }).catch((error) => {
    const { response } = error
    let message
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      message = data.message || statusText
    } else {
      statusCode = 600
      message = error.message || 'Network Error'
    }
    return { success: false, statusCode, message: message }
  })
}
