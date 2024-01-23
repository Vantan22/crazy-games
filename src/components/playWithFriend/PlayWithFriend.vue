<template>
  <div class="play-with-friend">
    <div class="start">
      <h2 class="start__content">Play with friends!</h2>
      <img
        class="start__img"
        src="https://images.crazygames.com//crazygames/multiplayerBanner1.svg?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=215"
        alt=""
      />
    </div>
    <div class="center">
      <div class="center__img">
        <img
          src="https://images.crazygames.com//crazygames/multiplayerBanner2.svg?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=125"
          alt=""
        />
      </div>
      <div class="center__content">
        <div class="center__content__title">Local multiplayer</div>
        <div class="center__content__desc">Play on the same device</div>
        <router-link to="/game" class="center__content__button"
          >Explore games
        </router-link>
      </div>
    </div>
    <div class="center">
      <div class="center__img">
        <img
          src="https://images.crazygames.com//crazygames/multiplayerBanner2.svg?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=125"
          alt=""
        />
      </div>
      <div class="center__content">
        <div class="center__content__title">Online multiplayer</div>
        <div class="center__content__desc">Play on separate devices</div>
        <router-link to="/game" class="center__content__button"
          >Explore games
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlayWithFriend",
};
</script>
<style scoped lang="scss">
.play-with-friend {
  width: calc(100% - 32px);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 183px;
  margin: 16px 8px;
  background: rgb(26, 27, 40);
  border-radius: 8px;

  .start {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 56px;
    padding-right: 40px;
    width: 456px;

    &__content {
      font-size: 28px;
      font-weight: 700;
      color: #fff;
    }

    .start__img {
      align-self: end;
      overflow-clip-margin: content-box;
      overflow: clip;
    }
  }

  .center {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 32px;
    flex: 1 1 0%;
    margin: 12px;
    background: rgb(19, 20, 30);
    border-radius: 8px;
    padding: 12px;

    &__img {
      overflow-clip-margin: content-box;
      overflow: clip;
    }

    &__content {
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      text-align: center;

      &__title {
        font-size: 20px;
        font-weight: 700;
      }

      &__desc {
        font-size: 16px;
        font-weight: 400;
        color: rgb(189, 191, 206);
      }

      &__button {
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
        height: 34px;
        margin-top: 12px;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .center {
    &__content {
      &__title {
        font-size: 18px !important;
      }

      &__desc {
        font-size: 14px !important;
      }

      &__button {
        font-size: 12px !important;
      }
    }
  }
}
@media screen and (max-width: 1445px) {
  .center {
    &__img {
      display: none !important;
    }
    &__content {
    }
  }
}
</style>
