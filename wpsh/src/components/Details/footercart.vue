<template>
  <div class="footcart">
  <van-goods-action>
  <van-goods-action-icon icon="home-o" text="首页" @click="gotohome"/>
  <van-goods-action-icon icon="cart-o" text="购物车" info="5"  />
  <van-goods-action-button type="danger" text="加入购物车" @click="onClickIcon" />
</van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
//   引入和使用Toast
import { Toast } from 'vant';
Vue.use(Toast);
export default {
    methods: {
    onClickIcon() {
      Toast('加入购物车成功');
    },
    gotohome() {
      this.$router.push({name:'Home'})
    }
  }
}
</script>

<style scoped>
    .footcart{
    height: 1.6rem;
    padding-left: .32rem;
    padding-right: 0;
    position: fixed;
    z-index: 1111;
    bottom: 0;
    left: 0;
    width: 100%;
    /* height: 50px; */
    background: #fff;
    }
.footcart::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #888;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.footcart .van-goods-action-button{
    height:1.6rem ;
    border-radius: 0px;
    margin-right:0px; 
}
</style>