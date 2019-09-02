import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex'

//引入mint-ui和mui-ui ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MintUI from 'mint-ui'

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(MintUI)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:1906"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
