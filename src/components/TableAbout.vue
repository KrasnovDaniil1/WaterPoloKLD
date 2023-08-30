<script>
import TableDecor from "../assets/TableDecor.png";
export default {
    props: {
        about: {
            type: Object,
            default: {
                title: "Нет текста",
                msg: "Нет текста",
            },
        },
    },
    setup() {
        return {
            TableDecor,
        };
    },
};
</script>

<template>
    <div>
        <h1>{{ about.title }}</h1>
        <p>
            {{ about.msg }}
        </p>
        <img style="left: 0" :src="TableDecor" />
        <img style="right: 0; transform: scale(-1, 1)" :src="TableDecor" />
    </div>
</template>

<style lang="scss" scoped>
div {
    position: relative;
    color: var(--color-primary);
    text-align: center;
    padding: 1rem var(--px-block);
    line-height: 1.5;

    h1 {
        font-size: var(--size-title);
        margin-bottom: 1rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    p {
        font-size: var(--size-text);
    }
    img {
        position: absolute;
        top: 0;
        width: 30%;
        max-height: 100%;
        opacity: 0.3;
    }
}
</style>
