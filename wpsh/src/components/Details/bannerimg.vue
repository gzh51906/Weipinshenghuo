<template>
  <div class="banner">
<van-swipe :autoplay="30000000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {
 data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style>
    .banner{
        width: 100%;
    }
    .banner .van-swipe img{
        width: 100%;
        /* height: rem; */
        border: 0;
        vertical-align: middle;
    }
</style>