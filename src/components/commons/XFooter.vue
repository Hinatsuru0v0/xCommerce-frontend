<template>
  <div class="footer-container">
    <div class="footer-container-content">
      <div class="footer-shop">
        <p>
          更多选购方式：查找你附近的 Apple Store 零售店及更多门店，或者致电
          400-666-8800。
        </p>
      </div>
      <div class="footer-legal">
        <p class="copyright">
          Copyright © 2020 AliceNakiri Inc. 保留所有权利。
        </p>
        <p>隐私政策 | 使用条款 | 销售政策 | 法律信息 | 网站地图</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XFooter"
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 400;
  letter-spacing: -0.01em;
  background-color: #f5f5f7;
  color: #1d1d1f;
  min-width: 1024px;
  overflow: hidden;
  position: relative;
}
.footer-container-content {
  max-width: 980px;
  margin: 0 auto;
  box-sizing: content-box;
  pointer-events: auto;
  letter-spacing: normal;
  padding: 17px 0 21px;
}
.footer-shop {
  padding-bottom: 10px;
  color: #86868b;
  border-bottom: 1px solid #d2d2d7;
}
.footer-legal {
  padding-top: 12px;
  position: relative;
  top: -3px;
}
.copyright {
  margin-top: 5px;
  margin-right: 0;
  float: none;
  color: #86868b;
}
</style>
