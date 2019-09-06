import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex'

import './assets/rem'
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

const chifanba = axios.create({
  // 默认配置
  baseURL: 'https://www.easy-mock.com/mock/5d6f9c27a3c6ae79653734e5/'
});
Vue.prototype.$chifanba = chifanba;
// Vue.use(router);
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "http://localhost:1906"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')









