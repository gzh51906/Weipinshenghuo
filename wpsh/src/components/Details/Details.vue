<template>
  <div class="details">
      <bannerimg></bannerimg>
      <productInfor></productInfor>
      <norms></norms>
      <addressGz></addressGz>
      <footercart></footercart>
      <div class="bot123">

      </div>
  </div>
</template>

<script>
import bannerimg from './bannerimg.vue'
import productInfor from './productInfor.vue'
import norms from './norms.vue'
import addressGz  from './addressGz.vue'
import footercart  from './footercart.vue'

export default {
    components:{
        bannerimg,
        productInfor,
        norms,
        addressGz,
        footercart
    }
}
</script>

<style scoped>
    .details{
        background: #f4f4f4;
        overflow:scroll;
    }
    .bot123{
        width: 100%;
        background: #f4f4f4;
        height: .693333rem;
    }
</style>