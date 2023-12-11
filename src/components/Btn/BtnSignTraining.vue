<script>
export default {
    setup() {},
};
</script>

<template>
    <button class="btn-sign-training font-btn">
        <a href="#">Записаться</a>
    </button>
</template>

<style lang="scss" scoped>
.btn-sign-training {
    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(36px, calc(56vw / var(--ratio)), 56px);
    background: #004df3;
}
@media screen and (max-width: 834px) {
    .btn-sign-training {
        padding: clamp(8px, calc(10vw / var(--ratio)), 10px)
            clamp(22px, calc(36vw / var(--ratio)), 36px);
    }
}
@media screen and (max-width: 390px) {
    .btn-sign-training {
        padding: calc(8vw / var(--ratio)) calc(22vw / var(--ratio));
    }
}
</style>
