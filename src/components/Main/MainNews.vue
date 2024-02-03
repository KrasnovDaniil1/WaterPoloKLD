<script>
import { computed, onMounted, ref } from "vue";
import BtnSeeAll from "../Btn/BtnSeeAll.vue";
import BtnDownload from "../Btn/BtnDownload.vue";
import { useStore } from "vuex";
import Icons from "../Other/Icons.vue";

export default {
    components: {
        BtnSeeAll,
        Icons,
        BtnDownload,
    },
    setup() {
        const store = useStore();
        const activeBtn = ref(0);
        const blockCard = ref([]);

        // blockCard.value = store.getters.getBlog("new");
        const panelBtn = [
            {
                title: "Новые",
                icon: "new",
            },
            {
                title: "Дети",
                icon: "children",
            },
            {
                title: "Любители",
                icon: "amateur",
            },
            {
                title: "Студенты",
                icon: "student",
            },
            {
                title: "Федерация",
                icon: "federation",
            },
        ];

        const changeCategory = async (category, index) => {
            blockCard.value = await store.getters.getBlog(category);
            console.log(blockCard.value, "даннык");
            activeBtn.value = index;
        };
        onMounted(() => {
            setTimeout(() => {
                blockCard.value = store.getters.getBlog("new");
            }, 1000);
        });
        return {
            panelBtn,
            activeBtn,
            blockCard,
            store,
            changeCategory,
        };
    },
};
</script>
<template>
    <main class="news" v-if="blockCard.length != 0">
        <div class="news__top">
            <h2 class="news__title">Новостной блог</h2>
            <BtnSeeAll class="news__btn" />
        </div>
        <nav class="news__panel">
            <button
                v-for="(item, index) in panelBtn"
                class="panel__btn"
                :class="{ 'panel__btn-active': index == activeBtn }"
                :key="index"
                @click="changeCategory(item.icon, index)"
            >
                <Icons :icons="item.icon" class="btn__icon" />
                <p class="btn__text">{{ item.title }}</p>
            </button>
        </nav>
        <div class="news__block">
            <router-link
                v-for="(item, index) in blockCard.slice(0, 4)"
                class="block__card"
                :to="{ name: 'blog_id', params: { id: item.id } }"
                :key="index"
            >
                <img :src="item.src" class="card__img" />
                <Icons :icons="item.category" class="card__icon" />
                <p class="card__date">{{ item.date }}</p>
                <h3 class="card__title">
                    {{ item.title }}
                </h3>
                <button class="card__btn">
                    Подробнее <Icons icons="arrowDefault" class="btn__icon" />
                </button>
            </router-link>
        </div>
        <div class="news__btn">
            <BtnDownload />
        </div>
        <!-- <nav class="news__navigation">
            <h4 class="navigation__page">
                Стр. 1<span class="page__all">/5</span>
            </h4>
            <button class="navigation__num navigation__num-active">1</button>
            <button class="navigation__num">2</button>
            <button class="navigation__num">3</button>
            <button class="navigation__num">
                <Icons icons="arrowDouble" class="num__icon" />
            </button>
        </nav> -->
    </main>
</template>
<style lang="scss" scoped>
.news {
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 10px;
    max-width: 1330px;
    width: 100%;
    margin: 0 auto;
    color: #fffcf2;
    .news__top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .news__title {
            font-family: "Akrobat ExtraBold";
            font-size: clamp(48px, calc(96vw / var(--ratio)), 96px);
            line-height: 85%; /* 81.6px */
            letter-spacing: 1.92px;
        }
        .news__btn {
            margin-left: auto;
        }
    }
    .news__panel {
        display: flex;
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        .panel__btn {
            display: flex;
            align-items: center;
            padding: clamp(8px, calc(24vw / var(--ratio)), 24px)
                clamp(16px, calc(40vw / var(--ratio)), 40px);
            opacity: 0.6;
            border: 2px solid #fffcf2;
            transition: all 0.25s;
            &:not(:last-child) {
                margin-right: clamp(16px, calc(40vw / var(--ratio)), 40px);
            }
            .btn__icon {
                width: clamp(32px, calc(56vw / var(--ratio)), 56px);
                height: clamp(32px, calc(56vw / var(--ratio)), 56px);
            }
            .btn__text {
                max-width: 0;
                overflow: hidden;
                font-family: "Cruinn Black";
                font-size: clamp(16px, calc(36vw / var(--ratio)), 36px);
                line-height: normal;
                letter-spacing: 0.72px;
                transition: all 0.25s;
            }
        }
        .panel__btn-active {
            opacity: 1;
            background: #004df3;
            border: none;
            .btn__text {
                margin-left: 16px;
                max-width: 400px;
            }
        }
    }
    .news__block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: clamp(16px, calc(20vw / var(--ratio)), 20px);
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        .block__card {
            position: relative;
            background: #161616;
            .card__img {
                width: 100%;
                height: clamp(140px, calc(360vw / var(--ratio)), 360px);
                object-fit: cover;
                opacity: 0.5;
            }
            .card__icon {
                position: absolute;
                top: clamp(8px, calc(21vw / var(--ratio)), 21px);
                left: clamp(12px, calc(40vw / var(--ratio)), 40px);
                width: clamp(24px, calc(56vw / var(--ratio)), 56px);
                height: clamp(24px, calc(56vw / var(--ratio)), 56px);
            }
            .card__date {
                position: absolute;
                top: clamp(8px, calc(21vw / var(--ratio)), 21px);
                right: clamp(12px, calc(40vw / var(--ratio)), 40px);
                font-family: "Cruinn Black";
                font-size: clamp(10px, calc(16vw / var(--ratio)), 16px);
                line-height: normal;
                letter-spacing: 0.32px;
                opacity: 0.75;
            }
            .card__title {
                position: absolute;
                bottom: clamp(8px, calc(21vw / var(--ratio)), 21px);
                left: clamp(12px, calc(40vw / var(--ratio)), 40px);
                max-width: clamp(231px, calc(433vw / var(--ratio)), 433px);
                font-family: "Cruinn Bold";
                font-size: clamp(14px, calc(32vw / var(--ratio)), 32px);
                line-height: normal;
                letter-spacing: 0.64px;
            }
            .card__btn {
                position: absolute;
                right: clamp(12px, calc(40vw / var(--ratio)), 40px);
                bottom: clamp(8px, calc(21vw / var(--ratio)), 21px);
                display: flex;
                align-items: center;
                font-family: "Cruinn Medium";
                font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
                line-height: normal;
                letter-spacing: 0.32px;
                .btn__icon {
                    width: clamp(16px, calc(24vw / var(--ratio)), 24px);
                    height: clamp(16px, calc(24vw / var(--ratio)), 24px);
                }
            }
        }
    }
    .news__btn {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
    // .news__navigation {
    //     margin-top: clamp(15px, calc(56vw / var(--ratio)), 56px);
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     font-family: "Montserrat Regular";
    //     .navigation__page {
    //         margin-right: clamp(16px, calc(40vw / var(--ratio)), 40px);
    //         font-size: clamp(16px, calc(32vw / var(--ratio)), 32px);
    //         line-height: normal;
    //         letter-spacing: 0.64px;
    //         .page__all {
    //             opacity: 0.4;
    //         }
    //     }
    //     .navigation__num {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         width: clamp(24px, calc(40vw / var(--ratio)), 40px);
    //         height: clamp(24px, calc(40vw / var(--ratio)), 40px);
    //         border-radius: 50%;
    //         font-size: clamp(12px, calc(24vw / var(--ratio)), 24px);
    //         line-height: normal;
    //         letter-spacing: 0.48px;
    //         border: 1px solid #fffcf2;
    //         opacity: 0.4;
    //         transition: all 0.25s;
    //         &:not(:last-child) {
    //             margin-right: 8px;
    //         }
    //         .num__icon {
    //             width: clamp(12px, calc(18vw / var(--ratio)), 18px);
    //             height: clamp(12px, calc(18vw / var(--ratio)), 18px);
    //         }
    //     }
    //     .navigation__num-active {
    //         opacity: 1;
    //         background: #fffcf2;
    //         color: #161616;
    //     }
    // }
}
@media screen and (max-width: 834px) {
    .news {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 10px;
        max-width: 526px;
        .news__top {
            .news__title {
                font-size: clamp(24px, calc(48vw / var(--ratio)), 48px);
                letter-spacing: 0.96px;
            }
        }
        .news__panel {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .panel__btn {
                padding: 8px clamp(8px, calc(16vw / var(--ratio)), 16px);
                border: 1px solid #fffcf2;
                &:not(:last-child) {
                    margin-right: clamp(8px, calc(16vw / var(--ratio)), 16px);
                }
                .btn__icon {
                    width: clamp(16px, calc(32vw / var(--ratio)), 32px);
                    height: clamp(16px, calc(32vw / var(--ratio)), 32px);
                }
                .btn__text {
                    font-size: clamp(10px, calc(16vw / var(--ratio)), 16px);
                    letter-spacing: 0.32px;
                }
            }
            .panel__btn-active {
                border: none;
                .btn__text {
                    margin-left: clamp(4px, calc(16vw / var(--ratio)), 16px);
                    max-width: 400px;
                }
            }
        }
        .news__block {
            grid-gap: clamp(8px, calc(16vw / var(--ratio)), 16px);
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .block__card {
                .card__img {
                    height: clamp(110px, calc(140vw / var(--ratio)), 140px);
                }
                .card__icon {
                    top: 8px;
                    left: 12px;
                    width: 24px;
                    height: 24px;
                }
                .card__date {
                    top: 8px;
                    right: 12px;
                    font-size: clamp(8px, calc(16vw / var(--ratio)), 10px);
                    letter-spacing: 0.2px;
                }
                .card__title {
                    width: 100%;
                    padding: 0 12px;
                    bottom: 8px;
                    left: 0px;
                    max-width: 100%;
                    font-size: 14px;
                    letter-spacing: 0.28px;
                }
                .card__btn {
                    right: 50%;
                    bottom: 50%;
                    font-size: 12px;
                    letter-spacing: 0.24px;
                    transform: translate(50%, 50%);
                    .btn__icon {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
        .news__btn {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
        }
        // .news__navigation {
        //     margin-top: 16px;
        //     .navigation__page {
        //         margin-right: 16px;
        //         font-size: 16px;
        //         letter-spacing: 0.32px;
        //     }
        //     .navigation__num {
        //         width: 24px;
        //         height: 24px;
        //         font-size: 12px;
        //         letter-spacing: 0.32px;
        //         &:not(:last-child) {
        //             margin-right: 8px;
        //         }
        //         .num__icon {
        //             width: 12px;
        //             height: 12px;
        //         }
        //     }
        // }
    }
}
@media screen and (max-width: 390px) {
    .news {
        padding: clamp(16px, calc(24vw / var(--ratio)), 24px) 5px;
        max-width: 294px;
        .news__top {
            .news__title {
                font-size: clamp(16px, calc(24vw / var(--ratio)), 20px);
                letter-spacing: 0.48px;
            }
        }
        .news__panel {
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
            .panel__btn {
                padding: 8px;
                &:not(:last-child) {
                    margin-right: 8px;
                }
                .btn__icon {
                    width: 16px;
                    height: 16px;
                }
                .btn__text {
                    font-size: 10px;
                    letter-spacing: 0.2px;
                }
            }
            .panel__btn-active {
                .btn__text {
                    margin-left: 4px;
                    max-width: 400px;
                }
            }
        }
        .news__block {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 8px;
            margin-top: 24px;
            .block__card {
                .card__img {
                    height: clamp(120px, calc(160vw / var(--ratio)), 160px);
                }
                .card__icon {
                    top: 16px;
                    left: 16px;
                }
                .card__date {
                    top: 16px;
                    right: 16px;
                    font-size: 8px;
                    letter-spacing: 0.16px;
                }
                .card__title {
                    padding: 0 12px;
                    bottom: 8px;
                    left: 0px;
                    max-width: 100%;
                    font-size: 14px;
                    letter-spacing: 0.32px;
                }
                .card__btn {
                    font-size: 16px;
                    letter-spacing: 0.4px;
                    .btn__icon {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
        .news__btn {
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
        }
    }
}
</style>
