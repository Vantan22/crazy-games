<template>
  <div>
    <header-nav @toggleSidebar="isShowSideBar = !isShowSideBar" />
    <side-bar v-show="isShowSideBar" />
    <div
      class="main-content-container"
      :class="{ 'show-sidebar': isShowSideBar }"
    >
      <local-carousel />
      <local-carousel-with-tag title="Featured games" :data="data" />
      <local-carousel-with-tag title="New games" :data="data" />
      <local-carousel-vertical title="hello fau taen" :data="data" />
      <local-carousel-with-tag
        v-for="item in array_test"
        :key="item"
        :title="'New games' + item"
        :data="data"
      />
    </div>
  </div>
</template>
<script>
import HeaderNav from "@/components/header/Header.vue";
import SideBar from "@/components/sideBar/SideBar.vue";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import LocalCarousel from "@/components/carousel/Carousel.vue";
import LocalCarouselWithTag from "@/components/carousel/CarouselWithTag.vue";
import { data } from "@/containts/_value_carousel";
import LocalCarouselVertical from "@/components/carousel/CarouselWithTagVertical.vue";

export default {
  name: "HomeLayout",
  components: {
    LocalCarouselVertical,
    LocalCarouselWithTag,
    LocalCarousel,
    SideBar,
    HeaderNav,
  },
  data() {
    return {
      isShowSideBar: true,
      data,
      array_test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  updated() {
    console.log(this.isShowSideBar, "updated");
  },
};
</script>
<style lang="scss" scoped>
.main-content-container {
  width: 100%;
  height: 2000px;
  margin-left: 0;
  padding: 0 0 20px 0;

  &.show-sidebar {
    width: calc(100% - 68px);
    margin-left: 60px;
  }
}

.carrousel {
}
</style>
<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #8a8c9a;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background-color: #212233; /* Màu nền của thanh cuộn */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #aaadbe;
}
</style>
