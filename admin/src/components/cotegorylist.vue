<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="CommodityId" label="ID" width="180"></el-table-column>
      <el-table-column prop="CommodityName" label="名称" width="180"></el-table-column>
      <el-table-column prop="SellPrice" label="价格"></el-table-column>
      <el-table-column prop="SubTitle" label="标题"></el-table-column>
      <el-table-column prop="SmallPic" label="图片路径"></el-table-column>
      <el-table-column label="编辑">
        <el-button type="primary" icon="el-icon-delete" class="del" @click="del"></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
import loginVue from "./login.vue";
export default {
  data() {
    return {
      tableData: []
      // node: ""
    };
  },
  created() {
    axios.post("http://localhost:1906/goods").then(({ data }) => {
      // console.log(data);
      this.tableData = data.data;
    });
  },
  methods: {
    del() {
      for (let i = 0; i < this.node.length; i++) {
        this.node[i].parentNode.onclick = function() {
          // console.log(this);
          let id = this.parentNode.parentNode.children[0].children[0].innerHTML;
          axios
            .post("http://localhost:1906/goods/delete", {
              CommodityId: id
            })
            .then(({ data }) => {});
          console.log(id);

          let tr = this.parentNode.parentNode;
          let tbody = this.parentNode.parentNode.parentNode;
          console.log(tr);

          console.log(tbody);
          tbody.removeChild(tr);
        };
      }
      // console.log(node);
    }
  },
  mounted() {
    this.node = document.getElementsByClassName("del");
    console.log(this.node);
  }
};
</script>
<style scoped>
</style>