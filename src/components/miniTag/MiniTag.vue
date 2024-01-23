<template>
  <router-link :to="url" class="mini-tag">
    <img :src="imageSource" class="mini-tag__img" :alt="name" />
    <span class="mini-tag__content">{{ name }}</span>
  </router-link>
</template>
<script>
export default {
  name: "miniTag",
  props: {
    name: {
      type: String,
      default: ".io",
    },
    imageSource: {
      type: String,
      default:
        "https://images.crazygames.com/cryzen-io/20230825063754/cryzen-io-cover?auto=format%2Ccompress&q=90&cs=strip&ch=DPR&w=178&h=100&fit=crop",
    },
    url: {
      type: String,
      default: "#",
    },
  },
};
</script>
<style scoped lang="scss">
.mini-tag {
  width: fit-content;
  border-radius: 30px;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
  border: none;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: Nunito, serif;
  color: #a48eff;
  font-weight: 700;
  font-size: 16px;
  box-sizing: border-box;
  margin-bottom: 8px;
  margin-right: 4px;
  margin-left: 4px;
  height: 32px;
  padding: 8px 16px 8px 8px;
  background-color: rgb(71, 72, 83);
  &__img {
    user-select: none;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
  }
}
</style>
