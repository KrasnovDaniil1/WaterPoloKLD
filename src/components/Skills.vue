<script>
export default {
    props: {
        title: {
            type: String,
        },
        skills: {
            type: Array,
        },
    },
    setup() {},
};
</script>

<template>
    <div class="skills">
        <h1>{{ title }}</h1>
        <div class="card_block" v-for="(item, index) in skills" :key="index">
            <p>
                <img :src="item.icon" />
                {{ item.msg }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skills {
    padding: 1rem var(--px-block);
    background: var(--bg-primary);
    color: var(--color-secondary);
    line-height: 1.5;

    h1 {
        font-size: var(--size-title);
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
    }
    .card_block {
        display: flex;
        align-items: center;
        padding: 1rem 0;
        font-size: var(--size-text);

        p {
            margin-left: 1rem;
            img {
                padding-right: 1rem;
                float: left;
                width: 8rem;
                aspect-ratio: 1/1;
            }
        }
        &:nth-child(2n + 1) {
            flex-direction: row-reverse;
            text-align: right;
            p {
                img {
                    padding-right: 0;
                    padding-left: 1rem;
                    float: right;
                }
                margin-right: 1rem;
                margin-left: 0;
            }
        }
    }
}
</style>
