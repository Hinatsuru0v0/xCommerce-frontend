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
            <router-link
              class="link"
              :to="{ name: 'product', params: { id: 'iphone-12-pro' } }"
              >iPhone 12 Pro</router-link
            >
          </li>
          <li>
            <router-link
              class="link"
              :to="{ name: 'product', params: { id: 'airpods-max' } }"
              >AirPods Max</router-link
            >
          </li>
          <li>
            <router-link
              class="link"
              :to="{ name: 'product', params: { id: 'ipad-air' } }"
              >iPad Air</router-link
            >
          </li>
          <li>
            <a class="link" href="https://www.apple.com.cn/macos/big-sur/"
              >macOS Big Sur</a
            >
          </li>
          <li>
            <a class="link" href="https://www.icloud.com">iCloud</a>
          </li>
          <li>
            <a class="link" href="https://support.apple.com/zh-cn">Support</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="1" :offset="3">
        <x-bar-bag :height="44"></x-bar-bag>
      </el-col>
    </el-row>
    <x-affix>
      <el-row
        class="header-nav"
        justify="space-between"
        align="middle"
        @mouseleave.native="changeShowExtendContent(null)"
      >
        <el-col :span="7" :offset="4">
          <ul class="header-nav-content">
            <li>
              <router-link class="link active" to="/">首页</router-link>
            </li>
            <li @mouseenter="changeShowExtendContent('mac')">
              <router-link class="link" to="/category/mac">Mac</router-link>
            </li>
            <li @mouseenter="changeShowExtendContent('ipad')">
              <router-link class="link" to="/category/ipad">iPad</router-link>
            </li>
            <li @mouseenter="changeShowExtendContent('iphone')">
              <router-link class="link" to="/category/iphone"
                >iPhone</router-link
              >
            </li>
            <li @mouseenter="changeShowExtendContent('watch')">
              <router-link class="link" to="/category/watch">Watch</router-link>
            </li>
            <li @mouseenter="changeShowExtendContent('music')">
              <router-link class="link" to="/category/music">Music</router-link>
            </li>
          </ul>
        </el-col>
        <el-col v-show="!fixStatus" :span="6" :offset="4">
          <el-autocomplete
            class="header-nav-search"
            prefix-icon="el-icon-search"
            v-model="searchContent"
            :fetch-suggestions="querySearch"
            @select="handleSearchResult"
          >
          </el-autocomplete>
        </el-col>
        <el-col v-show="fixStatus" :span="1" :offset="8">
          <x-bar-bag :height="75" :is-dark="true"></x-bar-bag>
        </el-col>
        <transition name="el-zoom-in-top">
          <el-card
            class="header-extend"
            :body-style="{ padding: '0' }"
            v-show="showExtendContent !== null"
          >
            <nav-component
              :goods="navBar['macNav']"
              v-show="showExtendContent === 'mac'"
            ></nav-component>
            <nav-component
              :goods="navBar['ipadNav']"
              v-show="showExtendContent === 'ipad'"
            ></nav-component>
            <nav-component
              :goods="navBar['iphoneNav']"
              v-show="showExtendContent === 'iphone'"
            ></nav-component>
            <nav-component
              :goods="navBar['watchNav']"
              v-show="showExtendContent === 'watch'"
            ></nav-component>
            <nav-component
              :goods="navBar['musicNav']"
              v-show="showExtendContent === 'music'"
            ></nav-component>
          </el-card>
        </transition>
      </el-row>
    </x-affix>
  </div>
</template>

<script>
import XAffix from "@/components/utils/XAffix";
import XBarBag from "@/components/commons/tools/XBarBag";
import NavComponent from "@/components/commons/tools/NavComponent";

export default {
  name: "XHeader",
  components: {
    NavComponent,
    XAffix,
    XBarBag
  },
  data() {
    return {
      fixStatus: false,
      products: [],
      navBar: [],
      searchContent: "",
      showExtendContent: null
    };
  },
  mounted() {
    this.getUpdatedNavbar();
  },
  created() {
    this.getUpdatedProducts();
    window.addEventListener("scroll", this.navFixed);
    window.addEventListener("scroll", this.navFixed);
  },
  methods: {
    getUpdatedNavbar() {
      this.$AJAX.get("http://localhost:8099/navbar").then(res => {
        this.navBar = res.data;
      });
    },
    changeShowExtendContent(val) {
      this.showExtendContent = val;
    },
    navFixed() {
      let fixStatus =
        document.documentElement.scrollTop || document.body.scrollTop;
      fixStatus >= 44 ? (this.fixStatus = true) : (this.fixStatus = false);
    },
    getUpdatedProducts() {
      this.$AJAX.get("http://localhost:8099/product").then(res => {
        this.products = res.data;
      });
    },
    querySearch(queryString, callback) {
      let products = this.products;
      let result = queryString
        ? products.filter(this.createFilter(queryString))
        : products;
      callback(result);
    },
    createFilter(queryString) {
      return products => {
        return (
          products.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSearchResult(val) {
      this.$router.push({ name: "product", params: { id: val.id } });
    }
  }
};
</script>

<style>
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
.header-nav {
  height: 75px;
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  background-color: #fff;
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
  z-index: 8888;
}
</style>
