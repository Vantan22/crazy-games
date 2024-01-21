<template>
  <div class="channel-title">
    <div class="channel-title__content">
      <h1 class="channel-title__content__name">Action Games</h1>
      <div
        class="channel-title__content__desc"
        :style="[
          { 'flex-direction': isShow ? 'column' : 'row' },
          {
            'align-items': isShow ? 'flex-start' : 'flex-end',
          },
        ]"
      >
        <div
          class="channel-title__content__desc__text"
          :style="[
            { width: !isShowButton && !isShow ? '100%' : 'calc(100% - 100px)' },
            { '-webkit-line-clamp': isShow ? 'unset' : '1' },
          ]"
        >
          <p class="channel-title__content__desc__text__title">
            Our free online action games include classic 2D platform games,
            cartoony adventures, and a range of strategy and 3D titles. Have fun
            playing hundreds of the best action games for free. Sort by 'most
            played' for the most popular action games.
          </p>
        </div>
        <div
          v-if="isShowButton"
          class="channel-title__content__desc__button"
          @click="handleToggle"
        >
          {{ contentButton }}
        </div>
      </div>
    </div>
    <div class="channel-title__filter">
      <local-dropdown />
    </div>
  </div>
</template>
<script>
import LocalDropdown from "@/components/DropDown/Dropdown.vue";
import { checkWidthElement } from "@/containts/check_width_element";

export default {
  name: "ChannelTitle",
  components: { LocalDropdown },

  data() {
    return {
      isShow: false,
      widthTextFunc: null,
      widthDescriptionFunc: null,
      widthText: 0,
      widthDescription: 0,
    };
  },
  mounted() {
    this.widthTextFunc = checkWidthElement(
      ".channel-title__content__desc__text__title",
      this.handleWidthChange
    );
    this.widthDescriptionFunc = checkWidthElement(
      ".channel-title__content__desc__text",
      this.handleWidthChangeDc
    );
  },
  destroyed() {
    // Dừng quan sát khi component bị hủy
    if (typeof this.widthTextFunc === "function") {
      this.widthTextFunc();
    }
    if (typeof this.widthDescriptionFunc === "function") {
      this.widthDescriptionFunc();
    }
  },
  computed: {
    contentButton() {
      return this.isShow ? "see less" : "see more";
    },
    isShowButton() {
      return this.widthText === this.widthDescription;
    },
  },
  methods: {
    // Hàm callback sẽ được gọi khi độ rộng thay đổi
    handleWidthChange(width) {
      this.widthText = width;
      // Thực hiện các hành động khác dựa trên độ rộng
    },
    handleWidthChangeDc(width) {
      this.widthDescription = width;
      // Thực hiện các hành động khác dựa trên độ rộng
    },
    handleToggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style lang="scss" scoped>
.channel-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 32px;
  flex-direction: column;
  flex-flow: row wrap;

  &__content {
    width: 100%;
    max-width: calc(100% - 190px);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;

    &__name {
      font-size: 24px;
      line-height: 31px;
      color: #fff;
      font-weight: 900;
      margin-right: 16px;
    }

    &__desc {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;

      &__text {
        margin-top: 8px;
        color: rgb(170, 173, 190);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: all 0.3s ease-out 0s;
      }

      &__button {
        display: flex;
        align-items: flex-end;
        padding-left: 8px;
        width: 100px;
        cursor: pointer;
        color: #6842ff;
      }
    }
  }

  &__filter {
    height: 32px;
    flex: 1;
    min-width: 190px;
  }
}
</style>
