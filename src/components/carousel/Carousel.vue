<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(${translateValue}px)` }"
    >
      <div
        v-for="(item, index) in carouselItemsMap"
        :key="index"
        class="carousel-item"
      >
        <template v-if="Array.isArray(item)">
          <div class="grid-card">
            <horizontal-card
              v-for="subItem in item"
              :key="subItem.id"
              video-source=""
              :image-source="subItem.image"
              :name="subItem.caption"
              :url="subItem.url"
            />
          </div>
        </template>
        <template v-else>
          <div>
            <horizontal-card
              size="medium"
              video-source=""
              :image-source="item.image"
              :name="item.caption"
              :url="item.url"
            />
          </div>
        </template>
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
</template>

<script>
import HorizontalCard from "@/components/card/HorizontalCard.vue";

export default {
  name: "local-carousel",
  components: { HorizontalCard },
  data() {
    return {
      translateValue: 0,
      currentIndex: 0,
      itemsPerSlide: 5,
      carouselItems: [
        {
          id: 1,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 1",
        },
        {
          id: 2,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 2",
        },
        {
          id: 3,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 3",
        },
        {
          id: 4,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 4",
        },
        {
          id: 5,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 5",
        },
        {
          id: 6,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 6",
        },
        {
          id: 7,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 1",
        },
        {
          id: 8,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 2",
        },
        {
          id: 9,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 3",
        },
        {
          id: 10,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 4",
        },
        {
          id: 11,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 5",
        },
        {
          id: 12,
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          caption: "Caption 6",
        },
        // Add more items as needed
      ],
    };
  },

  computed: {
    carouselItemsMap() {
      const result = [];
      let tempGroup = [];
      for (let i = 0; i < this.carouselItems.length; i++) {
        if (i % 5 === 0) {
          // Bắt đầu một nhóm mới
          const newItem = { ...this.carouselItems[i] };
          result.push(newItem);
          tempGroup = [];
        } else {
          // Thêm đối tượng vào nhóm tạm thời
          tempGroup.push({ ...this.carouselItems[i] });
        }

        // Nếu đến phần tử cuối cùng hoặc đến phần tử cuối cùng của một nhóm
        if (i === this.carouselItems.length - 1 || (i + 1) % 5 === 0) {
          if (tempGroup.length > 0) {
            result.push([...tempGroup]);
          }
        }
      }
      return result;
    },
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
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: 2;
}

.carousel-item {
  min-width: fit-content;
  padding: 0 3px;
}

.grid-card {
  width: 504px;
  height: 285px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
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
