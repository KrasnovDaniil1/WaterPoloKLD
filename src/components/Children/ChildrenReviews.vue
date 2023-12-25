<script>
import { onMounted, ref } from "vue";
import Icons from "../Other/Icons.vue";
export default {
    components: {
        Icons,
    },
    setup() {
        const activeElem = ref(1);
        const cardBlock = ref();
        const reviews = ref([
            {
                text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
                name: "Имя Отчеств",
            },
            {
                text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
                name: "Имя Отчест",
            },
            {
                text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
                name: "Имя Отчес",
            },

            {
                text: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. ",
                name: "Имя -2",
            },
            {
                text: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. ",
                name: "Имя -1",
            },
        ]);
        const widthBlock = ref(1600);
        const scrolAdaptive = ref(0);
        const transformTranslate = ref(0);
        const windowWidth = ref(window.innerWidth);

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

        onMounted(() => {
            reviews.value.push(reviews.value[reviews.value.length - 1]);
            reviews.value.unshift(reviews.value[0]);

            transformTranslate.value = cardBlock.value.children[0].clientWidth;
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
        });

        return {
            reviews,
            activeElem,
            scrolCard,
            cardBlock,
            widthBlock,
            transformTranslate,
            scrolAdaptive,
            scrolLeft,
            windowWidth,
        };
    },
};
</script>
<template>
    <main class="reviews">
        <h2 class="reviews__title">Отзывы</h2>
        <nav class="reviews__block">
            <div class="block__card" ref="cardBlock">
                <nav
                    class="card"
                    v-for="(item, index) in reviews"
                    :key="index"
                    :class="{ card__active: index == activeElem }"
                >
                    <div class="card__content">
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
                        margin-top: clamp(
                            24px,
                            calc(40vw / var(--ratio)),
                            40px
                        );
                        font-family: "Cruinn Bold";
                        font-size: 16px;
                        line-height: 150%; /* 24px */
                        letter-spacing: 1.28px;
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
