import Vue from 'vue'
import Vuex from 'vuex'

// import reg from './reg'
Vue.use(Vuex)

import cart from './cart';
import common from './common';
const store = new Vuex.Store({
    modules:{
        cart,
        common
        // reg
    }
})

export default store;