<template>
  <van-search  placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>
<script>
export default {
    name:"search",
    methods:{
        onSearch(){

        },
    }
};
</script>
<style>
/* .van-search{
    height: 1.35rem;
    width: 100%;
    padding: .25rem .32rem !important;
} */
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  font-size: 13px !important;
}
.van-search.van-search--show-action {
  padding: 7.548px 9.662px;
      position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: .25rem .32rem;
    box-sizing: border-box;
    z-index: 102;
}

.van-cell.van-cell--borderless.van-field {
  height: 27px;
  /* width: 255px; */
  padding: 0px !important;
}
.van-field__body>input {
  font-size: 12px;
  color: #000 !important;
}
.van-search__content.van-search__content--round {
  background: #f4f4f4;
}
.van-search__action>div{
color: #11B57C;
font-size: 14px;
}

</style>