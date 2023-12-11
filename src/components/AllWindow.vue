<script>
import BtnLearnMore from "./Btn/BtnLearnMore.vue";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
export default {
    components: {
        BtnSignTraining,
        BtnLearnMore,
    },
    setup() {},
};
</script>

<template>
    <main class="block">
        <img
            class="block__img"
            src="https://img.olympics.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/vygdrj0yprya8zez6rz5"
        />
        <h1 class="block__title">
            Начни
            <br class="block__title-break" />
            <span style="color: var(--text-info)">сегодня!</span>
        </h1>
        <p class="block__info">Оставь заявку и первое занятие бесплатно!</p>
        <div class="block__btn">
            <BtnSignTraining class="btn__left" />
            <BtnLearnMore />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.block {
    position: relative;
    padding-top: clamp(40px, 4.1vw, 80px);
    padding-bottom: clamp(40px, 3.8vw, 74px);
    padding-left: clamp(110px, 14.7vw, 288px);
    display: flex;
    flex-direction: column;
    color: var(--text-light);
    .block__img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;
        object-fit: cover;
        z-index: -1;
    }
    .block__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(96px, 10vw, 200px);
        letter-spacing: 4px;
        line-height: 65%;
    }
    .block__info {
        margin-top: clamp(64px, 5.12vw, 100px);
        margin-left: 10px;
        font-family: "Cruinn Black";
        font-size: 24px;
        letter-spacing: 1.92px;
    }
    .block__btn {
        margin-top: clamp(64px, 6.15vw, 120px);
        margin-left: 10px;
        .btn__left {
            margin-right: 20px;
        }
    }
}
</style>
