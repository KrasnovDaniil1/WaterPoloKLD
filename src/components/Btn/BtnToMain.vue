<script>
export default {
    setup() {},
};
</script>

<template>
    <button class="btn-sign-training font-btn">
        <router-link to="/">На главную</router-link>
    </button>
</template>

<style lang="scss" scoped>
.btn-sign-training {
    width: fit-content;
    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(37px, calc(58vw / var(--ratio)), 58px);
    font-family: "Cruinn Medium";
    font-size: 24px;
    letter-spacing: 0.48px;
    color: #fffcf2;
    border: 1px solid #fffcf2;
    opacity: 0.75;
    white-space: nowrap;
    transition: all 0.25s;
    &:hover {
        background: #fffcf2;
        color: #004df3;
        opacity: 1;
    }
}
@media screen and (max-width: 834px) {
    .btn-sign-training {
        padding: clamp(8px, calc(10vw / var(--ratio)), 10px)
            clamp(25px, calc(37vw / var(--ratio)), 37px);
        font-size: 16px;
        letter-spacing: 0.32px;
    }
}
@media screen and (max-width: 390px) {
    .btn-sign-training {
        padding: calc(8vw / var(--ratio)) calc(25vw / var(--ratio));
        font-size: 12px;
        letter-spacing: 0.24px;
    }
}
</style>
