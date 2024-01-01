<script>
import { onMounted, ref } from "vue";
import Icons from "./Other/Icons.vue";
export default {
    components: { Icons },
    props: {
        progress: Array,
    },
    setup(props) {
        const progress = ref(props.progress);

        const carusel = ref();
        const current = ref(0);
        const elemCarusel = ref(3);

        const clickLeft = () => {
            current.value -= 1;
            if (current.value < 0) {
                current.value = progress.value.length - elemCarusel.value;
            }
            carusel.value.style.transform = `translateX(-${
                (100 / elemCarusel.value) * current.value
            }%)`;
        };
        const clickRight = () => {
            current.value += 1;
            if (current.value > progress.value.length - elemCarusel.value) {
                current.value = 0;
            }
            carusel.value.style.transform = `translateX(-${
                (100 / elemCarusel.value) * current.value
            }%)`;
        };
        onMounted(() => {
            if (window.innerWidth > 650) {
                elemCarusel.value = 3;
            } else {
                elemCarusel.value = 1;
            }
        });
        return {
            progress,
            carusel,
            current,
            clickLeft,
            clickRight,
            elemCarusel,
        };
    },
};
</script>

<template>
    <main class="progress">
        <h2 class="progress__title">Наши достижения</h2>
        <div class="progress__block">
            <Icons
                icons="arrow"
                style="transform: rotate(180deg)"
                class="block__arrow"
                @click="clickLeft()"
            />
            <nav class="block__carusel">
                <div class="carusel__item" ref="carusel">
                    <router-link
                        to="/"
                        class="item"
                        v-for="(item, index) in progress"
                        :key="index"
                    >
                        <div class="item__content">
                            <img :src="item.src" class="content__img" />
                            <h4 class="content__about">
                                Подробнее
                                <Icons
                                    icons="arrowDefault"
                                    class="about__arrow"
                                />
                            </h4>
                        </div>
                        <h6 class="item__data">{{ item.data }}</h6>
                        <h5 class="item__title">{{ item.title }}</h5>
                    </router-link>
                </div>
            </nav>
            <Icons icons="arrow" class="block__arrow" @click="clickRight()" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.progress {
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
    max-width: 1620px;
    margin: 0 auto;
    color: #fffcf2;
    .progress__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(160vw / var(--ratio)), 160px);
        line-height: 65%; /* 104px */
        letter-spacing: 3.2px;
        text-align: center;
    }
    .progress__block {
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .block__arrow {
            min-width: clamp(36px, calc(72vw / var(--ratio)), 72px);
            height: clamp(36px, calc(72vw / var(--ratio)), 72px);
            opacity: 0.4;
            transition: all 0.25s;
            margin: 0 clamp(15px, calc(40vw / var(--ratio)), 40px);
            &:hover {
                opacity: 1;
            }
        }
        .block__carusel {
            overflow: hidden;
            .carusel__item {
                display: flex;
                grid-gap: 2%;
                transition: all 0.25s;

                .item {
                    min-width: 32%;
                    .item__content {
                        position: relative;
                        background: #161616;
                        .content__img {
                            width: 100%;
                            aspect-ratio: 430/320;
                            object-fit: cover;
                            opacity: 0.4;
                        }
                        .content__about {
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            position: absolute;
                            display: flex;
                            align-items: center;
                            font-family: "Cruinn Medium";
                            font-size: clamp(
                                20px,
                                calc(40vw / var(--ratio)),
                                40px
                            );
                            line-height: normal;
                            letter-spacing: 0.8px;
                            .about__arrow {
                                width: clamp(
                                    24px,
                                    calc(32vw / var(--ratio)),
                                    32px
                                );
                                height: clamp(
                                    24px,
                                    calc(32vw / var(--ratio)),
                                    32px
                                );
                                margin-left: 4px;
                            }
                        }
                    }
                    .item__data {
                        margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
                        font-family: "Cruinn Black";
                        font-size: clamp(8px, calc(16vw / var(--ratio)), 16px);
                        line-height: normal;
                        letter-spacing: 0.32px;
                    }
                    .item__title {
                        margin-top: clamp(8px, calc(24vw / var(--ratio)), 24px);
                        font-family: "Cruinn Black";
                        font-size: clamp(16px, calc(40vw / var(--ratio)), 40px);
                        line-height: 85%; /* 34px */
                        letter-spacing: 0.8px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 834px) {
    .progress {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 0;
        max-width: 750px;
        .progress__title {
            font-size: clamp(36px, calc(64vw / var(--ratio)), 64px);
            letter-spacing: 1.28px;
        }
        .progress__block {
            margin-top: 24px;
            .block__arrow {
                min-width: clamp(24px, calc(44vw / var(--ratio)), 44px);
                height: clamp(24px, calc(44vw / var(--ratio)), 44px);
                margin: 0 clamp(10px, calc(20vw / var(--ratio)), 20px);
            }
            .block__carusel {
                .carusel__item {
                    grid-gap: 2%;
                    .item {
                        .item__content {
                            .content__img {
                                aspect-ratio: 165/123;
                            }
                            .content__about {
                                font-size: 20px;
                                letter-spacing: 0.4px;
                                .about__arrow {
                                    width: 24px;
                                    height: 24px;
                                }
                            }
                        }
                        .item__data {
                            margin-top: 8px;
                            font-size: 8px;
                            letter-spacing: 0.16px;
                        }
                        .item__title {
                            margin-top: 8px;
                            font-size: 16px;
                            letter-spacing: 0.32px;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 650px) {
    .progress {
        padding: 24px 0;
        max-width: 400px;
        .progress__title {
            font-size: 36px;
            letter-spacing: 0.72px;
        }
        .progress__block {
            .block__arrow {
                min-width: 22px;
                height: 22px;
                margin: 0 clamp(10px, calc(20vw / var(--ratio)), 20px);
            }
            .block__carusel {
                .carusel__item {
                    grid-gap: 0%;
                    .item {
                        min-width: 100%;
                        .item__content {
                            .content__img {
                                aspect-ratio: 213/150;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
