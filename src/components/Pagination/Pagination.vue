<template>
  <div class="pagination">
    <div
      class="pagination__btn prev"
      @click="changePage(currentPage - 1)"
      :class="{ disabled: currentPage === 1 }"
    >
      <i class="pagination__btn__icon bx bx-left-arrow-alt"></i>
      <div class="pagination__btn__content">Previous</div>
    </div>
    <div class="pagination__page" v-for="page in visiblePageRange" :key="page">
      <div
        class="pagination__page__item"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </div>
    </div>
    <div
      class="pagination__btn next"
      @click="changePage(currentPage + 1)"
      :class="{ disabled: currentPage === totalPages }"
    >
      <div class="pagination__btn__content">Next</div>
      <i class="pagination__btn__icon bx bx-right-arrow-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalPagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    changePage: {
      type: Function,
      required: true,
    },
    visiblePageRange: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 24px auto;
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease-in;
    font-weight: 800;
    border-radius: 50px;
    border: 2px solid transparent;
    background: #6842ff;
    width: unset;
    height: 50px;
    margin: 5px;
    font-size: 20px;
    padding: 8px 20px;
    cursor: pointer;
    column-gap: 8px;
    &:hover {
      background: #8668ff;
    }
    &.disabled {
      display: none;
    }
    &__icon {
      font-size: 26px;
    }
  }
  &__page {
    display: flex;
    align-items: center;
    column-gap: 5px;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      cursor: pointer;
      border: 2px solid transparent;
      padding: 8px;
      background: #2f3148;
      width: 50px;
      height: 50px;
      margin: 5px;
      font-size: 20px;
      transition: all 0.1s ease-in;
      font-weight: 800;
      &:hover {
        background: #434561;
      }
      &.active {
        border: 2px solid #6842ff;
        background: #0c0d14;
      }
    }
  }
}
</style>
