<template>
  <div class="page-container">
    <div class="product-container">
      <div class="product-pic">
        <x-affix :offset="75">
          <div class="sticky-box">
            <img :src="productInfo['pic']" :alt="productInfo.value" />
          </div>
        </x-affix>
      </div>
      <div class="product-purchase">
        <div class="purchase-box">
          <div class="product-info" v-if="productInfo">
            <div class="product-title">
              {{ productInfo.value }}
            </div>
            <div class="product-summary">
              <ul class="product-summary-addon">
                <li v-for="item in userSelected.selectedArray" :key="item">
                  {{ item }}
                </li>
                <li v-for="item in productInfo['summaries']" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="product-specification">
              <x-product-specification
                :product="productInfo"
                :userSelected="userSelected"
              ></x-product-specification>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar-container">
      <div class="bottom-bar">
        <div class="bottom-bar-left">
          <div class="delivery">
            <div class="dudeInfo">
              <span class="dudeInfo-label">预计发货日期:</span>
              <ul>
                <li>1-2 日</li>
                <li>免费送货</li>
                <li>由 顺丰快递 提供送货服务</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bottom-bar-right">
          <div class="purchase-info">
            <div class="price-finance">
              <span class="price-primary"
                >RMB {{ userSelected.choosePrice }}</span
              >
            </div>
            <div class="add-to-cart">
              <button class="add-to-cart-btn" @click="addToCart">
                添加到购物袋
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XAffix from "@/components/utils/XAffix";
import XProductSpecification from "@/components/card/XProductSpecification";

export default {
  name: "Product",
  components: {
    XAffix,
    XProductSpecification
  },
  data() {
    return {
      productInfo: {},
      userSelected: {
        id: null,
        selectedArray: [],
        choosePrice: 0,
        quantity: 1
      }
    };
  },
  watch: {
    $route() {
      this.initData();
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.userSelected = {
        id: null,
        selectedArray: [],
        choosePrice: 0,
        quantity: 1
      };
      this.getProductInfo();
    },
    getProductInfo() {
      this.$AJAX
        .get(`http://localhost:8099/product/${this.$route.params.id}`)
        .then(res => {
          this.productInfo = res.data;
        });
    },
    addToCart() {
      if (this.userSelected.choosePrice !== 0) {
        if (this.$store.state.isLogin) {
          let cart = this.$store.getters.getCart;
          let isAdd = false;
          if (cart.length > 0) {
            for (let item in cart) {
              if (cart[item].model.id === this.userSelected.id) {
                cart[item].model.quantity++;
                isAdd = true;
              }
            }
          }
          if (!isAdd) {
            cart.push({
              product: {
                id: this.productInfo.id,
                name: this.productInfo.value,
                pic: this.productInfo.pic
              },
              model: this.userSelected
            });
          }
          this.$AJAX
            .patch(
              `http://localhost:8099/user/${this.$store.state.loginUser.id}`,
              { cart: cart }
            )
            .then(() => {
              this.$notify.success({
                title: "添加成功",
                message: "您选择的商品已经加入您的购物袋！",
                offset: 44
              });
            })
            .catch(() => {
              this.$notify.error({
                title: "添加失败",
                message: "服务器出现错误，请稍后再试！",
                offset: 44
              });
            });
        } else {
          this.$notify.error({
            title: "添加失败",
            message: "请登陆后再尝试添加购物车！",
            offset: 44
          });
          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
        }
      } else {
        this.$notify.error({
          title: "添加失败",
          message: "请先选择商品规格后再尝试添加！",
          offset: 44
        });
      }
    }
  }
};
</script>

<style scoped>
ul,
li,
h1,
h2 {
  font-weight: 400;
  list-style: none;
  margin: 0;
  padding: 0;
}
.page-container {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.product-container {
  margin: 0 auto;
  padding: 52px 0 14px;
  min-height: 495px;
  width: 980px;
  position: relative;
}
.product-pic {
  line-height: 1.42861;
  position: relative;
}
.sticky-box {
  top: 0;
  margin-bottom: 60px;
  position: absolute;
  text-align: center;
}
.sticky-box img {
  width: 410px;
  height: auto;
  margin-top: 25px;
}
.product-pic,
.product-purchase {
  box-sizing: border-box;
  position: relative;
  width: 50%;
  margin: 0;
  padding: 0;
  float: left;
  min-height: 2px;
}
.purchase-box {
  width: 490px;
  position: relative;
  padding-bottom: 14px;
}
.product-title {
  font-size: 32px;
  line-height: 1.125;
  font-weight: 600;
  letter-spacing: 0.004em;
  margin-bottom: 20px;
  padding: 20px 35px 0 0;
}
.product-summary {
  border-top: 1px solid #d6d6d6;
  margin-bottom: 20px;
  padding-top: 18px;
}
.product-summary-addon li {
  font-size: 14px;
  line-height: 1.42861;
  list-style: none;
  margin-bottom: 11px;
}
.product-specification {
  border-top: 1px solid #d6d6d6;
  padding-top: 0;
}
.bottom-bar-container {
  min-height: 130px;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #d6d6d6;
  position: fixed;
  font-size: 12px;
  line-height: 1.33341;
  font-weight: 400;
  width: 100%;
  background-color: #f8f8f8;
  z-index: 9999;
  box-sizing: border-box;
}
.bottom-bar {
  margin: 0 auto;
  width: 980px;
}
.bottom-bar-left {
  clear: both;
  display: inline;
  float: left;
  width: 100%;
  max-width: 490px;
  padding-top: 26px;
  padding-bottom: 16px;
}
.delivery {
  max-width: 190px;
}
.dudeInfo {
  position: relative;
  min-height: 25px;
  padding-left: 29px;
}
.dudeInfo-label {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 3px;
}
.bottom-bar-right {
  max-width: 490px;
  display: inline;
  float: right;
  padding-top: 24px;
  padding-bottom: 20px;
}
.purchase-info {
  display: flex;
  align-items: flex-start;
}
.price-finance {
  text-align: right;
  vertical-align: middle;
}
.price-primary {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.525;
  letter-spacing: 0.004em;
}
.add-to-cart {
  width: auto;
  padding-top: 6px;
  padding-left: 15px;
}
.add-to-cart-btn {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.47059;
  background: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #07c;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  min-width: 30px;
  padding: 4px 15px;
  text-align: center;
  white-space: nowrap;
}
</style>
