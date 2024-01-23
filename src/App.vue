<template>
  <home-layout />
</template>
<script>
import HomeLayout from "@/layout/HomeLayout.vue";

export default {
  components: { HomeLayout },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
* {
  font-family: "Nunito", sans-serif;
}
body {
  background: #0c0d14;
  color: white;
}
a {
  text-decoration: none;
  color: #a48eff;
  font-weight: 700;
  &:hover {
    color: #6842ff;
  }
}
</style>
