<script>
export default {
    setup() {},
};
</script>

<template>
    <button class="btn-sign-training">
        <a href="#">Записаться</a>
    </button>
</template>

<style lang="scss" scoped>
.btn-sign-training {
    width: fit-content;
    height: fit-content;

    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(36px, calc(56vw / var(--ratio)), 56px);
    font-size: 24px;
    font-family: "Cruinn Black";
    letter-spacing: 0.48px;
    background: #004df3;
    color: #fffcf2;
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
            clamp(22px, calc(36vw / var(--ratio)), 36px);
        font-size: 16px;
        letter-spacing: 0.32px;
    }
}
@media screen and (max-width: 500px) {
    .btn-sign-training {
        padding: 8px calc(22vw / var(--ratio));
        font-size: 12px;
        letter-spacing: 0.16px;
    }
}
</style>
