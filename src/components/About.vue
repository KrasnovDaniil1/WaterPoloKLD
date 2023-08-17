<script>
export default {
    props: {
        about: {
            type: Object,
            default: {
                title: "Ошибка",
                msg: "Ошибка",
            },
        },
    },
    setup() {},
};
</script>
<template>
    <div>
        <h1>{{ about.title }}</h1>
        <p>
            {{ about.msg }}
        </p>
        <img style="left: 0" src="../assets/AboutDecor.png" />
        <img
            style="right: 0; transform: scale(-1, 1)"
            src="../assets/AboutDecor.png"
        />
    </div>
</template>
<style lang="scss" scoped>
div {
    position: relative;
    color: var(--color-primary);
    text-align: center;
    padding: 20px 20%;
    h1 {
        font-size: var(--size-title);
        padding-bottom: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }
    p {
        font-size: var(--size-text);
        line-height: 1.2;
    }
    img {
        position: absolute;
        top: 0;
        // opacity: 0.5;
        // height: 100%;
        width: 20%;
    }
}

@media screen and (max-width: 1368px) {
    div {
        padding: 10px 5%;
        h1 {
            padding-bottom: 10px;
        }
        img {
            display: none;
        }
    }
}
@media screen and (max-width: 420px) {
    div {
        padding: 10px 2%;
    }
}
</style>
