<template>
  <div class="originals">
    <div class="originals__content">
      <img
        class="originals__bg"
        src="https://images.crazygames.com//crazygames/originals_background.svg?auto=format%2Ccompress&q=45&cs=strip&ch=DPR"
        alt=""
      />
      <vs-row
        class="mh"
        align="center"
        justify="space-around"
        direction="column"
      >
        <img
          class="orri_img"
          src="https://images.crazygames.com//crazygames/originals_logo2.svg?auto=format%2Ccompress&q=45&cs=strip&ch=DPR"
          alt=""
        />
        <vs-col w="10">
          <vs-row align="center" justify="center" direction="row">
            <div class="flex-content">
              <card-vertical-with-text
                v-for="i in array_map.slice(0, 10)"
                :key="i"
                :name="i"
                :tagName="i"
              >
                <vertical-card
                  video-source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
                  image-source="https://images.crazygames.com/kirka-io_16x9/20231023094118/kirka-io_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=329&fit=crop"
                  name=""
                  url=""
                />
              </card-vertical-with-text>
            </div>
          </vs-row>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
import CardVerticalWithText from "@/components/card/cardVerticalWithText.vue";
import VerticalCard from "@/components/card/VerticalCard.vue";

export default {
  name: "OriginalsView",
  components: {
    VerticalCard,
    CardVerticalWithText,
  },

  data() {
    return {
      array_map: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
};
</script>
<style lang="scss" scoped>
.originals {
  height: 100%;
  width: 100%;
  position: relative;

  &__bg {
    height: calc(100vh - 64px);
    width: 100vw;
    object-fit: cover;
    position: absolute;
  }

  &__content {
    position: absolute;
    top: 0;
    max-height: calc(100% - 64px);
    width: 100%;
    text-align: center;

    .orri_img {
      margin: 64px 0 56px 0;
    }
    .flex-content {
      width: 100%;
      max-width: 1500px;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 24px;
    }
  }
}

@media only screen and (max-width: 1080px) {
  .originals {
    &__content {
      .flex-content {
        max-width: unset;
        gap: 16px;
      }
    }
  }
}
</style>
