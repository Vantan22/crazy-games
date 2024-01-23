<template>
  <div class="home">
    <local-carousel :data="data" title="new" />
    <local-carousel-with-tag title="Featured games" :data="data" />
    <local-carousel-with-tag title="New games" :data="data" />
    <local-carousel-vertical title="hello fau taen" :data="data" />
    <play-with-friend />
    <local-carousel
      v-for="item in array_test"
      :key="item"
      :title="'New games' + item"
      :data="data"
    />
    <about-section />
    <local-carousel-with-tag title="New games" :data="data" />
    <local-carousel-vertical title="hello fau taen" :data="data" />
    <div class="footer">
      <div class="button__shuffle" @click="directGame">
        <i class="bx bx-shuffle"></i>
        <h4>Random game</h4>
      </div>
      <div class="button-scroll" @click="scrollToTop">
        <i class="bx bx-up-arrow-alt"></i>
        <h4>Random game</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "@/containts/_value_carousel";
import LocalCarousel from "@/components/carousel/Carousel.vue";
import LocalCarouselVertical from "@/components/carousel/CarouselWithTagVertical.vue";
import LocalCarouselWithTag from "@/components/carousel/CarouselWithTag.vue";
import PlayWithFriend from "@/components/playWithFriend/PlayWithFriend.vue";
import AboutSection from "@/components/aboutSection/AboutSection.vue";

export default {
  name: "HomeView",
  components: {
    AboutSection,
    PlayWithFriend,
    LocalCarouselWithTag,
    LocalCarouselVertical,
    LocalCarousel,
  },
  data() {
    return {
      data,
      array_test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      windowWidth: 0,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    directGame() {
      this.$router.push("/game");
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
<style scoped>
.home {
  padding: 12px;
}
.footer {
  display: flex;
  gap: 12px;
  justify-content: center;
}
.button__shuffle {
  border-radius: 30px;
  transition: all 250ms ease 0s;
  border: 1px solid rgb(135, 138, 158);
  cursor: pointer;
  display: flex;
  gap: 12px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-family: Nunito, serif;
  font-weight: 800;
  font-size: 16px;
  box-sizing: border-box;
  padding: 8px 16px;
  background: transparent;
  color: rgb(239, 240, 247);
  height: 50px;
  min-width: 200px;
  width: 237px;
  &:hover {
    color: rgb(170, 173, 190);
  }
  & > i {
    font-size: 22px;
  }
}
.button-scroll {
  border-radius: 30px;
  transition: all 250ms ease 0s;
  border: 1px solid rgb(135, 138, 158);
  cursor: pointer;
  display: flex;
  gap: 12px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-family: Nunito, serif;
  font-weight: 800;
  font-size: 16px;
  box-sizing: border-box;
  padding: 8px 16px;
  background: rgb(104, 66, 255);
  color: rgb(249, 250, 255);
  height: 50px;
  min-width: 200px;
  width: 237px;
  &:hover {
    background: rgb(134, 104, 255);
  }
  & > i {
    font-size: 22px;
  }
}
</style>
