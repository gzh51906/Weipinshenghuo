<template>
  <div>
    <h2>后台管理系统</h2>
    <el-container style="height: 100vh;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          router
          :default-openeds="['1','2', '3']"
          unique-opened
          :default-active="$route.path"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              商品管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/items/create">新建商品</el-menu-item>
              <el-menu-item index="/items/list">商品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              用户管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/categories/create">新建用户</el-menu-item>
              <el-menu-item index="/categories/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              订单管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin_users/create">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>凉风</span>
        </el-header>
        <!-- <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-main>-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
//   data() {
//     var validatePass = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请输入密码"));
//       } else {
//         if (this.ruleForm.checkPass !== "") {
//           this.$refs.ruleForm.validateField("checkPass");
//         }
//         callback();
//       }
//     };

//     return {
//       ruleForm: {
//         username: "",
//         pass: ""
//       },
//       rules: {
//         pass: [
//           { required: true, message: "必须填写密码", trigger: "blur" },
//           { validator: validatePass, trigger: "blur" }
//         ],
//         username: [
//           { required: true, message: "必须填写用户名", trigger: "blur" },
//           { validator: validatePass, trigger: "blur" }
//         ]
//       }
//     };
//   },
//   methods: {
//     submitForm(formName) {
//       this.$refs[formName].validate(valid => {
//         if (valid) {
//           alert("submit!");
//         } else {
//           console.log("error submit!!");
//           return false;
//         }
//       });
//     },
//     resetForm(formName) {
//       this.$refs[formName].resetFields();
//     }
//   }
};
</script>
<style scoped>
</style>