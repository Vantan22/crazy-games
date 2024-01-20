<template>
  <div class="carousel-with-tag">
    <div class="title">
      <h2 class="title__content">{{ title }}</h2>
      <router-link class="title__link" to="/">Xem tất cả</router-link>
    </div>
    <div class="carousel">
      <div
        class="carousel-inner"
        :style="{ transform: `translateX(${translateValue}px)` }"
      >
        <div v-for="item in data" :key="item.id" class="carousel-item">
          <vertical-card
            :video-source="item.videoSource"
            :image-source="item.imageSource"
            :name="item.name"
            :url="item.url"
          />
        </div>
      </div>
      <button v-if="currentIndex > 0" @click="prevSlide" class="prev-button">
        <i class="bx bx-chevron-left"></i>
      </button>
      <button
        v-if="currentIndex < carouselItems.length - 1"
        @click="nextSlide"
        class="next-button"
      >
        <i class="bx bx-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import VerticalCard from "@/components/card/VerticalCard.vue";

export default {
  name: "local-carousel-vertical",
  components: { VerticalCard },
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      translateValue: 0,
      currentIndex: 0,
      carouselItems: [
        {
          id: 1,
          image: "path/to/image1.jpg",
          caption: "Caption 1",
        },
        {
          id: 2,
          image: "path/to/image2.jpg",
          caption: "Caption 2",
        },
        {
          id: 3,
          image: "path/to/image3.jpg",
          caption: "Caption 3",
        },
        {
          id: 4,
          image: "path/to/image4.jpg",
          caption: "Caption 4",
        },
        {
          id: 5,
          image: "path/to/image5.jpg",
          caption: "Caption 5",
        },
        {
          id: 6,
          image: "path/to/image6.jpg",
          caption: "Caption 6",
        },
        // Add more items as needed
      ],
    };
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateValue += this.slideWidth() - 38;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.carouselItems.length - 1) {
        this.currentIndex++;
        this.translateValue -= this.slideWidth() - 38;
      }
    },
    slideWidth() {
      return document.querySelector(".carousel-item").clientWidth;
    },
  },
};
</script>

<style scoped>
@import "@/assets/style/scss/_config_variables.scss";

.carousel-with-tag {
  position: relative;
  width: 100%;
  margin: 0 auto;

  .title {
    display: flex;
    align-items: center;
    column-gap: 16px;
    padding-left: 12px;

    .title__content {
      font-size: 14px;
      color: white;
      font-weight: 900;
    }

    .title__link {
      font-size: 14px;
      font-weight: 700;
      line-height: 12px;
      color: #6842ff;
    }
  }

  .carousel {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 16px 8px;
    overflow: hidden;
    z-index: 3;

    &:hover {
      .prev-button,
      .next-button {
        display: block;
      }
    }

    .carousel-inner {
      display: flex;
      transition: transform 0.5s ease-in-out;

      .carousel-item {
        min-width: fit-content;
        padding: 0 3px;
      }
    }

    .prev-button,
    .next-button {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(51, 51, 51, 0.8);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      height: calc(100% - 36px);
      width: 60px;
      z-index: 10;
    }

    .prev-button {
      left: 0;
    }

    .next-button {
      right: 0;
    }
  }
}
</style>
