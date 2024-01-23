<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(${translateValue}px)` }"
    >
      <div>
        <div
          v-for="(item, index) in carouselItems.slice(0, 20)"
          :key="index"
          class="carousel-item"
          @click="handleRouteEntered(`/${item.id}`)"
        >
          <div class="carousel-item__content">
            <i :class="item.icon"></i>
            <p>{{ item.caption }}</p>
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(item, index) in carouselItems.slice(0, 20)"
          :key="index"
          class="carousel-item"
          @click="handleRouteEntered(index)"
        >
          <div class="carousel-item__content">
            <i :class="item.icon"></i>
            <div>{{ item.caption }}</div>
          </div>
        </div>
      </div>
    </div>
    <button v-if="currentIndex > 0" @click="prevSlide" class="prev-button">
      <i class="bx bx-chevron-left"></i>
    </button>
    <button
      v-if="currentIndex < data.length - 1"
      @click="nextSlide"
      class="next-button"
    >
      <i class="bx bx-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import { card_values_examble } from "@/containts/testValues/card_values_examble";

export default {
  name: "local-carousel-about",
  data() {
    return {
      translateValue: 0,
      currentIndex: 0,
      itemsPerSlide: 5,
      data: card_values_examble,
      carouselItems: [
        {
          id: 1,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 2,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 3,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 4,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 5,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 6,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 7,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 8,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 9,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 10,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 11,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        {
          id: 12,
          icon: "bx bx-ghost",
          caption: "Honor",
        },
        // Add more items as needed
      ],
    };
  },
  methods: {
    handleRouteEntered(route) {
      this.$router.push(route);
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateValue += this.slideWidth() - 38;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.data.length - 1) {
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
.carousel {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  z-index: 3;

  &:hover {
    .prev-button,
    .next-button {
      display: block;
    }
  }
}

.carousel-inner {
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > div {
    display: flex;
  }
}

.carousel-item {
  min-width: fit-content;
  padding: 0 3px;
}

.carousel-item__content {
  display: flex;
  height: 102px;
  background-color: rgb(26, 27, 40);
  margin-right: 8px;
  padding: 16px;
  border-radius: 10px;
  min-width: 180px;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background-color: #2f3148;
  }
  & > div {
    font-weight: 700;
    color: rgb(249, 250, 255);
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > i {
    font-size: 44px;
    color: #6842ff;
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
</style>
