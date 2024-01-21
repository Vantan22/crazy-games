<template>
  <div class="card-vertical-with-text">
    <slot></slot>
    <div class="card-vertical-with-text__content">
      <div class="card-vertical-with-text__content__name">{{ name }}</div>
      <div class="card-vertical-with-text__content__tag">{{ tagName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card-vertical-with-text",
  props: {
    name: {
      type: String,
      default: "",
    },
    tagName: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.card-vertical-with-text {
  text-align: left;
  height: 100%;

  &__content {
    &__name {
      font-size: 20px;
      font-weight: 400;
      color: white;
      margin-top: 20px;
      margin-left: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__tag {
      font-size: 14px;
      font-weight: 700;
      margin-top: 4px;
      text-transform: uppercase;
      margin-bottom: 32px;
      margin-left: 8px;
      color: #666a7f;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

@media only screen and (max-width: 1280px) {
  .card-vertical-with-text {
    &__content {
      &__name {
        margin-top: 8px;
        font-size: 14px;
      }

      &__tag {
        margin-bottom: 4px;
        font-size: 12px;
      }
    }
  }
}
</style>
