<template>
  <div class="home-container">
    <div class="module-content">
      <div class="unit-wrapper">
        <h2 class="headline">iPhone 12</h2>
        <h3 class="sub-head">升维大提速</h3>
        <div class="price">
          RMB 229 每月或 RMB 5499 起，<br />
          还可折抵换购。
        </div>
        <div class="link">
          <router-link
            class="router-l"
            :to="{ name: 'product', params: { id: 'iphone-12' } }"
            >购买</router-link
          >
        </div>
      </div>
      <div class="unit-image-wrapper">
        <figure class="unit-image unit-iphone-12-image"></figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
h2,
h3 {
  margin: 0;
  padding: 0;
}
.home-container {
  display: grid;
  width: 100%;
  font-size: 17px;
}
.module-content {
  position: relative;
  box-sizing: border-box;
  height: 736px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fbfbfd;
}
.unit-wrapper {
  z-index: 2;
  position: relative;
  text-align: center;
  padding-top: 55px;
  flex-grow: 0;
  pointer-events: none;
}
.headline,
.sub-head {
  text-align: center;
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.headline {
  font-size: 56px;
  line-height: 1.07143;
  font-weight: 600;
}
.sub-head {
  font-size: 28px;
  line-height: 1.10722;
  font-weight: 400;
  letter-spacing: 0.004em;
}
.price {
  margin-top: 0.4em;
  color: #86868b;
}
.link {
  position: relative;
  text-decoration: none;
  display: inline-block;
  font-size: 21px;
  line-height: 1.381;
  font-weight: 400;
  letter-spacing: 0.011em;
  margin-top: 0.65em;
}
.router-l {
  text-decoration: none;
  color: #06c;
  pointer-events: all;
}
.unit-image-wrapper {
  overflow: visible;
  flex-grow: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.unit-image {
  z-index: 1;
  position: absolute;
  border: 0;
  margin: 0;
  padding: 0;
  left: calc(50% + 0px);
  right: auto;
  bottom: 0;
  top: auto;
  transform: translatex(-50%);
}
.unit-iphone-12-image {
  width: 3010px;
  height: 736px;
  background-size: 3010px 736px;
  background-repeat: no-repeat;
  background-image: url(/static/images/index/iphone-12.jpg);
}
</style>
