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
        const reviews = [
            {
                text: ", tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
                name: "Имя Отчеств",
            },
            {
                text: " consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
                name: "Имя Отчест",
            },
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
                name: "Имя Отчес",
            },
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
                name: "Имя Отче",
            },
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. ",
                name: "Имя Отч",
            },
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. ",
                name: "Имя От",
            },
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. ",
                name: "Имя О",
            },
        ];
        const widthBlock = ref(1600);
        const scrolAdaptive = ref(0);
        const transformTranslate = ref(0);

        const scrolCard = (index) => {
            console.log(activeElem.value, index);
            if (activeElem.value - 1 == index) {
                activeElem.value -= 1;
            } else if (activeElem.value == index) {
                activeElem.value += 1;
                scrolRight();
            }
        };

        const scrolRight = () => {
            cardBlock.value.style.transform = `translateX(-${
                transformTranslate.value * (activeElem.value - 1) +
                scrolAdaptive.value
            }px)`;
        };

        onMounted(() => {
            transformTranslate.value = cardBlock.value.children[0].clientWidth;
            if (widthBlock.value > window.innerWidth) {
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
                    <Icons
                        icons="arrow"
                        class="card__arrow"
                        :class="{
                            card__arrow__previews: index == activeElem - 1,
                        }"
                        @click="scrolCard(index)"
                    />
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
                .card__arrow {
                    min-width: 222px;
                    transition: opacity 0.25s;
                    opacity: 0;
                    transform: translateX(-15%) rotate(180deg);
                    svg {
                        width: clamp(44px, calc(66vw / var(--ratio)), 66px);
                        height: clamp(44px, calc(6vw / var(--ratio)), 66px);
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
                .card__arrow {
                    transform: translateX(15%) rotate(0deg);
                    opacity: 0.4;
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
</style>
