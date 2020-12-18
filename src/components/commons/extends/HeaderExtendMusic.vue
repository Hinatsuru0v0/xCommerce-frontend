<template>
  <nav-component :goods="musicProducts"></nav-component>
</template>

<script>
import NavComponent from "@/components/commons/tools/NavComponent";

export default {
  name: "HeaderExtendMusic",
  components: {
    NavComponent
  },
  data() {
    return {
      musicProducts: [
        {
          name: "Apple Music",
          type: "link",
          link: "https://www.apple.com.cn/apple-music/",
          width: 28,
          imgUrl: "/static/svg/navbar/music/apple_music.svg"
        },
        {
          name: "AirPods",
          link: "/",
          width: 28,
          imgUrl: "/static/svg/navbar/music/airpods.svg"
        },
        {
          name: "AirPods Pro",
          link: "/",
          width: 37,
          imgUrl: "/static/svg/navbar/music/airpods_pro.svg"
        },
        {
          name: "AirPods Max",
          link: "/",
          width: 32,
          imgUrl: "/static/svg/navbar/music/airpods_max.svg",
          status: "brandNew"
        },
        {
          name: "HomePod mini",
          link: "/",
          width: 22,
          imgUrl: "/static/svg/navbar/music/homepod_mini.svg",
          status: "brandNew"
        },
        {
          name: "HomePod",
          link: "/",
          width: 28,
          imgUrl: "/static/svg/navbar/music/homepod.svg"
        },
        {
          name: "iPod touch",
          link: "/",
          width: 17,
          imgUrl: "/static/svg/navbar/music/ipod_touch.svg",
          status: "brandNew"
        },
        {
          name: "Music 配件",
          link: "/",
          width: 31,
          imgUrl: "/static/svg/navbar/music/music_acc.svg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
