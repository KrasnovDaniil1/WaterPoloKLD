<script>
import { ref } from "vue";
import BtnLearnMoreDark from "../Btn/BtnLearnMoreDark.vue";
import Icons from "../Other/Icons.vue";
import BtnSignTraining from "../Btn/BtnSignTraining.vue";
import BtnLearnMore from "../Btn/BtnLearnMore.vue";
export default {
    components: { BtnLearnMoreDark, Icons, BtnSignTraining, BtnLearnMore },
    setup() {
        const currentQuestion = ref(0);
        const questions = [
            {
                title: "Со скольких лет могут заниматься дети водным поло?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. ",
            },
            {
                title: "Со скольких лет могут заниматься дети водным поло?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. ",
            },
            {
                title: "Со скольких лет могут заниматься дети водным поло?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. ",
            },
            {
                title: "Со скольких лет могут заниматься дети водным поло?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. ",
            },
        ];
        return {
            currentQuestion,
            questions,
        };
    },
};
</script>

<template>
    <main class="questions">
        <nav class="questions__header">
            <h4 class="header__title">Часто задаваемые вопросы</h4>
            <div class="header__contacts">
                <BtnLearnMoreDark class="contacts__btn" />
                <div class="contacts__block">
                    <p class="block__phone">+7 888 888 88 90</p>
                    <Icons class="block__icon" icons="vk" />
                    <Icons class="block__icon" icons="telegram" />
                </div>
            </div>
        </nav>
        <div
            class="questions__block"
            :class="{ questions__block__active: currentQuestion == index }"
            v-for="(item, index) in questions"
            :key="index"
        >
            <div class="block__title">
                <h3 class="title">
                    Со скольких лет могут заниматься дети водным поло?
                </h3>
                <Icons
                    class="icon"
                    icons="close"
                    @click="currentQuestion = index"
                />
            </div>
            <p class="block__answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                suscipit metus sit amet nisi lacinia condimentum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vivamus suscipit
                metus sit amet nisi lacinia condimentum.
            </p>
            <div class="block__decor__line"></div>
        </div>
        <div class="questions__btn">
            <BtnSignTraining class="btn__sign" />
            <BtnLearnMore />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.questions {
    max-width: 1330px;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 30px;
    margin: 0 auto;
    color: #fffcf2;
    .questions__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: clamp(40px, calc(96vw / var(--ratio)), 96px);
        .header__title {
            max-width: clamp(400px, calc(764vw / var(--ratio)), 764px);
            font-family: "Akrobat ExtraBold";
            font-size: clamp(48px, calc(96vw / var(--ratio)), 96px);
            line-height: 85%; /* 81.6px */
            letter-spacing: 1.92px;
        }
        .header__contacts {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .contacts__btn {
                margin-top: clamp(15px, calc(23vw / var(--ratio)), 23px);
            }
            .contacts__block {
                margin-top: clamp(20px, calc(39vw / var(--ratio)), 39px);
                display: flex;
                align-items: center;
                .block__phone {
                    font-family: "Cruinn Bold";
                    font-size: clamp(20px, calc(24vw / var(--ratio)), 24px);
                    line-height: normal;
                    letter-spacing: 0.48px;
                }
                .block__icon {
                    width: 32px;
                    height: 32px;
                    margin-left: clamp(20px, calc(40vw / var(--ratio)), 40px);
                }
            }
        }
    }
    .questions__block {
        padding: 0 clamp(30px, calc(40vw / var(--ratio)), 40px) 24px
            clamp(30px, calc(40vw / var(--ratio)), 40px);
        .block__title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                font-family: "Cruinn Bold";
                font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                line-height: normal;
                letter-spacing: 0.8px;
            }
            .icon {
                max-width: clamp(32px, calc(48vw / var(--ratio)), 48px);
                max-height: clamp(32px, calc(48vw / var(--ratio)), 48px);
                transform: rotate(45deg);
                transition: all 0.25s;
            }
        }
        .block__answer {
            max-height: 0;
            overflow: hidden;
            padding: 0px;
            max-width: 1024px;
            margin: 0 auto;
            font-family: "Montserrat Medium";
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            line-height: 150%; /* 36px */
            letter-spacing: 1.92px;
            transition: all 0.25s;
        }
        .block__decor__line {
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
            width: 100%;
            height: 1px;
            background: #fffcf2;
            opacity: 0.4;
        }
    }
    .questions__block__active {
        .block__answer {
            max-height: 300px;
            padding-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
        }
        .block__title {
            .icon {
                transform: rotate(0deg);
            }
        }
    }

    .questions__btn {
        display: none;
    }
}
@media screen and (max-width: 834px) {
    .questions {
        max-width: 600px;
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 20px;
        .questions__header {
            flex-direction: column;
            align-items: center;
            margin-bottom: clamp(24px, 96vw / var(--ratio), 40px);

            .header__title {
                white-space: nowrap;
                max-width: 100%;
                font-size: clamp(24px, calc(48vw / var(--ratio)), 48px);
                letter-spacing: 0.96px;
            }
            .header__contacts {
                display: none;
            }
        }
        .questions__block {
            padding: 0 clamp(8px, calc(30vw / var(--ratio)), 30px)
                clamp(8px, calc(16vw / var(--ratio)), 16px)
                clamp(8px, calc(30vw / var(--ratio)), 30px);
            .block__title {
                .title {
                    font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
                    letter-spacing: 0.48px;
                }
                .icon {
                    max-width: clamp(16px, calc(32vw / var(--ratio)), 32px);
                    max-height: clamp(16px, calc(32vw / var(--ratio)), 32px);
                    margin-left: 24px;
                }
            }
            .block__answer {
                max-width: 400px;
                font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
                letter-spacing: 1.28px;
            }
            .block__decor__line {
                margin-top: clamp(4px, calc(16vw / var(--ratio)), 16px);
            }
        }
        .questions__block__active {
            .block__answer {
                padding-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
            }
        }

        .questions__btn {
            display: flex;
            justify-content: center;
            margin-top: clamp(16px, calc(40vw / var(--ratio)), 40px);
            .btn__sign {
                margin-right: clamp(8px, calc(16vw / var(--ratio)), 16px);
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .questions {
        max-width: 300px;
        padding: clamp(10px, calc(15vw / var(--ratio)), 15px) 0px;
        .questions__header {
            margin-bottom: clamp(16px, 24vw / var(--ratio), 24px);
            .header__title {
                font-size: clamp(18px, calc(24vw / var(--ratio)), 24px);
                letter-spacing: 0.48px;
            }
        }
        .questions__block {
            padding: 0 10px 8px 10px;
            .block__title {
                .title {
                    font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
                    letter-spacing: 0.32px;
                }
                .icon {
                    max-width: 16px;
                    max-height: 16px;
                    margin-left: 20px;
                }
            }
            .block__answer {
                max-width: 240px;
                font-size: clamp(10px, calc(12vw / var(--ratio)), 12px);
                letter-spacing: 0.96px;
            }
            .block__decor__line {
                margin-top: 4px;
            }
        }
        .questions__block__active {
            .block__answer {
                padding-top: 4px;
            }
        }

        .questions__btn {
            display: flex;
            justify-content: center;
            margin-top: 10px;
            .btn__sign {
                margin-right: 8px;
            }
        }
    }
}
</style>
