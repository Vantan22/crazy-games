<template>
  <div class="popular-tag">
    <h2 class="popular-tag__name">{{ name }}</h2>
    <div class="popular-tag__list">
      <router-link
        to="/"
        v-for="(_, index) in array_map.slice(0, 20)"
        :key="index"
        class="popular-tag__list__item"
      >
        <img :src="imageSource" alt="" class="popular-tag__list__item__img" />
        <div class="popular-tag__list__item__text">
          <p>
            {{ text }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "PopularTag",
  props: {
    name: {
      type: String,
      default: "Popular Tags",
    },
    imageSource: {
      type: String,
      default:
        "https://images.crazygames.com/call-of-tanks/20220629103650/call-of-tanks-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=238&fit=crop",
    },
    text: {
      type: String,
      default: "Genshin Impact",
    },
  },
  data() {
    return {
      isHovered: false,
      array_map: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.popular-tag {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__name {
    align-self: flex-start;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 3px;
    font-weight: 900;
    color: #fff;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
    padding: 10px 8px;
    max-width: 1940px;
    width: 100%;
    white-space: nowrap;
    list-style: none;
    transform: translateZ(0px);
    scroll-padding: 50px;
    margin: 0;

    &__item {
      border-radius: 6px;
      position: relative;
      width: 178px;
      margin: 4px;
      height: 48px;
      background-color: rgb(104, 66, 255);
      color: rgb(255, 255, 255);
      transition: background-color 0.2s ease-in 0s;
      display: flex;
      flex-direction: row;
      font-weight: 700;
      align-items: center;
      overflow: hidden;
      &:hover {
        background-color: #241759;
      }
      &__img {
        width: 65px;
        height: 48px;
        object-fit: cover;
      }

      &__text {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 113px;
        text-align: center;
        padding: 4px;

        & > p {
          font-size: 11.2px;
          white-space: normal;
          width: 100%;
          text-align: center;
          margin-block: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
