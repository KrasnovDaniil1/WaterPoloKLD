<script>
export default {
    setup() {},
};
</script>

<template>
    <button class="btn-learn-more-dark font-btn">
        <router-link to="/contacts">Узнать больше</router-link>
    </button>
</template>

<style lang="scss" scoped>
.btn-learn-more-dark{
    width: fit-content;
    height: fit-content;
    padding: clamp(9px, calc(15vw / var(--ratio)), 15px)
        clamp(24px, calc(38vw / var(--ratio)), 38px);
    font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
    font-family: "Cruinn Medium";
    letter-spacing: 0.48px;
    color: #fffcf2;
    transition: all 0.25s;
    white-space: nowrap;
    opacity: 0.75;
    border: 2px solid #fffcf2;

    &:hover {
        background: #fffcf2;
        color: #004df3;
        opacity: 1;
    }
}
@media screen and (max-width: 834px) {
    .btn-learn-more-dark {
        padding: clamp(7px, calc(9vw / var(--ratio)), 9px)
            clamp(15px, calc(24vw / var(--ratio)), 24px);
        font-size: clamp(12px, calc(24vw / var(--ratio)), 16px);
        letter-spacing: 0.32px;
        border: 1px solid #fffcf2;
    }
}
@media screen and (max-width: 390px) {
    .btn-learn-more-dark {
        padding: 7px calc(16vw / var(--ratio));
        font-size: 12px;
        letter-spacing: 0.16px;
    }
}
</style>
