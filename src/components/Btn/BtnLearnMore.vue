<script>
export default {
    setup() {},
};
</script>

<template>
    <button class="btn-learn-more font-btn">
        <router-link to="/contacts">Узнать больше</router-link>
    </button>
</template>

<style lang="scss" scoped>
.btn-learn-more {
    width: fit-content;
    height: fit-content;
    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(25px, calc(39vw / var(--ratio)), 39px);
    font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
    font-family: "Cruinn Medium";
    letter-spacing: 0.48px;
    background: rgba(0, 77, 243, 0.5);
    color: #fffcf2;
    transition: all 0.25s;
    white-space: nowrap;

    &:hover {
        background: #fffcf2;
        color: #004df3;
        opacity: 1;
    }
}
@media screen and (max-width: 834px) {
    .btn-learn-more {
        padding: clamp(8px, calc(10vw / var(--ratio)), 10px)
            clamp(16px, calc(25vw / var(--ratio)), 25px);
        font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
        letter-spacing: 0.32px;
    }
}
@media screen and (max-width: 390px) {
    .btn-learn-more {
        padding: 8px calc(16vw / var(--ratio));
        font-size: 12px;
        letter-spacing: 0.16px;
    }
}
</style>
