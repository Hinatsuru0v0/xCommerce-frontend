<template>
  <el-header class="header-container">
    <el-row class="container-row">
      <el-col :span="1">
        <router-link class="header-icon apple-logo" to="/"></router-link>
      </el-col>
      <el-col :span="16" :offset="3" class="top-bar">
        <ul class="top-bar-ul">
          <li class="top-bar-active">Apple Store</li>
          <li>iPhone 12 Pro</li>
          <li>AirPods Max</li>
          <li>iPad Air</li>
          <li>macOS Big Sur</li>
          <li>iCloud</li>
          <li>Developer</li>
        </ul>
      </el-col>
      <el-col :span="1" :offset="3">
        <el-popover
          transition="el-zoom-in-top"
          placement="bottom"
          width="246"
          trigger="click"
          popper-class="bag-box"
        >
          <p class="bag-box-empty">你的购物袋是空的</p>
          <ul class="bag-box-ul">
            <li>
              <router-link class="bag-box-link bag-box-bag" to="/"
                >购物车
              </router-link>
            </li>
            <li>
              <router-link class="bag-box-link bag-box-order" to="/"
                >订单
              </router-link>
            </li>
            <li>
              <router-link class="bag-box-link bag-box-account" to="/"
                >账户
              </router-link>
            </li>
            <li>
              <router-link class="bag-box-link bag-box-sign-in" to="/"
                >登陆
              </router-link>
            </li>
          </ul>
          <el-image
            class="bag-icon"
            slot="reference"
            :src="require('../../../static/svg/header/bag.svg')"
          ></el-image>
        </el-popover>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "XHeader",
  data() {
    return {
      showCart: false,
      loading: true
    };
  }
};
</script>

<style>
.bag-box {
  margin: 0 auto;
  padding: 0 20px 10px;
  min-height: 90px;
  border: 1px solid #d2d2d7;
  border-radius: 18px;
}
</style>

<style scoped>
.header-container {
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 44px !important;
}
.header-container {
  height: 44px;
}
.header-icon {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  height: 44px;
  vertical-align: top;
}
.apple-logo {
  background-image: url(../../../static/svg/header/logo.svg);
  background-size: 16px 44px;
  background-position: center center;
  background-repeat: no-repeat;
  width: 16px;
}
.bag-icon {
  width: 17px;
  height: 44px;
  float: right;
  margin-right: 16px;
  cursor: pointer;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.top-bar-ul li {
  display: inline-flex;
  position: relative;
  float: left;
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 1em;
  padding: 0 20px;
}
.top-bar {
  display: flex;
  text-align: center;
  justify-content: center;
  line-height: 44px;
}
.top-bar-active {
  color: #fff !important;
}
.bag-box-empty {
  color: #6e6e73;
  margin: 0;
  padding: 35px 0 23px;
  text-align: center;
  letter-spacing: -0.016em;
}
.bag-box-ul li {
  margin: 0;
  padding: 0;
  border-top: 1px solid #d2d2d7;
}
.bag-box-link {
  color: #06c;
  display: block;
  line-height: 44px;
  padding: 0 28px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.016em;
  background-size: 23px 23px;
  background-position: -3px 10px;
  background-repeat: no-repeat;
}
.bag-box-link:hover {
  text-decoration: underline;
}
.bag-box-bag {
  background-image: url(../../../static/svg/header/bag-box/bag.svg);
}
.bag-box-order {
  background-image: url(../../../static/svg/header/bag-box/orders.svg);
}
.bag-box-account {
  background-image: url(../../../static/svg/header/bag-box/account.svg);
}
.bag-box-sign-in {
  background-image: url(../../../static/svg/header/bag-box/signIn.svg);
}
</style>
