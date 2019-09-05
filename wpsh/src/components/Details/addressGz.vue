<template>
  <div class="address clear">
    <p class="title">送至</p>
    <div class="addressDetail">
      <p class="add">
        <span></span>广东 广州市 天河区
      </p>
      <p class="infor">
        <span>有货</span>
        <!---->
        <!---->
        16:00 后完成订单，预计后天(9月7日)送达
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.address {
    background: #fff;
    padding: .45rem .53rem;
    margin-bottom: 1rem;
    overflow: hidden;
}
.address .title {
    float: left;
    color: #999999;
    font-size: .43rem;
    padding-right: .4rem;
    line-height: .5rem;
}
.address .addressDetail {
    float: left;
}
.clear:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
}
.address .addressDetail .add {
    position: relative;
    padding-left: .4rem;
    font-size: .46rem;
    color: #333;
    line-height: .5rem;
    /* width: 7.5rem; */
    padding-bottom: .4rem;
}
.address .addressDetail .add span {
    position: absolute;
    top: .03rem;
    left: 0;
    display: inline-block;
    width: .33rem;
    height: .39rem;
    background: url(//img05.yiguoimg.com/d/web/170830/00916/154520/dw.png) no-repeat;
    background-size: 100% 100%;
}
.address .addressDetail .infor {
    line-height: .7rem;
    color: #333;
    font-size: .35rem;
}
 .address .addressDetail .infor span {
    color: #01B27A;
    padding-right: .2rem;
}

</style>