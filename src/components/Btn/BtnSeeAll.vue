<script>
export default {
    setup() {},
};
</script>

<template>
    <router-link to="/blog" class="btn-see-all"> Посмотреть все </router-link>
</template>

<style lang="scss" scoped>
.btn-see-all {
    width: fit-content;
    height: fit-content;
    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(21px, calc(32vw / var(--ratio)), 32px);
    font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
    font-family: "Cruinn Medium";
    font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
    line-height: normal;
    letter-spacing: 0.48px;
    color: #fffcf2;
    transition: all 0.25s;
    white-space: nowrap;
    border: 2px solid #fffcf2;
    opacity: 0.75;

    &:hover {
        background: #fffcf2;
        color: #004df3;
        opacity: 1;
    }
}
@media screen and (max-width: 834px) {
    .btn-see-all {
        border: 1px solid #fffcf2;
        padding: clamp(8px, calc(10vw / var(--ratio)), 10px)
            clamp(16px, calc(21vw / var(--ratio)), 21px);
        font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
        letter-spacing: 0.32px;
    }
}
@media screen and (max-width: 390px) {
    .btn-see-all {
        padding: 8px calc(16vw / var(--ratio));
        font-size: 12px;
        letter-spacing: 0.16px;
    }
}
</style>
