<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import BtnSignTraining from "./Btn/BtnSignTraining.vue";
export default {
    components: { BtnSignTraining },
    props: {
        category: {
            typeof: String,
            default: "children",
        },
    },
    setup(props) {
        const store = useStore();
        return {
            store,
            price: computed(() => store.getters.getPrice(props.category)),
        };
    },
};
</script>

<template>
    <main class="price">
        <div class="card" v-for="(item, i) in price" :key="i">
            <h1 class="card__title">{{ item.title }}</h1>
            <nav class="card__block">
                <p class="block__info">{{ item.info }}</p>
                <p class="block__price">{{ item.cost }} ₽</p>
            </nav>
            <BtnSignTraining class="btn" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.price {
    max-width: 1330px;
    margin: 0 auto;
    padding-bottom: clamp(40px, calc(80vw / var(--ratio)), 80px);
    padding-left: 20px;
    padding-right: 20px;

    color: #fffcf2;
    display: flex;
    justify-content: space-between;
    .card {
        padding: 0 clamp(40px, calc(80vw / var(--ratio)), 80px);
        width: 49%;
        background: linear-gradient(
            180deg,
            rgba(0, 77, 243, 0.5) 0%,
            rgba(0, 77, 243, 0.1) 100%
        );
        border-radius: 24px;

        .card__title {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            font-family: "Cruinn Black";
            font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
            line-height: normal;
            letter-spacing: 0.8px;
            text-align: center;
        }
        .card__block {
            margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            .block__info {
                font-family: "Cruinn Bold";
                font-size: clamp(14px, calc(24vw / var(--ratio)), 24px);
                line-height: normal;
                letter-spacing: 1.92px;
            }
            .block__price {
                font-family: "Cruinn Black";
                font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                line-height: normal;
                letter-spacing: -2.4px;
            }
        }
        .btn {
            display: flex;
            margin: clamp(24px, calc(40vw / var(--ratio)), 40px) auto;
        }
    }
}
@media screen and (max-width: 834px) {
    .price {
        max-width: 550px;
        padding-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
        padding-left: 20px;
        padding-right: 20px;

        .card {
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            // width: 48%;
            background: linear-gradient(
                180deg,
                rgba(0, 77, 243, 0.5) 0%,
                rgba(0, 77, 243, 0.1) 100%
            );
            border-radius: 24px;

            .card__title {
                margin-top: 24px;
                font-size: 24px;
                letter-spacing: 0.48px;
            }
            .card__block {
                flex-direction: column;
                padding-top: 16px;
                margin-top: auto;
                .block__info {
                    font-size: 14px;
                    letter-spacing: 1.12px;
                }
                .block__price {
                    margin-top: 8px;
                    font-size: 40px;
                }
            }
            .btn {
                margin: 24px auto;
            }
        }
    }
}
@media screen and (max-width: 394px) {
    .price {
        max-width: 300px;
        padding-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: column;

        .card {
            display: flex;
            flex-direction: column;
            padding: 0 10px;
            width: 100%;
            background: linear-gradient(
                180deg,
                rgba(0, 77, 243, 0.5) 0%,
                rgba(0, 77, 243, 0.1) 100%
            );
            border-radius: 24px;
            &:first-child {
                margin-bottom: 10px;
            }

            .card__title {
                margin-top: 16px;
                font-size: 20px;
                letter-spacing: 0.48px;
            }
            .card__block {
                flex-direction: row;
                padding-top: 10px;
                margin: 0 10px;
                .block__info {
                    font-size: 14px;
                    letter-spacing: 1.12px;
                }
                .block__price {
                    margin-top: 0px;
                    font-size: 24px;
                }
            }
            .btn {
                margin: 14px auto;
            }
        }
    }
}
</style>
