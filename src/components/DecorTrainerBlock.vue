<script>
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
import BtnLearnMoreDark from "./Btn/BtnLearnMoreDark.vue";

export default {
    components: {
        BtnSignTraining,
        BtnLearnMoreDark,
    },
    setup() {},
};
</script>

<template>
    <main class="decor">
        <nav class="decor__block">
            <h1 class="block__title">
                Первая тренировка
                <p class="title__decor">
                    <span>-</span>
                    <span class="decor__text">Бесплатно</span>
                </p>
            </h1>
            <nav class="block__btn">
                <BtnSignTraining class="btn__train" />
                <BtnLearnMoreDark />
            </nav>
        </nav>
        <img
            class="decor__img"
            src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg"
        />
    </main>
</template>

<style lang="scss" scoped>
.decor {
    display: flex;
    justify-content: space-between;
    color: #fffcf2;
    max-width: 1330px;
    margin: 0 auto;
    margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
    padding: 0 10px;
    .decor__block {
        display: flex;
        flex-direction: column;
        .block__title {
            font-family: "Cruinn Black";
            font-size: clamp(48px, calc(128vw / var(--ratio)), 128px);
            line-height: 90%; /* 108.8px */
            letter-spacing: 2.56px;
            .title__decor {
                .decor__text {
                    color: #ffd601;
                    margin-left: 30px;
                }
            }
        }
        .block__btn {
            margin-top: auto;
            .btn__train {
                margin-right: 20px;
            }
        }
    }
    .decor__img {
        width: clamp(300px, calc(520vw / var(--ratio)), 520px);
        height: clamp(300px, calc(500vw / var(--ratio)), 500px);
        object-fit: cover;
    }
}
@media screen and (max-width: 834px) {
    .decor {
        position: relative;
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        padding: 0px;
        margin-top: 0px;

        .decor__block {
            padding: clamp(16px, calc(40vw / var(--ratio)), 40px) 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            align-items: center;
            .block__title {
                font-size: clamp(24px, calc(48vw / var(--ratio)), 48px);
                letter-spacing: 0.96px;
                text-align: center;
                .title__decor {
                    .decor__text {
                        margin-left: 20px;
                    }
                }
            }
            .block__btn {
                margin-top: auto;
                .btn__train {
                    margin-right: 16px;
                }
            }
        }
        .decor__img {
            width: 100%;
            height: clamp(117px, calc(239vw / var(--ratio)), 239px);
            background: #161616;
            opacity: 0.5;
        }
    }
}
@media screen and (max-width: 390px) {
    .decor {
        margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
        .decor__block {
            padding: clamp(10px, calc(16vw / var(--ratio)), 16px) 0;
            .block__title {
                font-size: 24px;
                letter-spacing: 0.48px;
                .title__decor {
                    .decor__text {
                        margin-left: 10px;
                    }
                }
            }
            .block__btn {
                .btn__train {
                    margin-right: 8px;
                }
            }
        }
        .decor__img {
            height: 117px;
        }
    }
}
</style>
