<template>
  <div class="search-result-all" @click="handleNavigate">
    <div class="search-result-all__name">{{ text }}</div>
  </div>
</template>
<script>
import { platformType } from "@/containts/browser_service";
export default {
  name: "search-result-all",
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  created() {
    console.log(platformType);
  },
  methods: {
    handleNavigate() {
      this.$router.push(`/search?q=${this.searchQuery}`);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/_config_variables.scss";

.search-result-all {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  column-gap: 4px;
  cursor: pointer;
  height: 56px;

  &:hover {
    background: $dark_purple;
  }

  &__name {
    margin-left: 4px;
    color: $white;
    font-size: $font_size_11;
    font-weight: $font_weight_700;
  }
}
</style>
