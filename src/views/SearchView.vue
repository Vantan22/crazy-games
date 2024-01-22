<template>
  <div class="search">
    <div class="search__title"><h1>Search</h1></div>
    <div class="search__sub-title">
      Use the box below to search through thousands of free online games:
    </div>
    <div class="search__box">
      <div class="search__box__form">
        <div class="search__box__form__input">
          <input type="text" placeholder="Search" v-model="searchQuery" />
        </div>
        <i @click="handleSearch" class="bx bx-search icon_search"></i>
      </div>
      <div v-if="isEmpty" class="search__box__empty">
        <div class="search__box__empty__title">
          We didn't find anything matching that.
        </div>
        <div class="search__box__empty__sub">
          You can try searching for something else, or play one of the games
          below:
        </div>
      </div>
      <div class="search__box__result">
        <div class="search__box__result__list">
          <div v-if="!isEmpty" class="search__box__result__list__item-tag">
            <h1 class="search__box__result__list__item-tag__name">Game tag</h1>
            <i
              class="bx bx-chevron-right search__box__result__list__item-tag__icon"
            ></i>
          </div>
          <div
            v-for="(item, index) in gameCard.slice(0, 20)"
            :key="index"
            class="search__box__result__list__item"
          >
            <horizontal-card
              :video-source="item.sources"
              :image-source="item.thumb"
              :name="item.title"
              url="/"
              width="178px"
              height="100px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HorizontalCard from "@/components/card/HorizontalCard.vue";
import { card_values_examble } from "@/containts/testValues/card_values_examble";

export default {
  name: "SearchView",
  components: { HorizontalCard },
  data() {
    return {
      searchQuery: "",
      dataExample: "minecraft",
      isEmpty: false,
      gameCard: card_values_examble,
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery !== this.dataExample) {
        this.isEmpty = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  padding-left: 8px;
  padding-bottom: 20px;

  &__title {
    padding: 32px 32px 4px;
    line-height: 31px;
    font-weight: 900;
    color: #fff;
    & > h1 {
      font-size: 24px;
    }
  }

  &__sub-title {
    padding: 8px 32px;
    margin-bottom: 8px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__title {
        margin: 24px 0;
        color: #f9faff;
        font-size: 20px;
      }
      &__sub {
        color: #f9faff;
        line-height: 24px;
        font-size: 14px;
        margin-bottom: -16px;
      }
    }
    &__form {
      display: flex;
      align-items: center;

      &__input {
        padding: 12px 14px;
        border: 2px solid transparent;
        background-color: rgb(229, 230, 238);
        color: rgb(135, 138, 158);
        border-radius: 8px;

        & > input {
          outline: 0;
          width: 100%;
          font-size: 16px;
          font-weight: 700;
          resize: none;
          padding: 0;
          border: 0;
          background: none;
          color: rgb(135, 138, 158);
        }
      }

      .icon_search {
        display: flex;
        justify-content: center;
        transition: all 250ms ease 0s;
        border: none;
        cursor: pointer;
        align-items: center;
        font-size: 30px;
        box-sizing: border-box;
        background: transparent;
        color: rgb(164, 142, 255);
        height: 48px;
        width: 48px;

        &:hover {
          color: rgb(104, 66, 255);
        }
      }
    }

    &__result {
      margin-top: 16px;

      &__list {
        display: flex;
        flex-flow: wrap;
        box-sizing: border-box;
        content-visibility: visible;
        margin-left: -4px;
        padding: 0;
        width: calc(100% + 8px);
        -webkit-box-pack: center;
        justify-content: center;
        gap: 4px;

        &__item-tag {
          text-decoration: none;
          border: 2px solid transparent;
          border-radius: 10px;
          display: block;
          background-color: rgb(71, 72, 83);
          cursor: pointer;
          padding: 16px;
          position: relative;
          width: 174px;
          height: 96px;
          margin: 0;

          &__name {
            color: rgb(255, 255, 255);
            font-size: 16px;
            white-space: initial;
            text-decoration: none;
          }

          &__icon {
            position: absolute;
            right: 5%;
            font-size: 45px;
            float: right;
          }
        }
      }
    }
  }
}
</style>
