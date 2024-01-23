<template>
  <div>
    <header-nav @toggleSidebar="isShowSideBar = !isShowSideBar" />
    <side-bar v-show="isShowSideBar && !isMobile" />
    <div
      class="main-content-container"
      :class="[{ 'show-sidebar': isShowSideBar }, { 'is-mobile': isMobile }]"
    >
      <router-view />
    </div>
  </div>
</template>
<script>
import HeaderNav from "@/components/header/Header.vue";
import SideBar from "@/components/sideBar/SideBar.vue";
import { data } from "@/containts/_value_carousel";

export default {
  name: "HomeLayout",
  components: {
    SideBar,
    HeaderNav,
  },
  data() {
    return {
      isShowSideBar: true,
      data,
      array_test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      windowWidth: 0,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 1200;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  handleResize() {
    this.windowWidth = window.innerWidth;
  },
};
</script>
<style lang="scss" scoped>
.main-content-container {
  width: 100%;
  height: 100%;
  margin-left: 0;
  padding: 0 0 20px 0;

  &.show-sidebar {
    width: calc(100% - 200px);
    margin-left: 200px;
  }
  &.show-sidebar.is-mobile {
    width: 100%;
    margin-left: 0;
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
