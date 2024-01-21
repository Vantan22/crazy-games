<template>
  <div class="channel-layout">
    <channel-title />
    <div class="channel-layout__games">
      <div class="container">
        <div
          class="channel-layout__games__item"
          v-for="(item, index) in gameCard.slice(0, 10)"
          :key="index"
        >
          <horizontal-card
            :video-source="item.sources"
            :image-source="item.thumb"
            :name="item.title"
            url="/"
          />
        </div>
      </div>
    </div>
    <local-pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :changePage="changePage"
      :visiblePageRange="visiblePageRange"
    />
    <popular-tag />
    <description-chanel />
    <slot></slot>
  </div>
</template>
<script>
import ChannelTitle from "@/components/channelGame/chanelTitle/ChannelTitle.vue";
import HorizontalCard from "@/components/card/HorizontalCard.vue";
import { card_values_examble } from "@/containts/testValues/card_values_examble";
import LocalPagination from "@/components/Pagination/Pagination.vue";
import PopularTag from "@/components/popularTags/PopularTag.vue";
import DescriptionChanel from "@/components/channelGame/description/DescriptionChanel.vue";

export default {
  name: "ChanelLayout",
  components: {
    DescriptionChanel,
    PopularTag,
    LocalPagination,
    HorizontalCard,
    ChannelTitle,
  },
  data() {
    return {
      gameCard: card_values_examble,
      currentPage: 1,
      totalPages: 10,
    };
  },
  computed: {
    visiblePageRange() {
      // Calculate the visible page range based on your logic
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(startPage + 4, this.totalPages);
      const visiblePages = [];

      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }

      return visiblePages;
    },
  },
  methods: {
    changePage(page) {
      // Handle page change logic
      this.currentPage = page;
      // You can also load data for the new page here
    },
  },
};
</script>
<style lang="scss" scoped>
.channel-layout {
  width: 100%;

  &__games {
    width: 100%;
    padding: 16px;

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(246px, 1fr));
      gap: 0.2vw;

      .channel-layout__games__item {
        width: max-content;
      }
    }
  }
}
</style>
