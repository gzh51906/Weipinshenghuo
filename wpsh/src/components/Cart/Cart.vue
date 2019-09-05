<template>
  <div>
    <!-- <van-card
      v-for="item in cartlist"
      :key="item.goods_id"
      :price="item.goods_price"
      :title="item.goods_name"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
    
    
        <van-button @click="remove(item.goods_id)" icon="delete" class="removesub"></van-button>
      <div>
        <van-stepper async-change v-model="item.qty"  @change="changeQty($event,item.goods_id)"/>
      </div>
    </van-card> -->
    <van-row gutter="20" v-for="item in cartlist" :key="item.goods_id">
  <van-col span="16">
            <van-col :span="6">
          <img :src="item.goods_image" />
        </van-col>
        <van-col :span="16" :offset="1">
          <h4>{{item.goods_name}}</h4>
          <strong class="red">￥<b>{{item.goods_price}}</b></strong>
         
        </van-col>
  </van-col>
  <van-col span="8" type="flex" justify="center">
      <p class="removesub">
      <van-button @click="remove(item.goods_id)" icon="delete" ></van-button>
      </p>
        <p>
        <van-stepper async-change v-model="item.qty"  @change="changeQty($event,item.goods_id)"/>
        </p>
  </van-col>
   
   </van-row>

    <!-- 结算栏 -->
   
    <van-submit-bar id="submitBar" :price="totalPrice*100" button-text="去结算">
      <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';
import { Stepper } from 'vant';
import { Icon } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Icon);
Vue.use(SubmitBar);
Vue.use(Stepper);
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default {
    computed:{
        // cartlist(){
        //     return this.$store.state.cart.cartlist
        // },

        // 映射state.cart.cartlist
        // ...mapState(['products','totalprice']),
        // products(){
        //     return this.$store.state.products
        // }

        ...mapState({
            cartlist(state){
                return state.cart.cartlist
            }
        }),

        // totalPrice(){
        //     return this.$store.getters.totalPrice.toFixed(2)
        // }
        // 映射getters
        ...mapGetters(['totalPrice'])
      
    },
    methods:{
        // ...mapMutations(['changeQty','removeItem']),
        ...mapMutations({
            changeQty:'changeQty',
            remove:'removeItem'
        }),
        ...mapActions(['changeQtyAsync']),


        onChange(value) {
          Toast.loading({ forbidClick: true });

            setTimeout(() => {
                Toast.clear();
                this.value = value;
            }, 500);

            },
        
        // changeQtyAsync(qty,id){
        //     this.$store.dispatch('changeQtyAsync',{qty,id})
        // },
        // remove(goods_id){
        //     this.$store.commit('removeItem',goods_id)
        // },
        // changeQty(qty,id){
        //     this.$store.commit('changeQty',{qty,id})
        //     // this.$store.dispatch('changeQtyAsync',{qty,id})
        //     // axios.get('http://localhost:1906/goods/kucun').then(({data})=>{
        //     //     let kucun = data.data;
        //     //     // 库存不足
        //     //     if(qty>kucun){
        //     //         qty = kucun;
        //     //     }
        //     //     this.$store.commit('changeQty',{qty,id})
        //     // })
        // },
        goto(id){
            
            this.$router.push(`/goods/${id}`)
        }
    },
  created() {

  }
};
</script>

<style>
#cartTools {
  width: 40px;
  text-align: center;
  overflow: hidden;
  margin-left: 5px;
  position: relative;
  background: url(../../assets/imgs/icon/edit_bg.png) no-repeat center;
  background-size: 25px auto;
}
#submitBar {
  bottom: 51px;
};
.removesub{
 text-align: center;
}
.van-row{
    background: #fff;
    margin-top:20px ;
}
.red{
color: #fb3d3d;
}
</style>