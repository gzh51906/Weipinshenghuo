<template>
  <div class="recommend">
    <van-tree-select :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <van-grid
          :column-num="3"
          v-for="(item,idx) in recommend"
          v-show="idx===activeIndex"
          :key="item.CategoryName"
        >
          <van-grid-item v-for="(i) in item" :key="i.CategoryCode" @click.native="goto(i)">
            <van-image :src="i.PictureUrl" />
            <p>{{i.CategoryName}}</p>
          </van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
export default {
  name: "tab",
  data() {
    return {
      data: {},
      recommend: [],
      activeIndex: 0,
      items: [
        { text: "进口水果" },
        { text: "国产水果" },
        { text: "精选肉选" },
        { text: "禽类蛋品" },
        { text: "海鲜水产" },
        { text: "即烹美食" },
        { text: "乳品糕点" },
        { text: "新鲜蔬菜" },
        { text: "方便速食" },
        { text: "油粮杂货" },
        { text: "食品饮料" },
        { text: "礼品礼券" }
      ]
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      let { data } = await this.$axios.get(
        "https://www.easy-mock.com/mock/5d6fca15b3db060775b1f0ff/ygsx/goodslist",
        {}
      );
      this.recommend = data.Data.CategoryList.map(function(item) {
        return item;
      }).map(function(item) {
        return item.Childs;
      });
      // console.log(data);
      // console.log(this.recommend);
    },
    changeIdx(idx, e) {
      // console.log(idx, e);
      this.activeIndex = idx;
    },
    goto(CategoryCode) {
      // this.$router.push({name,query:{id:123}})
      // this.$router.push({path:'/goods/123'})
      // @click.native="goto(i.Childs)
      // this.$router.push({ name: "GoodList", params: { datalist } });
       this.$router.push({ name: "GoodList", params: { CategoryCode } });
    }
  }
};
</script>
<style scoped>
body {
  background: #fff ;
  font-size: 12px !important;
  color: #000;
  font-family: "Avenir", "PingFang SC", "\5FAE\8F6F\96C5\9ED1";
}
.van-tree-select {
  padding-top: 40px;
  padding-bottom: 50px;
  /* height: 100% !important; */
}
.van-tree-select__nav {
  position: fixed;
  /* left: 0; */
  /* top: 40px; */
  /* float: left; */
  width: 84px;
  height: 86%;
  /* overflow: hidden; */
  /* z-index: 100; */
}
.van-tree-select {
  height: 100% !important;
}
.van-tree-select__content {
  width: 100%;
  height: 100% !important;
  background: #fff;
  padding-left: 84px;
  box-sizing: border-box;
}

.van-tree-select__nav-item--active {
  font-weight: normal !important;
  border-color: #11b57c !important;
}
.van-tree-select__nav-item--active {
  color: #11b57c;
}
.van-tree-select__nav-item {
  position: relative;
  padding: 0 !important;
  text-align: center !important;
  height: 52px;
  line-height: 52px !important;
  border-left: 3px solid transparent;
  box-sizing: border-box !important;
  font-size: 12px;
}
.van-grid {
  padding: 15px 18px;
}
.van-image {
  width: 57px;
  height: 57px;
  margin: 0 12px;
}
.van-grid-item__content.van-grid-item__content--center {
  padding: 0px 0px 20px 0px;
}
.van-grid-item__content p {
  margin: 0;
  color: #808080;
  font-size: 12px;
}
[class*="van-hairline"]::after {
  border: none !important;
}
.van-tree-select__nav {
    background-color: #f4f4f4 !important;
}
.van-search.van-search--show-action {
    border-bottom: 1px solid #f0f0f0;
}
</style>