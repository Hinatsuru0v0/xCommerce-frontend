<template>
  <ul class="header-extend-nav">
    <li v-for="(item, index) in goods" :key="index">
      <a v-if="item.type === 'link'" class="nav-link" :href="item.link">
        <figure class="nav-link-icon" :style="handleFigureStyle(item)"></figure>
        <span class="nav-link-label">{{ item.name }}</span>
      </a>
      <router-link v-else class="nav-link" :to="item.link">
        <figure class="nav-link-icon" :style="handleFigureStyle(item)"></figure>
        <span class="nav-link-label">{{ item.name }}</span>
        <span class="nav-link-new" v-if="item.status === 'brandNew'">新款</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavComponent",
  props: {
    goods: Array
  },
  methods: {
    handleFigureStyle(item) {
      return {
        width: item.width + "px",
        "background-size": item.width + "px 54px",
        "background-image": "url(" + item.imgUrl + ")"
      };
    }
  }
};
</script>

<style scoped>
figure {
  margin: 0;
  padding: 0;
}
.header-extend-nav {
  margin: 0 34px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.header-extend-nav li:first-child {
  margin-left: 0;
  padding-left: 4px;
}
.header-extend-nav li {
  display: inline-block;
  vertical-align: top;
  margin-left: -0.11765em;
  padding: 0 20px;
}
.header-extend-nav .nav-link {
  display: block;
  padding: 0;
  margin-top: 3px;
  color: #1d1d1f;
  text-decoration: none;
}
.header-extend-nav .nav-link:hover {
  color: #06c;
}
.header-extend-nav .nav-link-icon {
  height: 54px;
  margin: 0 auto 7px;
  background: center bottom no-repeat;
}
.header-extend-nav .nav-link-label {
  margin: 0;
  display: block;
  font-size: 12px;
  line-height: 1.33337;
}
.header-extend-nav .nav-link-new {
  top: 100%;
  left: 0;
  width: 100%;
  color: #f56300;
  font-size: 10px;
  line-height: 1.2;
}
</style>
