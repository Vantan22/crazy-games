<template>
  <div class="search">
    <div class="search-box" :class="{ active: searchQuery }">
      <input
        class="search-box__input"
        type="text"
        v-model="searchQuery"
        placeholder="Search"
        @blur="handleBlur"
      />
      <div class="search-box__icon">
        <img src="@/assets/images/icon/ic_search.svg" alt="" />
      </div>
    </div>
    <div v-if="searchQuery" class="result-box">
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-item
        :thumbnail="thumbnail"
        :name="name"
        :link-to="linkTo"
      />
      <search-result-all :searchQuery="searchQuery" text="Search all" />
    </div>
  </div>
</template>
<script>
import SearchResultItem from "@/components/Search/SearchItem.vue";
import SearchResultAll from "@/components/Search/SearchAll.vue";
export default {
  name: "search-games",
  components: {
    SearchResultAll,
    SearchResultItem,
  },
  data() {
    return {
      searchQuery: "",
      thumbnail: "https://i.ytimg.com/vi/tsx95odmMCw/maxresdefault.jpg",
      name: "Genshin Impact",
      linkTo: "genshin-impact",
      isMobile: false,
    };
  },
  methods: {
    handleBlur() {
      this.searchQuery = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/_config_variables.scss";

.search {
  position: relative;
  width: 460px;

  .search-box {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    background: $dark_purple;
    padding-left: 16px;
    padding-right: 8px;
    border: 1px solid transparent;

    &.active {
      border: 1px solid $primary_color;
    }

    &__input {
      background: transparent;
      flex: 1;
      width: 100%;
      border: none;
      outline: none;
      color: $white_text_color;
      font-size: $font_size_14;
      font-weight: $font_weight_700;
    }

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background: $light_grey;
      }

      img {
        margin: 8px;
        height: 20px;
        width: 20px;
        object-fit: cover;
      }
    }
  }

  .result-box {
    position: absolute;
    top: calc(100% + 12px);
    width: 100%;
    max-height: 518px;
    height: max-content;
    overflow: hidden;
    overflow-y: scroll;
    padding: 8px 0;
    border-radius: 6px;
    background: $dark_primary;
  }
}

@media screen and (max-width: 960px) {
  .search {
    width: 200px;
  }
}

@media screen and (max-width: 700px) {
  .search {
    display: none;
  }
}
</style>
<style scoped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaadbe;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #8a8c9a;
}
</style>
