<script>
import { onMounted, ref } from "vue";
import Icons from "../Other/Icons.vue";

import { useStore } from "vuex";
export default {
    components: { Icons },
    props: {
        people: Array,
    },
    setup(props) {
        const store = useStore();
        const activeElem = ref(0);
        const cardBlock = ref();
        const transformTranslate = ref(34);
        const elemCarusel = ref(2);
        const scrolLeft = () => {
            activeElem.value -= 1;
            if (activeElem.value < 0) {
                activeElem.value = props.people.length - elemCarusel.value;
            }
            cardBlock.value.style.transform = `translateX(-${
                transformTranslate.value * activeElem.value
            }%)`;
        };
        const scrolRight = () => {
            activeElem.value += 1;
            if (activeElem.value > props.people.length - elemCarusel.value) {
                activeElem.value = 0;
            }
            cardBlock.value.style.transform = `translateX(-${
                transformTranslate.value * activeElem.value
            }%)`;
        };

        onMounted(() => {
            if (window.innerWidth <= 390) {
                transformTranslate.value = 100;
                elemCarusel.value = 1;
            } else if (window.innerWidth <= 834) {
                transformTranslate.value = 51;
                elemCarusel.value = 2;
            } else {
                transformTranslate.value = 34;
                elemCarusel.value = 3;
            }
        });
        return {
            store,
            scrolRight,
            scrolLeft,
            activeElem,
            transformTranslate,
            cardBlock,
            elemCarusel,
        };
    },
};
</script>
<template>
    <main class="people" v-if="people.length != 0">
        <h2 class="people__title">Состав</h2>
        <div class="people__block">
            <icons
                icons="arrow"
                class="carusel__arrow"
                style="transform: rotate(180deg)"
                @click="scrolLeft()"
            />
            <nav class="block__carusel">
                <div class="carusel__card" ref="cardBlock">
                    <div
                        class="card"
                        v-for="(item, index) in people"
                        :key="index"
                    >
                        <img class="card__image" :src="item.src" />
                        <h3 class="card__name">{{ item.name }}</h3>
                        <h4 class="card__post">{{ item.post }}</h4>
                        <p class="card__info">
                            {{ item.info }}
                        </p>
                    </div>
                </div>
            </nav>
            <icons icons="arrow" class="carusel__arrow" @click="scrolRight()" />
        </div>
        <div class="arrow__block">
            <icons
                icons="arrow"
                class="arrow"
                style="transform: rotate(180deg)"
                @click="scrolLeft()"
            />
            <icons icons="arrow" class="arrow" @click="scrolRight()" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.people {
    margin: 0 auto;
    max-width: 1600px;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
    color: #fffcf2;
    .people__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(160vw / var(--ratio)), 160px);
        line-height: 85%; /* 136px */
        letter-spacing: 3.2px;
        text-align: center;
    }
    .people__block {
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        display: flex;
        align-items: center;
        .carusel__arrow {
            margin: 0 clamp(24px, calc(40vw / var(--ratio)), 40px);
            min-width: clamp(48px, calc(72vw / var(--ratio)), 72px);
            min-height: clamp(48px, calc(72vw / var(--ratio)), 72px);
            opacity: 0.4;
            transition: all 0.25s;
            &:hover {
                opacity: 1;
            }
        }
        .block__carusel {
            overflow-x: hidden;
            .carusel__card {
                display: flex;
                grid-gap: 2%;
                transition: all 0.25s;
                .card {
                    border-radius: 24px;
                    min-width: 32%;
                    background: linear-gradient(
                        180deg,
                        rgba(0, 77, 243, 0.5) 0%,
                        rgba(0, 77, 243, 0.1) 100%
                    );
                    .card__image {
                        width: 100%;
                        aspect-ratio: 416/480;
                        object-fit: cover;
                        border-radius: 24px;
                    }
                    .card__name {
                        margin: 0 clamp(24px, calc(40vw / var(--ratio)), 40px);
                        margin-top: clamp(
                            16px,
                            calc(40vw / var(--ratio)),
                            40px
                        );
                        font-family: "Cruinn Black";
                        font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                        line-height: 85%; /* 34px */
                        letter-spacing: 0.8px;
                        word-spacing: 9999px;
                    }
                    .card__post {
                        margin: 0 clamp(24px, calc(40vw / var(--ratio)), 40px);
                        margin-top: 15px;
                        font-family: "Cruinn Medium";
                        font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
                        line-height: 85%; /* 20.4px */
                        letter-spacing: 0.48px;
                    }
                    .card__info {
                        margin: 0 clamp(24px, calc(40vw / var(--ratio)), 40px);
                        margin-top: clamp(
                            16px,
                            calc(24vw / var(--ratio)),
                            24px
                        );
                        margin-bottom: clamp(
                            24px,
                            calc(40vw / var(--ratio)),
                            40px
                        );
                        font-family: "Montserrat Regular";
                        font-size: clamp(12px, calc(24vw / var(--ratio)), 24px);
                        line-height: 150%; /* 36px */
                        letter-spacing: 1.92px;
                        opacity: 0.6;
                    }
                }
            }
        }
    }
    .arrow__block {
        display: none;
    }
}
@media screen and (max-width: 834px) {
    .people {
        max-width: 700px;
        padding: clamp(20px, calc(40vw / var(--ratio)), 40px) 0;
        .people__title {
            font-size: clamp(36px, calc(64vw / var(--ratio)), 64px);
            letter-spacing: 1.28px;
        }
        .people__block {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .carusel__arrow {
                margin: 0 clamp(10px, calc(24vw / var(--ratio)), 24px);
                min-width: clamp(22px, calc(48vw / var(--ratio)), 48px);
                min-height: clamp(22px, calc(48vw / var(--ratio)), 48px);
            }
            .block__carusel {
                .carusel__card {
                    grid-gap: 2%;
                    .card {
                        border-radius: 16px;
                        min-width: 49%;

                        .card__image {
                            aspect-ratio: 255/190;
                            border-radius: 16px;
                        }
                        .card__name {
                            margin: 0 16px;
                            margin-top: 16px;
                            font-size: 24px;
                            letter-spacing: 0.48px;
                        }
                        .card__post {
                            margin: 0 16px;
                            margin-top: 16px;
                            font-size: 16px;
                            letter-spacing: 0.32px;
                        }
                        .card__info {
                            margin: 0 16px;
                            margin-top: 16px;
                            margin-bottom: 24px;
                            font-size: 12px;
                            letter-spacing: 0.96px;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 394px) {
    .people {
        max-width: 255px;
        padding: 20px 0;
        .people__title {
            font-size: 36px;
            letter-spacing: 0.72px;
        }
        .people__block {
            margin-top: 24px;
            .carusel__arrow {
                display: none;
                margin: 0 clamp(10px, calc(24vw / var(--ratio)), 24px);
                min-width: clamp(30px, calc(48vw / var(--ratio)), 48px);
                min-height: clamp(30px, calc(48vw / var(--ratio)), 48px);
            }
            .block__carusel {
                .carusel__card {
                    grid-gap: 0%;
                    .card {
                        min-width: 100%;
                    }
                }
            }
        }
        .arrow__block {
            display: flex;
            justify-content: center;
            margin-top: 16px;
            .arrow {
                margin: 0 8px;
                max-width: 22px;
                max-height: 22px;
            }
        }
    }
}
</style>
