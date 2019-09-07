<template>
  <div class="details">
   <div class="banner">
<van-swipe :autoplay="30000000">
  <van-swipe-item v-for="(image, index) in data.Pictures" :key="index">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>
  </div>
    <div class="productInfor">
    <p class="title">{{data.CommodityName}}</p>
    <p class="subhead">
      <i class="label" v-if="data.PromotionTag">{{data.PromotionTag}}</i>
      <span>{{data.SubTitle}}</span>
    </p>
    <div class="price">
      <p class="priceIn">
        <span class="priceRed">
          <i>¥</i>{{data.SellPrice}}
        </span>
       <span class="priceOriginal">{{data.OriginalPrice}}</span>
      </p>
      <p class="area">
        产地：
        <span class="name">{{data.PlaceOfOrigin}}</span>
      </p>
    </div>
    <!-- 检查是否存在CommodityPromotions并且数组里面有长度，根据条件进行渲染 -->
    <div class="sale lineTop" v-if="data.CommodityPromotions&&data.CommodityPromotions.length">
      <div class="saleIn">
        <i class="couponRedemption">促销</i>
        <div class="saleList saleListTwo">
          <i class="label">{{data.CommodityPromotions[0].PromotionTypeText}}</i>
          <p class="title">
            {{data.CommodityPromotions[0].PromotionLevels[0].LevelTitle}}
            <span class="list">
              <span class="txt">{{data.CommodityPromotions[0].PromotionTitle}}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="sevenDay line-top backGauge"><span class="dian"></span>{{data.CanNoReasonToReturnText}}
        </div>
  </div>
   <div class="norms">
    <div class="title line-bottom">
      规格
      <span class="choose active">{{data.Spec}}</span>
    </div>
    <div class="title line-bottom">
      数量
      <van-stepper v-model="value"  :max="data.MaxLimitCount" />
    </div>
  </div>
    <div class="address clear">
    <p class="title">送至</p>
    <div class="addressDetail">
      <p class="add">
        <span></span>{{data.ShippingAddress}}
      </p>
      <p class="infor">
        <span>有货</span>
{{data.DeliveryTips}}
      </p>
    </div>
  </div>
    <div class="footcart">
  <van-goods-action>
  <van-goods-action-icon icon="home-o" text="首页" @click="gotohome"/>
  <van-goods-action-icon icon="cart-o" text="购物车" :info="cartlength" @click="gotocart" />
  <van-goods-action-button type="danger" text="加入购物车" @click="onClickIcon" />
</van-goods-action>
  </div>
      <div class="bot123">
      </div>
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
    data(){
        return {
            data:{},
            value:1
        }
    },
    computed:{
        cartlength(){
           var num =0;
           var test = this.$store.state.cart.cartlist;
            for(var i = 0;i<test.length;i++){
                num +=test[i].qty
            }
            return num
        }
    },
    watch:{
        // 监听实例上的属性
        // 监听实例上的$route属性，只要$route属性有更新，则执行回调函数
        // $route:function(val, oldVal){
        //     console.log('watch:',val, oldVal)
        // },
        data(){
            
        }
    },
    methods: {
    async getData(id){
        // 设置请求头
         this.$axios.interceptors.request.use(
          config => {
              config.headers.appName = '3000025';
              return config;
          },
          error => {
              return Promise.reject(error);
          })


         
         let {data} = await this.$axios.post("https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetCommodityInfo",{
     
         body:{
            CommodityCode:id,
            CommodityId: "",
           
          },
          head:{
            CityCode: "512",
            CityId: "c8dbd17f-a8e0-43b1-b9ce-de1efdc2670e",
            DeviceId: "98d0667521ac0e5e44c623a83d48258d",
            DistrictId: "2252dc4d-0069-4c0f-b60f-21ce5607dd46",
            LoginToken: "",
            MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
            Token: ""
          }
        })
        // 解构 ，拿到数据
        this.data={
          ...data.Data.CommodityInfo
        }
        
    },
    onClickIcon() {
      Toast('加入购物车成功');
    //   保存数据 图片  现价 原价  标题  id  限购数量
    let {SmallPic,SellPrice,OriginalPrice,CommodityName,CommodityCode,MaxLimitCount} = this.data
    let {cartlist} = this.$store.state.cart;
    let value = this.value;
    // 判断当前商品是否已经存在购物车
    // 存在：改变数量
    // 不存在：添加商品
    // if(cartlist.some(item=>item.goods_id===goods_id)){

    // }
    let hasItem = cartlist.filter(function(item){//得到一个数组或空数组
        return item.CommodityCode === CommodityCode
    })[0]
    if(hasItem){
        this.$store.commit('changeQty',{id:CommodityCode,qty:hasItem.qty+value})
    }else{
        this.$store.commit('addItem',{SmallPic,SellPrice,OriginalPrice,CommodityName,CommodityCode,MaxLimitCount,qty:value})
    }
    },
    gotohome() {
      this.$router.push({name:'Home'})
    },
    gotocart(){
        this.$router.push({name:'Cart'})
    },

  },
   async created(){
      
     let {id} = this.$route.params;
     this.getData(id);
     
    },
    // mounted(){
    //     console.log('mounted:',this.$route)
    // },
   

    // beforeRouteUpdate(to,from,next){
    //     // 如果设置了路由守卫，则必须显性调用next()，否则路由无法继续
    //     console.log('beforeRouteUpdate',to,from,next)
    //     let {id} = to.params
    //     this.getData(id);
    //     next();
    // }
};


</script>

<style scoped>
    .details{
        background: #f4f4f4;
        overflow:scroll;
    }
    .bot123{
        width: 100%;
        background: #f4f4f4;
        height: .693333rem;
    }
      .banner{
        width: 100%;
    }
    .banner .van-swipe img{
        width: 100%;
        /* height: rem; */
        border: 0;
        vertical-align: middle;
    }
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
.productInfor {
    padding: .45rem 0 0.4rem 0rem;
    background: #fff;
    margin-bottom: .3rem;
    padding-bottom: 0;
    position: relative;
}
.productInfor .title {
    line-height: .8rem;
    padding-right: .53rem;
    font-size: .5rem;
    font-weight: 500;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-left: .53rem;
}
.productInfor .subhead {
    padding-right: .53rem;
    font-size: .38rem;
    color: #808080;
    padding-top: .25rem;
    line-height: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-left: .53rem;
    height: .8rem;
}
.productInfor .subhead .label {
    font-size: .4rem;
    line-height: .4rem;
    background: #fff;
    display: inline-block;
    padding: 0.1rem .36rem .1rem .33rem;
    border: 1px solid #01B27A;
    border-radius: .4rem;
    color: #01B27A;
    margin-right: .25rem;
    font-style: normal;
    vertical-align: initial;
}
.productInfor .subhead span {
    font-size: .42rem;
    color: #666;
}
.productInfor .price {
    position: relative;
    padding: 0rem 0 0rem;
    overflow: hidden;
    padding: .4rem 0 .39rem;
    padding-left: .53rem;
    padding-right: .53rem;
}
.productInfor .price .priceIn {
    float: left;
}
.productInfor .price .priceIn .priceRed {
    font-size: .66rem;
    color: #EB3939;
}
.productInfor .price .area {
    float: right;
    font-size: .4rem;
    color: #999999;
    margin-top: .22rem;
}
 .sale {
    background: #fff;
    padding-bottom: .54rem;
    padding-left: .53rem;
    padding-right: .53rem;
}
 .sale .saleIn .couponRedemption {
    font-style: normal;
    font-size: .43rem;
    color: #999999;
    margin-right: .32rem;
    float: left;
    padding-top: .45rem;
}
 .sale .saleIn .saleListTwo {
    position: relative;
    padding: .54rem 0rem 0rem 1.8rem;
    margin-left: 1.4rem;
}
 .sale .saleIn .saleList .label {
    position: absolute;
    top: .45rem;
    left: 0;
    background: #ffffff;
    font-size: .4rem;
    color: #01B27A;
    font-style: normal;
    border: 1px solid;
    border-radius: .4rem;
    padding: .09rem .33rem;
    line-height: .4rem;
}
 .sale .saleIn .saleList .title {
    font-size: .4rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: .5rem;
    padding-left: 0;
    height: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.productInfor .backGauge {
    position: relative;
    height: 1.67rem;
    line-height: 1.67rem;
    padding: 0 .53rem;
          color: #aaaaaa;
    font-size: .4rem;
}
.productInfor .sevenDay .dian {
    display: inline-block;
    width: .33rem;
    height: .33rem;
    border-radius: 50%;
    margin-right: .2rem;
    border: 1px solid;
  
}
.productInfor .lineTop::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.line-top:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.norms {
    background: #fff;
    margin-bottom: .3rem;
}
.norms .title {
    position: relative;
    color: #999999;
    font-size: .43rem;
    line-height: 1.2rem;
    padding: .35rem .53rem;
}
.norms .title .choose.active {
    color: #01B27A;
    font-size: .46rem;
    padding: .23rem .5rem;
    box-sizing: border-box;
    border: 1px solid #01B27A;
    margin-left: .4rem;
    height: .47rem;
    line-height: .47rem;
}
.norms .title {
    position: relative;
    color: #999999;
    font-size: .43rem;
    line-height: 1.2rem;
    padding: .35rem .53rem;
}
.van-stepper{
    position: absolute;
    left: 1.5rem;
    top: .5rem;
    width: 2.6rem;
    height: .92rem;
    margin-left: .35rem;
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
.address {
    background: #fff;
    padding: .45rem .53rem;
    margin-bottom: 1rem;
    overflow: hidden;
}
.address .title {
    float: left;
    color: #999999;
    font-size: .43rem;
    padding-right: .4rem;
    line-height: .5rem;
}
.address .addressDetail {
    float: left;
}
.clear:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
}
.address .addressDetail .add {
    position: relative;
    padding-left: .4rem;
    font-size: .46rem;
    color: #333;
    line-height: .5rem;
    /* width: 7.5rem; */
    padding-bottom: .4rem;
}
.address .addressDetail .add span {
    position: absolute;
    top: .03rem;
    left: 0;
    display: inline-block;
    width: .33rem;
    height: .39rem;
    background: url(//img05.yiguoimg.com/d/web/170830/00916/154520/dw.png) no-repeat;
    background-size: 100% 100%;
}
.address .addressDetail .infor {
    line-height: .7rem;
    color: #333;
    font-size: .3rem;
}
 .address .addressDetail .infor span {
    color: #01B27A;
    padding-right: .2rem;
}
.price .priceIn .priceOriginal {
    font-size: .43rem;
    color: #ccc;
    text-decoration: line-through;
    padding-left: .48rem;
}
</style>