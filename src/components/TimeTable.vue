<script>
import { onMounted, ref } from "vue";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
import Icons from "./Other/Icons.vue";
import { useStore } from "vuex";

export default {
    props: {
        category: {
            typeof: String,
            default: "children",
        },
    },
    components: { BtnSignTraining, Icons },
    setup(props) {
        const store = useStore();
        const carusel = ref();
        const activeTime = ref({ week: "one", in: "Пн" });
        const time = ref({
            one: [
                { week: "Пн", day: 0 },
                { week: "Вт", day: 0 },
                { week: "Ср", day: 0 },
                { week: "Чт", day: 0 },
                { week: "Пт", day: 0 },
                { week: "Сб", day: 0 },
                { week: "Вс", day: 0 },
            ],
            two: [
                { week: "Пн", day: 0 },
                { week: "Вт", day: 0 },
                { week: "Ср", day: 0 },
                { week: "Чт", day: 0 },
                { week: "Пт", day: 0 },
                { week: "Сб", day: 0 },
                { week: "Вс", day: 0 },
            ],
        });

        const table = ref([]);
        const currentTime = new Date();
        const generateDay = () => {
            let dayAll = currentTime.getDate() - currentTime.getDay();

            for (let i = 0; i < 14; i++) {
                dayAll++;
                if (dayAll > dayInMonth()) {
                    dayAll = 1;
                }
                if (i < 7) {
                    if (dayAll <= 0) {
                        time.value.one[i].day = dayInPastMonth() + dayAll;
                    } else {
                        time.value.one[i].day = dayAll;
                    }
                } else {
                    if (dayAll < 0) {
                        time.value.two[i - 7].day = dayInPastMonth() + dayAll;
                    } else {
                        time.value.two[i - 7].day = dayAll;
                    }
                }
            }
        };
        const dayInMonth = () => {
            let date1 = new Date(
                currentTime.getFullYear(),
                currentTime.getMonth(),
                1
            );
            let date2 = new Date(
                currentTime.getFullYear(),
                currentTime.getMonth() + 1,
                1
            );
            let dayMonth = Math.round((date2 - date1) / 1000 / 3600 / 24);
            return dayMonth;
        };
        const dayInPastMonth = () => {
            let date1 = new Date(
                currentTime.getFullYear(),
                currentTime.getMonth() - 1,
                1
            );
            let date2 = new Date(
                currentTime.getFullYear(),
                currentTime.getMonth(),
                1
            );
            let dayMonth = Math.round((date2 - date1) / 1000 / 3600 / 24);
            return dayMonth;
        };
        const clickLeft = () => {
            activeTime.value = { week: "one", in: "Пн" };
            carusel.value.children[0].style.transform = `translateX(0)`;
            carusel.value.children[1].style.transform = `translateX(0)`;
            lookTime("one", "Пн");
        };
        const clickRight = () => {
            activeTime.value = { week: "two", in: "Пн" };
            carusel.value.children[0].style.transform = `translateX(100%)`;
            carusel.value.children[1].style.transform = `translateX(-100%)`;
            lookTime("two", "Пн");
        };

        const lookTime = async (week, i) => {
            activeTime.value = {
                week: week,
                in: i,
            };
            table.value = await store.getters.getTime({
                week: activeTime.value.week,
                in: activeTime.value.in,
                category: props.category,
            });
        };

        const startTime = async () => {
            await lookTime("one", "Пн");
            for (let i of time.value.one) {
                if (table.value[0].time == "-") {
                    await lookTime("one", i.week);
                } else {
                    break;
                }
            }
        };
        onMounted(() => {
            generateDay();
            startTime();
        });

        return {
            startTime,
            dayInPastMonth,
            table,
            carusel,
            clickLeft,
            clickRight,
            store,
            currentTime,
            time,
            activeTime,
            lookTime,
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
                <h3 class="header__month">
                    {{
                        currentTime.toLocaleString("default", { month: "long" })
                    }}
                </h3>
                <div class="header__btn">
                    <Icons
                        icons="arrow"
                        class="btn__arrow"
                        style="transform: rotate(180deg)"
                        @click="clickLeft()"
                    />
                    <Icons
                        icons="arrow"
                        class="btn__arrow"
                        @click="clickRight()"
                    />
                </div>
            </div>
            <div class="table__decor__line"></div>
            <div class="table__carusel" ref="carusel">
                <nav class="carusel__item">
                    <button
                        v-for="(elem, i) in time.one"
                        class="item__btn"
                        :class="{
                            item__btn_active:
                                activeTime.week == 'one' &&
                                activeTime.in == elem.week,
                        }"
                        @click="lookTime('one', elem.week)"
                        :key="i"
                    >
                        <h3 class="btn__title">{{ elem.week }}</h3>
                        <h3 class="btn__title">{{ elem.day }}</h3>
                    </button>
                </nav>
                <nav class="carusel__item">
                    <button
                        v-for="(elem, i) in time.two"
                        class="item__btn"
                        :class="{
                            item__btn_active:
                                activeTime.week == 'two' &&
                                activeTime.in == elem.week,
                        }"
                        @click="lookTime('two', elem.week)"
                        :key="i"
                    >
                        <h3 class="btn__title">{{ elem.week }}</h3>
                        <h3 class="btn__title">{{ elem.day }}</h3>
                    </button>
                </nav>
            </div>
        </nav>
        <nav class="time__lesson" v-for="(t, index) in table" :key="index">
            <div class="lesson__info">
                <h4 class="info">{{ t.time }}</h4>
                <h4 class="info">{{ t.title }}</h4>
                <h4 class="info">{{ t.address }}</h4>
            </div>
            <h4 class="info__trainer" v-if="t.trainer">
                тренер:{{ t.trainer }}
            </h4>
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
                &:first-letter {
                    text-transform: uppercase;
                }
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
                // &:nth-child(1) {
                //     transform: translateX(100%);
                // }
                // &:nth-child(2) {
                //     transform: translateX(-100%);
                // }
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
        .info__trainer {
            font-family: "Cruinn Black";
            font-size: clamp(20px, calc(40vw / var(--ratio)), 40px);
            line-height: normal;
            letter-spacing: 0.8px;
            text-align: left;
            margin: clamp(8px, calc(24vw / var(--ratio)), 24px) 0;
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
            .info__trainer {
                font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
                margin: clamp(4px, calc(8vw / var(--ratio)), 8px) 0;
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
            .info__trainer {
                font-size: 12px;
                letter-spacing: 0.24px;
            }
        }
    }
}
</style>
