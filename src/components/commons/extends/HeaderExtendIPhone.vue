<template>
  <nav-component :goods="iphoneProducts"></nav-component>
</template>

<script>
import NavComponent from "@/components/commons/tools/NavComponent";

export default {
  name: "HeaderExtendIPhone",
  components: {
    NavComponent
  },
  data() {
    return {
      iphoneProducts: [
        {
          name: "iPhone 12 Pro",
          link: "/",
          width: 37,
          imgUrl: "/static/svg/navbar/iphone/iphone_12_pro.svg",
          status: "brandNew"
        },
        {
          name: "iPhone 12",
          link: "/",
          width: 36,
          imgUrl: "/static/svg/navbar/iphone/iphone_12.svg",
          status: "brandNew"
        },
        {
          name: "iPhone SE",
          link: "/",
          width: 19,
          imgUrl: "/static/svg/navbar/iphone/iphone_se.svg"
        },
        {
          name: "iPhone 11",
          link: "/",
          width: 22,
          imgUrl: "/static/svg/navbar/iphone/iphone_11.svg"
        },
        {
          name: "iPhone XR",
          link: "/",
          width: 22,
          imgUrl: "/static/svg/navbar/iphone/iphone_xr.svg"
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
          width: 35,
          imgUrl: "/static/svg/navbar/iphone/iphone_acc.svg"
        },
        {
          name: "iOS 14",
          type: "link",
          link: "https://www.apple.com.cn/ios/ios-14/",
          width: 32,
          imgUrl: "/static/svg/navbar/iphone/iphone_ios.svg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
