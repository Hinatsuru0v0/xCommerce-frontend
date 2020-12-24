<template>
  <div class="checkout-container">
    <div class="companion-bar">
      <x-affix :offset="75">
        <div class="companion-bar-sticky">
          <div class="companion-bar-content">
            <div class="companion-bar-left">
              <div class="companion-bar-title">结账</div>
            </div>
            <div class="companion-bar-right">
              <div class="companion-bar-summary">
                订单摘要: RMB {{ totalPrice }}
              </div>
            </div>
          </div>
        </div>
      </x-affix>
    </div>

    <div class="orbit-module">
      <div class="checkout-shipping">
        <div class="checkout-shipping-title">
          <h1 class="checkout-shipping-title-h1">
            你的送货地址是哪里？
          </h1>
        </div>
        <div class="checkout-shipping-container">
          <fieldset>
            <legend class="checkout-shipping-fieldset">
              输入你的姓名和地址:
            </legend>
            <div class="shipping-main">
              <div class="shipping-address">
                <div class="shipping-address-column">
                  <div class="shipping-address-row">
                    <div class="row">
                      <div class="column">
                        <div class="shipping-field shipping-firstname">
                          <x-label-input
                            :data="order.firstname"
                            label="姓氏"
                          ></x-label-input>
                        </div>
                        <div class="shipping-field shipping-lastname">
                          <x-label-input
                            :data="order.lastname"
                            label="名字"
                          ></x-label-input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="column">
                        <div class="shipping-field">
                          <x-label-input
                            :data="order.desc"
                            label="详细地址"
                          ></x-label-input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="column">
                        <div class="shipping-field">
                          <x-label-input
                            :data="order.country"
                            label="国家/地区"
                            :disabled="true"
                          ></x-label-input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="column">
                        <div class="shipping-field">
                          <x-label-input
                            :data="order.phone"
                            label="收件人手机号码"
                          ></x-label-input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="checkout-contact-container">
          <fieldset>
            <legend class="checkout-shipping-fieldset">
              你的联系方式是什么？
            </legend>
          </fieldset>
          <div class="shipping-main">
            <div class="shipping-address">
              <div class="shipping-address-column">
                <div class="shipping-address-row">
                  <div class="row">
                    <div class="column">
                      <div class="shipping-field">
                        <x-label-input
                          :data="order.email"
                          label="电子邮箱"
                        ></x-label-input>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <div class="shipping-field">
                        <x-label-input
                          :data="order.contact"
                          label="联系人电话号码"
                        ></x-label-input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="checkout-shipping checkout-payment">
        <div class="checkout-payment-title">
          <h1 class="checkout-shipping-title-h1">
            你希望如何付款？
          </h1>
        </div>
        <div class="checkout-shipping-container">
          <fieldset>
            <legend class="checkout-shipping-fieldset">
              常用支付方式:
            </legend>
            <div class="shipping-main">
              <div class="shipping-address">
                <div class="shipping-address-column">
                  <div class="shipping-address-row">
                    <div class="row">
                      <div class="column">
                        <div class="form-selector">
                          <el-radio-group
                            class="shipping-field"
                            v-model="order.payment"
                          >
                            <el-radio-button label="aliPay">
                              <img
                                class="payment-option-img"
                                src="/static/images/others/Alipay.jpeg"
                                alt="aliPay"
                              />
                            </el-radio-button>
                            <el-radio-button label="wechatPay">
                              <img
                                class="payment-option-img"
                                src="/static/images/others/WeChat.jpeg"
                                alt="aliPay"
                              />
                            </el-radio-button>
                          </el-radio-group>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="checkout-shipping checkout-action">
        <div class="checkout-action-btn">
          <div class="checkout-action-column">
            <button class="checkout-action-main-btn" @click="checkoutOrder">
              确认订单
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XAffix from "@/components/utils/XAffix";
import XLabelInput from "@/components/input/XLabelInput";
export default {
  name: "Checkout",
  components: { XLabelInput, XAffix },
  data() {
    return {
      cart: [],
      order: {
        firstname: {
          content: ""
        },
        lastname: {
          content: ""
        },
        desc: {
          content: ""
        },
        country: {
          content: "中国"
        },
        phone: {
          content: ""
        },
        email: {
          content: ""
        },
        contact: {
          content: ""
        },
        payment: ""
      }
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
    if (this.$store.state.isLogin) {
      this.refreshCartData();
      if (this.cart.length === 0) {
        this.$router.push({ path: "/cart" });
      }
    } else {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    refreshCartData() {
      this.cart = this.$store.getters.getCart;
      this.order.firstname.content = this.$store.getters.getOrderInfo.firstname;
      this.order.lastname.content = this.$store.getters.getOrderInfo.lastname;
      this.order.desc.content = this.$store.getters.getOrderInfo.desc;
      this.order.country.content = this.$store.getters.getOrderInfo.country;
      this.order.phone.content = this.$store.getters.getOrderInfo.phone;
      this.order.email.content = this.$store.getters.getOrderInfo.email;
      this.order.contact.content = this.$store.getters.getOrderInfo.contact;
    },
    checkoutOrder() {
      if (
        this.order.firstname.content.trim() === "" ||
        this.order.lastname.content.trim() === "" ||
        this.order.desc.content.trim() === "" ||
        this.order.country.content.trim() === "" ||
        this.order.phone.content.trim() === "" ||
        this.order.email.content.trim() === "" ||
        this.order.contact.content.trim() === ""
      ) {
        this.$notify.error({
          title: "提交失败",
          message: "请确认送货地址完整性后重新提交！",
          offset: 44
        });
      } else if (
        !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
          this.order.phone.content.trim()
        ) ||
        !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
          this.order.contact.content.trim()
        )
      ) {
        this.$notify.error({
          title: "提交失败",
          message: "请确认输入的手机号格式后重新提交！",
          offset: 44
        });
      } else if (this.order.payment === "") {
        this.$notify.error({
          title: "提交失败",
          message: "请选择支付方式后重新提交！",
          offset: 44
        });
      } else {
        let order = {
          firstname: this.order.firstname.content,
          lastname: this.order.lastname.content,
          desc: this.order.desc.content,
          country: this.order.country.content,
          phone: this.order.phone.content,
          email: this.order.email.content,
          contact: this.order.contact.content
        };
        this.$store.commit("setOrderInfo", order);
        this.$store.commit("setCart", []);
        this.$AJAX
          .patch(
            `http://localhost:8099/user/${this.$store.state.loginUser.id}`,
            {
              cart: [],
              order: order
            }
          )
          .then(() => {});
        for (let i in this.cart) {
          this.$AJAX
            .get(`http://localhost:8099/product/${this.cart[i].product.id}`)
            .then(res => {
              let sales = res.data["sales"] + this.cart[i].model.quantity;
              console.log(sales);
              this.$AJAX
                .patch(
                  `http://localhost:8099/product/${this.cart[i].product.id}`,
                  {
                    sales: sales
                  }
                )
                .then(() => {});
            });
        }
        this.$notify.success({
          title: "提交成功",
          message: "您的订单已提交成功！将于近期送达！",
          offset: 44
        });
        setTimeout(() => {
          this.$router.push({ path: "/" });
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
h1,
fieldset {
  margin: 0;
  padding: 0;
}
fieldset {
  border: 0;
}
.companion-bar {
  font-size: 17px;
  line-height: 1.47059;
  margin-top: 5px;
  padding: 0;
  min-height: 51px;
  z-index: 3;
  position: relative;
}
.companion-bar-sticky {
  background: #fff;
  width: 100%;

  min-height: 52px;
  box-sizing: border-box;
}
.companion-bar-content {
  border-bottom: 1px solid #d2d2d7;
  width: 980px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.companion-bar-left {
  flex-basis: 50%;
  max-width: 50%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.companion-bar-title {
  font-size: 24px;
  line-height: 1.16667;
  letter-spacing: 0.009em;
  font-weight: 500;
  padding-top: 14px;
}
.companion-bar-right {
  font-size: 14px;
  line-height: 1.42859;
  font-weight: 400;
  padding-top: 21px;
  margin-left: auto;
  box-sizing: border-box;
  min-width: 0;
}
.companion-bar-summary {
  border: 0;
  color: #06c;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 0;
  vertical-align: inherit;
}
.checkout-shipping {
  margin: 0 auto;
  width: 980px;
  border-bottom: 1px solid #d2d2d7;
}
.checkout-shipping-title {
  margin: 65px 0 40px;
}
.checkout-payment-title {
  margin: 35px 0 40px;
}
.checkout-shipping-title-h1 {
  outline: none;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0;
}
.checkout-contact-container,
.checkout-shipping-container {
  position: relative;
}
.checkout-shipping-fieldset {
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 600;
  letter-spacing: 0.009em;
  padding-bottom: 13px;
}
.shipping-main {
  flex-basis: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.shipping-address {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.shipping-address-column {
  flex-basis: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.shipping-address-row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  padding-top: 13px;
}
.row {
  flex-basis: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.column {
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  max-width: 50%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.shipping-field {
  overflow: visible;
  flex: 1;
  max-width: 100%;
}
.shipping-firstname {
  padding-left: 0;
  padding-right: 0.41176rem;
}
.shipping-lastname {
  padding-right: 0;
  padding-left: 0.41176rem;
}
.checkout-contact-container {
  padding: 18px 0 35px;
}
.checkout-payment {
  padding-bottom: 34px;
}
.form-selector {
  position: relative;
  display: flex;
}
.payment-option-img {
  width: 140px;
  height: 26px;
}
.checkout-action {
  padding-top: 39px;
  padding-bottom: 30px;
  position: relative;
  border: 0;
}
.checkout-action-btn {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.checkout-action-column {
  flex-basis: 50%;
  max-width: 50%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.checkout-action-main-btn {
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
  border-radius: 12px;
  white-space: normal;
  display: inline-block;
  border: 0;
}
</style>

<style>
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #fff;
}
</style>
