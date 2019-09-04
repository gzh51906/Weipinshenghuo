import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex'

//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// Vue.use(router);
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:1906"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
