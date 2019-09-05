<template>
  <van-row class="first-screen-banner">
    <van-col span="24">
      <van-swipe
        :autoplay="3000"
        indicator-color="white"
        class="swiper-container swiper-container-banner"
      >
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
          class="swiper-slide swiper-slide-duplicate"
        >
          <img :src="image" alt />
        </van-swipe-item>
      </van-swipe>
    </van-col>
  </van-row>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://img09.yiguoimg.com/d/items/2019/190815/9288738839242511_1125x652.jpg?w=1125&h=652",
        "https://img13.yiguoimg.com/d/items/2019/190830/9288738997479198_1125x652.jpg?w=1125&h=652",
        "https://img14.yiguoimg.com/d/items/2019/190829/9288738988107549_1125x652.jpg?w=1125&h=652",
        "https://img11.yiguoimg.com/d/items/2019/190830/9288739001771806_1125x652.jpg?w=1125&h=652",
        "https://img10.yiguoimg.com/d/items/2019/190819/9288738867422995_1125x652.jpg?w=1125&h=652",
        "https://img13.yiguoimg.com/d/items/2019/190627/9288738360567515_1125x652.jpg?w=1125&h=652"
      ]
    };
  }
};
</script>
<style scoped>
.first-screen-banner {
  position: relative;
}
.first-screen-banner .swiper-container {
  width: 100%;
  height: 240px;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  position: relative;
}
.first-screen-banner .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>