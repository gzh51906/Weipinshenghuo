<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}商品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="商品ID">
            <el-input v-model="model.id" id="shopid" @change="onchan"></el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="商品标题">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="model.price"></el-input>
          </el-form-item>
          <el-form-item label="商品单位">
            <el-input v-model="model.conpany"></el-input>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-upload class="avatar-uploader" :show-file-list="false" :on-success="afterUpload">
              <img v-if="model.icon" :src="model.icon" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem;">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        id: "",
        name: "",
        title: "",
        price: "",
        conpany: "",
        icon: "",
        venueName: "",
        button: ""
      },
      shopid: ""
    };
  },
  // methods: {
  // afterUpload(res) {
  //   console.log(res);
  //   //   this.$set(this.model, "icon", res.url);
  //   this.model.icon = res.url;
  // },
  // async save() {
  //   let res;
  //   if (this.id) {
  //     res = await this.$http.put(`rest/categories/${this.id}`, this.model);
  //   } else {
  //     res = await this.$http.post("rest/categories", this.model);
  //   }
  //   this.$router.push("/categories/list");
  //   this.$message({
  //     type: "success",
  //     message: "保存成功"
  //   });
  // },
  // async fetch() {
  //   const res = await this.$http.get(`rest/categories/${this.id}`);
  //   this.model = res.data;
  // }

  // },
  methods: {
    onchan() {
      this.shopid.onchenge = function(e) {
        // console.log(e.target.value);
      };
    }
  },
  // created() {
  //   this.id && this.fetch();
  // },
  mounted() {
    this.shopid = document.querySelector("#shopid");
    console.log(shopid);
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader-icon {
  line-height: 170px !important;
}
</style>
