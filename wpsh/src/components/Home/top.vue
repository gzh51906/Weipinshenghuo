<template>
  
  <van-row class="first-screen-top">
    <van-col span="6" class="first-screen-search">
      <a href="javascript:;" class="btn"></a>
      <span class="btn-search">请输入商品名称</span>
    </van-col>
    <van-col span="17" class="first-screen-adress">
      广州
      <!-- <van-button type="primary" @click="showPopup" class="arrow">111</van-button>
      <van-popup v-model="show">内容</van-popup> -->
      <i class="arrow"></i>s
    </van-col>
  </van-row>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.first-screen-top {
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 41.33px;
  padding: 5.667px 10.667px 5.667px 73.333px;
  background: linear-gradient(90deg, #39da85, #01b27a);
}
.first-screen-search {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 13.333px 0 35.333px;
  border-radius: 20px;
  background: #fff;
}
.first-screen-adress {
  position: absolute;
  top: 10.667px;
  left: 0;
  width: 73.33px;
  height: 20px;
  line-height: 21px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.first-screen-search .btn {
  position: absolute;
  top: 4px;
  left: 6px;
  width: 22px;
  height: 22px;
  background: url(//img07.yiguoimg.com/d/web/190515/00191/152133/home-search.png)
    no-repeat;
  background-size: 100% 100%;
}
.first-screen-search .btn-search {
  position: absolute;
  top: 2px;
  left: 30px;
  width: 100px;
  height: 26.67px;
  line-height: 26.67px;
  font-size: 14px;
  color: #999;
}
.first-screen-adress .arrow {
  display: inline-block;
  width: 8px;
  height: 4.33px;
  margin: 0 0 0 5.333px;
  vertical-align: 1px;
  background: url(//img05.yiguoimg.com/e/web/161222/01858/110628/arrow.png)
    no-repeat;
  background-size: 100% 100%;
}
</style>