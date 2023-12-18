<script>
import Icons from "./Other/Icons.vue";
import { ref } from "vue";
export default {
    props: {
        trainers: Object,
    },
    components: { Icons },
    setup(props) {
        const currentTrainer = ref(0);
       
        const slideTrainers = (e) => {
            if (props.trainers.length - 1 < currentTrainer.value + e) {
                currentTrainer.value = 0;
            } else if (currentTrainer.value + e < 0) {
                currentTrainer.value = props.trainers.length + e;
            } else {
                currentTrainer.value += e;
            }
        };
        return {
            currentTrainer,
            slideTrainers,
        };
    },
};
</script>

<template>
    <main class="trainers">
        <div class="trainers__img">
            <img
                v-for="(item, index) in trainers"
                :key="index"
                :src="item.img"
                class="img__train"
                :class="{ elem__active: currentTrainer == index }"
            />
        </div>

        <div class="trainers__des">
            <h3 class="des__title">Наши тренера</h3>
            <p class="des__info">Мастера своего дела!</p>
        </div>
        <h4
            class="trainers__name"
            v-for="(item, index) in trainers"
            :key="index"
            :class="{ elem__active: currentTrainer == index }"
        >
            {{ item.name }}
        </h4>
        <p
            class="trainers__info"
            v-for="(item, index) in trainers"
            :key="index"
            :class="{ elem__active: currentTrainer == index }"
        >
            {{ item.des }}
        </p>

        <div class="trainers__contacts">
            <nav class="contacts__block">
                <Icons icons="vk" class="contacts__icon" />
                <Icons icons="telegram" class="contacts__icon" />
            </nav>

            <p
                class="contacts__phone"
                v-for="(item, index) in trainers"
                :key="index"
                :class="{ elem__active: currentTrainer == index }"
            >
                {{ item.contacts }}
            </p>
        </div>
        <Icons
            icons="arrow"
            class="trainers__arrow"
            @click="slideTrainers(1)"
        />
        <div class="decor__block"></div>
        <!-- <div class="decor__block decor__second"></div> -->
    </main>
</template>

<style lang="scss" scoped>
.trainers {
    position: relative;
    padding: 70px 30px 40px 30px;
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
        "img img img img . des des des des des des ."
        "img img img img . surname surname surname . . . ."
        "img img img img . surname surname surname . . . ."
        "img img img img . surname surname surname . . . ."
        "img img img img . info info info info . . arrow"
        "img img img img . contacts contacts contacts contacts contacts contacts .";
    grid-gap: 0px clamp(10px, calc(20vw / var(--ratio)), 20px);

    color: #fffcf2;
    .trainers__img {
        position: relative;
        grid-area: img;
        max-width: clamp(400px, calc(520vw / var(--ratio)), 520px);
        aspect-ratio: 520/610;
        .img__train {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: all 0.25s;
        }
    }
    .trainers__des {
        grid-area: des;
        .des__title {
            font-family: "Akrobat ExtraBold";
            font-size: clamp(48px, calc(96vw / var(--ratio)), 96px);
            line-height: 85%; /* 81.6px */
            letter-spacing: 1.92px;
        }
        .des__info {
            margin-top: clamp(8px, calc(30vw / var(--ratio)), 30px);
            margin-left: clamp(2px, calc(7vw / var(--ratio)), 7px);
            font-family: "Cruinn Bold";
            font-size: clamp(14px, calc(24vw / var(--ratio)), 24px);
            line-height: normal;
            letter-spacing: 1.92px;
            opacity: 0.8;
        }
    }
    .trainers__name {
        margin-top: auto;
        grid-area: surname;
        font-family: "Cruinn Black";
        font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
        line-height: normal;
        letter-spacing: 0.8px;
        opacity: 0;
        transition: all 0.25s;
    }
    .trainers__info {
        margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
        grid-area: info;
        font-family: "Montserrat Regular";
        font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
        line-height: 150%; /* 30px */
        letter-spacing: 1.6px;
        // opacity: 0.6;
        opacity: 0;
        transition: all 0.25s;
    }
    .trainers__contacts {
        margin-top: auto;
        grid-area: contacts;
        display: flex;
        align-items: center;
        .contacts__block {
            display: flex;
            align-items: center;
            .contacts__icon {
                width: clamp(24px, calc(40vw / var(--ratio)), 40px);
                height: clamp(24px, calc(40vw / var(--ratio)), 40px);
                &:not(:first-child) {
                    margin-left: clamp(16px, calc(32vw / var(--ratio)), 32px);
                }
            }
        }
        .contacts__phone {
            position: absolute;
            margin-left: clamp(54px, calc(91vw / var(--ratio)), 91px);
            font-family: "Cruinn Bold";
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.48px;
            opacity: 0;
            // transition: all 0.25s;
        }
    }
    .trainers__arrow {
        grid-area: arrow;
        width: clamp(48px, calc(72vw / var(--ratio)), 72px);
        height: clamp(48px, calc(72vw / var(--ratio)), 72px);
        opacity: 0.4;
        transition: all 0.25s;
        &:hover {
            opacity: 1;
        }
    }
    .decor__block {
        position: absolute;
        bottom: 0;
        right: 15vw;
        width: 85vw;
        aspect-ratio: 1480/386;
        background: var(
            --bg,
            linear-gradient(
                180deg,
                rgba(0, 77, 243, 0.5) 0%,
                rgba(0, 77, 243, 0.1) 100%
            )
        );
        z-index: -1;
    }
    .elem__active {
        opacity: 1 !important;
        position: relative !important;
    }
    // .decor__second {
    //     right: -85vw;
    // }
}
@media screen and (max-width: 1368px) {
    .trainers {
        .decor__block {
            aspect-ratio: 1200/386;
        }
    }
}
@media screen and (max-width: 834px) {
    .trainers {
        padding: 40px 10px 24px 10px;
        max-width: 706px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-areas:
            "img img img img img des des des des des des  ."
            "img img img img img surname surname surname surname surname  . ."
            "img img img img img surname surname surname surname surname . ."
            "img img img img img info info info info info . arrow "
            "img img img img img contacts contacts contacts contacts contacts contacts  .";
        grid-gap: 0px 16px;

        .trainers__img {
            margin-top: auto;
            max-width: clamp(135px, calc(255vw / var(--ratio)), 255px);
            aspect-ratio: 255/354;
        }
        .trainers__des {
            .des__title {
                font-size: clamp(24px, calc(48vw / var(--ratio)), 48px);
                letter-spacing: 0.96px;
            }
            .des__info {
                margin-top: 16px;
                margin-left: 3px;
                font-size: clamp(8px, calc(14vw / var(--ratio)), 14px);
                letter-spacing: 1.12px;
            }
        }
        .trainers__name {
            padding-top: 20px;
            margin-top: auto;
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            letter-spacing: 0.32px;
        }
        .trainers__info {
            margin-top: 8px;
            font-size: clamp(10px, calc(12vw / var(--ratio)), 12px);
            letter-spacing: 0.96px;
        }
        .trainers__contacts {
            padding-top: 10px;
            margin-top: auto;
            .contacts__block {
                .contacts__icon {
                    width: clamp(16px, calc(24vw / var(--ratio)), 24px);
                    height: clamp(16px, calc(24vw / var(--ratio)), 24px);
                    &:not(:first-child) {
                        margin-left: clamp(
                            4px,
                            calc(16vw / var(--ratio)),
                            16px
                        );
                    }
                }
            }
            .contacts__phone {
                margin-left: clamp(20px, calc(54vw / var(--ratio)), 54px);
                font-size: clamp(10px, calc(16vw / var(--ratio)), 16px);
                letter-spacing: 0.32px;
            }
        }
        .trainers__arrow {
            width: clamp(24px, calc(48vw / var(--ratio)), 48px);
            height: clamp(24px, calc(48vw / var(--ratio)), 48px);
        }
        .decor__block {
            width: 100vw;
            right: -5vw;
        }
        .decor__second {
            display: none;
        }
    }
}

@media screen and (max-width: 390px) {
    .trainers {
        padding: 24px 0 16px 0;
        max-width: 294px;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
            "img img img des des des"
            "img img img . . ."
            "img img img surname surname surname"
            "img img img contacts contacts ."
            "img img img contacts contacts arrow"
            "info info info info info .";
        grid-gap: 0px 16px;

        .trainers__img {
            margin-top: auto;
            max-width: clamp(100px, calc(135vw / var(--ratio)), 135px);
            aspect-ratio: 1/1;
        }
        .trainers__des {
            .des__title {
                font-size: clamp(18px, calc(24vw / var(--ratio)), 24px);
                letter-spacing: 0.48px;
            }
            .des__info {
                margin-top: 7px;
                margin-left: 3px;
                font-size: 10px;
                letter-spacing: 0.32px;
            }
        }
        .trainers__name {
            padding-top: 20px;
            margin-top: auto;
            font-size: clamp(10px, calc(16vw / var(--ratio)), 16px);
            letter-spacing: 0.32px;
        }
        .trainers__info {
            margin-top: 8px;
            font-size: 10px;
            letter-spacing: 0.4px;
        }
        .trainers__contacts {
            padding-top: 10px; //
            margin-top: auto;
            display: flex;
            flex-direction: column-reverse;
            align-items: start;
            .contacts__block {
                margin-top: 8px;
                .contacts__icon {
                    width: 16px;
                    height: 16px;
                    &:not(:first-child) {
                        margin-left: 4px;
                    }
                }
            }
            .contacts__phone {
                margin-top: 10px;
                margin-left: 0px;
                font-size: 10px;
                letter-spacing: 0.2px;
            }
        }
        .trainers__arrow {
            width: 22px;
            height: 22px;
        }
        .decor__block {
            aspect-ratio: 390/159;
        }
    }
}
</style>
