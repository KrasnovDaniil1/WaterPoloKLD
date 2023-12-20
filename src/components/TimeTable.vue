<script>
import { ref } from "vue";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
import Icons from "./Other/Icons.vue";

export default {
    components: { BtnSignTraining, Icons },
    setup() {
        const week = ref(["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]);
        return {
            week,
        };
    },
};
</script>
<template>
    <main class="time">
        <div class="time__top">
            <div class="top__header">
                <h3 class="header__title">Расписание</h3>
                <p class="header__info">Выбери то, что подойдет именно тебе.</p>
            </div>
            <BtnSignTraining class="top__btn" />
        </div>
        <nav class="time__table">
            <div class="table__header">
                <h3 class="header__month">Октябрь</h3>
                <div class="header__btn">
                    <Icons
                        icons="arrow"
                        class="btn__arrow"
                        style="transform: rotate(180deg)"
                    />
                    <Icons icons="arrow" class="btn__arrow" />
                </div>
            </div>
            <div class="table__decor__line"></div>
            <div class="table__carusel">
                <nav class="carusel__item">
                    <button
                        v-for="(item, index) in week"
                        class="item__btn"
                        :class="{ item__btn_active: index == 1 }"
                        :key="index"
                    >
                        <h3 class="btn__title">{{ item }}</h3>
                        <h3 class="btn__title">25</h3>
                    </button>
                </nav>
                <nav class="carusel__item">
                    <button
                        class="item__btn"
                        v-for="(item, index) in week"
                        :key="index"
                    >
                        <h3 class="btn__title">{{ item }}</h3>
                        <h3 class="btn__title">26</h3>
                    </button>
                </nav>
            </div>
        </nav>
        <nav class="time__lesson">
            <div class="lesson__info">
                <h4 class="info">12.00</h4>
                <h4 class="info">Дети</h4>
                <h4 class="info">Тихоокеанская улица, 5</h4>
            </div>
            <div class="table__decor__line"></div>
        </nav>
        <nav class="time__lesson">
            <div class="lesson__info">
                <h4 class="info">12.00</h4>
                <h4 class="info">Дети</h4>
                <h4 class="info">Тихоокеанская улица, 5</h4>
            </div>
            <div class="table__decor__line"></div>
        </nav>
        <nav class="time__lesson">
            <div class="lesson__info">
                <h4 class="info">12.00</h4>
                <h4 class="info">Дети</h4>
                <h4 class="info">Тихоокеанская улица, 5</h4>
            </div>
            <div class="table__decor__line"></div>
        </nav>
    </main>
</template>

<style lang="scss" scoped>
.time {
    max-width: 1330px;
    margin: 0 auto;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 20px;
    color: #fffcf2;
    .table__decor__line {
        margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
        width: 100%;
        height: 1px;
        opacity: 0.4;
        background: #fffcf2;
    }
    .time__top {
        display: flex;
        justify-content: space-between;
        .top__header {
            .header__title {
                font-family: "Akrobat ExtraBold";
                font-size: clamp(48px, calc(96vw / var(--ratio)), 96px);
                line-height: 85%; /* 81.6px */
                letter-spacing: 1.92px;
            }
            .header__info {
                margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
                font-family: "Cruinn Bold";
                font-size: clamp(14px, calc(24vw / var(--ratio)), 24px);
                line-height: normal;
                letter-spacing: 1.92px;
                opacity: 0.8;
            }
        }
        .top__btn {
            margin-top: clamp(8px, calc(17vw / var(--ratio)), 17px);
        }
    }
    .time__table {
        margin: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
        .table__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .header__month {
                font-family: "Cruinn Black";
                font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                line-height: normal;
                letter-spacing: 0.8px;
            }
            .header__btn {
                .btn__arrow {
                    width: clamp(32px, calc(48vw / var(--ratio)), 48px);
                    height: clamp(32px, calc(48vw / var(--ratio)), 48px);
                    opacity: 0.4;
                    transition: all 0.25s;
                    &:first-child {
                        margin-right: 15px;
                    }
                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }

        .table__carusel {
            display: flex;
            overflow-x: hidden;
            .carusel__item {
                // transform: translateX(-100%);
                min-width: 100.1%;
                display: flex;
                justify-content: space-between;
                transition: 0.5s;
                .item__btn {
                    opacity: 0.4;
                    .btn__title {
                        margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
                        font-family: "Cruinn Medium";
                        font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                        line-height: normal;
                        letter-spacing: 0.8px;
                    }
                }
                .item__btn_active {
                    opacity: 1;
                    .btn__title {
                        font-family: "Cruinn Black";
                    }
                }
            }
        }
    }
    .time__lesson {
        width: 100%;
        &:not(:last-child) {
            margin-bottom: clamp(8px, calc(24vw / var(--ratio)), 24px);
        }
        .lesson__info {
            opacity: 1;
            display: flex;
            justify-content: space-between;
            .info {
                // font-family: "Cruinn Medium";
                font-family: "Cruinn Black";
                font-size: clamp(20px, calc(40vw / var(--ratio)), 40px);
                line-height: normal;
                letter-spacing: 0.8px;
            }
        }
    }
    // .time__lesson_active {
    //     .lesson__info {
    //         opacity: 1;
    //         .info {
    //             font-family: "Cruinn Black";
    //         }
    //     }
    // }
}
@media screen and (max-width: 834px) {
    .time {
        max-width: 550px;
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 20px;
        .table__decor__line {
            margin-top: clamp(4px, calc(8vw / var(--ratio)), 8px);
        }
        .time__top {
            .top__header {
                .header__title {
                    font-size: clamp(24px, calc(48vw / var(--ratio)), 48px);
                    letter-spacing: 0.48px;
                }
                .header__info {
                    margin-top: clamp(4px, calc(8vw / var(--ratio)), 8px);
                    font-size: clamp(8px, calc(14vw / var(--ratio)), 14px);
                    letter-spacing: 0.32px;
                }
            }
            .top__btn {
                margin-top: 0;
            }
        }
        .time__table {
            margin: clamp(16px, calc(40vw / var(--ratio)), 40px) 0;
            .table__header {
                .header__month {
                    font-size: clamp(12px, calc(24vw / var(--ratio)), 24px);
                    letter-spacing: 0.48px;
                }
                .header__btn {
                    .btn__arrow {
                        width: clamp(16px, calc(32vw / var(--ratio)), 32px);
                        height: clamp(16px, calc(32vw / var(--ratio)), 32px);
                        &:first-child {
                            margin-right: 10px;
                        }
                    }
                }
            }

            .table__carusel {
                .carusel__item {
                    .item__btn {
                        .btn__title {
                            margin-top: clamp(
                                4px,
                                calc(8vw / var(--ratio)),
                                8px
                            );
                            font-size: clamp(
                                12px,
                                calc(24vw / var(--ratio)),
                                24px
                            );
                            letter-spacing: 0.48px;
                        }
                    }
                }
            }
        }
        .time__lesson {
            &:not(:last-child) {
                margin-bottom: clamp(4px, calc(8vw / var(--ratio)), 8px);
            }
            .lesson__info {
                .info {
                    font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
                    letter-spacing: 0.4px;
                }
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .time {
        max-width: 300px;
        padding: clamp(16px, calc(24vw / var(--ratio)), 24px) 0px;
        .table__decor__line {
            margin-top: 4px;
        }
        .time__top {
            .top__header {
                .header__title {
                    font-size: clamp(20px, calc(24vw / var(--ratio)), 24px);
                    letter-spacing: 0.48px;
                }
                .header__info {
                    margin-top: 4px;
                    font-size: 8px;
                    letter-spacing: 0.32px;
                    max-width: 114px;
                }
            }
        }
        .time__table {
            margin: clamp(10px, calc(16vw / var(--ratio)), 16px) 0;
            .table__header {
                .header__month {
                    font-size: 12px;
                    letter-spacing: 0.24px;
                }
                .header__btn {
                    .btn__arrow {
                        width: 16px;
                        height: 16px;
                        &:first-child {
                            margin-right: 6px;
                        }
                    }
                }
            }

            .table__carusel {
                .carusel__item {
                    .item__btn {
                        .btn__title {
                            margin-top: 4px;
                            font-size: 12px;
                            letter-spacing: 0.24px;
                        }
                    }
                }
            }
        }
        .time__lesson {
            &:not(:last-child) {
                margin-bottom: 4px;
            }
            .lesson__info {
                .info {
                    font-size: 12px;
                    letter-spacing: 0.24px;
                }
            }
        }
    }
}
</style>
