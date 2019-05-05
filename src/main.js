// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/dist/css/mui.css'
import './assets/font/iconfont.css'
import './assets/style/style.css'
import 'vue-awesome-mui/mui/dist/js/mui.min.js'
import 'jquery'

Vue.config.productionTip = false;
Vue.use(Mui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
