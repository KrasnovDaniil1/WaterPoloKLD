<script>
import Icons from "../Other/Icons.vue";
import BtnLearnMoreDark from "../Btn/BtnLearnMoreDark.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
    components: { Icons, BtnLearnMoreDark },
    props: {
        images: Array,
    },
    setup(props) {
        const store = useStore();
        const currentImage = ref(0);

        const slideImage = (e) => {
            if (props.images.length - 1 < currentImage.value + e) {
                currentImage.value = 0;
            } else if (currentImage.value + e < 0) {
                currentImage.value = props.images.length + e;
            } else {
                currentImage.value += e;
            }
        };
        onMounted(() => {
            window.setInterval(() => {
                slideImage(1);
            }, 3000);
        });
        return {
            currentImage,
            slideImage,
            store,
        };
    },
};
</script>

<template>
    <div class="galery" v-if="images.length != 0">
        <h2 class="galery__title">Что же такое Водное поло?</h2>
        <p class="galery__info">
            Водное поло — командная водная игра, в которой две команды пытаются
            забить мяч в ворота противника, плавая по бассейну. Игра проводится
            в специальном бассейне, и участники должны соблюдать определенные
            правила, включая ограниченное время на попытку заброса.
        </p>
        <nav class="galery__check">
            <div class="check__block">
                <p class="block__num">
                    {{ currentImage + 1 }}/{{ images.length }}
                </p>
                <div class="num_btn">
                    <Icons
                        icons="arrow"
                        style="transform: rotate(180deg)"
                        class="btn__arrow"
                        @click="slideImage(-1)"
                    />
                    <Icons
                        icons="arrow"
                        class="btn__arrow"
                        @click="slideImage(1)"
                    />
                </div>
            </div>
            <div class="galery__indicator">
                <div class="indicator__bg"></div>
                <div
                    class="indicator__going"
                    :style="{
                        width: (currentImage + 1) * (100 / images.length) + '%',
                    }"
                ></div>
            </div>
        </nav>
        <nav class="galery__visible-image">
            <img
                v-for="(item, index) in images"
                class="visible__image"
                :class="{ visible__image__active: currentImage == index }"
                :src="item"
                :key="index"
            />
            <!-- <img
                class="visible__image"
                src="../../assets/images/allWindow/main.png"
            /> -->
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.galery {
    max-width: 1600px;
    margin: 0 auto;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
        ". title title title title title img img img img img img"
        ". title title title title title img img img img img img "
        ". info info info info info img img img img img img "
        ". info info info info info img img img img img img"
        ". info info info info info img img img img img img "
        ". check check check check check img img img img img img ";
    grid-gap: 0px clamp(10px, calc(20vw / var(--ratio)), 20px);
    color: #fffcf2;
    .galery__title {
        grid-area: title;
        font-family: "Akrobat ExtraBold";
        font-size: clamp(48px, calc(96vw / var(--ratio)), 96px);
        line-height: 85%; /* 81.6px */
        letter-spacing: 1.92px;
    }
    .galery__info {
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        grid-area: info;
        font-family: "Montserrat Regular";
        font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
        line-height: 150%; /* 30px */
        letter-spacing: 1.6px;
        margin-top: 10px;
    }
    // .galery__btn-learn-more {
    //     grid-area: btn;
    // }
    .galery__check {
        margin-top: auto;
        grid-area: check;
        .check__block {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .block__num {
                font-family: "Akrobat ExtraBold";
                font-size: clamp(40px, calc(80vw / var(--ratio)), 80px);
                line-height: 85%; /* 68px */
                letter-spacing: 1.6px;
            }
            .num_btn {
                .btn__arrow {
                    width: clamp(36px, calc(72vw / var(--ratio)), 72px);
                    height: clamp(36px, calc(72vw / var(--ratio)), 72px);
                    opacity: 0.4;
                    transition: all 0.25s;
                    &:not(:last-child) {
                        margin-right: clamp(
                            10px,
                            calc(20vw / var(--ratio)),
                            20px
                        );
                    }
                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
        .galery__indicator {
            position: relative;
            margin-top: clamp(12px, calc(24vw / var(--ratio)), 24px);
            .indicator__bg {
                width: 100%;
                height: 8px;
                opacity: 0.4;
                background: #ffd601;
            }
            .indicator__going {
                position: absolute;
                top: 0;
                left: 0;
                height: 8px;
                background: #ffd601;
                transition: all 0.25s;
            }
        }
    }

    .galery__visible-image {
        position: relative;
        grid-area: img;
        max-width: clamp(400px, calc(925vw / var(--ratio)), 925px);
        aspect-ratio: 925/858;
        .visible__image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.5s;
            opacity: 0;
        }
        .visible__image__active {
            opacity: 1;
        }
    }
}
@media screen and (max-width: 834px) {
    .galery {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 10px;
        max-width: 720px;
        grid-template-columns: repeat(8, 1fr);
        grid-template-areas:
            ". title title title title title title . "
            ". info info info info info info . "
            ". info info info info info info . "
            ". img img img img img img . "
            ". check check check check check check . ";
        grid-gap: 0px;
        .galery__title {
            text-align: center;
            font-size: clamp(24px, calc(48vw / var(--ratio)), 48px);
            letter-spacing: 0.48px;
        }
        .galery__visible-image {
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
            max-width: 100%;
            aspect-ratio: 526/318;
        }
        .galery__info {
            text-align: center;
            font-size: 14px;
            letter-spacing: 1.12px;
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
        }
        .galery__check {
            margin-top: 16px;
            .check__block {
                .block__num {
                    font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                    letter-spacing: 0.8px;
                }
                .num_btn {
                    .btn__arrow {
                        width: clamp(24px, calc(36vw / var(--ratio)), 36px);
                        height: clamp(24px, calc(36vw / var(--ratio)), 36px);
                        &:not(:last-child) {
                            margin-right: clamp(
                                10px,
                                calc(20vw / var(--ratio)),
                                20px
                            );
                        }
                    }
                }
            }
            .galery__indicator {
                margin-top: 8px;
                .indicator__bg,
                .indicator__going {
                    height: 2px;
                }
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .galery {
        padding: calc(24vw / var(--ratio)) 0px;
        max-width: 294px;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
            "title title title title title title"
            "info info info info info info"
            "info info info info info info"
            "img img img img img img"
            "check check check check check check";
        .galery__title {
            font-size: calc(24vw / var(--ratio));
            letter-spacing: 0.48px;
        }
        .galery__visible-image {
            margin-top: 10px;
            aspect-ratio: 214/130;
        }
        .galery__info {
            font-size: 12px;
            letter-spacing: 0.6px;
            margin-top: 10px;
        }
        .galery__btn-learn-more {
            margin-top: 3px;
        }
        .galery__check {
            margin-top: 10px;
            .check__block {
                .block__num {
                    font-size: 24px;
                    letter-spacing: 0.4px;
                }
                .num_btn {
                    .btn__arrow {
                        width: 24px;
                        height: 24px;
                        &:not(:last-child) {
                            margin-right: 6px;
                        }
                    }
                }
            }
        }
    }
}
</style>
