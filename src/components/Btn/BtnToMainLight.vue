<script>
export default {
    setup() {},
};
</script>

<template>
    <button class="btn-to-main">
        <router-link to="/">На главную</router-link>
    </button>
</template>

<style lang="scss" scoped>
.btn-to-main {
    width: fit-content;
    height: fit-content;
    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(37px, calc(58vw / var(--ratio)), 58px);
    font-family: "Cruinn Medium";
    font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
    letter-spacing: 0.48px;
    color: #fffcf2;
    background: rgba(0, 77, 243, 0.5);
    // opacity: 0.75;
    white-space: nowrap;
    transition: all 0.25s;
    &:hover {
        background: #fffcf2;
        color: #004df3;
        opacity: 1;
    }
}
@media screen and (max-width: 834px) {
    .btn-to-main {
        padding: clamp(8px, calc(10vw / var(--ratio)), 10px)
            clamp(25px, calc(37vw / var(--ratio)), 37px);
        font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
        letter-spacing: 0.32px;
    }
}
@media screen and (max-width: 390px) {
    .btn-to-main {
        padding: 7px calc(25vw / var(--ratio));
        font-size: 12px;
        letter-spacing: 0.24px;
    }
}
</style>
