<script>
export default {
    setup() {},
};
</script>

<template>
    <button class="btn-learn-more font-btn">
        <a href="#">Узнать больше</a>
    </button>
</template>

<style lang="scss" scoped>
.btn-learn-more {
    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(25px, calc(39vw / var(--ratio)), 39px);
    background: rgba(0, 77, 243, 0.5);
    font-size: 24px;
    font-family: "Cruinn Black";
    letter-spacing: 0.48px;
    transition: all 0.25s;
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
        font-size: 16px;
        letter-spacing: 0.32px;
    }
}
@media screen and (max-width: 390px) {
    .btn-learn-more {
        padding: calc(8vw / var(--ratio)) calc(16vw / var(--ratio));
        font-size: 8px;
        letter-spacing: 0.16px;
    }
}
</style>
