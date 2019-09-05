<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="src" label="图片路径"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "易果盒子吐司面包粉",
          price: "60",
          title: "口感还原度高",
          src:
            "https://img09.yiguoimg.com/d/items/2018/181030/9288733301908830_300.jpg"
        },
        {
          id: "1",
          name: "易果盒子吐司面包粉",
          price: "60",
          title: "口感还原度高",
          src:
            "https://img09.yiguoimg.com/d/items/2018/181030/9288733301908830_300.jpg"
        },
        {
          id: "1",
          name: "易果盒子吐司面包粉",
          price: "60",
          title: "口感还原度高",
          src:
            "https://img09.yiguoimg.com/d/items/2018/181030/9288733301908830_300.jpg"
        },
        {
          id: "1",
          name: "易果盒子吐司面包粉",
          price: "60",
          title: "口感还原度高",
          src:
            "https://img09.yiguoimg.com/d/items/2018/181030/9288733301908830_300.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>