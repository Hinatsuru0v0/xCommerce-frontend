<template>
  <div class="container">
    <div class="category-container">
      <div class="category-container-wrapper">
        <ul class="category-toolbox">
          <li>
            <el-button
              type="text"
              class="link"
              :class="{ active: option === 'comprehensive' }"
              @click="changeComprehensiveSort"
              >综合排序</el-button
            >
          </li>
          <li>
            <el-button
              type="text"
              class="link"
              :class="{ active: option === 'sales' }"
              @click="changeSalesSort"
              >销量排序</el-button
            >
          </li>
          <li>
            <el-button
              type="text"
              class="link"
              :class="{ active: option === 'priceAsc' }"
              @click="changePriceSortAsc"
              >价格低到高</el-button
            >
          </li>
          <li>
            <el-button
              type="text"
              class="link"
              :class="{ active: option === 'priceDesc' }"
              @click="changePriceSortDesc"
              >价格高到低</el-button
            >
          </li>
        </ul>
        <div v-show="products.length === 0" class="category-empty">
          <img src="/static/images/notice/no-search.png" alt="no search" />
          <span>抱歉！暂时还没有相关商品</span>
        </div>
        <div v-show="products.length > 0" class="category-list">
          <x-product-card
            v-for="(item, index) in products"
            :key="index"
            :product="item"
          ></x-product-card>
        </div>
        <el-pagination
          :page-size="itemPerPage"
          :pager-count="7"
          :current-page="currentPage"
          :hide-on-single-page="true"
          layout="total, prev, pager, next"
          :total="totalProduct"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import XProductCard from "@/components/card/XProductCard";

export default {
  name: "Category",
  components: {
    XProductCard
  },
  data() {
    return {
      option: "comprehensive",
      totalProduct: 0,
      currentPage: 1,
      itemPerPage: 20,
      products: []
    };
  },
  mounted() {
    this.getProductsLength();
    this.getUpdatedProducts("name,id,price", "asc,asc,asc");
  },
  watch: {
    $route() {
      this.getProductsLength();
      this.getUpdatedProducts("name,id,price", "asc,asc,asc");
    }
  },
  methods: {
    getProductsLength() {
      this.$AJAX
        .get("http://localhost:8099/product", {
          params: {
            category: this.$route.params.category
          }
        })
        .then(res => {
          this.totalProduct = res.data.length;
        });
    },
    getUpdatedProducts(sort, order) {
      this.$AJAX
        .get("http://localhost:8099/product", {
          params: {
            category: this.$route.params.category,
            _sort: sort,
            _order: order,
            _page: this.currentPage,
            _limit: this.itemPerPage
          }
        })
        .then(res => {
          this.products = res.data;
        });
    },
    changeComprehensiveSort() {
      this.option = "comprehensive";
      this.getUpdatedProducts("name,id,price", "asc,asc,asc");
    },
    changeSalesSort() {
      this.option = "sales";
      this.getUpdatedProducts("sales,name,id", "desc,asc,asc");
    },
    changePriceSortAsc() {
      this.option = "priceAsc";
      this.getUpdatedProducts("price,name,id", "asc,asc,asc");
    },
    changePriceSortDesc() {
      this.option = "priceDesc";
      this.getUpdatedProducts("price,name,id", "desc,asc,asc");
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      switch (this.option) {
        case "comprehensive":
          this.getUpdatedProducts("name,id,price", "asc,asc,asc");
          break;
        case "sales":
          this.getUpdatedProducts("sales,name,id", "desc,asc,asc");
          break;
        case "priceAsc":
          this.getUpdatedProducts("price,name,id", "asc,asc,asc");
          break;
        case "priceDesc":
          this.getUpdatedProducts("price,name,id", "desc,asc,asc");
          break;
      }
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  overflow: hidden;
  background-color: #ededed;
}
.category-container {
  max-width: 1220px;
  min-height: calc(100vh - 320px);
  margin: 0 auto;
}
.category-container .category-container-wrapper {
  width: 1220px;
  margin: 0 auto 40px;
}
.category-container-wrapper .category-toolbox {
  height: 60px;
  list-style: none;
  padding-left: 9px;
}
.category-container-wrapper .category-toolbox li {
  user-select: none;
  float: left;
}
.category-toolbox .link {
  float: left;
  color: #86868b;
  font-size: 12px;
  line-height: 60px;
  margin-right: 40px;
  transition: color 0.3s ease;
}
.category-toolbox .active,
.category-toolbox .link:hover {
  color: #5079d9;
}
.category-container-wrapper .category-empty {
  display: flex;
  flex-direction: column;
  width: 400px;
  font-size: 30px;
  padding: 100px 0;
  text-align: center;
  align-self: center;
}
.category-container-wrapper .category-empty img {
  width: 320px;
  margin: 0 auto;
  border: none;
  outline: none;
}
.category-container-wrapper .category-list {
  min-height: 375px;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
</style>
