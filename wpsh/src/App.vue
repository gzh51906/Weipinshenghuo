<template>
  <div class="app">
    <transition enter-active-class="fadeIn animated" mode="out-in">
      <router-view></router-view>
    </transition>
  <van-tabbar v-model="selected"
   z-index=999  
   active-color="#07c160"
   inactive-color="#8d8a8a">
  <van-tabbar-item
   v-for="item in pages" 
   :id="item.path" 
   :key="item.name"
   :to="item.path" 
   :name="item.home" 
   :icon="item.img"
   >
    {{item.title}}
  </van-tabbar-item>
</van-tabbar>
<!-- <van-tabbar
  v-model="selected"
  z-index=999  
  active-color="#07c160"
  inactive-color="#8d8a8a">
  <van-tabbar-item 
    v-for="item in pages" 
   :id="item.path" 
   :key="item.name"
   :to="item.path" 
   :name="item.home" >
    <span>{{item.title}}</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>
</van-tabbar> -->
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
      pages: [
        {
          title: "首页",
          path: "/home",
          name: "Home",
          img: require("./assets/imgs/icon/nav_home_selected.png"),
          img1: require("./assets/imgs/icon/nav_home_active.png")
        },
        {
          title: "分类",
          path: "/category",
          name: "Category",
          img: require("./assets/imgs/icon/nav_classify_.png"),
          img1: require("./assets/imgs/icon/nav_classify_active.png")
        },
         {
          title: "吃饭吧",
          path: "/chifanba",
          name: "Chifanba",
          img: require("./assets/imgs/icon/chifan.png"),
          img1: require("./assets/imgs/icon/chifan.png")
        },
        {
          title: "购物车",
          path: "/cart",
          name: "Cart",
          img: require("./assets/imgs/icon/nav_list_.png"),
          img1: require("./assets/imgs/icon/nav_list_active.png")
        },
        {
          title: "我的易果",
          path: "/mine",
          name: "Mine",
          img: require("./assets/imgs/icon/nav_user_.png"),
          img1: require("./assets/imgs/icon/nav_user_active.png")
        }
      ],
      selected: "/home",
      
    };
  },
  computed: {
   cartlenth(){
      // 模块化后：
      return this.$store.state.cart.cartlist.length;
    },
  },
  methods: {
      goto(path){
      this.$router.push({path})
    },
  },

};
</script>

<style>

/* .fontRedColor {
  color: red !important;
} */
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

