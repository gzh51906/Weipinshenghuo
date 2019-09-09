<template>
  <div class="cart">
    <div  class="cart-login line-bottom">登录可同步购物车内商品<a href="javascript:;" class="line-all" @click="gotologin()">登录</a></div>
    <div class="toppad pd padTop3" style=""><!----><!----></div>
    <div v-if="cartlist && cartlist.length>0">
    <van-row  gutter="0" v-for="(item,idx) in cartlist" :key="item.CommodityCode">
      <van-col span="2" class="check">
        <van-checkbox v-model="checked" checked-color="#07c160" @click="checkone(idx)"></van-checkbox>
      </van-col>
  <van-col span="15" class="leftvant">
            <van-col :span="6">
          <img :src="item.SmallPic" class="SmallPic" @click="goto(item.CommodityCode)"/>
        </van-col>
        <van-col :span="18" :offset="1" class="vantzhong">
          <h4>{{item.CommodityName}}</h4>
          <strong class="red">￥<b>{{item.SellPrice}}</b></strong>
           <span class="bl">￥{{item.OriginalPrice}}</span>
        </van-col>
  </van-col>
  <van-col span="7" type="flex" justify="center">
      <p class="removep"> 
      <i class="removesub" @click="remove(item.CommodityCode)"></i>
      </p>
        <p>
        <van-stepper  v-model="item.qty" async-change integer :max="item.MaxLimitCount" @change="changeQty($event,item.CommodityCode)"/>
        </p>
  </van-col>
   
   </van-row>
   <div class="bottom3"></div>
</div>
<div v-else class="nogoods line-top" style=""><div class="icon"></div> <p>购物车空空的，快去逛逛吧！</p> 
<div class="btn" @click="gotohome()"><a>去逛逛</a></div></div>
    <!-- 结算栏 -->
   
    <van-submit-bar id="submitBar" :price="totalPrice*100" button-text="去结算">
      <van-checkbox v-model="checkedall" checked-color="#07c160" @click="checkall">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';
import { Stepper } from 'vant';
import { Icon } from 'vant';
import { Toast } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(SubmitBar);
Vue.use(Stepper);
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default {
  data(){
    return {
      checked: true,
      checkedall:false
    };
  },
    computed:{
   
        ...mapState({
            cartlist(state){
                return state.cart.cartlist
            }
        }),

        ...mapGetters(['totalPrice'])
      
    },
    methods:{
        // 单选框
        checkone(idx){
          
        },  
        // 全选
        checkall(){
          this.checkedall = !this.checkedall;

        },
       remove(goods_id) {
          this.$store.commit("removeItem", goods_id);
        },
        changeQty(qty, id) {
          this.$store.commit("changeQty", { qty, id });
        },
      gotohome(){
        this.$router.push({name:'Home'})
      },
      gotologin(){
        this.$router.push({name:"Login"})
      },
        goto(id){
            
            this.$router.push({name:'Details',params:{id}})
        }
    },
  created() {

  }
};
</script>

<style scoped>
/* .cart{
  font-size: 12px;
} */
.SmallPic{
  display: block;
  width: 2.7rem;
  height: 2.7rem;
}
h4{
  margin-bottom: 1rem;
  line-height: .56rem;
  font-size: .32rem;
}
.bl {
    margin: 0 0 0 .3rem;
    text-decoration: line-through;
    line-height: .2rem;
    font-size: .34rem;
    color: #ccc;
}
.removesub{
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin-top: .3rem;
    margin-left: 1.2rem;
    margin-bottom: 1rem;
    background: url(//img07.yiguoimg.com/d/web/180119/01642/141511/del.png) center right no-repeat;
    background-size: 0.48rem 0.5rem;
 
}
.leftvant{
  position: relative;
}
.vantzhong{
    position: absolute;
    width: 5.2rem;
    left: 2.3rem;
    top: .3rem;
}
#submitBar {
  bottom: 51px;
};
.removep{
  text-align: right
}

.van-row{
    background: #fff;
    margin-top:.1rem;
    padding: 5px;
}
.red{
color: #fb3d3d;
font-weight: 500;
font-size: .32rem
}
.van-stepper{
  text-align: right;
}
.check{
  margin: 60px 0
}
.nogoods {
    position: relative;
    padding: 1.8rem 0 1.75rem;
    background: #fff;
    text-align: center;
}
.nogoods .icon {
    width: 100%;
    height: 3.6rem;
    background: url(//img07.yiguoimg.com/d/web/180313/013112/195558/img_nogoods@3x.png) no-repeat center;
    background-size: auto 100%;
}
.nogoods p {
    padding: 1rem 0 .5rem;
    font-size: .42rem;
    color: #808080;
}
.nogoods .btn {
    height: 1.2rem;
}
.nogoods .btn a {
    position: relative;
    display: inline-block;
    width: 4.5rem;
    height: 1.2rem;
    border: 1px solid #11b57c;
    border-radius: 6px;
    line-height: 1.2rem;
    font-size: .5rem;
    color: #11b57c;
    text-decoration: none;
    outline: 0;
}
.cart-login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.32rem;
    background: #fff;
    line-height: 1.32rem;
    font-size: .42rem;
    color: #808080;
    text-align: center;
    z-index: 100;
}
.cart-login a {
    position: relative;
    display: inline-block;
    width: 1.8rem;
    height: .72rem;
    margin: 0 0 0 .42rem;
    line-height: .72rem;
    color: #808080;
}
.cart-login a:after {
    border-radius: 6px;
    border-color: #808080;
}

.line-all:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 1px solid #ddd;
    box-sizing: border-box;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.line-bottom:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.padTop3 {
    padding-top: 1.52rem;
}
.bottom3{
     padding-bottom:2rem
}
</style>