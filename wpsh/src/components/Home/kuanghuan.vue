<template>
  <div>
    <div class="first-screen-ad">
      <img :src="src" />
    </div>
    <div class="first-screen-news">
      <i class="title"></i>
      <div class="swiper-container swiper-container-news swiper-container-vertical">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide styleColor swiper-slide-duplicate swiper-slide-duplicate-active"
            style="color: rgb(51, 51, 51);"
          >{{content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src:
        "https://img13.yiguoimg.com/d/items/2019/190829/9710951443212061_1125x344.gif?w=1125&amp;h=344",
      content: "营业资质公示，详情请点击查询"
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.first-screen-ad img {
  display: block;
  width: 100%;
  height: 126.67px;
}
.first-screen-news {
  position: relative;
  box-sizing: border-box;
  height: 36.67px;
  padding: 7.333px 10.667px 7.333px 111.667px;
  background: #fff;
}
.first-screen-news .title {
  position: absolute;
  top: 11.667px;
  left: 16.667px;
  width: 75.33px;
  height: 14.67px;
  background: url(//img06.yiguoimg.com/e/web/161222/018522/134216/news.png)
    no-repeat;
  background-size: 100% 100%;
  margin: 0;
}
.first-screen-news .title:after {
  position: absolute;
  top: -4px;
  left: 80.667px;
  width: 0.5px;
  height: 22px;
  content: "";
  background: #e2e2e2;
}
.first-screen-news .swiper-container {
  width: 100%;
  height: 0.66rem;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.first-screen-news .swiper-slide {
  line-height: 22px;
  font-size: 12px;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  position: relative;
}
.first-screen-news:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  content: "";
  background: #e2e2e2;
}
</style>