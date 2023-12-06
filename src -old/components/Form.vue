<script>
import telegram from "../assets/telegram.png";

export default {
    props: {
        form: {
            type: Object,
            default: {
                href: "Нет текста",
                msg: "Нет текста",
                title: "",
            },
        },
    },
    setup() {
        return {
            telegram,
        };
    },
};
</script>

<template>
    <div>
        <h1>{{ form.title }}</h1>
        <p>
            {{ form.msg }}
        </p>
        <a :href="form.href" target="_blank">
            <img :src="telegram" />
        </a>
    </div>
</template>

<style lang="scss" scoped>
div {
    position: relative;
    color: var(--color-secondary);
    text-align: center;
    padding: 1rem var(--px-block);
    line-height: 1.2;
    background: var(--bg-primary);

    h1 {
        font-size: var(--size-title);
        margin-bottom: 1rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    p {
        font-size: var(--size-text);
    }
    a {
        img {
            margin: 1rem 0;
            width: 15%;
            max-height: 100%;
            min-width: 100px;
        }
    }
}
</style>
