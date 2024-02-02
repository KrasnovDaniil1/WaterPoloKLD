<script>
import Icons from "../Other/Icons.vue";
export default {
    components: {
        Icons,
    },
    setup() {},
};
</script>

<template>
    <main class="contacts">
        <h2 class="contacts__title">
            <!-- Калининградская региональная общественная организация
            “Калининградская областная федерация водного поло” -->
            Название
        </h2>
        <div class="contacts__card">
            <h3 class="card__title">
                Дата окончания аккредитации:
                <!-- <span class="title__bold">24 октября 2025</span> -->
                <span class="title__bold">в стадии получения</span>
            </h3>
            <div class="card__social network">
                <h3 class="social__title">Социальные сети</h3>
                <nav class="social__block">
                    <a
                        href="https://vk.com/waterpolo39"
                        target="_blank"
                        class="block__icons"
                    >
                        <Icons icons="vk" class="icons" />
                    </a>
                    <a
                        href="https://t.me/waterpolo39_bot"
                        target="_blank"
                        class="block__icons"
                    >
                        <Icons icons="telegram" class="icons" />
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=ohNP2Lvj2jA"
                        target="_blank"
                        class="block__icons"
                    >
                        <Icons icons="youtube" class="icons" />
                    </a>
                </nav>
            </div>
            <div class="card__social contact">
                <h3 class="social__title">Контакты</h3>
                <nav class="social__block">
                    <a
                        href="tel:+79062376543"
                        target="_blank"
                        class="block__icons"
                    >
                        <Icons icons="phone" class="icons" />
                        <p class="icons__text">+7 906 237 65 43</p>
                    </a>
                    <a
                        href="mailto:vodnoepolo39@yandex.ru"
                        target="_blank"
                        class="block__icons"
                    >
                        <Icons icons="email" class="icons" />
                        <p class="icons__text">vodnoepolo39@yandex.ru</p>
                    </a>
                </nav>
            </div>
            <div class="card__social name__first">
                <h3 class="social__title">Президент Федерации</h3>
                <p class="social__text">в стадии открытия</p>
            </div>
            <div class="card__social name__second">
                <h3 class="social__title">Вице-президент</h3>
                <p class="social__text">в стадии открытия</p>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.contacts {
    color: #fffcf2;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 20px;
    max-width: 1600px;
    margin: 0 auto;
    .contacts__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(24px, calc(64vw / var(--ratio)), 64px);
        line-height: 85%; /* 54.4px */
        letter-spacing: 1.28px;
        margin-bottom: clamp(40px, calc(80vw / var(--ratio)), 80px);
    }
    .contacts__card {
        padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-areas:
            ". title title title title title title title title ."
            ". network network network network nameFirst nameFirst nameFirst nameFirst ."
            ". contact contact contact contact nameSecond nameSecond nameSecond nameSecond .";
        border-radius: 24px;
        background: linear-gradient(
            180deg,
            rgba(0, 77, 243, 0.5) 0%,
            rgba(0, 77, 243, 0.1) 100%
        );
        .card__title {
            grid-area: title;
            margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);

            font-family: "Cruinn Medium";
            font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
            line-height: 85%; /* 34px */
            letter-spacing: 0.8px;
            text-align: center;
            .title__bold {
                font-family: "Cruinn Black";
            }
        }
        .contact {
            grid-area: contact;
            .social__block {
                display: flex;
                flex-direction: column;
                .block__icons {
                    display: flex;
                    align-items: center;
                    &:last-child {
                        margin-top: 16px;
                    }
                    .icons {
                        margin-right: 16px;
                    }
                }
            }
        }
        .network {
            grid-area: network;
        }
        .name__first {
            grid-area: nameFirst;
        }
        .name__second {
            grid-area: nameSecond;
        }
        .card__social {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .social__title {
                font-family: "Cruinn Black";
                font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                line-height: normal;
                letter-spacing: 0.8px;
            }
            .social__block {
                margin-left: 16px;
                margin-top: 16px;
                .block__icons {
                    .icons {
                        width: clamp(24px, calc(40vw / var(--ratio)), 40px);
                        height: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    }
                    &:not(:last-child) {
                        margin-right: clamp(
                            16px,
                            calc(24vw / var(--ratio)),
                            24px
                        );
                    }
                    .icons__text {
                        font-family: "Cruinn Bold";
                        font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
                        line-height: normal;
                        letter-spacing: 0.48px;
                    }
                }
            }
            .social__text {
                margin-top: 16px;
                margin-left: 16px;
                font-family: "Cruinn Bold";
                font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
                line-height: normal;
                letter-spacing: 0.48px;
            }
        }
    }
}
@media screen and (max-width: 834px) {
    .contacts {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 20px;
        max-width: 650px;
        .contacts__title {
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            letter-spacing: 0.48px;
            margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
        }
        .contacts__card {
            padding: clamp(16px, calc(24vw / var(--ratio)), 24px) 0;
            border-radius: 16px;
            grid-template-columns: repeat(6, 1fr);
            grid-template-areas:
                "title title title title title title"
                "network network network nameFirst nameFirst nameFirst "
                "contact contact contact nameSecond nameSecond nameSecond ";
            .card__title {
                margin-bottom: 0px;

                font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
                line-height: normal; /* 34px */
                letter-spacing: 0.32px;
                .title__bold {
                    display: block;
                }
            }
            .contact {
                .social__block {
                    .block__icons {
                        &:last-child {
                            margin-top: 16px;
                        }
                        .icons {
                            margin-right: 16px;
                        }
                    }
                }
            }

            .card__social {
                margin-left: clamp(16px, calc(24vw / var(--ratio)), 24px);
                margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
                .social__title {
                    font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
                    letter-spacing: 0.4px;
                }
                .social__block {
                    margin-left: clamp(8px, calc(16vw / var(--ratio)), 16px);
                    margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
                    .block__icons {
                        .icons {
                            width: clamp(16px, calc(24vw / var(--ratio)), 24px);
                            height: clamp(
                                16px,
                                calc(24vw / var(--ratio)),
                                24px
                            );
                        }
                        &:not(:last-child) {
                            margin-right: clamp(
                                8px,
                                calc(16vw / var(--ratio)),
                                16px
                            );
                        }
                        .icons__text {
                            font-size: clamp(
                                12px,
                                calc(16vw / var(--ratio)),
                                16px
                            );
                            letter-spacing: 0.32px;
                        }
                    }
                }
                .social__text {
                    margin-left: clamp(8px, calc(16vw / var(--ratio)), 16px);
                    margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
                    font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
                    letter-spacing: 0.32px;
                }
            }
        }
    }
}
@media screen and (max-width: 394px) {
    .contacts {
        padding: 24px 5px;
        max-width: 300px;
        .contacts__title {
            font-size: 16px;
            letter-spacing: 0.32px;
            margin-bottom: 16px;
        }
        .contacts__card {
            padding: 16px 0;
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
                "title title title title"
                "network network network network"
                "contact contact contact contact"
                "nameFirst nameFirst nameFirst nameFirst"
                "nameSecond nameSecond nameSecond nameSecond";
            .card__title {
                font-size: 16px;
            }
            .contact {
                .social__block {
                    align-items: center;
                    .block__icons {
                        &:last-child {
                            margin-top: 10px;
                        }
                        .icons {
                            margin-right: 8px;
                        }
                    }
                }
            }

            .card__social {
                text-align: center;
                margin-left: 0;
                margin-top: 16px;
                .social__title {
                    font-size: 16px;
                    letter-spacing: 0.32px;
                }
                .social__block {
                    margin-left: 0px;
                    margin-top: 8px;
                    .block__icons {
                        .icons {
                            width: 16px;
                            height: 16px;
                        }
                        &:not(:last-child) {
                            margin-right: clamp(
                                8px,
                                calc(16vw / var(--ratio)),
                                16px
                            );
                        }
                        .icons__text {
                            font-size: clamp(
                                12px,
                                calc(16vw / var(--ratio)),
                                16px
                            );
                            letter-spacing: 0.32px;
                        }
                    }
                }
                .social__text {
                    margin-left: 0px;
                    margin-top: 16px;
                    font-size: 12px;
                    letter-spacing: 0.32px;
                }
            }
        }
    }
}
</style>
