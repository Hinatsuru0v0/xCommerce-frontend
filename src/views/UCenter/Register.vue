<template>
  <div class="login-container">
    <h1 class="adaptive login-title">立刻加入 Apple Store</h1>
    <div class="adaptive login-main">
      <div class="login-main-framework">
        <div class="login-main-form">
          <x-label-input
            :data="inputAccountName"
            label="Account Name"
          ></x-label-input>
          <x-label-input
            :data="inputPhoneNumber"
            label="Phone Number"
          ></x-label-input>
          <x-label-input :data="inputPassword" label="Password"></x-label-input>
          <x-label-input
            :data="confirmPassword"
            label="Confirm Password"
          ></x-label-input>
          <div class="login-main-btn">
            <el-button class="blue-login-btn" @click="handleRegisterBtn"
              >立即注册</el-button
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
      inputAccountName: {
        content: ""
      },
      inputPhoneNumber: {
        content: ""
      },
      inputPassword: {
        content: "",
        type: "password"
      },
      confirmPassword: {
        content: "",
        type: "password"
      }
    };
  },
  created() {
    this.clearInput();
  },
  methods: {
    handleRegisterBtn() {
      if (
        this.inputAccountName.content.trim() === "" ||
        this.inputPhoneNumber.content.trim() === "" ||
        this.inputPassword.content.trim() === "" ||
        this.confirmPassword.content.trim() === ""
      ) {
        this.$notify.error({
          title: "提交失败",
          message: "请确认注册信息完整性后重新提交！",
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
      } else if (
        this.inputPassword.content.trim() !==
        this.confirmPassword.content.trim()
      ) {
        this.$notify.error({
          title: "提交失败",
          message: "请确认两次密码输入一致后重新提交！",
          offset: 44
        });
      } else {
        this.$AJAX
          .get("http://localhost:8099/user", {
            params: {
              phone: this.inputPhoneNumber.content
            }
          })
          .then(res => {
            if (res.data.length !== 0) {
              this.clearInput();
              this.$notify.error({
                title: "注册失败",
                message: "您所提交的手机号已被注册！请重新提交！",
                offset: 44
              });
            } else {
              let newUser = {
                username: this.inputAccountName.content.trim(),
                phone: this.inputPhoneNumber.content.trim(),
                password: this.inputPassword.content.trim(),
                cart: []
              };
              this.$AJAX
                .post("http://localhost:8099/user", newUser)
                .then(() => {
                  this.$notify.success({
                    title: "注册成功",
                    message: "您已注册成功，快去登陆您的账号吧！",
                    offset: 44
                  });
                  setTimeout(() => {
                    this.$router.push({ path: "/login" });
                  }, 1000);
                });
            }
          });
      }
    },
    clearInput() {
      this.inputAccountName.content = "";
      this.inputPhoneNumber.content = "";
      this.inputPassword.content = "";
      this.confirmPassword.content = "";
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
</style>
