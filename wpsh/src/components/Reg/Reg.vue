<template>
  <div id="reg">
    <div class="hand">
      <span class="bank" @click="golog">
        <van-icon name="arrow-left" />
      </span>
      注册
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        type="tel"
        size="large"
        maxlength="11"
        placeholder="请输入您的手机号"
        @blur="vfyUse"
      >
        <van-button slot="button" size="small" type="primary" @click="getCode">发送验证码</van-button>
      </van-field>

      <van-field type='tel' v-model="code" size="large" maxlength="4" placeholder="请输入您的验证码" />
      <van-field
        v-model="password"
        type="password"
        maxlength="10"
        size="large"
        placeholder="请设定您的密码"
        @blur="vfyPwd"
      />
      <van-field
        v-model="vPassword"
        type="password"
        maxlength="10"
        size="large"
        placeholder="请再次输入您的密码"
        @blur="vfyVpwd"
      />
    </van-cell-group>
    <div class="deal">
      <input type="checkbox" id="label" v-model="isDeal" />
      <label for="label">
        我已阅读
        <a class="green">《易果服务协议》</a>
        <a class="green">《隐私条款》</a>
        并同意
      </label>
    </div>
    <div class="tijiao">
      <van-button type="primary" class="reg-btn" @click="regGo">注册</van-button>
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
      vPassword: "",

      isPhone: false,
     
      isPwd: false,
      isVpwd: false,

      isDeal: false,
    };
  },

  methods: {
    golog(){
       this.$router.push('/Login')
    },
    // 手机号验

    vfyUse() { 
      var Rgx = /^1(3[0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|8[0-9]|9[89])\d{8}$/;
      if (this.username) {
        if (Rgx.test(this.username)) {
                // this.vfyPhone();
                this.isPhone = true;
        } else {
          Toast({
            message: "手机号码不合法",
            closeOnClick: true
          });
        }
      } else {
        Toast({
          message: "手机号不能为空",
          closeOnClick: true
        });
      }
    },
    // 检验手机号是否被注册
     vfyPhone(){
          // 发起请求校验用户名是否已被注册
        this.$axios.post('http://localhost:5786/reg',{ 
                username:this.username,
                password:this.password,       
        }).then(res=>{
             this.$router.push('/Login')
        })
      //  console.log(data);
      // if (data.code === 0) {
      //    this.isPhone = false;
      //       Toast({
      //       message: "该手机号码已被注册",
      //       closeOnClick: true
      //     });
      // } else {
      //   //通过验证
      //    this.isPhone = true;
      // }
    },
    //  获取验证码
    getCode() {
      this.vfyUse();
      if (this.isPhone) {
        const random = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ];
        let ccode = "";
        for (let i = 0; i < 4; i++) {
          let index = Math.floor(Math.random() * 36);
          ccode += random[index];
        }
        this.code = ccode;
        this.isPhone = false;
        this.isCode=true
      } 
      
    },
    vfyPwd() {
      var Rgx = /^\w{4,10}$/;
      if (this.password) {
        if (Rgx.test(this.password)) {
          this.isPwd = true;
        } else {
          Toast({
            message: "请输入4-10位的字母或数字",
            closeOnClick: true
          });
        }
      } else {
        Toast({
          message: "密码不能为空",
          closeOnClick: true
        });
      }
    },
    vfyVpwd() {
      if (this.vPassword) {
        if (this.vPassword === this.password) {
          this.isVpwd = true;
        } else {
          Toast({
            message: "两次密码不一致",
            closeOnClick: true
          });
        }
      } else {
        Toast({
          message: "请输入确认密码",
          closeOnClick: true
        });
      }
    },
    // 注册
    regGo() {
      
      if (this.isPhone) {
        if (this.code) {
          if (this.isPwd) {
            if (this.isVpwd) {
              if (this.isDeal) {
                   this.vfyPhone()  
              } else {
                Toast({
                  message: "请阅读协议",
                  closeOnClick: true
                });
              }
            } else {
              this.vfyVpwd();
            }
          } else {
            this.vfyPwd(); 
          }
         
        } else {
          Toast({
            message: "验证码不能为空",
            closeOnClick: true
          });
        }
      } else {
          this.vfyUse(); 
      }
    }
  },
 
};
</script>
<style scoped>
.green {
  color: #074425;
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
label {
  font-size: 12px;
}
#label {
  vertical-align: middle;
}
.deal {
  text-align: center;
  padding-top: 20px;
}
.tijiao {
  position: relative;
  top: 26px;
  text-align: center;
  margin: 30px 30px 0;
}
.reg-btn {
  width: 60%;
  border-radius: 4px;
}
/* 遮罩样式 */
</style>
