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
                <h4 class="info">600 / 3500 р.</h4>
            </div>
            <div class="table__decor__line"></div>
        </nav>
        <nav class="time__lesson">
            <div class="lesson__info">
                <h4 class="info">12.00</h4>
                <h4 class="info">Дети</h4>
                <h4 class="info">600 / 3500 р.</h4>
            </div>
            <div class="table__decor__line"></div>
        </nav>
        <nav class="time__lesson">
            <div class="lesson__info">
                <h4 class="info">12.00</h4>
                <h4 class="info">Дети</h4>
                <h4 class="info">600 / 3500 р.</h4>
            </div>
            <div class="table__decor__line"></div>
        </nav>
    </main>
</template>

<style lang="scss" scoped>
.time {
    max-width: 1330px;
    margin: 0 auto;
    padding: 80px 0;
    color: #fffcf2;
    .table__decor__line {
        margin-top: 16px;
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
                font-size: 96px;
                line-height: 85%; /* 81.6px */
                letter-spacing: 1.92px;
            }
            .header__info {
                margin-top: 16px;
                font-family: "Cruinn Bold";
                font-size: 24px;
                line-height: normal;
                letter-spacing: 1.92px;
                opacity: 0.8;
            }
        }
        .top__btn {
            margin-top: 17px;
        }
    }
    .time__table {
        margin: 80px 0;
        .table__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .header__month {
                font-family: "Cruinn Black";
                font-size: 40px;
                line-height: normal;
                letter-spacing: 0.8px;
            }
            .header__btn {
                .btn__arrow {
                    width: 48px;
                    height: 48px;
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
                        margin-top: 16px;
                        font-family: "Cruinn Medium";
                        font-size: 40px;
                        line-height: normal;
                        letter-spacing: 0.8px;
                    }
                }
                .item__btn_active {
                    opacity: 1;
                }
            }
        }
    }
    .time__lesson {
        width: 100%;
        &:not(:last-child) {
            margin-bottom: 24px;
        }
        .lesson__info {
            display: flex;
            justify-content: space-between;
            .info {
                font-family: "Cruinn Medium";
                font-size: 40px;
                line-height: normal;
                letter-spacing: 0.8px;
            }
        }
    }
}
</style>
