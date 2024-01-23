<template>
  <div class="hidden sidebar">
    <div class="sidebar__content">
      <vs-sidebar
        class="padding-top-16"
        hover-expand
        square
        reduceÍ
        open
        background="#0c0d14"
        v-model="active"
      >
        <div class="mt-4"></div>
        <vs-sidebar-item
          v-for="item in menu_function"
          :key="item.name"
          :link="item.link"
          :id="item.name"
        >
          <template #icon>
            <div class="icon-block"><i :class="item.icon"></i></div>
          </template>
          {{ item.name }}
        </vs-sidebar-item>
        <div class="divider"></div>
        <vs-sidebar-item
          v-for="item in menu_tag"
          :key="item.name"
          :link="item.link"
          :id="item.name"
        >
          <template #icon>
            <div class="icon-block"><i :class="item.icon"></i></div>
          </template>
          {{ item.name }}
        </vs-sidebar-item>
        <div class="divider"></div>
        <vs-sidebar-item :id="tag.name" :link="tag.link">
          <template #icon>
            <div class="icon-block"><i :class="tag.icon"></i></div>
          </template>
          {{ tag.name }}
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </div>
</template>
<script>
import ic_clock from "@/assets/images/icon/ic_clock.svg";
import ic_clock_active from "@/assets/images/icon/ic_clock_active.svg";
import { menu_function, menu_tag } from "@/containts/_menu_variable.js";

export default {
  name: "side-bar",
  data: () => ({
    active: "home",
    ic_clock,
    ic_clock_active,
    menu_function,
    menu_tag,
    tag: {
      name: "Tag",
      link: "/tag",
      icon: "bx bx-purchase-tag-alt",
    },
  }),
};
</script>
<style scoped lang="scss">
@import "@/assets/style/scss/_config_variables.scss";
.sidebar {
  height: calc(100vh - 60px);
  position: fixed;
  width: 100%;
  max-width: 200px;
  z-index: 3;

  &:hover {
    z-index: 100000000000000000000;
  }

  &__content {
    height: 100%;
    position: relative;
    width: 100%;
  }
}

.padding-top-16 {
  position: sticky;
  padding-top: 16px;
  width: 100%;
  height: 100%;
  max-width: 200px;
  border-right: 0.5px solid $light_grey;
}

.divider {
  width: calc(100% - 32px);
  opacity: 0.4;
  height: 1px;
  background: white;
  margin: 8px 16px;
}

.icon-block {
  .icon-sidebar {
    height: 24px;
    width: 24px;
    object-fit: cover;
  }
}
</style>
