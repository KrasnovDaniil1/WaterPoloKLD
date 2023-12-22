<script>
import ball from "../assets/images/PageNotFound/ball.png";
import BtnSignTraining from "../components/Btn/BtnSignTraining.vue";
import BtnToMain from "../components/Btn/BtnToMain.vue";
export default {
    components: { BtnSignTraining, BtnToMain },
    setup() {
        return {
            ball,
        };
    },
};
</script>

<template>
    <section class="not__found">
        <h1 class="found__title">Страница не найдена</h1>
        <h2 class="found__block">
            <span>4</span>
            <img class="block__image" :src="ball" />
            <span>4</span>
        </h2>
        <p class="found__info">
            Мы не смогли организовать это страницу. Зато смогли организовать
            Водное поло в Калининградской области!
        </p>
        <div class="found__btn">
            <BtnSignTraining class="btn__sign" />
            <BtnToMain />
        </div>
    </section>
</template>
<style lang="scss" scoped>
.not__found {
    color: #fffcf2;
    text-align: center;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;

    .found__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(128vw / var(--ratio)), 128px);
        line-height: 85%; /* 108.8px */
        letter-spacing: 2.56px;
    }
    .found__block {
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        font-family: "Akrobat ExtraBold";
        font-size: clamp(290px, calc(450vw / var(--ratio)), 450px);
        line-height: 65%; /* 292.5px */
        letter-spacing: 9px;
        .block__image {
            width: clamp(200px, calc(320vw / var(--ratio)), 320px);
            height: clamp(200px, calc(320vw / var(--ratio)), 320px);
            margin: 0 20px;
        }
    }
    .found__info {
        width: 70%;
        max-width: 1060px;
        margin: 0 auto;
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        font-family: "Cruinn Bold";
        font-size: clamp(24px, calc(32vw / var(--ratio)), 32px);
        line-height: 150%; /* 48px */
        letter-spacing: 2.56px;
        opacity: 0.8;
    }
    .found__btn {
        margin: 0 auto;
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        .btn__sign {
            margin-right: 20px;
        }
    }
}
@media screen and (max-width: 834px) {
    .not__found {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 0;

        .found__title {
            font-size: clamp(32px, calc(64vw / var(--ratio)), 64px);
            letter-spacing: 1.28px;
        }
        .found__block {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            font-size: clamp(110px, calc(290vw / var(--ratio)), 290px);
            .block__image {
                width: clamp(80px, calc(200vw / var(--ratio)), 200px);
                height: clamp(80px, calc(200vw / var(--ratio)), 200px);
                margin: 0 8px;
            }
        }
        .found__info {
            max-width: 558px;
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            letter-spacing: 1.92px;
        }
        .found__btn {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .btn__sign {
                margin-right: 16px;
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .not__found {
        padding: 24px 0;

        .found__title {
            font-size: 32px;
            letter-spacing: 0.64px;
        }
        .found__block {
            margin-top: 24px;
            font-size: 110px;
            .block__image {
                width: 80px;
                height: 80px;
            }
        }
        .found__info {
            max-width: 294px;
            margin-top: 24px;
            font-size: 16px;
            letter-spacing: 1.28px;
        }
        .found__btn {
            margin-top: 24px;
            .btn__sign {
                margin-right: 8px;
            }
        }
    }
}
</style>
