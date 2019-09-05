<template>
  <div>
    <top></top>
    <banner></banner>
    <fenlei></fenlei>
    <kuanghuan></kuanghuan>
    <tuijian></tuijian>
    <con1></con1>
    <xinpin></xinpin>
    <list></list>
    <same></same>
  </div>
</template>

<script>
//引入vant
// import Vue from "vue";
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

import top from "./top.vue";
import banner from "./banner.vue";
import fenlei from "./fenlei.vue";
import kuanghuan from "./kuanghuan.vue";
import tuijian from "./tuijian.vue";
import con1 from "./con1.vue";
import xinpin from "./xinpin.vue";
import list from "./list.vue";
import same from "./same.vue";

export default {
  components: {
    top,
    banner,
    fenlei,
    kuanghuan,
    tuijian,
    con1,
    xinpin,
    list,
    same
  }
};
</script>

<style>
</style>