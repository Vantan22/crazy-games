<template>
  <div class="card-container">
    <div
      class="card"
      :class="{
        'medium-card': isMedium,
      }"
      @click="goToPage"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img v-if="!isHovered" :src="imageSource" :alt="'thumbnail_' + name" />
      <div v-else class="card__content">
        <div class="card__content__container">
          <div class="card-hover-font">
            <div class="card-hover-font__content">
              <img
                class="card-hover-font__content__img"
                src="https://images.crazygames.com/games/capybara-clicker-2/cover_2x3-1698042124876.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=329&fit=crop"
                alt=""
              />
              <span class="card-hover-font__content__text">{{ name }}</span>
              <vs-button circle class="card-hover-font__content__button">
                button ne
              </vs-button>
            </div>
          </div>
          <video class="card__content__video" :ref="name" loop autoplay>
            <source :src="videoSource" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vertical-card",
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
  },
  computed: {
    isMedium() {
      return this.size === "medium";
    },
  },
  created() {
    console.log(this.isMedium); // in ra true hoặc false
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    startVideo() {
      this.isHovered = true;
      const video = this.$refs[this.name];
      if (video) {
        // Kiểm tra xem $refs[this.name].video đã được đặt giá trị chưa
        video.currentTime = 0;
      }
    },
    resetCard() {
      this.isHovered = false;
      const video = this.$refs[this.name];
      if (video) {
        // Kiểm tra xem $refs[this.name].video đã được đặt giá trị chưa
      }
    },
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
  //width: fit-content;
  height: max-content;
}

/* Thiết lập kích thước cho card và video */
.card {
  width: 250px;
  height: 400px;
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
    width: 100%;
    height: 100%;
    position: relative;
    bottom: 0;
    left: 0;

    &__container {
      height: 100%;
      width: 100%;
      position: relative;
      background: #6842ff;

      .card-hover-font {
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: -80px;
        background: url("@/assets/images/icon/font_video_card.svg") no-repeat
          center;
        background-size: 100%;
        z-index: 1;

        &__content {
          position: absolute;
          bottom: 30%;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;

          &__img {
            height: 100px;
            width: 100px;
            border-radius: 10px;
          }

          &__text {
            font-size: 14px;
            font-weight: $font_weight_700;
            color: $white;
            margin: 10px 0;
            text-align: center;
          }

          &__button {
            background-color: #f9faff;
            color: #2f3148;
            font-weight: 800;
            width: 60%;
          }
        }
      }

      .card__content__video {
        position: absolute;
        width: 100%;
        height: 42%;
        object-fit: cover;
      }
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
