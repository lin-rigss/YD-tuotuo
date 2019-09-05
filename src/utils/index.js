import config from './config'
import request from './request'
import validators from './validators'

var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'
function padding (s, len) {
  var len = len - (s + '').length
  for (var i = 0; i < len; i++) {
    s = '0' + s
  }
  return s
};
/**
 * 从级联选择器中获取选中项的显示文本
 * @param  {} data 级联选择器数据
 * @param  {} value 选中项
 */
const getCascaderSelectedName = (data, value, name = 'name', label = 'value') => {
  let departmentName = []

  let currentId = value[0]
  let list = data

  for (var index = 0; index < value.length; index++) {
    currentId = value[index]
    let currentItem = list.find(d => d[label] == currentId)
    departmentName.push(list.find(d => d[label] == currentId)[name])
    if (currentItem.children && currentItem.children.length && currentItem.children.length > 0) {
      list = currentItem.children
    }
  }
  return departmentName
}
const getQueryString = (name, url) => {
  let href = window.location.href
  if (url) {
    href = url
  }
  if (href.indexOf('?') === -1) return
  let arr = href.split('?')
  let result
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].indexOf(name + '=') > -1) {
      result = arr[i].split('&').find((item, index) => {
        if (item.indexOf(name) !== -1) return item
      })
    }
  }
  return result.split('=')[1]
}
const weChatLoginCode = () => {
  // return getQueryString('code')
  return '021pP4M02fsWf01ls0P02VedM02pP4MM'
}

const getRect = (el) => {
  if (el instanceof window.SVGElement) {
    let rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}
/**
 * 格式化日期
 */
const formatDate = (date, pattern) => {
  if (!date) { return '' }
  pattern = pattern || DEFAULT_PATTERN
  return pattern.replace(SIGN_REGEXP, function ($0) {
    switch ($0.charAt(0)) {
      case 'y':
        return padding(date.getFullYear(), $0.length)
      case 'M':
        return padding(date.getMonth() + 1, $0.length)
      case 'd':
        return padding(date.getDate(), $0.length)
      case 'w':
        return date.getDay() + 1
      case 'h':
        return padding(date.getHours(), $0.length)
      case 'm':
        return padding(date.getMinutes(), $0.length)
      case 's':
        return padding(date.getSeconds(), $0.length)
    }
  })
}
export {
  config,
  request,
  validators,
  getQueryString,
  weChatLoginCode,
  getRect,
  formatDate,
  getCascaderSelectedName
}
