<template>
  <nav-component :goods="watchProducts"></nav-component>
</template>

<script>
import NavComponent from "@/components/commons/tools/NavComponent";

export default {
  name: "HeaderExtendWatch",
  components: {
    NavComponent
  },
  data() {
    return {
      watchProducts: [
        {
          name: "Apple Watch Series 6",
          link: "/",
          width: 23,
          imgUrl: "/static/svg/navbar/watch/watch_series_6.svg",
          status: "brandNew"
        },
        {
          name: "Apple Watch SE",
          link: "/",
          width: 25,
          imgUrl: "/static/svg/navbar/watch/watch_se.svg",
          status: "brandNew"
        },
        {
          name: "Apple Watch Series 3",
          link: "/",
          width: 25,
          imgUrl: "/static/svg/navbar/watch/watch_series_3.svg"
        },
        {
          name: "Apple Watch Nike",
          link: "/",
          width: 25,
          imgUrl: "/static/svg/navbar/watch/watch_nike.svg",
          status: "brandNew"
        },
        {
          name: "Apple Watch Hermès",
          link: "/",
          width: 37,
          imgUrl: "/static/svg/navbar/watch/watch_hermes.svg",
          status: "brandNew"
        },
        {
          name: "表带",
          link: "/",
          width: 17,
          imgUrl: "/static/svg/navbar/watch/watch_bands.svg"
        },
        {
          name: "AirPods",
          link: "/",
          width: 37,
          imgUrl: "/static/svg/navbar/music/airpods.svg"
        },
        {
          name: "配件",
          link: "/",
          width: 52,
          imgUrl: "/static/svg/navbar/watch/watch_acc.svg"
        },
        {
          name: "watchOS",
          type: "link",
          link: "https://www.apple.com.cn/watchos/watchos-7/",
          width: 35,
          imgUrl: "/static/svg/navbar/watch/watch_os.svg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
