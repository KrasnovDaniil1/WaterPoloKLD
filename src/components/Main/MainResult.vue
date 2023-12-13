<script>
import BtnLearnMore from "../Btn/BtnLearnMore.vue";
export default {
    components: { BtnLearnMore },
    setup() {},
};
</script>

<template>
    <div class="result__num">
        <div class="result__card">
            <h2 class="card__num">3+</h2>
            <h5 class="card__title">Полученных наград</h5>
            <p class="card__des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div class="result__card">
            <h2 class="card__num">40+</h2>
            <h5 class="card__title">Активных участников</h5>
            <p class="card__des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div class="result__card">
            <h2 class="card__num">5+</h2>
            <h5 class="card__title">Сыгранных соревнований</h5>
            <p class="card__des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.result__num {
    width: 100%;
    max-width: 1330px;
    margin: 0 auto;
    padding-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
    display: flex;
    justify-content: space-between;
    grid-gap: clamp(32px, calc(130vw / var(--ratio)), 130px);

    .result__card {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fffcf2;
        text-align: center;

        .card__num {
            color: #ffd601;
            font-family: "Akrobat ExtraBold";
            font-size: clamp(64px, calc(128vw / var(--ratio)), 128px);
            line-height: 85%;
            letter-spacing: 2.56px;
        }
        .card__title {
            margin-top: 16px;
            font-family: "Cruinn Black";
            font-size: clamp(20px, calc(32vw / var(--ratio)), 32px);
            line-height: normal;
            letter-spacing: 0.64px;
            white-space: nowrap;
        }
        .card__des {
            width: 100%;
            max-width: clamp(154px, 95%, 310px);
            margin-top: 16px;
            font-family: "Montserrat Regular";
            font-size: clamp(14px, calc(20vw / var(--ratio)), 20px);
            line-height: normal;
            letter-spacing: 0.4px;
            opacity: 0.6;
        }
    }
}
@media screen and (max-width: 834px) {
    .result__num {
        max-width: 100%;
        margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
        justify-content: center;
        grid-gap: clamp(23px, calc(32vw / var(--ratio)), 32px);
        .result__card {
            max-width: clamp(115px, calc(155vw / var(--ratio)), 155px);
            .card__num {
                font-size: clamp(32px, calc(64vw / var(--ratio)), 64px);
                letter-spacing: 1.28px;
            }
            .card__title {
                margin-top: 4px;
                font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
                letter-spacing: 0.4px;
                white-space: pre-wrap;
            }
            .card__des {
                max-width: 100%;
                margin-top: 8px;
                font-size: clamp(10px, calc(14vw / var(--ratio)), 14px);
                letter-spacing: 0.28px;
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .result__num {
        margin-top: 24px;
        grid-gap: calc(23vw / var(--ratio));
        .result__card {
            max-width: 85px;
            .card__num {
                font-size: 32px;
                letter-spacing: 0.64px;
            }
            .card__title {
                max-width: 100%;
                margin-top: 4px;
                font-size: 12px;
                letter-spacing: 0.24px;
            }
            .card__des {
                max-width: 92%;
                margin-top: 8px;
                font-size: 10px;
                letter-spacing: 0.2px;
            }
        }
    }
}
</style>
