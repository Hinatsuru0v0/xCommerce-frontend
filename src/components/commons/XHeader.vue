<template>
  <el-header class="header-container">
    <el-row class="header-bar">
      <el-col :span="1">
        <router-link class="header-bar-icon apple-logo" to="/"></router-link>
      </el-col>
      <el-col :span="16" :offset="3">
        <ul class="header-bar-content">
          <li>
            <router-link class="link active" to="/">Apple Store</router-link>
          </li>
          <li>
            <router-link class="link" to="/">iPhone 12 Pro</router-link>
          </li>
          <li>
            <router-link class="link" to="/">AirPods Max</router-link>
          </li>
          <li>
            <router-link class="link" to="/">iPad Air</router-link>
          </li>
          <li>
            <router-link class="link" to="/">macOS Big Sur</router-link>
          </li>
          <li>
            <router-link class="link" to="/">iCloud</router-link>
          </li>
          <li>
            <router-link class="link" to="/">Support</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="1" :offset="3">
        <el-popover
          transition="el-zoom-in-top"
          placement="bottom"
          width="246"
          trigger="click"
          popper-class="header-bar-bag"
        >
          <p class="header-bar-bag-empty">你的购物袋是空的</p>
          <ul class="header-bar-bag-nav">
            <li>
              <router-link class="link bag-icon" to="/">购物袋</router-link>
            </li>
            <li>
              <router-link class="link order-icon" to="/">订单</router-link>
            </li>
            <li>
              <router-link class="link account-icon" to="/">账户</router-link>
            </li>
            <li>
              <router-link class="link sign-in-icon" to="/">登陆</router-link>
            </li>
          </ul>
          <el-image
            class="header-bar-bag-icon"
            slot="reference"
            src="/static/svg/header/bag.svg"
          ></el-image>
        </el-popover>
      </el-col>
    </el-row>
    <el-row
      class="header-nav"
      justify="space-between"
      align="middle"
      @mouseleave.native="changeShowExtendContent(null)"
    >
      <el-col :span="6" :offset="5">
        <ul class="header-nav-content">
          <li>
            <router-link class="link active" to="/">首页</router-link>
          </li>
          <li @mouseenter="changeShowExtendContent('mac')">
            <router-link class="link" to="/">Mac</router-link>
          </li>
          <li @mouseenter="changeShowExtendContent('ipad')">
            <router-link class="link" to="/">iPad</router-link>
          </li>
          <li @mouseenter="changeShowExtendContent('iphone')">
            <router-link class="link" to="/">iPhone</router-link>
          </li>
          <li @mouseenter="changeShowExtendContent('watch')">
            <router-link class="link" to="/">Watch</router-link>
          </li>
          <li @mouseenter="changeShowExtendContent('music')">
            <router-link class="link" to="/">Music</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" :offset="4">
        <el-autocomplete class="header-nav-search" prefix-icon="el-icon-search">
        </el-autocomplete>
      </el-col>
      <transition name="el-zoom-in-top">
        <el-card
          class="header-extend"
          :body-style="{ padding: '0' }"
          v-show="showExtendContent !== null"
        >
          <header-extend-mac
            v-show="showExtendContent === 'mac'"
          ></header-extend-mac>
        </el-card>
      </transition>
    </el-row>
  </el-header>
</template>

<script>
import HeaderExtendMac from "@/components/commons/extends/HeaderExtendMac";

export default {
  name: "XHeader",
  components: {
    HeaderExtendMac
  },
  data() {
    return {
      showExtendContent: null,
      search_content: ""
    };
  },
  methods: {
    changeShowExtendContent(val) {
      this.showExtendContent = val;
    }
  }
};
</script>

<style>
.header-bar-bag {
  margin: 0 auto;
  padding: 0 20px 10px;
  min-height: 90px;
  border: 1px solid #d2d2d7;
  border-radius: 18px;
}
.header-nav-search input.el-input__inner {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  height: 36px;
  width: 330px;
}
.header-nav-search i.el-input__icon {
  line-height: 36px;
}
</style>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.header-container {
  width: 100%;
  padding: 0;
}
.header-bar {
  background: rgba(0, 0, 0, 0.8);
  height: 44px;
  padding: 0 20px;
}
.header-bar-icon {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  height: 44px;
  vertical-align: top;
}
.apple-logo {
  background-image: url("/static/svg/header/logo.svg");
  background-size: 16px 44px;
  background-position: center center;
  background-repeat: no-repeat;
  width: 16px;
}
.header-bar-bag-icon {
  width: 17px;
  height: 44px;
  float: right;
  margin-right: 16px;
  cursor: pointer;
}
.header-bar-content,
.header-nav-content,
.header-nav-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-bar-content {
  height: 44px;
}
.header-bar-content li {
  display: inline-flex;
  position: relative;
  float: left;
  cursor: pointer;
  padding: 0 20px;
}
.header-bar-content .link {
  color: #f5f5f7;
  opacity: 0.8;
  font-size: 0.9em;
}
.header-bar-content .link:hover {
  opacity: 1;
}
.header-bar-content .active {
  opacity: 0.56;
}
.header-bar-bag-empty {
  color: #6e6e73;
  margin: 0;
  padding: 35px 0 23px;
  text-align: center;
  letter-spacing: -0.016em;
}
.header-bar-bag-nav li {
  margin: 0;
  padding: 0;
  border-top: 1px solid #d2d2d7;
}
.link {
  text-decoration: none;
}
.header-bar-bag-nav .link {
  color: #06c;
  display: block;
  line-height: 44px;
  padding: 0 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.016em;
  background-size: 23px 23px;
  background-position: -3px 10px;
  background-repeat: no-repeat;
}
.header-bar-bag-nav .link:hover {
  text-decoration: underline;
}
.header-bar-bag-nav .bag-icon {
  background-image: url("/static/svg/header/bag-box/bag.svg");
}
.header-bar-bag-nav .order-icon {
  background-image: url("/static/svg/header/bag-box/orders.svg");
}
.header-bar-bag-nav .account-icon {
  background-image: url("/static/svg/header/bag-box/account.svg");
}
.header-bar-bag-nav .sign-in-icon {
  background-image: url("/static/svg/header/bag-box/signIn.svg");
}
.header-nav {
  height: 75px;
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}
.header-nav-content {
  height: 75px;
}
.header-nav-content .link {
  margin-right: 40px;
  font-size: 1em;
  word-break: keep-all;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}
.header-nav-content .link:hover {
  color: #5079d9;
}
.header-nav-content .active {
  color: #333;
  font-weight: 700;
}
.header-nav-search {
  height: 70px;
}
.header-extend {
  height: 100px;
  width: 100%;
  background: #fbfbfb;
  padding: 8px 0;
  text-align: center;
  overflow: hidden;
  border: none;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
}
</style>
