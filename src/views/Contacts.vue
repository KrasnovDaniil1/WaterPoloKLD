<script>
import AllWindow from "../components/AllWindow.vue";
import Map from "../components/Other/Map.vue";

import main from "../assets/images/allWindow/main.png";

import Icons from "../components/Other/Icons.vue";

export default {
    components: {
        AllWindow,
        Map,
        Icons,
    },
    setup() {
        const allWindow = {
            title: "Контакты",
            info: "Не стесняйтесь связаться с нами для любых вопросов, комментариев или запросов. Мы готовы делиться радостью водных приключений с вами!",
            image: main,
        };
        return {
            allWindow,
        };
    },
};
</script>

<template>
    <section class="contacts">
        <AllWindow :allWindow="allWindow" />
        <main class="contacts__content">
            <h2 class="content__title-sm">Как нас найти</h2>
            <Map :coords="[54.720657, 20.351297]" class="content__map" />
            <nav class="content__block">
                <h2 class="block__title">
                    Как нас
                    <p class="block__title-break">найти</p>
                </h2>
                <nav class="link__block">
                    <div class="block__item">
                        <h3 class="item__title">Контакты</h3>
                        <a href="#" class="item__link">
                            <Icons icons="phone" class="link__icon" />
                            <span class="link__text">+7 888 888 88 88</span>
                        </a>
                        <a href="#" class="item__link">
                            <Icons icons="email" class="link__icon" />
                            <span class="link__text">waterpolo@gmail.com</span>
                        </a>
                    </div>
                    <div class="block__item">
                        <h3 class="item__title">Адрес</h3>
                        <a href="#" class="item__link">
                            <Icons icons="location" class="link__icon" />
                            <span class="link__text"
                                >Тихоокеанская улица, 5</span
                            >
                        </a>
                        <a href="#" class="item__link">
                            <Icons icons="clock" class="link__icon" />
                            <span class="link__text">08:00 - 22:00</span>
                        </a>
                    </div>
                    <div class="block__item">
                        <h3 class="item__title">Социальные сети</h3>
                        <nav class="item__nav">
                            <a href="#" class="nav__link">
                                <Icons icons="vk" class="link__icon" />
                            </a>
                            <a href="#" class="nav__link">
                                <Icons icons="telegram" class="link__icon" />
                            </a>
                            <a href="#" class="nav__link">
                                <Icons icons="youtube" class="link__icon" />
                            </a>
                        </nav>
                    </div>
                </nav>
            </nav>
        </main>
    </section>
</template>

<style lang="scss" scoped>
.contacts {
    .contacts__content {
        display: flex;
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 85px);
        margin-left: clamp(30px, calc(160vw / var(--ratio)), 160px);
        margin-bottom: clamp(40px, calc(85vw / var(--ratio)), 85px);
        grid-gap: clamp(20px, calc(149vw / var(--ratio)), 149px);
        color: #fffcf2;
        .content__title-sm {
            display: none;
        }
        .content__map {
            width: clamp(400px, calc(790vw / var(--ratio)), 790px);
            height: clamp(400px, calc(790vw / var(--ratio)), 790px);
        }
        .content__block {
            display: flex;
            flex-direction: column;
            .block__title {
                margin-bottom: clamp(40px, calc(80vw / var(--ratio)), 80px);
                font-family: "Akrobat ExtraBold";
                font-size: clamp(64px, calc(128vw / var(--ratio)), 128px);
                line-height: 85%;
                letter-spacing: 2.56px;
            }
            .link__block {
                display: flex;
                flex-direction: column;
                .block__item {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    .item__title {
                        font-family: "Cruinn Black";
                        font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                        letter-spacing: 0.8px;
                    }
                    .item__link {
                        margin-left: 16px;
                        margin-top: 16px;
                        display: flex;
                        align-items: center;
                        .link__icon {
                            margin-right: 16px;
                            width: 40px;
                            height: 40px;
                        }
                        .link__text {
                            font-family: "Cruinn Bold";
                            font-size: clamp(
                                16px,
                                calc(24vw / var(--ratio)),
                                24px
                            );
                            letter-spacing: 0.48px;
                        }
                    }
                    .item__nav {
                        display: flex;
                        margin-left: 16px;
                        margin-top: 16px;
                        .nav__link {
                            .link__icon {
                                margin-right: 16px;
                                width: 40px;
                                height: 40px;
                            }
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 834px) {
    .contacts {
        .contacts__content {
            display: flex;
            flex-direction: column-reverse;
            grid-gap: 0;
            margin: clamp(24px, calc(40vw / var(--ratio)), 40px)
                clamp(0px, calc(64vw / var(--ratio)), 64px);
            .content__map {
                width: 100%;
                height: clamp(135px, calc(244vw / var(--ratio)), 244px);
            }
            .content__block {
                .block__title {
                    margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    font-size: clamp(36px, calc(64vw / var(--ratio)), 64px);
                    letter-spacing: 0.72px;
                    text-align: center;
                    .block__title-break {
                        display: inline;
                    }
                }
                .link__block {
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    .block__item {
                        margin-bottom: 24px;
                        &:first-child {
                            padding-right: clamp(
                                20px,
                                calc(44vw / var(--ratio)),
                                44px
                            );
                        }
                        &:last-child {
                            width: 100%;
                            text-align: center;
                        }
                        .item__title {
                            font-size: 24px;
                            letter-spacing: 0.48px;
                        }
                        .item__link {
                            margin-left: 16px;
                            margin-top: 24px;
                            .link__icon {
                                margin-right: 24px;
                                width: 24px;
                                height: 24px;
                            }
                            .link__text {
                                font-size: 16px;
                                letter-spacing: 0.32px;
                            }
                        }
                        .item__nav {
                            margin-left: 16px;
                            margin-top: 16px;
                            justify-content: center;
                            .nav__link {
                                .link__icon {
                                    margin-right: 16px;
                                    width: 24px;
                                    height: 24px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 390px) {
    .contacts {
        .contacts__content {
            flex-direction: column;
            margin: 24px 0;
            .content__title-sm {
                display: block;
                font-family: "Akrobat ExtraBold";
                font-size: 36px;
                line-height: 85%;
                letter-spacing: 0.72px;
                text-align: center;
            }
            .content__map {
                margin-top: 24px;
                width: 100%;
                height: 135px;
            }
            .content__block {
                .block__title {
                    display: none;
                }
                .link__block {
                    .block__item {
                        width: 100%;
                        margin-top: 24px;
                        margin-bottom: 0px;
                        margin-left: clamp(
                            10px,
                            calc(72vw / var(--ratio)),
                            72px
                        );
                        &:first-child {
                            padding-right: 0px;
                        }
                        &:last-child {
                            margin-left: 0;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 330px) {
    .contacts {
        .contacts__content {
            .content__block {
                .link__block {
                    .block__item {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}
</style>
