// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import './styles/media.less'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
// import store from './vuex/store'
import {
  config
} from './utils'

import { ToastPlugin, AlertPlugin, LoadingPlugin, ConfirmPlugin } from 'vux'
const { bacBody } = config
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)

Vue.use(VueRouter)

// Vue.use(wx)

const router = new VueRouter({
  routes
})

router.afterEach(function (to) {
  let $body = document.getElementsByTagName('body')[0]
  let path = to.path
  if (bacBody.includes(path)) {
    $body.style.background = '#EEEEEE'
  } else {
    $body.style.background = 'white'
  }
  window.scrollTo(0, 0)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
//   store,
  render: h => h(App)
}).$mount('#app-box')

window.router = router
