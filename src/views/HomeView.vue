<template>
  <div class="home">
    <local-carousel :data="data" title="new" />
    <local-carousel-with-tag title="Featured games" :data="data" />
    <local-carousel-with-tag title="New games" :data="data" />
    <local-carousel-vertical title="hello fau taen" :data="data" />
    <local-carousel
      v-for="item in array_test"
      :key="item"
      :title="'New games' + item"
      :data="data"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import { data } from "@/containts/_value_carousel";
import LocalCarousel from "@/components/carousel/Carousel.vue";
import LocalCarouselVertical from "@/components/carousel/CarouselWithTagVertical.vue";
import LocalCarouselWithTag from "@/components/carousel/CarouselWithTag.vue";

export default {
  name: "HomeView",
  components: { LocalCarouselWithTag, LocalCarouselVertical, LocalCarousel },
  data() {
    return {
      data,
      array_test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>
<style scoped>
.home {
  padding: 12px;
}
</style>
