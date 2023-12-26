<script>
import BtnToMain from "../Btn/BtnToMain.vue";
import BtnDownload from "../Btn/BtnDownload.vue";

import Icons from "../Other/Icons.vue";
export default {
    components: { Icons, BtnToMain, BtnDownload },
    setup() {},
};
</script>

<template>
    <main class="news">
        <h2 class="news__title">Календарь мероприятий</h2>
        <router-link
            to="/blog/2"
            class="news__card"
            v-for="(item, index) in 3"
            :key="index"
        >
            <div class="card__block">
                <img
                    src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg"
                    class="block__image"
                />
                <h4 class="block__text">
                    Подробнее
                    <Icons icons="arrowDefault" class="about__arrow" />
                </h4>
            </div>
            <nav class="card__content">
                <h5 class="content__data">4.11.2023</h5>
                <h3 class="content__title">
                    Встреча с председателем Водного поло в Калининграде
                </h3>
                <h4 class="content__info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus suscipit metus sit amet nisi lacinia odimentum.
                    Lorem ipsum dolor sit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vivamus suscipit metus sit amet
                    nisi lacinia odimentum. Lorem ipsum dolor sit.
                </h4>
            </nav>
        </router-link>
        <div class="btn__block">
            <BtnDownload class="btn" />
            <BtnToMain />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.news {
    color: #fffcf2;
    max-width: 1600px;
    margin: 0 auto;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 20px;
    .news__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(128vw / var(--ratio)), 128px);
        line-height: 85%; /* 108.8px */
        letter-spacing: 2.56px;
        text-align: center;
        margin-bottom: clamp(40px, calc(80vw / var(--ratio)), 80px);
    }
    .news__card {
        display: flex;
        border-radius: 24px;
        background: var(
            --bg,
            linear-gradient(
                180deg,
                rgba(0, 77, 243, 0.5) 0%,
                rgba(0, 77, 243, 0.1) 100%
            )
        );
        overflow: hidden;
        &:not(:first-child) {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
        }
        .card__block {
            position: relative;
            min-width: 25%;
            background: #161616;
            .block__image {
                height: 100%;
                opacity: 0.5;
            }
            .block__text {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                display: flex;
                align-items: center;
                font-family: "Cruinn Medium";
                font-size: clamp(20px, calc(40vw / var(--ratio)), 40px);
                line-height: normal;
                letter-spacing: 0.8px;
                .about__arrow {
                    width: clamp(24px, calc(32vw / var(--ratio)), 32px);
                    height: clamp(24px, calc(32vw / var(--ratio)), 32px);
                    margin-left: 4px;
                }
            }
        }
        .card__content {
            padding: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .content__data {
                font-family: "Cruinn Black";
                font-size: clamp(8px, calc(16vw / var(--ratio)), 16px);
                line-height: normal;
                letter-spacing: 0.32px;
                opacity: 0.6;
            }
            .content__title {
                margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
                font-family: "Cruinn Black";
                font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                line-height: 85%; /* 34px */
                letter-spacing: 0.8px;
            }
            .content__info {
                margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
                font-family: "Montserrat Regular";
                font-size: clamp(12px, calc(24vw / var(--ratio)), 24px);
                line-height: 150%; /* 36px */
                letter-spacing: 1.92px;
                opacity: 0.8;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
    .btn__block {
        display: flex;
        justify-content: center;
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        .btn {
            margin-right: 20px;
        }
    }
}

@media screen and (max-width: 834px) {
    .news {
        max-width: 650px;
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 10px;
        .news__title {
            font-size: clamp(24px, calc(64vw / var(--ratio)), 64px);
            letter-spacing: 0.48px;
            margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
        }
        .news__card {
            border-radius: 16px;

            &:not(:first-child) {
                margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
            }
            .card__block {
                min-width: 40%;

                .block__text {
                    font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
                    .about__arrow {
                        width: clamp(16px, calc(24vw / var(--ratio)), 24px);
                        height: clamp(16px, calc(24vw / var(--ratio)), 24px);
                    }
                }
            }
            .card__content {
                padding: clamp(16px, calc(24vw / var(--ratio)), 24px);
                .content__data {
                    font-size: 8px;
                    letter-spacing: 0.32px;
                }
                .content__title {
                    margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
                    font-size: clamp(12px, calc(24vw / var(--ratio)), 24px);
                    letter-spacing: 0.48px;
                    line-height: normal;
                }
                .content__info {
                    margin-top: clamp(8px, calc(16vw / var(--ratio)), 16px);
                    font-size: clamp(10px, calc(12vw / var(--ratio)), 12px);
                    letter-spacing: 0.96px;
                    -webkit-line-clamp: 2;
                }
            }
        }
        .btn__block {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .btn {
                margin-right: 16px;
            }
        }
    }
}
@media screen and (max-width: 394px) {
    .news {
        max-width: 300px;
        padding: 24px 5px;
        .news__title {
            font-size: 24px;
            letter-spacing: 0.48px;
            margin-bottom: 24px;
        }
        .news__card {
            border-radius: 8px;

            &:not(:first-child) {
                margin-top: 8px;
            }
            .card__block {
                min-width: 35%;

                .block__text {
                    font-size: 12px;
                    .about__arrow {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
            .card__content {
                padding: 16px;
                .content__data {
                    font-size: 8px;
                    letter-spacing: 0.16px;
                }
                .content__title {
                    margin-top: 8px;
                    font-size: 12px;
                    letter-spacing: 0.24px;
                }
                .content__info {
                    margin-top: 8px;
                    font-size: 10px;
                    letter-spacing: 0.8px;
                    -webkit-line-clamp: 1;
                }
            }
        }
        .btn__block {
            margin-top: 24px;
            .btn {
                margin-right: 8px;
            }
        }
    }
}
</style>
