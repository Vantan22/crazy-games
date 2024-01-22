<template>
  <div class="badge-tag" :class="type">{{ type }}</div>
</template>
<script>
export default {
  name: "badge-tag",
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["hot", "new", "updated", "top"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.badge-tag {
  position: absolute;
  top: -4px;
  left: 2px;
  min-width: 34px;
  color: white;
  height: 27px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
  font-size: 12px;
  font-weight: 800;
  opacity: 1;
  text-transform: uppercase;
  transition: opacity 0.3s linear 0s;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: -5px;
    z-index: 20;
    border-top-left-radius: 5px;
  }

  &.hot {
    background: #f37500; // Màu sắc cho trạng thái "hot"
    &:before {
      width: 5px;
      height: 32px;
      top: 0;
      background: #f37500;
    }

    &:after {
      width: 5px;
      height: 8px;
      top: 27px;
      background: #a24f02;
      border-bottom-left-radius: 5px;
    }
  }

  &.updated {
    background: #28a569; // Màu sắc cho trạng thái "updated"
    &:before {
      width: 5px;
      height: 32px;
      top: 0;
      background: #28a569;
    }

    &:after {
      width: 5px;
      height: 8px;
      top: 27px;
      background: #026d39;
      border-bottom-left-radius: 5px;
    }
  }

  &.top {
    background: #ffd700; // Màu sắc cho trạng thái "toprated"
    color: black;

    &:before {
      width: 5px;
      height: 32px;
      top: 0;
      background: #ffd700;
    }

    &:after {
      width: 5px;
      height: 8px;
      top: 27px;
      background: #8b7500;
      border-bottom-left-radius: 5px;
    }
  }

  &.new {
    background: #ff2264; // Màu sắc cho trạng thái "new"
    &:before {
      width: 5px;
      height: 32px;
      top: 0;
      background: #ff2264;
    }

    &:after {
      width: 5px;
      height: 8px;
      top: 27px;
      background: #a40131;
      border-bottom-left-radius: 5px;
    }
  }
}
</style>
