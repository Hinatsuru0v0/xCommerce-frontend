<template>
  <section class="w3l-error-61-404">
    <div class="error-61-main">
      <div class="wrapper">
        <div class="errors-16-top">
          <div class="errors-16-info">
            <h3>404</h3>
            <p>sorry! 页面找不到了</p>
            <el-button
              class="back-to-home"
              type="text"
              @click="$router.push('/')"
              >返回主页</el-button
            >
          </div>
        </div>
        <div class="copyright-footer">
          <div class="copy-right">
            <p>
              Copyright &copy;
              <a href="https://alicenakiri.com/" target="_blank">AliceNakiri</a>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "404"
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

p,
h3,
ul {
  margin: 0;
  padding: 0;
}

p {
  color: #485460;
}

.wrapper {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.back-to-home {
  margin-top: 20px;
  font-size: 34px;
  color: #fff;
}

@media (min-width: 576px) {
  .wrapper {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .wrapper {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .wrapper {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .wrapper {
    max-width: 1140px;
  }
}

.w3l-error-61-404 .error-61-main {
  background: url(/static/images/others/banner.jpg) no-repeat bottom;
  background-size: cover;
  height: 100vh;
  z-index: 0;
  position: relative;
  display: grid;
  align-items: center;
}

.w3l-error-61-404 .error-61-main:before {
  content: "";
  background: rgba(66, 21, 2, 0.45);
  position: absolute;
  top: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
}

.w3l-error-61-404 .errors-16-top {
  max-width: 600px;
}

.w3l-error-61-404 .error-61-main h3 {
  font-size: 223px;
  line-height: 200px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

.w3l-error-61-404 .error-61-main p {
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  letter-spacing: 1px;
}

.w3l-error-61-404 .copyright-footer {
  margin: 100px auto 0;
}

.w3l-error-61-404 .copy-right p {
  font-size: 14px;
  line-height: 29px;
  color: #f9f9f9;
}

.w3l-error-61-404 .copy-right a {
  color: #f9f9f9;
}
@media (max-width: 1280px) {
  .w3l-error-61-404 .error-61-main h3 {
    font-size: 180px;
    line-height: 170px;
  }
}
@media (max-width: 1280px) {
  .w3l-error-61-404 .error-61-main h3 {
    font-size: 125px;
    line-height: 120px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 20px;
  }
}

@media (max-width: 990px) {
  .w3l-error-61-404 .error-61-main h3 {
    font-size: 125px;
    line-height: 110px;
  }
}

@media (max-width: 667px) {
  .w3l-error-61-404 .error-61-main h3 {
    font-size: 115px;
    line-height: 110px;
  }
}

@media (max-width: 600px) {
  .w3l-error-61-404 .error-61-main {
    background: url(/static/images/others/banner.jpg) no-repeat right;
    background-size: cover;
  }
}
@media (max-width: 440px) {
  .w3l-error-61-404 .error-61-main h3 {
    font-size: 105px;
    line-height: 100px;
  }
}

@media (max-width: 384px) {
  .w3l-error-61-404 .error-61-main h3 {
    font-size: 95px;
    line-height: 90px;
  }
}
</style>
