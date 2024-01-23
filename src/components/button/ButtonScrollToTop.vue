<template>
  <div class="button-scroll">
    <button v-if="visible" class="back-to-top" @click="scrollToTop">
      ↑ Back to Top
    </button>
  </div>
</template>

<script>
export default {
  props: {
    heightScroll: {
      type: [String, Number],
      default: 200, // Giá trị mặc định
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.visible = window.scrollY > this.heightScroll; // Nút sẽ hiện khi cuộn quá 100px
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.button-scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  transition: opacity 0.2s ease 0s;
  opacity: 1;

  .back-to-top {
    border-radius: 30px;
    transition: all 250ms ease 0s;
    border: none;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-family: Nunito, serif;
    font-weight: 800;
    font-size: 16px;
    box-sizing: border-box;
    padding: 8px 16px;
    background: rgb(104, 66, 255);
    color: rgb(249, 250, 255);
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 10px 40px;
    animation-duration: 1.5s;
    animation-iteration-count: 4;
    animation-name: animation-pjx6a7;
    animation-timing-function: ease;
    width: auto;
  }
}
</style>
