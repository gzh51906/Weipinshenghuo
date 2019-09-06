<template>
  <van-grid :column-num="4" id="first-screen-menu">
    <van-grid-item v-for="value in fenlei" :key="value.title" class="one" @click="gotolist()">
      <div class="one1">
        <i>
          <img :src="value.src" />
        </i>
        <p class="one-title" style="color: rgb(51, 51, 51);">{{value.title}}</p>
      </div>
    </van-grid-item>
  </van-grid>
</template>
<script>
export default {
  data() {
    return {
      fenlei: [
        {
          title: "精品水果",
          src:
            "https://img12.yiguoimg.com/d/items/2019/190621/9570213293991637_144.png?w=144&h=144"
        },
        {
          title: "精选肉类",
          src:
            "https://img14.yiguoimg.com/d/items/2019/190621/9570213294024405_144.png?w=144&h=144"
        },
        {
          title: "海鲜水产",
          src:
            "https://img14.yiguoimg.com/d/items/2019/190621/9570213294057173_144.png?w=144&h=144"
        },
        {
          title: "快手料理",
          src:
            "https://img11.yiguoimg.com/d/items/2019/190621/9570213294089941_144.png?w=144&h=144"
        },
        {
          title: "免费兑卡",
          src:
            "https://img14.yiguoimg.com/d/items/2019/190621/9570213294286549_144.png?w=144&h=144"
        },
        {
          title: "会员福利",
          src:
            "https://img12.yiguoimg.com/d/items/2019/190621/9570213294155477_144.png?w=144&h=144"
        },
        {
          title: "银行活动",
          src:
            "https://img11.yiguoimg.com/d/items/2019/190621/9570213294188245_144.png?w=144&h=144"
        },
        {
          title: "即烹美食",
          src:
            "https://img09.yiguoimg.com/d/items/2019/190621/9570213294221013_144.png?w=144&h=144"
        }
      ]
    };
  }
  ,
  methods:{
    gotolist(){
      this.$router.push('/GoodList/11111')
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
#first-screen-menu {
  background: #fff;
  background-size: 100% 100%;
  padding: 9px 17.667px;
}
#first-screen-menu .one {
  float: left;
  width: 25%;
  padding: 0 0 16px 0;
  text-align: center;
  font-size: 14px;
  color: #333;
}
#first-screen-menu .van-grid-item__content {
  padding: 0;
}
#first-screen-menu .one i {
  display: block;
  width: 100px;
  padding: 0 0 1.667px 0;
  text-align: center;
}
.one .one-title {
  font-size: 14px;
  margin: 0;
}
#first-screen-menu .one i img {
  display: inline-block;
  width: 68.33px;
  height: 68.33px;
}
</style>