<template>
  <el-popover
    placement="bottom"
    width="246"
    trigger="click"
    popper-class="header-bar-bag"
    transition="el-zoom-in-top"
  >
    <ul
      v-if="$store.state.isLogin && $store.getters.getCart.length"
      class="header-bar-bag-list"
    >
      <li
        class="list-item"
        :class="{
          'list-item-first': index === 0,
          'list-item-last': index === $store.getters.getCart.length - 1
        }"
        v-for="(item, index) in $store.getters.getCart"
        :key="index"
      >
        <router-link
          class="link"
          :to="{ name: 'product', params: { id: item.product.id } }"
        >
          <span class="item-column-1">
            <img
              class="item-pic"
              :src="item.product.pic"
              :alt="item.product.name"
            />
          </span>
          <span class="item-column-2">{{ item.product.name }}</span>
        </router-link>
      </li>
    </ul>
    <p v-else class="header-bar-bag-empty">你的购物袋是空的</p>
    <ul class="header-bar-bag-nav">
      <li>
        <router-link v-if="!$store.state.isLogin" class="link bag-icon" to="/"
          >购物袋</router-link
        >
        <router-link
          v-if="$store.state.isLogin"
          class="link bag-icon"
          to="/cart"
          >购物袋 ({{ $store.getters.getCart.length }})</router-link
        >
      </li>
      <li>
        <router-link class="link order-icon" to="/">订单</router-link>
      </li>
      <li>
        <router-link class="link account-icon" to="/">账户</router-link>
      </li>
      <li>
        <router-link
          v-if="!$store.state.isLogin"
          class="link sign-in-icon"
          to="/login"
          >登陆</router-link
        >
        <el-button
          v-else
          type="text"
          class="link sign-in-icon"
          @click="handleLogout"
          >注销 {{ $store.state.loginUser.username }}</el-button
        >
      </li>
    </ul>
    <img
      class="header-bar-bag-icon"
      slot="reference"
      :height="height"
      :src="
        isDark
          ? '/static/svg/header/bag-dark.svg'
          : '/static/svg/header/bag.svg'
      "
      alt="bag-icon"
    />
  </el-popover>
</template>

<script>
export default {
  name: "XBarBag",
  props: {
    height: Number,
    isDark: Boolean
  },
  methods: {
    handleLogout() {
      this.$store.commit("logout");
      this.$router.go(0);
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
.header-bar-bag-list .list-item-first {
  margin-top: 4px !important;
}
.header-bar-bag-list .list-item-last {
  border-bottom-style: none !important;
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
.header-bar-bag-icon {
  width: 17px;
  float: right;
  margin-right: 16px;
  cursor: pointer;
}
.header-bar-bag-list {
  list-style: none;
  margin-bottom: 8px;
}
.header-bar-bag-list .list-item {
  padding: 16px 0;
  border-bottom: 1px solid #d2d2d7;
}
.header-bar-bag-list .link {
  margin: 0;
  padding: 0;
  display: table;
  min-height: 60px;
  width: 100%;
  color: #1d1d1f;
  text-decoration: none;
}
.header-bar-bag-list .item-column-1,
.header-bar-bag-list .item-column-2 {
  display: table-cell;
  vertical-align: middle;
}
.header-bar-bag-list .item-column-1 {
  padding: 0 12px 0 0;
  width: 25%;
}
.header-bar-bag-list .item-column-2 {
  margin: 16px 0;
  width: 75%;
}
.item-column-1 .item-pic {
  max-width: 60px;
  height: auto;
  border: 0;
  vertical-align: middle;
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
  font-weight: 400;
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
</style>
