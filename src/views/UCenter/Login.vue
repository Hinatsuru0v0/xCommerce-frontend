<template>
  <div class="login-container">
    <h1 class="adaptive login-title">登陆 Apple Store</h1>
    <div class="adaptive login-main">
      <div class="login-main-framework">
        <div class="login-main-form">
          <x-label-input
            :data="inputPhoneNumber"
            label="Phone Number"
          ></x-label-input>
          <x-label-input :data="inputPassword" label="Password"></x-label-input>
          <div class="login-main-btn">
            <el-button class="blue-login-btn" @click="handleLoginBtn"
              >登陆</el-button
            >
          </div>
          <div class="login-to-register">
            <router-link class="register-link" to="/register"
              >没有 Apple ID?立即创建一个</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XLabelInput from "@/components/input/XLabelInput";

export default {
  name: "Login.vue",
  components: {
    XLabelInput
  },
  data() {
    return {
      inputPhoneNumber: {
        content: "",
        type: "text"
      },
      inputPassword: {
        content: "",
        type: "password"
      }
    };
  },
  created() {
    this.clearInput();
  },
  methods: {
    handleLoginBtn() {
      if (
        this.inputPhoneNumber.content.trim() === "" ||
        this.inputPassword.content.trim() === ""
      ) {
        this.$notify.error({
          title: "提交失败",
          message: "请确认登陆信息完整性后重新提交！",
          offset: 44
        });
      } else if (
        !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
          this.inputPhoneNumber.content.trim()
        )
      ) {
        this.$notify.error({
          title: "提交失败",
          message: "请确认输入的手机号格式后重新提交！",
          offset: 44
        });
      } else {
        this.$AJAX
          .get("http://localhost:8099/user", {
            params: {
              phone: this.inputPhoneNumber.content.trim(),
              password: this.inputPassword.content.trim()
            }
          })
          .then(res => {
            if (res.data.length === 0) {
              this.clearInput();
              this.$notify.error({
                title: "登陆失败",
                message: "账户或密码输入错误！请重新登陆！",
                offset: 44
              });
            } else {
              this.$store.commit("loginAccount", res.data[0]);
              this.$notify.success({
                title: "登陆成功",
                message: "您已登陆成功，继续感受更多美好吧！",
                offset: 44
              });
              setTimeout(() => {
                this.$router.push({ path: "/" });
              }, 1000);
            }
          });
      }
    },
    clearInput() {
      this.inputPhoneNumber.content = "";
      this.inputPassword.content = "";
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 0;
}
h1 + * {
  margin-top: 0.8em;
}
.login-container {
  padding-top: 30px;
  padding-bottom: 92px;
  background-color: #fff;
}
.login-container .adaptive {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.login-container .login-title {
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0;
  padding-top: 34px;
  padding-bottom: 36px;
}
.login-container .login-main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.login-main-framework,
.login-main-form {
  margin: 0;
  padding: 0;
  min-width: 0;
  box-sizing: border-box;
}
.login-main .login-main-framework {
  flex-basis: 50%;
  max-width: 50%;
}
.login-main .login-main-form {
  flex-basis: 100%;
  max-width: 100%;
  margin-right: 40px;
  padding-right: 40px;
  box-sizing: content-box;
}
.login-main .login-main-btn {
  margin-top: 23px;
  padding-bottom: 10px;
}
.login-main-btn .blue-login-btn {
  cursor: pointer;
  color: #fff;
  background-color: #0071e3;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.17648;
  min-width: 28px;
  text-align: center;
  padding: 18px 31px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  white-space: normal;
  display: inline-block;
  border: 0;
  letter-spacing: 0;
  word-spacing: 0;
}
.login-main .blue-login-btn:hover {
  background-color: #0077ed;
}
.login-main .blue-login-btn:active {
  background-color: #006edb;
}
.login-to-register {
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
  margin-top: 7px;
}
.register-link {
  text-decoration: none;
  border: 0;
  color: #06c;
  margin: 0;
  padding: 0;
  vertical-align: inherit;
  cursor: pointer;
}
</style>
