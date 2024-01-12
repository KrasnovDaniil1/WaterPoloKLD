<script>
import { onMounted, ref } from "vue";
import BtnSeeAll from "../Btn/BtnSeeAll.vue";
import Icons from "../Other/Icons.vue";
import BtnToMain from "../Btn/BtnToMain.vue";
import { useStore } from "vuex";
export default {
    components: {
        BtnSeeAll,
        Icons,
        BtnToMain,
    },
    setup() {
        const store = useStore();
        const activeBtn = ref(0);
        const blockCard = ref(store.getters.getBlog("new"));
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
        const changeCategory = (category, index) => {
            blockCard.value = store.getters.getBlog(category);
            activeBtn.value = index;
        };
        onMounted(() => {
            blockCard.value = store.getters.getBlog("new");
        });
        return {
            store,
            panelBtn,
            activeBtn,
            changeCategory,
            blockCard,
        };
    },
};
</script>
<template>
    <main class="news" v-if="blockCard.length != 0">
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
                v-for="(item, index) in blockCard"
                class="block__card"
                :to="{ name: 'blog_id', params: { id: item.id } }"
                :key="index"
            >
                <img :src="item.src" class="card__img" />
                <Icons :icons="item.category" class="card__icon" />
                <p class="card__date">{{ item.time }}</p>
                <h3 class="card__title">
                    {{ item.title }}
                </h3>
                <button class="card__btn">
                    Подробнее <Icons icons="arrowDefault" class="btn__icon" />
                </button>
            </router-link>
        </div>

        <div class="news__btn">
            <!-- <button class="btn__download">Загрузить еще</button> -->
            <BtnToMain />
        </div>
    </main>
</template>
<style lang="scss" scoped>
.news {
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 10px;
    max-width: 1330px;
    width: 100%;
    margin: 0 auto;
    color: #fffcf2;

    .news__panel {
        display: flex;
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
        .btn__download {
            width: fit-content;
            height: fit-content;
            padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
                clamp(25px, calc(40vw / var(--ratio)), 40px);
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            font-family: "Cruinn Black";
            letter-spacing: 0.48px;
            background: #004df3;
            color: #fffcf2;
            transition: all 0.25s;
            margin-right: 20px;
            &:hover {
                background: #fffcf2;
                color: #004df3;
                opacity: 1;
            }
        }
    }
}
@media screen and (max-width: 834px) {
    .news {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 10px;
        max-width: 526px;

        .news__panel {
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
            .btn__download {
                padding: clamp(8px, calc(10vw / var(--ratio)), 10px)
                    clamp(16px, calc(25vw / var(--ratio)), 25px);
                font-size: clamp(12px, calc(24vw / var(--ratio)), 16px);
                letter-spacing: 0.32px;
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .news {
        padding: clamp(16px, calc(24vw / var(--ratio)), 24px) 5px;
        max-width: 294px;

        .news__panel {
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
            .btn__download {
                padding: 8px calc(16vw / var(--ratio));
                font-size: 12px;
                letter-spacing: 0.24px;
                margin-right: 8px;
            }
        }
    }
}
</style>
