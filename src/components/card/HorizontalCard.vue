<template>
  <div class="card-container">
    <BadgeTag v-if="!isMedium && !isHovered" type="hot" />
    <div
      class="card"
      :class="{
        'medium-card': isMedium,
      }"
      :style="[{ width: width }, { height: height }]"
      @click="goToPage"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img v-if="!isHovered" :src="imageSource" :alt="'thumbnail_' + name" />
      <div class="card__content">
        <video
          v-if="isHovered"
          class="card__content__video"
          :ref="name"
          loop
          autoplay
          muted
        >
          <source :src="videoSource" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="card__content__name">
          <span class="card__content__name__text">{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BadgeTag from "@/components/badgeTag/BageTag.vue";

export default {
  name: "horizontal-card",
  components: { BadgeTag },
  props: {
    size: {
      type: String,
      default: "small",
      validator(value) {
        return ["small", "medium"].includes(value);
      },
    },
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageSource: {
      type: String,
      required: true,
    },
    videoSource: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
  computed: {
    isMedium() {
      return this.size === "medium";
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    goToPage() {
      this.$router.push(this.url);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/_config_variables.scss";

.card-container {
  position: relative;
  width: fit-content;
  height: max-content;
}

/* Thiết lập kích thước cho card và video */
.card {
  width: 250px;
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid $primary_color;
  }

  &.medium-card {
    width: 500px;
    height: 285px;
  }

  &__content {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__name {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
      z-index: 10;

      &__text {
        position: absolute;
        bottom: 13px;
        left: 8px;
        color: $white;
        font-size: $font_size_12;
        font-weight: $font_weight_700;
      }
    }
  }
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
