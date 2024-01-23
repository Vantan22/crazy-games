<template>
  <div class="game-view" ref="gameViewRef">
    <div class="wrapper">
      <div class="content">
        <div class="content__left">
          <div class="content__left__top">
            <div class="flex-content">
              <div v-if="!isBreakPointMobile" class="content__left__top__list">
                <div
                  v-for="(item, index) in gameCard.slice(
                    0,
                    isBreakPointCheck.isLeft
                  )"
                  :key="index"
                  class="content__left__top__item"
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
              <div class="content__left__top__game-view" v-html="rawIframe">
                Ifame cho video
              </div>
              <div v-if="!isBreakPointMobile" class="content__left__top__list">
                <div
                  v-for="(item, index) in gameCard.slice(
                    0,
                    isBreakPointCheck.isRight
                  )"
                  :key="index"
                  class="content__left__top__item"
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
            <div v-if="!isBreakPointMobile" class="content__left__bottom__list">
              <div
                v-for="(item, index) in gameCard.slice(
                  0,
                  isBreakPointCheck.isBottom
                )"
                :key="index"
                class="content__left__top__item"
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
          <div class="content__left__bottom"></div>
        </div>
        <div class="content__main">
          <div v-if="!isBreakPointMobile" class="content__main__game-suggest">
            <div class="big-div">Ads block</div>
            <div
              v-for="(item, index) in gameCard.slice(
                0,
                isBreakPointCheck.isBottomAdsBlock
              )"
              :key="index"
              class="content__main__game-suggest__item"
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
          <div v-if="isBreakPointMobile" class="content__main__ads-mobile">
            adsBlock
          </div>
          <div class="content__main__wrapper">
            <div v-if="!isBreakPointMobile" class="left-content">
              <div
                v-for="(item, index) in gameCard.slice(0, 3)"
                :key="index"
                class="content__left__top__item"
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
            <div
              class="main-content"
              :style="[{ maxWidth: isBreakPointCheck.widthDescription }]"
            >
              <div class="main-content__container__top">
                <div class="content">
                  <div class="content__title">Kirka.io</div>
                  <div class="content__button">
                    <div class="button">
                      <i class="icon bx bx-share-alt"></i> Share
                    </div>
                    <div class="button">
                      <i class="icon bx bx-code-alt"></i> Embed
                    </div>
                  </div>
                  <div class="content__info">
                    <div class="content__info__wrapper">
                      <div class="content__info__item">
                        <div class="content__info__item__name">Rating:</div>
                        <div class="content__info__item__desc">
                          <strong>8.4</strong
                          ><span style="margin-left: 8px">(278.128 votes)</span>
                        </div>
                      </div>
                      <div class="content__info__item">
                        <div class="content__info__item__name">Developer:</div>
                        <div class="content__info__item__desc">
                          <a href="/"> Pierre-Éli</a>
                        </div>
                      </div>
                      <div class="content__info__item">
                        <div class="content__info__item__name">Released:</div>
                        <div class="content__info__item__desc">
                          <span> September 2021</span>
                        </div>
                      </div>
                      <div class="content__info__item">
                        <div class="content__info__item__name">
                          Last Updated:
                        </div>
                        <div class="content__info__item__desc">
                          <span> October 2023</span>
                        </div>
                      </div>
                      <div class="content__info__item">
                        <div class="content__info__item__name">Technology:</div>
                        <div class="content__info__item__desc">
                          <span> HTML5</span>
                        </div>
                      </div>
                      <div class="content__info__item">
                        <div class="content__info__item__name">Platforms:</div>
                        <div class="content__info__item__desc">
                          <span
                            >Browser (desktop, mobile, tablet), App
                            Store(Android)</span
                          >
                        </div>
                      </div>
                      <div class="content__info__item">
                        <div class="content__info__item__name">
                          Classification:
                        </div>
                        <div class="content__info__item__desc">
                          <a href="#">Games</a>»<a href="#">.Io</a>»<a href="#"
                            >Shooting</a
                          >»<a href="#">FPS</a>
                        </div>
                      </div>
                      <div class="content__info__item">
                        <div class="content__info__item__name">Wiki pages:</div>
                        <div class="content__info__item__desc">
                          <a href="/"> Fandom</a>
                        </div>
                      </div>
                    </div>
                    <div class="divider"></div>
                    <div>
                      <span
                        >Kirka.io is an online FPS game with a voxelated art
                        style. You can play teams, solo or parkour mode in a
                        range of battle locations. Once you’ve picked a game,
                        you can customize your weapons loadout to suit your
                        playing style.</span
                      >
                      <h3>Features</h3>
                      <br />
                      <h4>
                        Choose from 34 levels spread across three exciting game
                        modes
                      </h4>
                      <span
                        >You can play solo in free-for-all battles and rack up
                        the kills, join a team game, or play parkour mode and
                        use your jumping skills. Click play to hop instantly
                        into a match or search for a game of your choice in the
                        servers menu.</span
                      >
                      <br />
                      <h4>Customizable characters and weapons</h4>
                      <br />
                      <span
                        >Pick your weapons loadout and character in your
                        inventory. Buy chests to populate your inventory with
                        more weapons and unique skins.</span
                      >
                      <br />
                      <h4>Daily quests and leaderboards</h4>
                      <span
                        >Plenty is going on in Kirka.io to inspire your loyalty
                        to the game. High scorers are featured on the
                        leaderboards and rewarded with chests full of surprises.
                        Your daily quests are another way to earn gold, which
                        you can then use to purchase chests of different
                        rarities.</span
                      >
                      <br />
                      <h4>Join the Kirka community</h4>
                      <br />
                      <span
                        >Play Kirka online with your friends and add new friends
                        you meet in Kirka via the friendslist. You can also join
                        clans and engage in clan wars to earn unique
                        rewards!</span
                      >
                      <br />
                      <h4>More .io games</h4>
                      <br />
                      <span
                        >If you enjoyed Kirka, <a href="#"> Pixel Warfare</a>is
                        another fantastic voxelated <a href="#">FPS game</a>,
                        and <a href="#">Bloxd</a> features the same graphics
                        with a range of game modes. For more online .io action,
                        check out <a href="#">Ships 3D</a> and
                        <a href="#">Krunker</a>.</span
                      >
                      <br />
                      <h3>Krunker</h3>
                      <ul>
                        <li>June 2021 (HTML5)</li>
                        <li>June 2023 (Android)</li>
                      </ul>
                      <br />
                      <h3>Platform</h3>
                      <ul>
                        <li>Web browser (desktop and mobile)</li>
                        <li>Android</li>
                      </ul>
                      <br />
                      <h3>Last Updated</h3>
                      <br />
                      <span>Aug 10, 2022</span>
                      <br />
                      <h3>Controls</h3>
                      <ul>
                        <li>WASD = move</li>
                        <li>Space = jump</li>
                        <li>P / Esc = open the Change Weapon menu</li>
                        <li>Left-click = shoot</li>
                        <li>Right-click = aim</li>
                        <li>Shift = crouch</li>
                        <li>E = dash</li>
                        <li>1, 2, 3 = switch weapons</li>
                      </ul>
                    </div>
                  </div>
                  <div class="tags-name">
                    <mini-tag v-for="item in 7" :key="item" />
                  </div>
                  <div class="main-content__container__bottom">
                    <img
                      src="https://images.crazygames.com/store-logos/google-store-button.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="ads">ADS BLOCK</div>
            </div>
            <div v-if="!isBreakPointMobile" class="right-content">
              <div
                v-for="(item, index) in gameCard.slice(0, 3)"
                :key="index"
                class="content__left__top__item"
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
      <div v-if="!isBreakPointMobile" class="ads-block">
        <div class="ads-block__wrapper">
          <div class="ads-block__block1">ADS BLOCK</div>
          <div class="ads-block__block2">ADS BLOCK</div>
        </div>
        <div class="ads-block__list">
          <div
            v-for="(item, index) in gameCard.slice(
              0,
              isBreakPointCheck.isShowItemGameAds
            )"
            :key="index"
            class="ads-block__list__item"
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
    <div class="content__footer">
      <div
        v-for="(item, index) in gameCard.slice(0, 20)"
        :key="index"
        class="content__footer__item"
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
    <button-scroll-to-top height-scroll="736" />
  </div>
</template>
<script>
import HorizontalCard from "@/components/card/HorizontalCard.vue";
import { card_values_examble } from "@/containts/testValues/card_values_examble";
import { rawIframe } from "@/containts/_raw_test-ifame";
import MiniTag from "@/components/miniTag/MiniTag.vue";
import ButtonScrollToTop from "@/components/button/ButtonScrollToTop.vue";

export default {
  name: "GameView",
  components: {
    ButtonScrollToTop,
    MiniTag,
    HorizontalCard,
  },
  data() {
    return {
      gameCard: card_values_examble,
      rawIframe,
      windowWidth: 0,
      numberLeftGame: 6,
      numberRightGame: 6,
      numberBottomGame: 8,
      isReSizeGame: false,
      resizeObserver: null,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    isBreakPoint2100() {
      return this.windowWidth < 2100;
    },
    isBreakPoint1776() {
      return this.windowWidth < 1776;
    },
    isBreakPoint1560() {
      return this.windowWidth < 1560;
    },
    isBreakPoint1360() {
      return this.windowWidth < 1360;
    },
    isBreakPointMobile() {
      return this.windowWidth < 1200;
    },
    isBreakPointCheck() {
      if (this.isBreakPointMobile) {
        return {
          isBottomAdsBlock: 0,
          widthDescription: "100%",
        };
      }
      if (this.isBreakPoint2100) {
        return {
          isLeft: 6,
          isRight: 0,
          isBottom: 7,
          isBottomAdsBlock: 3,
          widthDescription: "938px",
          isShowItemGameAds: 4,
        };
      }
      return {
        isLeft: 6,
        isRight: 6,
        isBottom: 8,
        isBottomAdsBlock: 12,
        widthDescription: "1128px",
        isShowItemGameAds: 6,
      };
    },
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped lang="scss">
.flex-content {
  display: flex;
  gap: 12px;
}

.game-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  .wrapper {
    display: flex;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__left {
      display: flex;
      gap: 12px;

      &__top {
        display: flex;
        flex-direction: column;
        gap: 12px;

        &__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .content__left__bottom__list {
          display: flex;
          gap: 12px;
        }

        &__game-view {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          width: 1128px;
          height: 660px;
          background: #28a569;
        }
      }
    }

    &__main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 12px;

      &__ads-mobile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        min-height: 100px;
        height: 100%;
        width: 100%;
        background: #6842ff;
        border-radius: 8px;
      }

      &__game-suggest {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
        grid-row-gap: 8px;
        grid-column-gap: 8px;
        padding-right: 12px;

        .big-div {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          height: 100%;
          width: 100%;
          background: #6842ff;
          border-radius: 8px;
          grid-row: 1;
          grid-column: 3 / span 4;
        }
      }

      &__wrapper {
        display: flex;
        gap: 12px;

        .left-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .right-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .main-content {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          flex-direction: row;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          background-color: #1a1b28;
          border-width: 0;
          border-radius: 8px;
          color: #fff;
          padding-right: 8px;
          padding-left: 24px;
          width: 100%;
          height: 100%;
          max-width: 1128px;
          position: relative;
          line-height: 1.5;

          &__container__top {
            display: flex;
            width: 100%;

            .content {
              flex: 1;
              padding-top: 16px;
              padding-bottom: 8px;

              &__title {
                font-weight: 900;
                color: #fff;
                font-size: 20px;
                line-height: 1.167;
                padding-bottom: 8px;
              }

              &__button {
                display: flex;
                align-items: center;
                gap: 16px;

                .button {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  font-family: Nunito, serif;
                  font-weight: 800;
                  border-radius: 30px;
                  font-size: 16px;
                  box-sizing: border-box;
                  background: #373952;
                  color: #f9faff;
                  height: 40px;
                  transition: all 250ms ease;
                  padding-left: 16px;
                  padding-right: 16px;

                  &:hover {
                    background: #212233;
                  }
                }

                .icon {
                  margin-right: 8px;
                  font-size: 24px;
                }
              }

              &__info {
                display: flex;
                flex-direction: column;

                &__wrapper {
                  padding: 8px 0;

                  .content__info__item {
                    display: flex;

                    &__name {
                      color: #767a8e;
                      width: 110px;
                    }
                  }
                }
              }

              .tags-name {
                display: flex;
              }

              .main-content__container__bottom {
                display: flex;
                justify-content: center;
                margin-top: 8px;
                margin-bottom: 16px;
                margin-left: 8px;
                width: 100%;
                flex-wrap: wrap;

                & > img {
                  margin-left: calc(50% - 200px);
                  height: 42px;
                }
              }
            }
          }

          .ads {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            background: #6842ff;
            border-radius: 8px;
            width: 300px;
            height: 600px;
          }
        }
      }
    }
  }

  .ads-block {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .ads-block__wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .ads-block__block1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        background: #6842ff;
        border-radius: 8px;
        width: 368px;
        height: 324px;
      }

      .ads-block__block2 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        background: #6842ff;
        border-radius: 8px;
        width: 368px;
        height: 660px;
      }
    }

    .ads-block__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px;
    }
  }

  .content__footer {
    max-width: 1850px;
    width: 100%;
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
  }
}
</style>
<style scoped>
span {
  font-weight: 400;
  font-size: 12px;
}

h3 {
  font-weight: 900;
  color: #fff;
  font-size: 16px;
}

h4 {
  font-weight: 900;
  color: #fff;
  font-size: 14px;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 40px;
  color: #fff;
}

li {
  list-style: circle;
  font-size: 14px;
}

.divider {
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.12);
  border-bottom-width: thin;
  width: calc(100% - 16px);
  margin-top: 4px;
  margin-bottom: 20px;
}
</style>
<style scoped>
@media screen and (max-width: 938px) {
  .game-view {
    .content {
      &__main {
        &__wrapper {
          gap: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .game-view {
    .content__footer {
      margin-top: 12px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
    }
  }
}
</style>
