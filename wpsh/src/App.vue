<template>
  <div class="app">
    <transition enter-active-class="fadeIn animated" mode="out-in">
      <router-view></router-view>
    </transition>
 
<van-tabbar v-model="selected" 
   :z-index="999"
   active-color="#07c160"
   inactive-color="#8d8a8a">
  <van-tabbar-item
   id="/home"
   key="Home"
   to="/home"
   name="/home">
    <span>首页</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item
   id="/category"
   key="Category"
   to="/category"
   name="/category">
    <span>分类</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon1.active : icon1.normal"
    >
  </van-tabbar-item>
    <van-tabbar-item
   id="/chifanba"
   key="Chifanba"
   to="/chifanba"
   name="/chifanba">
    <span>吃饭吧</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon2.active : icon2.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item
   id="/cart"
   key="Cart"
   to="/cart"
   name="/cart"
   :info="cartlenth">
    <span>购物车</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon3.active : icon3.normal"
    >
  </van-tabbar-item>
    <van-tabbar-item
   id="/mine"
   key="Mine"
   to="/mine"
   name="/mine">
    <span>我的</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon4.active : icon4.normal"
    >
  </van-tabbar-item>


</van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);




export default {
  name: "app",
  data() {
    return {
        icon: {
        normal: require('./assets/imgs/icon/nav_home_selected.png'),
        active: require('./assets/imgs/icon/nav_home_active.png')
      },
         icon1: {
        normal: require('./assets/imgs/icon/nav_classify_.png'),
        active: require('./assets/imgs/icon/nav_classify_active.png')
      },
         icon2: {
        normal: require('./assets/imgs/icon/chifan.png'),
        active: require('./assets/imgs/icon/chifan.png')
      },
         icon3: {
        normal: require('./assets/imgs/icon/nav_list_.png'),
        active: require('./assets/imgs/icon/nav_list_active.png')
      },
         icon4: {
        normal:require('./assets/imgs/icon/nav_user_.png'),
        active: require('./assets/imgs/icon/nav_user_active.png')
      },

      selected: "/home",
      
    };
  },
  computed: {
   cartlenth(){
        
           var num =0;
           var test = this.$store.state.cart.cartlist;
            for(var i = 0;i<test.length;i++){
                num +=test[i].qty
            }
            return num
        }
  },
  methods: {
      goto(path){
      this.$router.push({path})
    },
  },

};
</script>

<style>

.van-hairline--top-bottom{
  z-index: 999;
}
html,
body {
  height: 100%;
  background: #f8f8f8;
}
.app {
  height: 100%;
  overflow: scroll;
}
</style>

