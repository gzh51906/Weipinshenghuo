<template>
  <div>
    <div class="one-image" v-for="item in src" :key="item">
      <a href="javascript:;" class="link-img">
        <img :src="item" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: [
        "https://img09.yiguoimg.com/d/items/2019/190724/9288738603542264_1125x149.jpg?w=1125&amp;h=149",
        "https://img12.yiguoimg.com/d/items/2019/190731/9288738676123391_1125x455.jpg?w=1125&h=455",
        "https://img10.yiguoimg.com/d/items/2019/190624/9288738346641112_1125x462.jpg?w=1125&h=462"
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
.one-image .link-img {
  display: inline-block;
  width: 100%;
}
.one-image .link-img img {
  width: 100%;
}
</style>