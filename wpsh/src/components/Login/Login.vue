<template>
  <div id="login">
    <div class="hand">
      <span class="bank" @click="gobank">
        <van-icon name="arrow-left" />
      </span>
      登录
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        type="tel"
        size="large"
        maxlength="11"
        placeholder="请输入您的手机号"
        left-icon="contact"
      ></van-field>

      <van-field
        v-model="password"
        type="password"
        maxlength="10"
        size="large"
        placeholder="请输入您的密码"
        left-icon="closed-eye"
      />
    </van-cell-group>
    <div class="forget green">
      <span>忘记密码？</span>
    </div>

    <div class="tijiao">
      <van-button type="primary" class="login-btn" @click="goLogin">登录</van-button>
      <van-button type="primary" plain class="reg-btn" @click="goReg">注册</van-button>
      <!-- 遮罩 -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Toast } from "vant";

Vue.use(Icon).use(Toast);
export default {
  data() {
    return {
      username: "",
      code: "",
      password: "",

      isPhone: false,

      isPwd: false,
      isVpwd: false,

      isDeal: false,

      show: true,
      showText: "test"
    };
  },
  methods: {
    gobank(){
      this.$router.push('/Mine')
    },
    goLogin() {
     
     
      
      if (this.username){
    
          this.$axios.post('http://localhost:1906/user/login',{ 
                username:this.username,  
                password:this.password        
        }).then(res=>{
            let{code,msg} = res.data;
            if(code === 1){
                localStorage.setItem('isLogin',true)
                this.$router.push({
                  path:"/Mine",
                  query:{
                    username:this.username
                  }
                })
            }else{
               Toast({
                    message: '用户未注册或秘密错误',
                    closeOnClick: true
                  })
            }
            
             
        })
        // if(this.password){
            
        // }else{
        //   Toast({
        //   message: "请输入密码",
        //   closeOnClick: true
        // })
        // }
      } else {
        Toast({
          message: "请输入用户名",
          closeOnClick: true
        })
      }
    },
    goReg() {
      this.$router.push("/Reg");
    }
  }
};
</script>

<style scoped>
.green {
  color: #07c160;
}
.hand {
  position: relative;
  text-align: center;
  background: #f8f8f8;
  height: 40px;
  line-height: 40px;
}
.bank {
  display: inline-block;
  height: 40px;
  font-size: 16px;
  position: absolute;
  left: 15px;
}
.forget {
  /* 这里设字体会模糊 */
  /* position: relative;
   top: 26px;
   left: 26px; */
  margin-top: 26px;
  margin-left: 26px;
  font-size: 14px;
}
.tijiao {
  position: relative;
  top: 26px;
  text-align: center;
  margin: 30px 30px 0;
}
.login-btn {
  width: 40%;
  height: 40px;
  border-radius: 4px;
  margin-right: 35px;
}
.reg-btn {
  width: 40%;
  height: 40px;
  border-radius: 4px;
}
</style>

