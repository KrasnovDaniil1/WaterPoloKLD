<script>
export default {
    props: {
        aboutTrainers: {
            type: Object,
        },
        trainers: {
            type: Array,
        },
    },
    setup() {},
};
</script>

<template>
    <div class="trainers">
        <div class="info">
            <h1>{{ aboutTrainers.title }}</h1>
            <p>
                {{ aboutTrainers.msg }}
            </p>
        </div>
        <div
            class="cards_block"
            :style="`grid-template-columns: repeat(${trainers.length}, 1fr);`"
        >
            <div class="card" v-for="item in trainers" :key="item.id">
                <img :src="item.img" />
                <div class="card_text">
                    <h1>{{ item.name }}</h1>
                    <p>{{ item.rank }}</p>
                    <span>{{ item.phone_number }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.trainers {
    padding: 1rem var(--px-block);
    .info {
        position: relative;
        color: var(--color-primary);
        text-align: center;
        line-height: 1.5;
        margin-bottom: 1rem;
        h1 {
            font-size: var(--size-title);
            padding-bottom: 1rem;
            font-weight: bold;
            text-transform: uppercase;
        }
        p {
            font-size: var(--size-text);
        }
    }
    .cards_block {
        display: grid;
        // grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        .card {
            display: flex;
            flex-direction: column;
            background: var(--bg-primary);
            color: var(--color-secondary);
            border-radius: 10px;
            text-align: center;
            overflow: hidden;
            font-size: var(--size-text);
            line-height: 1.2;

            img {
                aspect-ratio: 35/45;
                object-fit: cover;
            }
            .card_text {
                padding: 1rem;
                h1 {
                    font-weight: bold;
                }
                p {
                    padding: 0.5rem 0;
                }
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .trainers {
        .cards_block {
            grid-template-columns: repeat(2, 1fr) !important;

            .card:nth-child(2n + 1):last-child {
                position: relative;
                left: 50%;
            }
        }
    }
}
</style>
