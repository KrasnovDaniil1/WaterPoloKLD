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
        <div class="cards_block">
            <div class="card" v-for="(item, i) in trainers" :key="i">
                <img :src="item.src" />
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
        line-height: 1.2;
        margin-bottom: 1rem;
        h1 {
            font-size: var(--size-title);
            padding: 1rem 0;
            font-weight: bold;
            text-transform: uppercase;
        }
        p {
            font-size: var(--size-text);
        }
    }
    .cards_block {
        display: grid;
        grid-gap: 1rem var(--px-block);
        grid-template-columns: repeat(3, 1fr);
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
// @media screen and (max-width: 420px) {
//     .trainers {
//         .cards_block {
//             grid-template-columns: repeat(1, 1fr) !important;
//             padding: 0 5rem;
//             .card:nth-child(2n + 1):last-child {
//                 // position: relative;
//                 left: 0;
//             }
//         }
//     }
// }
</style>
