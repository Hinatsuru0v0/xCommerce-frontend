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
</style>
