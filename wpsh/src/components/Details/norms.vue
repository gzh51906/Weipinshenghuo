<template>
  <div class="norms">
    <div class="title line-bottom">
      规格
      <span class="choose active">200g/袋</span>
    </div>
    <div class="title line-bottom">
      数量
      <van-stepper v-model="value"  max="20" />
    </div>
  </div>
</template>

<script>
export default {
     data() {
    return {
      value: 1
    }
  }
};
</script>

<style scoped>
.norms {
    background: #fff;
    margin-bottom: .3rem;
}
.norms .title {
    position: relative;
    color: #999999;
    font-size: .43rem;
    line-height: 1.2rem;
    padding: .35rem .53rem;
}
.norms .title .choose.active {
    color: #01B27A;
    font-size: .46rem;
    padding: .23rem .5rem;
    box-sizing: border-box;
    border: 1px solid #01B27A;
    margin-left: .4rem;
    height: .47rem;
    line-height: .47rem;
}
.norms .title {
    position: relative;
    color: #999999;
    font-size: .43rem;
    line-height: 1.2rem;
    padding: .35rem .53rem;
}
.van-stepper{
    position: absolute;
    left: 1.5rem;
    top: .5rem;
    width: 2.6rem;
    height: .92rem;
    margin-left: .35rem;
}

.line-bottom:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
</style>