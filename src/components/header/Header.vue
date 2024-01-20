<template>
  <div class="header center examplex">
    <vs-navbar
      color="rgba(33,34,51,0.9)"
      fixed
      text-white
      active-text
      square
      center-collapsed
      class="nav-bar"
    >
      <template #left>
        <img
          class="icon-menu"
          src="@/assets/images/icon/ic_menu_show.svg"
          alt="icon-menu"
          @click="$emit('toggleSidebar')"
        />
        <logo-brand />
      </template>
      <search-games />
      <template #right>
        <img
          class="icon-heart"
          src="@/assets/images/icon/ic_heart.svg"
          alt="icon-heart"
        />
        <vs-button
          class="button-header"
          @click="$router.push({ name: 'home' })"
          circle
        >
          Log in
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
import LogoBrand from "@/components/logo/Logo.vue";
import SearchGames from "@/components/Search/SearchGames.vue";

export default {
  name: "header-nav",
  components: {
    SearchGames,
    LogoBrand,
  },
  data: () => ({
    active: "home",
    activeSidebar: false,
  }),
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/_config_variables.scss";

.header {
  width: 100%;
  height: 60px;

  .nav-bar {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .icon-menu {
    width: 24px;
    height: 24px;
    object-fit: cover;
    margin-right: 16px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .icon-heart {
    width: 24px;
    height: 24px;
    object-fit: cover;
    margin-right: 16px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .button-header {
    font-size: $font_size_16 !important;
    font-weight: $font_weight_800 !important;
  }
}
</style>
