<script>
import { ref } from "vue";
export default {
    props: {
        goals: Object,
    },
    setup() {
       
    },
};
</script>

<template>
    <main class="goals">
        <h2 class="goals__title">{{ goals.title }}</h2>
        <div
            class="goals__card"
            v-for="(item, index) in goals.cards"
            :style="[index % 2 == 1 ? 'flex-direction: row-reverse;' : '']"
            :key="index"
        >
            <img class="card__img" :src="item.img" />
            <nav class="card__block">
                <h3 class="block__title">{{ item.title }}</h3>
                <p class="block__des">
                    {{ item.des }}
                </p>
            </nav>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.goals {
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
    max-width: 1600px;
    margin: 0 auto;
    color: (#fffcf2);
    .goals__title {
        margin-bottom: clamp(40px, calc(80vw / var(--ratio)), 80px);
        text-align: center;

        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(128vw / var(--ratio)), 128px);
        line-height: 85%; /* 108.8px */
        letter-spacing: 2.56px;
    }
    .goals__card {
        display: flex;
        justify-content: space-between;
        &:not(:last-child) {
            margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
        }
        .card__img {
            width: 100%;
            max-width: clamp(409px, calc(790vw / var(--ratio)), 790px);
            aspect-ratio: 790/320;
            object-fit: cover;
        }
        .card__block {
            width: 100%;
            max-width: 520px;
            margin: 0 auto;
            padding-left: 10px;

            .block__title {
                font-family: "Cruinn Black";
                font-size: clamp(20px, calc(40vw / var(--ratio)), 40px);
                line-height: normal;
                letter-spacing: 0.8px;
            }
            .block__des {
                margin-top: clamp(20px, calc(30vw / var(--ratio)), 30px);
                font-family: "Montserrat Regular";
                font-size: clamp(14px, calc(24vw / var(--ratio)), 24px);
                line-height: 150%; /* 36px */
                letter-spacing: 1.92px;
            }
        }
    }
}
@media screen and (max-width: 834px) {
    .goals {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 0;
        max-width: 100%;
        .goals__title {
            margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
            font-size: clamp(36px, calc(64vw / var(--ratio)), 64px);
            letter-spacing: 1.28px;
        }
        .goals__card {
            justify-content: flex-start;
            &:not(:last-child) {
                margin-bottom: clamp(16px, calc(24vw / var(--ratio)), 24px);
            }
            .card__img {
                max-width: clamp(191px, calc(409vw / var(--ratio)), 409px);
                aspect-ratio: 409/165;
            }
            .card__block {
                display: flex;
                flex-direction: column;
                max-width: 270px;
                margin: 0;
                padding-left: clamp(16px, calc(24vw / var(--ratio)), 24px);

                .block__title {
                    font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
                    letter-spacing: 0.4px;
                }
                .block__des {
                    padding-right: 10px;
                    margin: 0;
                    margin-top: auto;
                    font-size: clamp(10px, calc(14vw / var(--ratio)), 14px);
                    letter-spacing: 1.12px;
                }
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .goals {
        padding: calc(24vw / var(--ratio)) 0;
        .goals__title {
            margin-bottom: calc(24vw / var(--ratio));
            font-size: calc(36vw / var(--ratio));
            letter-spacing: 0.72px;
        }
        .goals__card {
            &:not(:last-child) {
                margin-bottom: calc(16vw / var(--ratio));
            }
            .card__img {
                max-width: clamp(150px, calc(180vw / var(--ratio)), 180px);
                aspect-ratio: 193/103;
            }
            .card__block {
                max-width: 150px;
                padding-left: calc(16vw / var(--ratio));

                .block__title {
                    font-size: calc(12vw / var(--ratio));
                    letter-spacing: 0.24px;
                }
                .block__des {
                    font-size: calc(10vw / var(--ratio));
                    letter-spacing: 0.4px;
                }
            }
        }
    }
}
</style>
