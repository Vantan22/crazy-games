<template>
  <div class="search-result-item" @click="handleNavigate">
    <img
      class="search-result-item__thumbnail"
      :src="thumbnail"
      :alt="`search result item ${name}`"
    />
    <div class="search-result-item__name">{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "search-result-item",
  props: {
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleNavigate() {
      this.$router.push({
        name: "game",
        params: { name: this.linkTo },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/_config_variables.scss";

.search-result-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  column-gap: 4px;
  cursor: pointer;

  &:hover {
    background: $dark_purple;
  }

  &__thumbnail {
    height: 40px;
    width: 50px;
    object-fit: cover;
  }

  &__name {
    margin-left: 4px;
    color: $white;
    font-size: $font_size_11;
    font-weight: $font_weight_700;
  }
}
</style>
