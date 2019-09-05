<template>
  <div class="listTab line-top">
    <van-grid class="line-bottom" :column-num="5">
      <van-grid-item v-for="value in list" :key="value.name" class="fourLi">
        <span class="pointRight" v-if="value.sign"></span>
        <a href="javascript:;">
          <i class="icon">
            <img :src="value.img" alt />
          </i>
          {{value.name}}
        </a>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "待支付",
          img: "https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png"
        },
        {
          name: "待收货",
          img: "https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png"
        },
        {
          name: "评价送悠币",
          img:
            "https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png"
        },
        {
          name: "在线退换货",
          img:
            "https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png"
        },
        {
          sign: "11",
          name: "全部订单",
          img: "//img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.listTab .line-bottom{
    padding: 0;
}
.listTab {
  position: relative;
  width: 100%;
  background: #fff;
  height: 81.52px;
  margin: 9px 0;
}
.listTab .line-bottom {
  position: relative;
  width: 100%;
  height: 100%;
}
.listTab .fourLi {
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
}
.listTab .fourLi a {
  display: inline-block;
  font-size: 11px;
  color: #333;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 52.234px;
  box-sizing: border-box;
}
.listTab .fourLi a .icon {
  width: 22.33px;
  height: auto;
  margin-left: -11.17px;
}
.listTab .fourLi a .icon {
  position: absolute;
  left: 50%;
  top: 24.155px;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}
.listTab .fourLi a .icon img {
  width: 100%;
  height: 100%;
}
.listTab .pointRight {
  position: absolute;
  top: 1.5px;
  left: 0;
  display: inline-block;
  width: 4.82px;
  height: 100%;
  background: url(//img07.yiguoimg.com/d/web/180313/01318/155922/xian.png)
    no-repeat;
  background-size: 100% 100%;
}
.listTab span {
  z-index: 100;
  right: -6.039px;
  color: white;
}
</style>