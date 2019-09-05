<template>
  <div class="chifanba">
    <div class="title-in title-pad">
      <ul class="icon-list clear" style>
        <li>
          <a
            target="_blank"
            id="ad_56dcfeff-9299-432b-82e0-34fee7f318b6"
            href="http://article.m.yiguo.com/Article/Category/food?isopenhwa=1"
            title
            onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '0', '56dcfeff-9299-432b-82e0-34fee7f318b6', '做美食', '', 'http://article.m.yiguo.com/Article/Category/food?isopenhwa=1');"
          >
            <img
              class="lazy icon1"
              src="../../assets/imgs/chifanba/586030925119660372_120x96.png"
              data-original="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png"
              alt="做美食"
              style="display: block;"
            />
            做美食
          </a>
        </li>
        <li>
          <a
            target="_blank"
            id="ad_b7c44cee-4044-4361-b5d3-3918f53f9b03"
            href="http://article.m.yiguo.com/Article/Category/know?isopenhwa=1"
            title
            onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '1', 'b7c44cee-4044-4361-b5d3-3918f53f9b03', '涨知识', '', 'http://article.m.yiguo.com/Article/Category/know?isopenhwa=1');"
          >
            <img
              class="lazy icon1"
              src="../../assets/imgs/chifanba/586030925119693140_120x96.png"
              alt="涨知识"
              style="display: block;"
            />
            涨知识
          </a>
        </li>
        <li>
          <a
            target="_blank"
            id="ad_4d337427-914e-4ada-b997-87672319b3a0"
            href="http://article.m.yiguo.com/Article/Category/live?isopenhwa=1"
            title
            onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '2', '4d337427-914e-4ada-b997-87672319b3a0', '生活家', '', 'http://article.m.yiguo.com/Article/Category/live?isopenhwa=1');"
          >
            <img
              class="lazy icon1"
              src="../../assets/imgs/chifanba/586030925119725908_120x96.png"
              id="ArtPic_4d337427-914e-4ada-b997-87672319b3a0"
              data-original="http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png"
              alt="生活家"
              style="display: block;"
            />
            生活家
          </a>
        </li>
        <li>
          <a
            target="_blank"
            id="ad_30328b5a-700f-427a-ae7d-e49dd6d4a801"
            href="http://article.m.yiguo.com/Article/Category/tryEat?isopenhwa=1"
            title
            onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '3', '30328b5a-700f-427a-ae7d-e49dd6d4a801', '爱试吃', '', 'http://article.m.yiguo.com/Article/Category/tryEat?isopenhwa=1');"
          >
            <img
              class="lazy icon1"
              src="../../assets/imgs/chifanba/586030927703745073_120x96.png"
              id="ArtPic_30328b5a-700f-427a-ae7d-e49dd6d4a801"
              data-original="http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png"
              alt="爱试吃"
              style="display: block;"
            />
            <i class="new"></i>
            爱试吃
          </a>
        </li>
      </ul>
    </div>
  <div :key="item.TotalReadNum" v-for="item in eatslist" class="shenghuojia">
    <div class="imgbox">
      <span :key="item.EfruitArticleTitle" class="txt">{{item.OtherCategoryName}}</span>
      <span class="num">{{item.TotalReadNum}}</span>
      <img :src="item.PictureUrl">
    </div>
    <p class="tit1">{{item.EfruitArticleTitle}}</p>
 
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col } from "vant";

Vue.use(Row).use(Col);
export default {
  data() {
    return {
      eatslist: []
    };
  },
  // 创建阶段拿到数据
  async created() {
     let {data} = await this.$chifanba();
    // 数据格式化
    // console.log(data);
    this.eatslist = data.RspData.ArticleList.List.map(function(item){
          return item;
      });
    // console.log(this.eatslist);
  },

};
</script>

<style scoped>

.icon-list li {
  width: 20%;
  float: left;
  padding: 14px 0 14px;
}
.icon-list li a {
  display: inline-block;
  position: relative;
  padding-top: 44px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #808080;
  text-align: center;
}
.icon-list li a .icon1 {
  position: absolute;
  top: 6px;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 32px;
}

.title-in {
  padding: 0 3.6% 0 3.6%;
  box-sizing: border-box;
  width: 100%;
  height: 91px;
  background: #fff;
}
.shenghuojia {
    z-index: 9;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 5px;
    width: 100%;
}
.shenghuojia .imgbox img{
  width: 100%;
}
.shenghuojia .imgbox .txt {
    background: #ff6b22;
    position: absolute;
    top: 10px;
    left: 0;
    padding: 2px 9px 0px 4px;
    box-sizing: border-box;
    height: 23px;
    line-height: 20px;
    text-align: left;
    color: #fff;
    border-radius: 0 15px 15px 0;
    font-size: 13px;
    opacity: 0.90;
    filter: alpha(opacity=90);
    -moz-opacity: 0.90;
}
.shenghuojia .imgbox  .num {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 2px 8px 0px 20px;
    height: 17px;
    line-height: 16px;
    box-sizing: border-box;
    background: rgba(255,255,255,.85);
    border-radius: 20px;
    text-align: center;
    color: #656565;
    font-size: 12px;
}
.shenghuojia .imgbox .tit1{
    padding: 14px 0 0px;
    font-size: 18px;
    color: #000;
    line-height: 22px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>