<template>
  <nav-component :goods="ipadProducts"></nav-component>
</template>

<script>
import NavComponent from "@/components/commons/tools/NavComponent";

export default {
  name: "HeaderExtendIPad",
  components: {
    NavComponent
  },
  data() {
    return {
      ipadProducts: [
        {
          name: "iPad Pro",
          link: "/",
          width: 41,
          imgUrl: "/static/svg/navbar/ipad/ipad_pro.svg"
        },
        {
          name: "iPad Air",
          link: "/",
          width: 30,
          imgUrl: "/static/svg/navbar/ipad/ipad_air.svg",
          status: "brandNew"
        },
        {
          name: "iPad",
          link: "/",
          width: 41,
          imgUrl: "/static/svg/navbar/ipad/ipad.svg",
          status: "brandNew"
        },
        {
          name: "iPad mini",
          link: "/",
          width: 22,
          imgUrl: "/static/svg/navbar/ipad/ipad_mini.svg"
        },
        {
          name: "Apple Pencil",
          link: "/",
          width: 3,
          imgUrl: "/static/svg/navbar/ipad/apple_pencil.svg"
        },
        {
          name: "键盘",
          link: "/",
          width: 65,
          imgUrl: "/static/svg/navbar/ipad/keyboard.svg"
        },
        {
          name: "AirPods",
          link: "/",
          width: 27,
          imgUrl: "/static/svg/navbar/music/airpods.svg"
        },
        {
          name: "配件",
          link: "/",
          width: 31,
          imgUrl: "/static/svg/navbar/ipad/ipad_acc.svg"
        },
        {
          name: "iPadOS",
          type: "link",
          link: "https://www.apple.com.cn/ipados/ipados-14/",
          width: 33,
          imgUrl: "/static/svg/navbar/ipad/ipad_os.svg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
