<template>
  <div class="goodlist">
    <van-row v-for="item in data" :key="item.CommodityCode" @click.native="goto(item.CommodityCode)">
      <van-col span="8">
        <van-image width="105" height="105" :src="item.SmallPic" />
      </van-col>
      <van-col span="16">
        <div class="inforPro">
          <p class="title">{{item.CommodityName}}</p>
          <p class="txt">{{item.SubTitle}}</p>
          <i class="label" v-if="item.PromotionTag">{{item.PromotionTag}}</i>
          <p class="price">
            <span class="priceRed">¥{{item.SellPrice}}</span>
            <span class="standard" style="text-decoration: line-through;">¥{{item.OriginalPrice}}</span>
            <span class="standard" v-if="item.Spec">{{item.Spec}}</span>
            <span class="addCart"></span>
          </p>
        </div>
      </van-col>
    </van-row>
    <div class="option">
      
      <a href="#" id="gotop" class="top" @click="totopClick"></a>
    </div>

    <div class="noMore" style>
      <p>没有更多了</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodList",
  data() {
    return {
      data: []
    };
  },
  methods:{
    // 跳转到详情
     goto(id){
            
            this.$router.push({name:'Details',params:{id}})
        }
  },
  created() {},
  mounted() {
    this.data = this.$route.params.CategoryCode.Childs;
    
    
  },

  methods: {
    totopClick(){
       target.scrollIntoView();
    }
  }
};
</script>
<style scoped>
body {
  background: #f4f4f4;
}
.goodlist {
  padding-bottom: 50px;
}
.inforPro .title {
  margin: 0;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
}
.inforPro .txt {
  font-size: 11px;
  color: #808080;
  padding: 9px 0 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0px;
}
.inforPro .label {
  font-size: 11px;
  line-height: 11px;
  margin-bottom: 4px;
  padding: 4px 6px 3px;
  margin-right: 6px;
  border: 1px solid #11b57c;
  border-radius: 2px 0 2px 0;
  font-style: normal;
  color: #11b57c;
  background: #fff;
  max-width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.inforPro .price {
  position: relative;
  height: 34px;
  padding-top: 9px;
  z-index: 10;
  margin: 0;
  line-height: 34px;
}
.inforPro .price .priceRed {
  font-size: 14px;
  color: #fd3d3d;
  padding-right: 14px;
  line-height: 18px;
}
.inforPro .price .standard {
  font-size: 10px;
  color: #808080;
  line-height: 14px;
  padding-right: 6px;
}
.inforPro .price .addCart {
  z-index: 100;
  position: absolute;
  right: 8px;
  top: 4.8px;
  width: 25px;
  height: 25px;
  background: url(//img05.yiguoimg.com/d/web/180508/01311/150610/add.png)
    no-repeat;
  background-size: 100% 100%;
}
.noMore {
  position: relative;
  width: 105px;
  height: 30px;
  margin: 20px auto 9px;
  border-top: 1px solid #808080;
}
.noMore p {
  font-size: 12px;
  color: #808080;
  position: absolute;
  top: -20px;
  left: 50%;
  margin-left: -44px;
  background: #f4f4f4;
  width: 90px;
  text-align: center;
}
.van-row {
  background: #fff;
  margin: 0 !important;
  padding: 15px 9px;
  border-bottom: 1px solid #f4f4f4;
}
.option {
  position: fixed;
  bottom: 100px;
  right: 10px;
  z-index: 100;
  height: 88px;
}
.option .top {
  display: block;
  width: 33px;
  height: 33px;
  margin: 20px 0 0;
  background: url(//img05.yiguoimg.com/d/web/180508/01311/150610/top.png)
    no-repeat;
  background-size: 100%;
}
</style>