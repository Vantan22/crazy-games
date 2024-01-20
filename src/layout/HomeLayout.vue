<template>
  <div>
    <header-nav @toggleSidebar="isShowSideBar = !isShowSideBar" />
    <side-bar v-show="isShowSideBar" />
    <div
      class="main-content-container"
      :style="isShowSideBar ? 'margin-left: 50px;' : 'margin-left: 0px;'"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, autem dicta
      dignissimos dolore hic labore nostrum odio pariatur porro sapiente!
      Aspernatur consequuntur dolorum labore necessitatibus non nulla quibusdam,
      ratione voluptatibus.
    </div>
  </div>
</template>
<script>
import HeaderNav from "@/components/header/Header.vue";
import SideBar from "@/components/sideBar/SideBar.vue";

export default {
  name: "HomeLayout",
  components: { SideBar, HeaderNav },
  data() {
    return {
      isShowSideBar: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.main-content-container {
  width: fit-content;
  height: 2000px;
  background: #42b983;
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
