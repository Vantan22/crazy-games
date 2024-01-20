<template>
  <router-link class="logo" to="/">
    <img class="logo__img" src="@/assets/images/icon/ic_logo.svg" alt="logo" />
    <img
      class="logo__brand-name"
      src="@/assets/images/icon/ic_text_logo.svg"
      alt="brand-name"
    />
  </router-link>
</template>

<script>
export default {
  name: "logo-brand",
};
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  height: 35px;
  align-items: center;
  column-gap: 8px;

  &__img {
    width: 31px;
    height: 35px;
  }

  &__brand-name {
    height: 35px;
    object-fit: cover;
  }
}
</style>
