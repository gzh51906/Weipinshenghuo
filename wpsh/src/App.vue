<template>
  <div class="app">
    <transition enter-active-class="fadeIn animated" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 底部菜单 -->
    <!-- <mt-tabbar v-model="selected" @click.native="goto(selected)">
      <mt-tab-item
        :id="item.path"
        v-for="item in pages"
        :key="item.name"
        :class="{fontRedColor:item.path == selected}"
      >
   
        <img :src="item.img1" slot="icon" v-if="item.path == selected" />
        <img :src="item.img" slot="icon" v-else />
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar> -->

    <van-tabbar v-model="active" @click.native="goto(selected)">
  <van-tabbar-item 
        :id="item.path"
        v-for="item in pages"
        :key="item.name"
        :class="{fontRedColor:item.path == selected}"
  >
        <img :src="item.img1" slot="icon" v-if="item.path == selected" />
        <img :src="item.img" slot="icon" v-else />
    {{item.title}}
    </van-tabbar-item>

</van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import "animate.css";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

// import { mapState, mapMutations } from "vuex";


export default {
  name: "app",
  data() {
    return {
      pages: [
        {
          title: "首页",
          path: "/home",
          name: "Home",
          img: require("./assets/imgs/icon/blackhome.png"),
          img1: require("./assets/imgs/icon/home.png")
        },
        {
          title: "分类",
          path: "/category",
          name: "Category",
          img: require("./assets/imgs/icon/kind.png"),
          img1: require("./assets/imgs/icon/kind1.png")
        },
        {
          title: "购物车",
          path: "/cart",
          name: "Cart",
          img: require("./assets/imgs/icon/cart.png"),
          img1: require("./assets/imgs/icon/footer_icon_5.png")
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine",
          img: require("./assets/imgs/icon/redcapationl1.png"),
          img1: require("./assets/imgs/icon/footer_icon_7.png")
        }
      ],
      selected: "/home"
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


* {
  margin: 0px;
  padding: 0px;
}
body {
  max-width: 640px;
  margin: 0 auto;
  background: #f3f3f3;
  font-size: 16px;
}
ul,
li {
  list-style: none;
}

.mint-tabbar {
  height: 0.88rem;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
.mint-tabbar a {
  position: relative;
  color: #333333;
  font-size: 0.22rem;
  display: block;
  height: 0.88rem;
}
.mint-tab-item-icon {
  width: 0.36rem;
  margin: auto;
  margin-top: 0.03rem;
  height: 0.36rem;
}
.mint-tab-item-label {
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.22rem;
}

.fontRedColor {
  color: red !important;
}
</style>

