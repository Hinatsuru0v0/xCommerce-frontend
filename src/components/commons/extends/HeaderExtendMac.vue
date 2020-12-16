<template>
  <ul class="header-extend-mac">
    <li>
      <nav-link
        product="MacBook Air"
        to="/"
        :width="52"
        img="/static/svg/navbar/mac/macbook_air.svg"
        status="brandNew"
      ></nav-link>
    </li>
    <li>
      <nav-link
        product="MacBook Pro 13 英寸"
        to="/"
        :width="54"
        img="/static/svg/navbar/mac/macbook_pro_13.svg"
        status="brandNew"
      ></nav-link>
    </li>
    <li>
      <nav-link
        product="MacBook Pro 16 英寸"
        to="/"
        :width="60"
        img="/static/svg/navbar/mac/macbook_pro_16.svg"
      ></nav-link>
    </li>
    <li>
      <nav-link
        product="iMac"
        to="/"
        :width="48"
        img="/static/svg/navbar/mac/imac.svg"
      ></nav-link>
    </li>
    <li>
      <nav-link
        product="iMac Pro"
        to="/"
        :width="48"
        img="/static/svg/navbar/mac/imac_pro.svg"
      ></nav-link>
    </li>
    <li>
      <nav-link
        product="Mac Pro"
        to="/"
        :width="37"
        img="/static/svg/navbar/mac/mac_pro.svg"
      ></nav-link>
    </li>
    <li>
      <nav-link
        product="Mac Mini"
        to="/"
        :width="28"
        img="/static/svg/navbar/mac/mac_mini.svg"
        status="brandNew"
      ></nav-link>
    </li>
    <li>
      <nav-link
        product="Pro Display XDR"
        to="/"
        :width="48"
        img="/static/svg/navbar/mac/pro_display_xdr.svg"
      ></nav-link>
    </li>
  </ul>
</template>

<script>
import NavLink from "@/components/commons/tools/NavLink";

export default {
  name: "HeaderExtendMac",
  components: {
    NavLink
  }
};
</script>

<style scoped>
.header-extend-mac {
  margin: 0 34px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.header-extend-mac li:first-child {
  margin-left: 0;
  padding-left: 4px;
}
.header-extend-mac li {
  display: inline-block;
  vertical-align: top;
  margin-left: -0.11765em;
  padding-left: 20px;
}
</style>
