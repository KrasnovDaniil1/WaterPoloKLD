<script>
import BtnLearnMore from "../Btn/BtnLearnMore.vue";
import BtnSignTraining from "../Btn/BtnSignTraining.vue";
import img1 from "../../assets/images/allWindow/1.jpg";

export default {
    components: {
        BtnSignTraining,
        BtnLearnMore,
    },
    setup() {
        return {
            img1,
        };
    },
};
</script>

<template>
    <main class="block">
        <img class="block__img" :src="img1" />
        <h1 class="block__title">
            Начни
            <span style="color: #ffd601"> сегодня! </span>
        </h1>

        <p class="block__info">
            Оставь заявку и получи первое занятие бесплатно!
        </p>
        <div class="block__btn">
            <BtnSignTraining class="btn__left" />
            <BtnLearnMore />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.block {
    position: relative;

    padding-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
    padding-bottom: clamp(40px, calc(74vw / var(--ratio)), 80px);
    padding-left: clamp(110px, calc(288vw / var(--ratio)), 288px);
    display: flex;
    flex-direction: column;
    background: #161616;
    color: #fffcf2;
    .block__img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;
        object-fit: cover;
    }
    .block__title {
        max-width: 704px;
        font-family: "Akrobat ExtraBold";
        font-size: clamp(96px, calc(200vw / var(--ratio)), 200px);
        letter-spacing: 4px;
        line-height: 65%;
        z-index: 1;
    }
    .block__info {
        margin-top: clamp(60px, calc(100vw / var(--ratio)), 100px);
        margin-left: 10px;
        font-family: "Cruinn Black";
        font-size: 24px;
        letter-spacing: 1.92px;
        z-index: 1;
    }
    .block__btn {
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        margin-left: 10px;
        z-index: 1;

        .btn__left {
            margin-right: 20px;
        }
    }
}
@media screen and (max-width: 834px) {
    .block {
        padding: clamp(16px, calc(40vw / var(--ratio)), 40px) 10px;
        align-items: center;
        text-align: center;
        .block__title {
            font-size: 96px;
            letter-spacing: 1.92px;
            .block__title-break {
                display: inline;
            }
        }
        .block__info {
            margin-top: clamp(30px, calc(42vw / var(--ratio)), 42px);
            margin-left: 0;
            font-size: 16px;
            letter-spacing: 1.28px;
        }
        .block__btn {
            margin-top: clamp(16px, calc(40vw / var(--ratio)), 40px);
            margin-left: 0;
            .btn__left {
                margin-right: 17px;
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .block {
        padding: calc(16vw / var(--ratio)) 5px;

        .block__title {
            font-size: 40px;
            letter-spacing: 0.8px;
        }
        .block__info {
            margin-top: calc(20vw / var(--ratio));
            font-size: 16px;
            letter-spacing: 0.64px;
            max-width: 198px;
        }
        .block__btn {
            margin-top: calc(16vw / var(--ratio));
            .btn__left {
                margin-right: 8px;
            }
        }
    }
}
</style>
