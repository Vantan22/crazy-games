<template>
  <!-- HTML and CSS taken from Show More/Show Less Button by Tripp W. https://codepen.io/zepzia/pen/VPrXJJ -->

  <div class="description">
    <div class="description__wrapper" :class="{ open: showContent }">
      <div id="content-desc" class="content" v-html="formattedText"></div>
      <div
        v-if="showButton"
        class="show-more"
        :class="{ active: showContent }"
        @click="showContent = !showContent"
      >
        <p>{{ showContent ? "Show less" : "Show more" }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { checkWidthElement } from "@/containts/check_width_element";
import { rawText } from "@/containts/_raw-text";

export default {
  name: "DescriptionChanel",

  data() {
    return {
      showContent: false,
      showButton: false,
      widthDescriptionFunc: null,
      widthText: 0,
      rawText,
    };
  },
  mounted() {
    this.widthDescriptionFunc = checkWidthElement(
      "#content-desc",
      this.handleWidthChangeDc
    );
  },
  destroyed() {
    if (typeof this.widthDescriptionFunc === "function") {
      this.widthDescriptionFunc();
    }
  },
  computed: {
    formattedText() {
      // Convert the raw text to HTML using DOMParser
      const parser = new DOMParser();
      const parsedHTML = parser.parseFromString(this.rawText, "text/html");

      // Get the body content
      return parsedHTML.body.innerHTML;
    },
  },
  methods: {
    handleWidthChangeDc(width) {
      console.log(width);
      this.widthDescription = width;
      if (width >= 250) {
        this.showButton = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.description {
  position: relative;
  margin: 16px;
  overflow-anchor: none;
  border-radius: 10px;
  background-color: rgb(19, 20, 30);
  min-height: 250px;
  font-size: 16px;

  .description__wrapper {
    width: 100%;
    font-size: 18px;
    margin: 0 auto;

    max-height: 180px;
    overflow: hidden;

    /* Set Transitions */
    transition: max-height 0.7s;

    &.open {
      max-height: max-content;

      /* Set transitions */
    }

    .content {
      padding: 30px 30px 60px;
    }

    .show-more {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 4px;
      background: linear-gradient(
        rgba(19, 20, 30, 0) 0%,
        rgb(19, 20, 30) 35.42%
      );
      height: 80px;
      padding-top: 40px;
      padding-left: 30px;

      & > p {
        cursor: pointer;
        text-decoration: none;
        color: rgb(164, 142, 255);
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.00938em;
      }
      &.active {
        background-color: rgb(19, 20, 30);
        height: 50px;
        padding-top: 10px;
        padding-left: 30px;
      }
    }
  }
}
</style>
