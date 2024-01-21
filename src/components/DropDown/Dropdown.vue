<template>
  <div class="dropdown" ref="dropdownRef">
    <div class="dropdown__content" @click="handleToggle">
      <div class="dropdown__content__text">{{ optionName }}</div>
      <i class="icon" :class="isChangeIcon"></i>
    </div>
    <div v-if="isShow" class="dropdown__menu">
      <div
        v-for="option in options"
        :key="option.value"
        class="dropdown__menu__item"
        @click="selectOption(option)"
        :class="{ active: option.id === selectedId }"
      >
        <div class="dropdown__menu__item__text">{{ option.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalDropdown",
  data() {
    return {
      isShow: false,
      optionName: "TopGames",
      selectedId: 1,
      options: [
        {
          label: "TopGames",
          id: 1,
        },
        {
          label: "New Games",
          id: 2,
        },
        {
          label: "Most Played",
          id: 3,
        },
      ],
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  computed: {
    isChangeIcon() {
      return this.isShow ? "bx bx-chevron-up" : "bx bx-chevron-down";
    },
  },
  methods: {
    handleToggle() {
      this.isShow = !this.isShow;
    },
    selectOption(option) {
      this.optionName = option.label;
      this.selectedId = option.id;
      this.isShow = false;
    },
    handleClickOutside(event) {
      const dropdownElement = this.$refs.dropdownRef;
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        this.isShow = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.dropdown {
  transition: all 0.3s linear;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    padding: 8px 8px 8px 16px;
    box-sizing: border-box;
    border-radius: 8px;
    height: 40px;
    min-width: 190px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    border: 2px solid #28293d;
    background: transparent;
    color: #f9faff;
    cursor: pointer;

    &:hover {
      color: #878a9e;
      cursor: pointer;
      border-color: #474967;
    }

    .icon {
      font-size: 24px;
    }
  }

  &__menu {
    margin-top: 12px;
    border-radius: 8px;
    padding: 8px 0;
    background: #373952;
    height: max-content;

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      font-size: 16px;
      padding: 8px 8px 8px 16px;
      cursor: pointer;
      box-sizing: border-box;
      height: 40px;
      min-width: 190px;
      transition: all 0.3s linear;

      &:hover {
        background: #50526b;
      }

      &.active {
        cursor: not-allowed;
        //opacity: 0.5;
        pointer-events: none;
        color: #aaadbe;
      }
    }
  }
}
</style>
