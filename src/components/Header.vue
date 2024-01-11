<script>
import { ref } from "vue";

import Main from "../views/Main.vue";
import BtnLearnMore from "./Btn/BtnLearnMore.vue";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
import Icons from "./Other/Icons.vue";

export default {
    components: {
        Icons,
        BtnSignTraining,
        Main,
        BtnLearnMore,
    },
    setup() {
        const activeMenu = ref(false);
        return {
            activeMenu,
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
    <header class="header-xl">
        <div class="header-top">
            <nav class="top__left">
                <a
                    href="mailto:mail@vodnoepolo39@yandex.ru"
                    class="left__email"
                    target="_blank"
                    >vodnoepolo39@yandex.ru</a
                >
                <div class="left__decor-line"></div>
                <a href="tel:+89062376543" class="left__phone" target="_blank"
                    >+8 906 237 65 43</a
                >
            </nav>
            <nav class="top__right">
                <a
                    href="https://vk.com/waterpolo39"
                    class="right__icon"
                    target="_blank"
                >
                    <Icons icons="vk" />
                </a>
                <a
                    href="https://t.me/waterpolo39_bot"
                    class="right__icon"
                    target="_blank"
                >
                    <Icons icons="telegram" />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=ohNP2Lvj2jA"
                    target="_blank"
                    class="right__icon"
                >
                    <Icons icons="youtube" />
                </a>
            </nav>
        </div>
        <div class="decor__line__h"></div>
        <div class="header-bottom">
            <router-link to="/" class="bottom__logo">
                <Icons icons="logo" class="logo__icon" />
                <p class="logo__label">Water Polo</p>
            </router-link>
            <nav class="bottom__menu">
                <router-link
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.to"
                    class="menu__link"
                    >{{ link.name }}</router-link
                >
            </nav>
            <BtnSignTraining class="bottom__btn" />
        </div>
    </header>
    <header class="header-sm">
        <router-link to="/" class="header__logo">
            <Icons icons="logo" class="logo__icon" />
            <p class="logo__label">Water Polo</p>
        </router-link>
        <a href="tel:+89062376543" target="_blank" class="header__phone"
            >+8 906 237 65 43</a
        >
        <Icons
            icons="burger"
            class="header__burger"
            @click="activeMenu = true"
        />
    </header>
    <main class="pop-header" :class="{ 'pop-active': activeMenu }">
        <router-link class="header__logo" to="/">
            <Icons icons="logo" class="logo__icon" />
            <p class="logo__label">Water Polo</p>
        </router-link>
        <div class="header__center">
            <a href="tel:+89062376543" target="_blank" class="center__phone"
                >+8 906 237 65 43</a
            >
            <a
                href="mailto:mail@vodnoepolo39@yandex.ru"
                class="center__email"
                target="_blank"
                >vodnoepolo39@yandex.ru</a
            >
            <nav class="center__menu">
                <router-link
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.to"
                    class="menu__link"
                    @click="activeMenu = false"
                    >{{ link.name }}</router-link
                >
            </nav>
            <div class="center__block">
                <BtnSignTraining class="block__btn-sign" />
                <BtnLearnMore />
            </div>
            <div class="center__icons">
                <a
                    href="https://vk.com/waterpolo39"
                    target="_blank"
                    class="icons__contacts"
                >
                    <Icons icons="vk" class="icons__contacts" />
                </a>
                <a
                    href="https://t.me/waterpolo39_bot"
                    class="icons__contacts"
                    target="_blank"
                >
                    <Icons icons="telegram" class="icons__contacts" />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=ohNP2Lvj2jA"
                    target="_blank"
                    class="icons__contacts"
                >
                    <Icons icons="youtube" class="icons__contacts" />
                </a>
            </div>
        </div>
        <Icons icons="close" class="top__close" @click="activeMenu = false" />
    </main>
</template>

<style lang="scss" scoped>
.header-xl {
    padding: 0 clamp(81px, calc(190vw / var(--ratio)), 190px);
    font-size: 24px;
    color: #fffcf2;
    background: #041d56;
    .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Cruinn Bold";
        font-size: 24px;
        .top__left {
            display: flex;
            align-items: center;
            opacity: 0.8;
            .left__decor-line {
                width: 2px;
                height: 58px;
                margin: 0 40px;
                background: #fffcf2;
                opacity: 0.1;
            }
        }
        .top__right {
            display: flex;
            .right__icon:not(:first-child) {
                margin-left: 40px;
            }
        }
    }
    .decor__line__h {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: #fffcf2;
        opacity: 0.2;
    }
    .header-bottom {
        padding: 23px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .bottom__logo {
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
        .bottom__menu {
            font-family: "Cruinn Black";
            font-size: 24px;
            letter-spacing: 0.48px;
            display: flex;
            justify-content: space-between;
            margin: 0 clamp(50px, calc(114vw / var(--ratio)), 114px);
            width: 100%;
            .menu__link {
                opacity: 0.4;
                &:not(:last-child) {
                    margin-right: 20px;
                }
            }
        }
        .bottom__btn {
        }
    }
}
.header-sm,
.pop-header {
    display: none;
}

.router-link-active {
    opacity: 1 !important;
}
.pop-active {
    top: 0 !important;
}
@media screen and (max-width: 1300px) {
    .header-xl {
        display: none;
    }
    .header-sm {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px clamp(48px, calc(86vw / var(--ratio)), 86px);
        color: #fffcf2;
        .header__logo {
            display: flex;
            align-items: center;
            color: #ffd842;
            .logo__icon {
                width: 48px;
                height: 48px;
            }
            .logo__label {
                max-width: 48px;
                margin-left: 8px;
                font-family: "Cruinn Bold";
                font-size: 14px;
                line-height: 85%;
            }
        }
        .header__phone {
            font-family: "Cruinn Bold";
            font-size: 24px;
            letter-spacing: 0.48px;
            opacity: 0.8;
        }
        .header__burger {
            width: 30px;
            height: 20px;
            opacity: 0.8;
        }
    }
    .pop-header {
        padding: 16px clamp(48px, calc(86vw / var(--ratio)), 86px);
        display: flex;
        justify-content: center;
        position: fixed;
        top: -100vh;
        width: 100%;
        height: 100vh;
        background: #161616;
        z-index: 2;
        transition: all 0.25s;

        .header__logo {
            position: absolute;
            left: clamp(48px, calc(86vw / var(--ratio)), 86px);
            top: 16px;
            height: fit-content;
            display: flex;
            align-items: center;
            color: #ffd842;
            .logo__icon {
                width: 48px;
                height: 48px;
            }
            .logo__label {
                max-width: 48px;
                margin-left: 8px;
                font-family: "Cruinn Bold";
                font-size: 14px;
                line-height: 85%;
            }
        }
        .header__center {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fffcf2;
            .center__email,
            .center__phone {
                font-family: "Cruinn Bold";
                font-size: 24px;
                letter-spacing: 0.48px;
                text-align: center;
            }
            .center__phone {
                margin-top: 12px;
            }
            .center__email {
                margin-top: 40px;
            }
            .center__menu {
                display: flex;
                flex-direction: column;
                align-items: center;
                .menu__link {
                    color: #fffcf2;
                    opacity: 0.4;
                    font-family: "Cruinn Black";
                    font-size: 36px;
                    letter-spacing: 0.72px;
                    margin-top: 46px;
                }
            }
            .center__block {
                display: flex;
                justify-content: center;
                margin-top: 40px;
                .block__btn-sign {
                    margin-right: 17px;
                }
            }
            .center__icons {
                display: flex;
                justify-content: center;
                margin-top: 40px;
                .icons__contacts {
                    width: 48px;
                    height: 48px;
                    &:not(:last-child) {
                        margin-right: 24px;
                    }
                }
            }
        }
        .top__close {
            position: absolute;
            top: 16px;
            right: clamp(48px, calc(86vw / var(--ratio)), 86px);
            margin-top: 14px;
            width: 20px;
            height: 20px;
        }
    }
}
@media screen and (max-width: 650px) {
    .header-sm {
        padding: clamp(8px, calc(16vw / var(--ratio)), 16px);
        align-items: center;
        .header__logo {
            .logo__icon {
                width: 24px;
                height: 24px;
            }
            .logo__label {
                max-width: 28px;
                margin-left: 4px;
                font-size: 8px;
                line-height: 85%;
            }
        }
        .header__phone {
            font-size: 12px;
            letter-spacing: 0.24px;
            margin-right: 25px;
        }
        .header__burger {
            width: 16px;
            height: 10px;
        }
    }
    .pop-header {
        padding: 8px clamp(15px, calc(48vw / var(--ratio)), 48px);
        .header__logo {
            left: 5%;
            .logo__icon {
                width: 24px;
                height: 24px;
            }
            .logo__label {
                max-width: 28px;
                margin-left: 4px;
                font-size: 8px;
            }
        }
        .header__center {
            .center__email,
            .center__phone {
                font-size: 12px;
                letter-spacing: 0.24px;
            }
            .center__phone {
                margin-top: 6px;
            }
            .center__email {
                margin-top: 7px;
            }
            .center__menu {
                .menu__link {
                    font-size: 24px;
                    letter-spacing: 0.48px;
                    margin-top: clamp(15px, calc(24vw / var(--ratio)), 24px);
                }
            }
            .center__block {
                margin-top: clamp(15px, calc(24vw / var(--ratio)), 24px);
                .block__btn-sign {
                    margin-right: 8px;
                }
            }
            .center__icons {
                display: flex;
                justify-content: center;
                margin-top: clamp(15px, calc(24vw / var(--ratio)), 24px);
                .icons__contacts {
                    width: 24px;
                    height: 24px;
                    &:not(:last-child) {
                        margin-right: clamp(
                            15px,
                            calc(24vw / var(--ratio)),
                            24px
                        );
                    }
                }
            }
        }
        .top__close {
            right: 5%;
            margin-top: 7px;
            min-width: 12px;
            height: 12px;
        }
    }
}

</style>
