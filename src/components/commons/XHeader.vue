<template>
  <div class="header-container">
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
          placement="bottom"
          width="246"
          trigger="click"
          popper-class="header-bar-bag"
          transition="el-zoom-in-top"
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
              <router-link class="link sign-in-icon" to="/login"
                >登陆</router-link
              >
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
          <header-extend-i-pad
            v-show="showExtendContent === 'ipad'"
          ></header-extend-i-pad>
          <header-extend-i-phone
            v-show="showExtendContent === 'iphone'"
          ></header-extend-i-phone>
          <header-extend-watch
            v-show="showExtendContent === 'watch'"
          ></header-extend-watch>
          <header-extend-music
            v-show="showExtendContent === 'music'"
          ></header-extend-music>
        </el-card>
      </transition>
    </el-row>
  </div>
</template>

<script>
import HeaderExtendMac from "@/components/commons/extends/HeaderExtendMac";
import HeaderExtendIPad from "@/components/commons/extends/HeaderExtendIPad";
import HeaderExtendIPhone from "@/components/commons/extends/HeaderExtendIPhone";
import HeaderExtendWatch from "@/components/commons/extends/HeaderExtendWatch";
import HeaderExtendMusic from "@/components/commons/extends/HeaderExtendMusic";

export default {
  name: "XHeader",
  components: {
    HeaderExtendMac,
    HeaderExtendIPad,
    HeaderExtendIPhone,
    HeaderExtendWatch,
    HeaderExtendMusic
  },
  data() {
    return {
      showExtendContent: null
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
  height: 36px;
  width: 330px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
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
.link {
  text-decoration: none;
}
.header-container {
  width: 100%;
}
.header-container .header-bar {
  background: rgba(0, 0, 0, 0.8);
  height: 44px;
  padding: 0 20px;
}
.header-bar .header-bar-icon {
  display: inline-block;
  position: relative;
  height: 44px;
  vertical-align: top;
  box-sizing: border-box;
}
.header-bar .apple-logo {
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
  padding: 0 20px;
  cursor: pointer;
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
  font-size: 1em;
  color: rgba(0, 0, 0, 0.7);
  word-break: keep-all;
  margin-right: 40px;
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
.header-container .header-extend {
  height: 100px;
  width: 100%;
  background: #fbfbfb;
  padding: 8px 0;
  border: none;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
  overflow: hidden;
}
</style>
