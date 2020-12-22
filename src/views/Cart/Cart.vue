<template>
  <div v-if="cart" class="cart-container">
    <div v-show="cart.length > 0" class="cart-bag-box">
      <div class="bag-header">
        <h1 class="bag-header-title">你的购物袋总计 RMB {{ totalPrice }}</h1>
        <div class="bag-header-service">
          所有订单均可享受免费送货和退货服务。
        </div>
        <div class="bag-header-btn">
          <div class="bag-header-btn-pos">
            <div class="bag-header-order">
              <div class="order-btn">
                <button class="order-main-btn">结账</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol class="bag-item">
        <li v-for="(item, index) in cart" :key="index">
          <div class="item-box">
            <div class="item-image-box">
              <img
                class="item-image"
                :src="item.product.pic"
                :alt="item.product.value"
              />
            </div>
            <div class="item-info-box">
              <div class="item-info-detail">
                <div class="item-info-title">
                  <h2 class="item-info-title-h2">{{ item.product.name }}</h2>
                </div>
                <div class="item-quantity">
                  <el-input-number
                    class="item-quantity-tool"
                    v-model="item.model.quantity"
                    size="small"
                    @change="handleChange(item.model.quantity, item.model.id)"
                  ></el-input-number>
                </div>
                <div class="item-controller">
                  <div class="item-total-price">
                    RMB {{ item.model.choosePrice * item.model.quantity }}
                  </div>
                  <div class="item-delete-btn">
                    <el-button
                      class="delete-btn"
                      type="text"
                      @click="handleDeleteItem(index)"
                      >移除</el-button
                    >
                  </div>
                </div>
              </div>
              <div class="orbit-module">
                <div class="orbit-module-child">
                  <ul class="product-summary-addon">
                    <li
                      v-for="(item, sIndex) in item.model.selectedArray"
                      :key="sIndex"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
      <div class="bag-summary">
        <div class="bag-summary-box">
          <div class="delivery-fee">
            <div class="summary-label">运费</div>
            <div class="summary-value">免费</div>
          </div>
          <div class="summary-total">
            <div class="summary-label">合计</div>
            <div class="summary-value">RMB {{ totalPrice }}</div>
          </div>
        </div>
      </div>
      <div class="bag-purchase">
        <div class="bag-summary-box">
          <div class="purchase-btn">
            <button class="purchase-main-btn">结账</button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="cart.length === 0" class="empty-bag-box">
      <div class="empty-bag">
        <h1 class="empty-bag-header">你的购物袋中没有商品。</h1>
        <div class="empty-bag-message">在线购物并享受免费的送货上门服务。</div>
      </div>
      <div class="empty-btn">
        <div class="empty-btn-container">
          <router-link class="empty-btn-primary" to="/">继续购物</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart.vue",
  data() {
    return {
      cart: []
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      if (this.cart.length === 0) {
        return 0;
      }
      for (let i in this.cart) {
        total += this.cart[i].model.choosePrice * this.cart[i].model.quantity;
      }
      return total;
    }
  },
  created() {
    this.refreshCartData();
  },
  methods: {
    refreshCartData() {
      this.cart = this.$store.getters.getCart;
    },
    handleDeleteItem(index) {
      this.cart.splice(index, 1);
      this.saveChange();
    },
    handleChange(currentValue, id) {
      console.log(currentValue, id);
      if (currentValue <= 0) {
        for (let index in this.cart) {
          if (this.cart[index].model.id === id) {
            this.cart.splice(index, 1);
          }
        }
      }
      this.saveChange();
    },
    saveChange() {
      this.$store.commit("setCart", this.cart);
      this.refreshCartData();
      this.$AJAX
        .patch(`http://localhost:8099/user/${this.$store.state.loginUser.id}`, {
          cart: this.cart
        })
        .then(() => {});
    }
  }
};
</script>

<style scoped>
h1,
h2,
ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
h1 + * {
  margin-top: 0.8em;
}
.cart-container {
  font-size: 17px;
}
.cart-bag-box {
  width: 980px;
  margin: 0 auto 50px;
  padding-top: 50px;
}
.bag-header {
  text-align: center;
  padding-bottom: 60px;
  padding-top: 10px;
  border-bottom: 1px solid #d2d2d7;
  flex-basis: 100%;
  max-width: 100%;
}
.bag-header-title {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0;
  padding-bottom: 2px;
}
.bag-header-service {
  padding-top: 13px;
  font-weight: 600;
}
.bag-header-btn {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.bag-header-btn-pos {
  flex-basis: 100%;
  max-width: 100%;
}
.bag-header-order {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}
.order-btn {
  width: 290px;
  float: right;
  box-sizing: border-box;
  margin-top: 31px;
  padding: 0;
  min-width: 0;
}
.order-main-btn {
  width: 100%;
  box-sizing: border-box;
  white-space: normal;
  display: block;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-size: 17px;
  line-height: 1.17648;
  font-weight: 400;
  min-width: 28px;
  padding: 8px 16px;
  background: #0071e3;
  color: #fff;
  border: 0;
}
.bag-item {
  list-style: none;
  margin: 4.17647rem 0 20px;
}
.item-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-bottom: 78px;
  padding-bottom: 76px;
  border-bottom: 1px solid #d2d2d7;
}
.item-image-box {
  width: 203px;
  text-align: center;
  margin-top: 2px;
  flex-basis: 25%;
  max-width: 25%;
  box-sizing: border-box;
  padding: 0;
  min-width: 0;
}
.item-image {
  cursor: pointer;
  max-width: 203px;
  max-height: 203px;
  width: auto;
  height: auto;
  float: none;
}
.item-info-box {
  flex-basis: 75%;
  max-width: 75%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.item-info-detail {
  display: flex;
  flex-wrap: wrap;
}
.item-info-title {
  padding-right: 20px;
  box-sizing: border-box;
  flex-basis: 50%;
  max-width: 50%;
}
.item-info-title-h2 {
  font-size: 28px;
  line-height: 1.16667;
  font-weight: 600;
  letter-spacing: 0.009em;
}
.item-quantity {
  width: 14%;
}
.item-controller {
  width: 36%;
}
.item-total-price {
  text-align: right;
  padding-left: 0.58824rem;
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 600;
  letter-spacing: 0.009em;
}
.item-delete-btn {
  text-align: right;
  margin-top: 12px;
}
.delete-btn {
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
}
.orbit-module {
  border-top: 1px solid #d2d2d7;
  margin-top: 21px;
}
.orbit-module-child {
  border-top: none;
  margin-top: 0;
  padding-top: 21px;
}
.product-summary-addon li {
  margin-top: 3px;
}
.product-summary-addon li:first-child {
  margin-top: 0;
}
.bag-summary {
  margin-top: 41px;
}
.bag-summary-box {
  flex-basis: 75%;
  max-width: 75%;
  margin-left: 25%;
}
.delivery-fee {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.summary-label {
  padding-right: 20px;
}
.summary-value {
  text-align: right;
  padding-left: 20px;
}
.summary-label,
.summary-value {
  font-size: 17px;
  line-height: 1.47059;
  flex-grow: 1;
}
.summary-total {
  border-top: 1px solid #d2d2d7;
  margin-top: 16px;
  padding-top: 19px;
  display: flex;
  justify-content: space-between;
}
.summary-total .summary-label,
.summary-total .summary-value {
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 600;
}
.bag-purchase {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.purchase-btn {
  margin-top: 35px;
  width: 360px;
  float: right;
  box-sizing: border-box;
  padding: 0;
  min-width: 0;
}
.purchase-main-btn {
  cursor: pointer;
  text-align: center;
  background: #0071e3;
  color: #fff;
  font-size: 17px;
  line-height: 1.17648;
  font-weight: 400;
  min-width: 28px;
  padding: 18px 31px;
  box-sizing: border-box;
  width: 100%;
  white-space: normal;
  display: inline-block;
  border-radius: 12px;
  border: 0;
}
.empty-bag-box {
  width: 980px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
}
.empty-bag {
  flex-basis: 75%;
  max-width: 75%;
}
.empty-bag-header {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0;
  padding-bottom: 2px;
}
.empty-btn {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.empty-btn-container {
  margin-right: 15px;
  margin-top: 14px;
  width: 21.17647rem;
  box-sizing: border-box;
  padding: 0;
  min-width: 0;
}
.empty-btn-primary {
  font-size: 17px;
  line-height: 1.17648;
  font-weight: 400;
  min-width: 28px;
  padding: 18px 31px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  display: block;
  width: 100%;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  color: #1d1d1f;
}
</style>
