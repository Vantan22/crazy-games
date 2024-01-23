<template>
  <div class="about-me">
    <div class="about-me__content">
      <h2 class="about-me__content__title">About CrazyGames</h2>
      <div class="about-me__content__desc">
        CrazyGames features the latest and best free online games. You can enjoy
        playing fun games without interruptions from downloads, intrusive ads,
        or pop-ups. Just load up your favorite games instantly in your web
        browser and enjoy the experience.
      </div>
      <a href="#">Learn more</a>
    </div>
    <div class="about-me__list">
      <local-carousel-about />
    </div>
  </div>
</template>
<script setup>
import LocalCarouselAbout from "@/components/carousel/CarouselAboutItem.vue";
</script>
<style lang="scss" scoped>
.about-me {
  display: flex;
  width: 100%;
  gap: 12px;
  padding-bottom: 12px;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: rgb(33, 34, 51);
    position: relative;
    width: 424px;
    flex-shrink: 0;
    padding: 20px;
    height: 218px;
    &__title {
      font-weight: 900;
      color: #fff;
      margin-block: 0;
    }
    &__desc {
      color: rgb(189, 191, 206);
      font-size: 14px;
    }
  }
  &__list {
    width: calc(100% - 424px);
    height: 218px;
  }
}
</style>
