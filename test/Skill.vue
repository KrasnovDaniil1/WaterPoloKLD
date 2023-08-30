<script>
export default {
    props: {
        skill: {
            type: Object,
            default: {
                title: "Ошибка",
                card: [
                    {
                        msg: "Ошибка",
                        icon: "",
                    },
                ],
            },
        },
    },
    setup() {},
};
</script>
<template>
    <section>
        <h1>{{ skill.title }}</h1>
        <div
            class="card_block"
            v-for="(item, index) in skill.card"
            :key="index"
        >
            <img :src="item.icon" />
            <p>
                {{ item.msg }}
            </p>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    background: var(--bg-primary);
    color: var(--color-secondary);
    margin-top: 20px;
    padding: 20px 150px;

    h1 {
        font-size: var(--size-title);
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        line-height: 1.5;
    }
    .card_block {
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px 0;
        img {
            width: auto;
            height: 150px;
        }
        p {
            font-size: var(--size-text);
            line-height: 1.2;
            margin-left: 100px;
        }
        &:nth-child(2n + 1) {
            flex-direction: row-reverse;
            text-align: right;
            p {
                margin-right: 100px;
                margin-left: 0;
            }
        }
    }
}
@media screen and (max-width: 1368px) {
    section {
        padding: 20px 5%;
        .card_block {
            padding: 10px 0;

            p {
                margin-left: 5%;
            }
            &:nth-child(2n + 1) {
                p {
                    margin-right: 5%;
                }
            }
        }
    }
}
@media screen and (max-width: 720px) {
    section {
        padding: 10px 5%;

        .card_block {
            flex-direction: column;
            text-align: center;
            padding: 0;
            padding-top: 10px;
            p {
                margin: 10px 0;
            }
            &:nth-child(2n + 1) {
                flex-direction: column;
                p {
                    margin-right: 0;
                    margin-left: 0;
                    text-align: center;
                }
            }
        }
    }
}
</style>
