// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import moment from 'moment'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(Mint)
Vue.use(router)
/* eslint-disable no-new */

import 'mint-ui/lib/style.min.css'
import './assets/css/site.scss'
import './assets/mui/css/mui.css'
import './assets/css/common.scss'

//过滤器
Vue.filter('fmtDate',(input,formatString)=>{
  const lastFormatString = formatString || 'MM月DD日 HH:mm'
  /**
   * moment 接的参数就是服务器返回的时间
   * format 接的参数是你要格式化成什么样子
   */
  return moment(input).format(lastFormatString)
})




new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    eventBus:new Vue()
  }
})
