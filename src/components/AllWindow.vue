<script>
import BtnLearnMore from "./Btn/BtnLearnMore.vue";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
export default {
    props: {
        allWindow: Object,
    },
    components: {
        BtnSignTraining,
        BtnLearnMore,
    },
    setup() {},
};
</script>

<template>
    <main class="block">
        <img class="block__img" :src="allWindow.image" />
        <h1 class="block__title">{{ allWindow.title }}</h1>
        <p class="block__info">
            {{ allWindow.info }}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
        font-family: "Akrobat ExtraBold";
        font-size: clamp(96px, calc(200vw / var(--ratio)), 200px);
        letter-spacing: 4px;
        line-height: 65%;
        z-index: 1;
    }
    .block__info {
        max-width: 840px;
        margin-top: clamp(60px, calc(100vw / var(--ratio)), 100px);
        font-family: "Cruinn Bold";
        font-size: 24px;
        letter-spacing: 1.92px;
        line-height: 120%;
        opacity: 0.8;
        z-index: 1;
    }
    .block__btn {
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        z-index: 1;

        .btn__left {
            margin-right: 20px;
        }
    }
}
@media screen and (max-width: 834px) {
    .block {
        padding: clamp(16px, calc(40vw / var(--ratio)), 40px) 10px;

        .block__title {
            font-size: clamp(40px, calc(96vw / var(--ratio)), 96px);
            letter-spacing: 1.92px;
        }
        .block__info {
            max-width: 526px;
            margin-top: clamp(30px, calc(42vw / var(--ratio)), 42px);
            font-size: 14px;
            letter-spacing: 1.28px;
        }
        .block__btn {
            margin-top: clamp(16px, calc(40vw / var(--ratio)), 40px);
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
            font-size: 12px;
            letter-spacing: 0.48px;
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
