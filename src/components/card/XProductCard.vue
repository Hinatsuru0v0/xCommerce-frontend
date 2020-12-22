<template>
  <router-link class="link list-item" :to="{ name: 'product', params: { id: product.id } }">
    <el-card class="item-card" :body-style="{ padding: '0' }">
      <figure class="item-cover">
        <img :src="product.pic" :alt="product.name" />
      </figure>
      <article>
        <h3>{{ product.value }}</h3>
        <h5 class="item-desc">{{ product.desc }}</h5>
        <span class="item-price">¥ {{ product.price }}</span>
      </article>
    </el-card>
  </router-link>
</template>

<script>
export default {
  name: "XProductCard",
  props: {
    product: Object
  }
};
</script>

<style scoped>
h3,
h5 {
  margin: 0;
  padding: 0;
}
.link {
  text-decoration: none;
}
.list-item {
  cursor: pointer;
  flex: 0 0 20%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.list-item:hover .item-card {
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.06);
}
.list-item:hover .item-desc {
  color: #d44d44;
}
.item-card {
  color: #1d1d1f;
  height: 374px;
  border: none;
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  border-radius: initial;
  transition: box-shadow 0.15s ease-out;
  text-align: center;
}
.list-item .item-cover {
  margin: 0 auto;
  padding: 20px 0 0;
  box-sizing: border-box;
}
.list-item .item-cover img {
  width: 204px;
  height: 204px;
  margin: 0 auto;
}
.list-item .item-desc {
  padding: 15px 10px 30px;
  font-size: 12px;
  color: #86868b;
}
.list-item .item-price {
  color: #d44d44;
  font-size: 18px;
  font-weight: bolder;
  margin: 20px 0;
  transition: all 0.1s ease-out;
}
</style>
