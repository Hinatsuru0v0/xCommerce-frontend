<template>
  <el-container :class="{ 'container-fixed': $route.name === 'product' }">
    <el-header class="no-style is-always-top" height="119">
      <x-header></x-header>
    </el-header>
    <el-main class="no-style">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import XHeader from "../components/commons/XHeader";

export default {
  name: "Index",
  components: {
    XHeader
  }
};
</script>

<style scoped>
.container-fixed {
  padding-bottom: 130px;
}
.no-style {
  margin: 0;
  padding: 0;
}
.is-always-top {
  z-index: 888;
}
</style>
