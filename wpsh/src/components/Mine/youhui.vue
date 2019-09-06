<template>
  <van-grid :column-num="4" class="testList">
    <van-grid-item v-for="value in list" :key="value.name" class="list line-bottom">
      <a href="javascript:;">
        <img :src="value.img" alt class="icon" />
        {{value.name}}
      </a>
    </van-grid-item>
  </van-grid>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "优惠券",
          img:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png"
        },
        {
          name: "充值卡",
          img:
            "https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png"
        },
        {
          name: "礼品兑换券",
          img:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png"
        },
        {
          name: "收货地址",
          img:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png"
        },
        {
          name: "帮助中心",
          img: "https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png"
        },
        {
          name: "我的团购",
          img:
            "https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png"
        },
        {
          name: "账户余额",
          img:
            "https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png"
        },
        {
          name: "在线客服",
          img:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.testList {
  position: relative;
  width: 100%;
  background: #fff;
  margin-bottom: 9px;
  padding: 0;
}
.testList .list {
  position: relative;
  float: left;
  width: 25%;
  height: 81.52px;
}
.testList .list a {
  position: relative;
  font-size: 12px;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 51.3px;
  text-align: center;
  box-sizing: border-box;
  color: #333;
}
.testList .list a .icon {
  width: 32.6px;
  height: 32.6px;
  margin-left: -15.2px;
  display: inline-block;
  position: absolute;
  top: 18.116px;
  left: 50%;
}
.line-bottom:after {
  content: "";
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
</style>