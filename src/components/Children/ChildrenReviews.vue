<script>
import { computed, onMounted, ref } from "vue";
import Icons from "../Other/Icons.vue";
import { useStore } from "vuex";
export default {
    components: {
        Icons,
    },
    setup() {
        const store = useStore();
        const activeElem = ref(1);
        const cardBlock = ref();
        const reviews = ref([]);
        const widthBlock = ref(1600);
        const scrolAdaptive = ref(0);
        const transformTranslate = ref(0);
        const windowWidth = ref(window.innerWidth);
        const activeAbout = ref(false);
        const contentActiveAbout = ref({ text: "", name: "" });

        const changeAboutContent = (item) => {
            activeAbout.value = true;
            contentActiveAbout.value = {
                text: item.text,
                name: item.name,
            };
        };
        const scrolCard = (index) => {
            if (activeElem.value - 1 == index) {
                scrolLeft();
            } else if (activeElem.value == index) {
                scrolRight();
            }
        };

        const scrolRight = () => {
            activeElem.value += 1;
            if (activeElem.value >= reviews.value.length - 1) {
                activeElem.value = 1;
            }
            cardBlock.value.style.transform = `translateX(-${
                transformTranslate.value * (activeElem.value - 1) +
                scrolAdaptive.value
            }px)`;
        };
        const scrolLeft = () => {
            activeElem.value -= 1;
            if (activeElem.value < 1) {
                activeElem.value = reviews.value.length - 2;
            }
            cardBlock.value.style.transform = `translateX(-${
                transformTranslate.value * (activeElem.value - 1) +
                scrolAdaptive.value
            }px)`;
        };
        let t = setInterval(() => {
            console.log("a");
            if (reviews.value.length != 0) {
                clearInterval(t);
                reviews.value.push(reviews.value[reviews.value.length - 1]);
                reviews.value.unshift(reviews.value[0]);

                transformTranslate.value =
                    cardBlock.value.children[0].clientWidth;
                if (window.innerWidth <= 834) {
                    widthBlock.value = 801;
                }
                if (window.innerWidth <= 390) {
                    widthBlock.value = 480;
                }
                if (widthBlock.value >= window.innerWidth) {
                    scrolAdaptive.value =
                        (widthBlock.value - window.innerWidth) / 2;
                    cardBlock.value.style.transform = `translateX(-${scrolAdaptive.value}px)`;
                }
            }
        }, 500);
        // onMounted(() => {
        //     reviews.value = store.getters.getReviews;
        //     setTimeout(() => {
        //         reviews.value.push(reviews.value[reviews.value.length - 1]);
        //         reviews.value.unshift(reviews.value[0]);

        //         transformTranslate.value =
        //             cardBlock.value.children[0].clientWidth;
        //         if (window.innerWidth <= 834) {
        //             widthBlock.value = 801;
        //         }
        //         if (window.innerWidth <= 390) {
        //             widthBlock.value = 480;
        //         }
        //         if (widthBlock.value >= window.innerWidth) {
        //             scrolAdaptive.value =
        //                 (widthBlock.value - window.innerWidth) / 2;
        //             cardBlock.value.style.transform = `translateX(-${scrolAdaptive.value}px)`;
        //         }
        //     }, 1000);
        // });

        return {
            activeAbout,
            store,
            reviews: computed(() => (reviews.value = store.getters.getReviews)),
            activeElem,
            scrolCard,
            cardBlock,
            widthBlock,
            transformTranslate,
            scrolAdaptive,
            scrolLeft,
            windowWidth,
            changeAboutContent,
            contentActiveAbout,
        };
    },
};
</script>
<template>
    <main class="reviews" v-if="reviews.length != 0">
        <h2 class="reviews__title">Отзывы</h2>
        <nav class="reviews__block">
            <div class="block__card" ref="cardBlock">
                <nav
                    class="card"
                    v-for="(item, index) in reviews"
                    :key="index"
                    :class="{ card__active: index == activeElem }"
                >
                    <div
                        class="card__content"
                        @click="changeAboutContent(item)"
                    >
                        <Icons icons="quote" class="content__icon" />
                        <p class="content__text">
                            {{ item.text }}
                        </p>
                        <h3 class="content__name">{{ item.name }}</h3>
                    </div>
                    <div
                        class="card__arrow__block"
                        :class="{
                            card__arrow__previews: index == activeElem - 1,
                        }"
                        @click="scrolCard(index)"
                    >
                        <Icons icons="arrow" class="card__arrow" />
                    </div>
                </nav>
            </div>
        </nav>
    </main>
    <main class="about" v-if="activeAbout">
        <div class="block__card">
            <nav class="card">
                <div class="card__content">
                    <Icons
                        icons="close"
                        class="card__close"
                        @click="activeAbout = false"
                    />
                    <Icons icons="quote" class="content__icon" />
                    <p class="content__text">
                        {{ contentActiveAbout.text }}
                    </p>
                    <h3 class="content__name">{{ contentActiveAbout.name }}</h3>
                </div>
            </nav>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.reviews {
    position: relative;

    color: #fffcf2;
    max-width: 1600px;
    margin: 0 auto;
    overflow-x: hidden;
    .reviews__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(160vw / var(--ratio)), 160px);
        line-height: 85%; /* 136px */
        letter-spacing: 3.2px;
        text-align: center;
    }

    .reviews__block {
        padding: 120px 0;

        .block__card {
            position: relative;
            display: flex;
            // transform: translateX(-382.5px);
            transition: all 0.25s;
            .card {
                width: fit-content;
                display: flex;
                align-items: center;
                .card__arrow__block {
                    min-width: 222px;
                    transition: opacity 0.25s;
                    opacity: 0;
                    transform: translateX(-50%) rotate(180deg);
                    .card__arrow {
                        width: clamp(44px, calc(66vw / var(--ratio)), 66px);
                        height: clamp(44px, calc(66vw / var(--ratio)), 66px);
                    }
                }
                .card__arrow__previews {
                    opacity: 0.4;
                    &:hover {
                        opacity: 1;
                    }
                }
                .card__content {
                    transition: all 0.25s;
                    min-width: 385px;

                    height: 100%;
                    padding: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    display: flex;
                    flex-direction: column;
                    opacity: 0.4;
                    border-radius: 24px;
                    background: var(
                        --bg,
                        linear-gradient(
                            180deg,
                            rgba(0, 77, 243, 0.5) 0%,
                            rgba(0, 77, 243, 0.1) 100%
                        )
                    );

                    .content__icon {
                        width: 32px;
                        height: 23px;
                    }
                    .content__text {
                        cursor: pointer;
                        margin-top: clamp(
                            24px,
                            calc(40vw / var(--ratio)),
                            40px
                        );
                        font-family: "Cruinn Bold";
                        font-size: 16px;
                        line-height: 150%; /* 24px */
                        letter-spacing: 1.28px;
                        display: -webkit-box;
                        -webkit-line-clamp: 6;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .content__name {
                        padding-top: clamp(
                            24px,
                            calc(40vw / var(--ratio)),
                            40px
                        );
                        margin-top: auto;
                        font-family: "Cruinn Black";
                        font-size: 20px;
                        line-height: 85%; /* 34px */
                        letter-spacing: 0.8px;
                    }
                }
            }
            .card__active {
                .card__arrow__block {
                    opacity: 0.4;
                    transform: translateX(50%) rotate(0deg);
                    &:hover {
                        opacity: 1;
                    }
                }
                .card__content {
                    opacity: 1;
                    transform: scale(1.35);
                }
            }
        }
    }
}
.about {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99;

    color: white;
    .block__card {
        max-width: 100%;
        width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        .card {
            display: flex;
            align-items: center;

            .card__content {
                position: relative;

                width: 100%;
                height: 100%;
                padding: clamp(24px, calc(40vw / var(--ratio)), 40px);
                display: flex;
                flex-direction: column;
                border-radius: 24px;
                background: #003362;
                .card__close {
                    position: absolute;
                    top: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    right: clamp(24px, calc(40vw / var(--ratio)), 40px);
                }
                .content__icon {
                    width: 32px;
                    height: 23px;
                }
                .content__text {
                    margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    font-family: "Cruinn Bold";
                    font-size: 16px;
                    line-height: 150%; /* 24px */
                    max-height: 50vh;
                    overflow-y: scroll;
                }
                .content__name {
                    padding-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    margin-top: auto;
                    font-family: "Cruinn Black";
                    font-size: 20px;
                    line-height: 85%; /* 34px */
                    letter-spacing: 0.8px;
                }
            }
        }
        .card__active {
            .card__arrow__block {
                opacity: 0.4;
                transform: translateX(50%) rotate(0deg);
                &:hover {
                    opacity: 1;
                }
            }
            .card__content {
                opacity: 1;
                transform: scale(1.35);
            }
        }
    }
}
@media screen and (max-width: 834px) {
    .reviews {
        max-width: 100%;
        .reviews__title {
            font-size: clamp(36px, calc(64vw / var(--ratio)), 64px);
            letter-spacing: 1.28px;
        }

        .reviews__block {
            padding: 90px 0;

            // transform: translateX(-35px);
            .block__card {
                .card {
                    .card__arrow__block {
                        // min-width: 222px
                        min-width: 100px;
                        transform: translateX(-65%) rotate(180deg);
                        .card__arrow {
                            width: clamp(24px, calc(30vw / var(--ratio)), 30px);
                            height: clamp(
                                24px,
                                calc(44vw / var(--ratio)),
                                44px
                            );
                        }
                    }

                    .card__content {
                        min-width: 195px;
                        padding: clamp(8px, calc(16vw / var(--ratio)), 16px);
                        border-radius: 16px;

                        .content__icon {
                            width: 16px;
                            height: 16px;
                        }
                        .content__text {
                            margin-top: 16px;
                            font-size: 8px;
                            letter-spacing: 0.64px;
                        }
                        .content__name {
                            padding-top: 16px;
                            font-size: 12px;
                            letter-spacing: 0.24px;
                        }
                    }
                }
                .card__active {
                    .card__arrow__block {
                        transform: translateX(65%) rotate(0deg);
                    }
                    .card__content {
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .reviews {
        .reviews__title {
            font-size: clamp(24px, calc(36vw / var(--ratio)), 36px);
            letter-spacing: 0.72px;
        }

        .reviews__block {
            padding: 60px 0 40px 0;

            // transform: translateX(-35px);
            .block__card {
                .card {
                    .card__arrow__block {
                        // min-width: 222px
                        min-width: 70px;
                        transform: translateX(-55%) rotate(180deg);
                        .card__arrow {
                            width: 24px;
                            height: 24px;
                        }
                    }

                    .card__content {
                        min-width: 107px;
                        padding: 8px;
                        border-radius: 8px;

                        .content__icon {
                            width: 8px;
                            height: 8px;
                        }
                        .content__text {
                            margin-top: 8px;
                            font-size: 6px;
                            letter-spacing: 0.24px;
                        }
                        .content__name {
                            padding-top: 10px;
                            font-size: 6px;
                            letter-spacing: 0.12px;
                        }
                    }
                }
                .card__active {
                    .card__arrow__block {
                        transform: translateX(55%) rotate(0deg);
                    }
                    .card__content {
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
}
</style>
