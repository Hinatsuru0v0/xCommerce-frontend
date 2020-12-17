<template>
  <nav-component :goods="macProducts"></nav-component>
</template>

<script>
import NavComponent from "@/components/commons/tools/NavComponent";

export default {
  name: "HeaderExtendMac",
  components: {
    NavComponent
  },
  data() {
    return {
      macProducts: [
        {
          name: "MacBook Air",
          link: "/",
          width: 52,
          imgUrl: "/static/svg/navbar/mac/macbook_air.svg",
          status: "brandNew"
        },
        {
          name: "MacBook Pro 13 英寸",
          link: "/",
          width: 54,
          imgUrl: "/static/svg/navbar/mac/macbook_pro_13.svg",
          status: "brandNew"
        },
        {
          name: "MacBook Pro 16 英寸",
          link: "/",
          width: 60,
          imgUrl: "/static/svg/navbar/mac/macbook_pro_16.svg"
        },
        {
          name: "iMac",
          link: "/",
          width: 48,
          imgUrl: "/static/svg/navbar/mac/imac.svg"
        },
        {
          name: "iMac Pro",
          link: "/",
          width: 48,
          imgUrl: "/static/svg/navbar/mac/imac_pro.svg"
        },
        {
          name: "Mac Pro",
          link: "/",
          width: 28,
          imgUrl: "/static/svg/navbar/mac/mac_pro.svg"
        },
        {
          name: "Mac Mini",
          link: "/",
          width: 28,
          imgUrl: "/static/svg/navbar/mac/mac_mini.svg"
        },
        {
          name: "Pro Display XDR",
          link: "/",
          width: 48,
          imgUrl: "/static/svg/navbar/mac/pro_display_xdr.svg"
        },
        {
          name: "Pro Display XDR",
          link: "/",
          width: 48,
          imgUrl: "/static/svg/navbar/mac/pro_display_xdr.svg"
        },
        {
          name: "配件",
          link: "/",
          width: 29,
          imgUrl: "/static/svg/navbar/mac/mac_acc.svg"
        },
        {
          name: "Big Sur",
          type: "link",
          link: "https://www.apple.com.cn/macos/big-sur/",
          width: 42,
          imgUrl: "/static/svg/navbar/mac/mac_osx.svg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
