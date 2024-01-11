<script>
import Icons from "./Other/Icons.vue";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
import BtnToMain from "./Btn/BtnToMain.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";

export default {
    components: {
        Icons,
        BtnSignTraining,
        BtnToMain,
    },

    setup() {
        const adress = ref("");
        const route = useRoute();

        watch(
            () => route.name,
            () => {
                if (route.name == "federation") {
                    adress.value = "в стадии открытия";
                } else {
                    adress.value = "Тихоокеанская улица, 5";
                }
            }
        );
        return {
            adress,
            route,
            links: [
                {
                    to: "/children",
                    name: "Детям",
                },
                {
                    to: "/amateurs",
                    name: "Любителям",
                },
                {
                    to: "/students",
                    name: "Студентам",
                },
                {
                    to: "/federation",
                    name: "Федерация",
                },
                {
                    to: "/blog",
                    name: "Блог",
                },
                {
                    to: "/contacts",
                    name: "Контакты",
                },
            ],
        };
    },
};
</script>
<template>
    <footer class="footer">
        <router-link to="/" class="footer__logo">
            <Icons icons="logo" class="logo__icon" />
            <p class="logo__label">Water Polo</p>
        </router-link>
        <div class="footer__icons">
            <p class="icons__info">Подписывайтесь на наши соц. сети</p>
            <nav class="icons__block">
                <a href="https://vk.com/waterpolo39" target="_blank">
                    <Icons icons="vk" class="block__icon" />
                </a>
                <a href="https://t.me/waterpolo39_bot" target="_blank">
                    <Icons icons="telegram" class="block__icon" />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=ohNP2Lvj2jA"
                    target="_blank"
                >
                    <Icons icons="youtube" class="block__icon" />
                </a>
            </nav>
        </div>
        <div class="footer__block">
            <nav class="block__contacts">
                <h6 class="contacts__title">Контакты</h6>
                <a
                    href="tel:+89062376543"
                    target="_blank"
                    class="contacts__link"
                    >+8 906 237 65 43</a
                >
                <a
                    href="mailto:mail@vodnoepolo39@yandex.ru"
                    target="_blank"
                    class="contacts__link"
                    >vodnoepolo39@yandex.ru</a
                >
            </nav>
            <nav class="block__contacts">
                <h6 class="contacts__title">Адрес</h6>
                <a
                    href="https://yandex.ru/maps/-/CDuF7K4A"
                    class="contacts__link"
                    >{{ adress }}</a
                >
                <p class="contacts__link">08:00 - 22:00</p>
            </nav>
        </div>
        <div class="footer__menu">
            <h6 class="menu__title">Меню</h6>
            <router-link
                v-for="(item, index) in links"
                :key="index"
                class="menu__href"
                :to="item.to"
                >{{ item.name }}</router-link
            >
        </div>
        <div class="footer__right">
            <h6 class="right__title">Записаться на тренировку</h6>
            <p class="right__info">Для записи нажмите кнопку ниже</p>
            <nav class="right__btn-block">
                <BtnSignTraining class="right__btn-sign" />
                <BtnToMain />
            </nav>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: #041d56;
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: clamp(75px, calc(190vw / var(--ratio)), 190px);
    color: #fffcf2;
    .footer__logo {
        max-width: 54px;
        display: flex;
        flex-direction: column;
        color: #ffd842;
        .logo__icon {
            width: 54px;
            height: 54px;
        }
        .logo__label {
            text-align: center;
            font-family: "Cruinn Bold";
            font-size: 12px;
            line-height: 85%;
        }
    }
    .footer__icons {
        margin-left: clamp(15px, calc(51vw / var(--ratio)), 51px);
        max-width: 331px;
        .icons__info {
            font-family: "Montserrat Regular";
            font-size: 20px;
            line-height: 150%;
            letter-spacing: 1.6px;
            opacity: 0.6;
        }
        .icons__block {
            margin-top: 49px;
            display: flex;
            .block__icon {
                margin-right: 24px;
                width: 40px;
                height: 40px;
            }
        }
    }
    .footer__block {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-left: clamp(45px, calc(75vw / var(--ratio)), 75px);
        .block__contacts {
            display: flex;
            flex-direction: column;
            font-size: 24px;
            letter-spacing: 0.48px;
            &:last-child {
                margin-top: clamp(40px, calc(70vw / var(--ratio)), 70px);
            }
            .contacts__title {
                font-family: "Cruinn Black";
                margin-bottom: 40px;
                opacity: 0.8;
            }
            .contacts__link {
                margin-left: 8px;
                font-family: "Cruinn Bold";
                opacity: 0.4;
                white-space: nowrap;
                &:not(:last-child) {
                    margin-bottom: 16px;
                }
            }
        }
    }
    .footer__menu {
        display: flex;
        flex-direction: column;
        margin-left: clamp(75px, calc(140vw / var(--ratio)), 140px);
        font-size: 24px;
        letter-spacing: 0.48px;
        .menu__title {
            margin-bottom: 37px;
            font-family: "Cruinn Black";
            opacity: 0.8;
        }
        .menu__href {
            margin-left: 9px;

            font-family: "Cruinn Bold";
            opacity: 0.4;
            &:not(:last-child) {
                margin-bottom: 24px;
            }
        }
    }
    .footer__right {
        display: flex;
        flex-direction: column;
        margin-left: clamp(75px, calc(126vw / var(--ratio)), 126px);
        max-width: 250px;
        .right__title {
            margin-bottom: 24px;
            font-family: "Cruinn Black";
            font-size: 24px;
            letter-spacing: 0.48px;
            opacity: 0.8;
        }
        .right__info {
            margin-bottom: 40px;
            font-family: "Montserrat Regular";
            font-size: 16px;
            line-height: 150%;
            letter-spacing: 1.28px;
            opacity: 0.6;
        }
        .right__btn-block {
            display: flex;
            flex-direction: column;
            .right__btn-sign {
                margin-bottom: 16px;
            }
        }
    }
}
.router-link-active {
    opacity: 1 !important;
}
@media screen and (max-width: 1600px) {
    .footer {
        .footer__menu {
            display: none;
        }
    }
}
@media screen and (max-width: 1200px) {
    .footer {
        .footer__logo {
            height: fit-content;
            max-width: 100px;
            flex-direction: row;
            align-items: center;

            .logo__label {
                font-size: 16px;
                line-height: 85%;
            }
        }
        .footer__icons {
            display: none;
        }
    }
}
@media screen and (max-width: 834px) {
    .footer {
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: clamp(48px, calc(75vw / var(--ratio)), 75px);
        .footer__logo {
            .logo__icon {
                width: 48px;
                height: 48px;
            }
            .logo__label {
                font-size: 14px;
            }
        }

        .footer__block {
            margin-left: clamp(24px, calc(66vw / var(--ratio)), 66px);
            .block__contacts {
                letter-spacing: 0.48px;
                &:last-child {
                    margin-top: clamp(20px, calc(40vw / var(--ratio)), 40px);
                }
                .contacts__title {
                    font-size: 20px;
                    margin-bottom: 16px;
                }
                .contacts__link {
                    font-size: 16px;
                    margin-left: 4px;
                    &:not(:last-child) {
                        margin-bottom: 8px;
                    }
                }
            }
        }
        .footer__right {
            margin-left: clamp(20px, calc(75vw / var(--ratio)), 75px);
            max-width: 175px;
            .right__title {
                margin-bottom: 8px;
                font-size: 20px;
                letter-spacing: 0.4px;
            }
            .right__info {
                margin-bottom: 22px;
                font-size: 12px;
                letter-spacing: 0.96px;
            }
            .right__btn-block {
                .right__btn-sign {
                    margin-bottom: 16px;
                }
            }
        }
    }
}
@media screen and (max-width: 600px) {
    .footer {
        flex-wrap: wrap;
        padding-left: clamp(24px, calc(48vw / var(--ratio)), 48px);
        .footer__logo {
            max-width: 56px;
            .logo__icon {
                width: 24px;
                height: 24px;
            }
            .logo__label {
                font-size: 10px;
            }
        }
        .footer__block {
            flex-direction: row;
            // margin-left: clamp(40px, calc(75vw / var(--ratio)), 75px);
            .block__contacts {
                margin-left: calc(24vw / var(--ratio));
                &:last-child {
                    margin-top: 0;
                }
                .contacts__title {
                    font-size: 14px;
                }
                .contacts__link {
                    font-size: 12px;
                }
            }
        }
        .footer__right {
            margin-top: 16px;
            margin-left: 0;
            max-width: inherit;
            width: 100%;
            text-align: center;
            .right__title {
                margin-bottom: 4px;
                font-size: 14px;
                letter-spacing: 0.4px;
            }
            .right__info {
                margin-bottom: 8px;
                font-size: 8px;
                letter-spacing: 0.96px;
            }
            .right__btn-block {
                display: flex;
                flex-direction: row;
                justify-content: center;
                .right__btn-sign {
                    margin-bottom: 0;
                    margin-right: 8px;
                }
            }
        }
    }
}
@media screen and (max-width: 450px) {
    .footer {
        padding-left: clamp(16px, calc(24vw / var(--ratio)), 24px);
        .footer__logo {
            .logo__label {
                font-size: 8px;
                margin-left: 4px;
            }
        }
        .footer__block {
            margin-left: 0;
            .block__contacts {
                .contacts__title {
                    font-size: 12px;
                    letter-spacing: 0.24px;
                    margin-bottom: 8px;
                }
                .contacts__link {
                    font-size: 8px;
                    letter-spacing: 0.16px;
                }
                :not(:last-child) {
                    margin-bottom: 4px;
                }
            }
        }
        .footer__right {
            .right__title {
                font-size: 12px;
                letter-spacing: 0.24px;
            }
            .right__info {
                font-size: 6px;
                letter-spacing: 0.48px;
            }
        }
    }
}
</style>
