<script>
import Icons from "../Other/Icons.vue";
import { onMounted, ref } from "vue";
export default {
    components: { Icons },
    setup() {
        const currentImage = ref(0);
        const imagesGalery = [
            "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/DFC_Sete_v_FNC_Douai_Coupe_de_la_Ligue_2014_t144334.jpg",
            "https://ru.sport-wiki.org/wp-content/themes/sportwiki/img/water-polo.jpg",
        ];
        const slideImage = (e) => {
            if (imagesGalery.length - 1 < currentImage.value + e) {
                currentImage.value = 0;
            } else if (currentImage.value + e < 0) {
                currentImage.value = imagesGalery.length + e;
            } else {
                currentImage.value += e;
            }
        };
        onMounted(() => {
            window.setInterval(() => {
                slideImage(1);
            }, 1500);
        });
        return {
            currentImage,
            imagesGalery,
            slideImage,
        };
    },
};
</script>

<template>
    <main class="carusel">
        <h2 class="carusel__title">Наши юные звезды</h2>
        <nav class="carusel__check">
            <p class="check__num">
                {{ currentImage + 1 }}/{{ imagesGalery.length }}
            </p>
            <div class="check_btn">
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
        </nav>
        <nav class="galery__indicator">
            <div class="indicator__bg"></div>
            <div
                class="indicator__going"
                :style="{
                    width:
                        (currentImage + 1) * (100 / imagesGalery.length) + '%',
                }"
            ></div>
        </nav>
        <nav class="galery__visible-image">
            <img
                v-for="(item, index) in imagesGalery"
                class="visible__image"
                :class="{ visible__image__active: currentImage == index }"
                :src="item"
                :key="index"
            />
        </nav>
        <h3 class="carusel__title-info">Первая победа</h3>
        <p class="carusel__info">
            Тренировки в водном поло - это не просто физическая активность, это
            путь к самосовершенствованию и достижению результатов. Каждая
            тренировка становится шагом к улучшению техники, стратегии и
            командной работы. И вот, после многих часов усердной работы, наступает тот долгожданный момент — ваша первая
            победа. Это не просто победа в игре; это подтверждение вашего труда,
            усердия и веры в себя и свою команду.
        </p>
    </main>
</template>

<style lang="scss" scoped>
.carusel {
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
    max-width: 1300px;
    margin: 0 auto;
    color: #fffcf2;
    text-align: center;
    .carusel__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(160vw / var(--ratio)), 160px);
        line-height: 65%; /* 104px */
        letter-spacing: 3.2px;
    }
    .carusel__check {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        .check__num {
            font-family: "Akrobat ExtraBold";
            font-size: clamp(40px, calc(80vw / var(--ratio)), 80px);
            line-height: 85%; /* 68px */
            letter-spacing: 1.6px;
        }
        .check_btn {
            .btn__arrow {
                width: clamp(36px, calc(72vw / var(--ratio)), 72px);
                height: clamp(36px, calc(72vw / var(--ratio)), 72px);
                opacity: 0.4;
                transition: all 0.25s;
                &:not(:last-child) {
                    margin-right: clamp(10px, calc(20vw / var(--ratio)), 20px);
                }
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    .galery__indicator {
        position: relative;
        margin: clamp(12px, calc(24vw / var(--ratio)), 24px) 0;
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
    .galery__visible-image {
        position: relative;
        max-width: 100%;
        aspect-ratio: 1330/560;
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
    .carusel__title-info {
        margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
        font-family: "Cruinn Black";
        font-size: clamp(24px, calc(64vw / var(--ratio)), 64px);
        line-height: 85%; /* 54.4px */
        letter-spacing: 1.28px;
    }
    .carusel__info {
        opacity: 0.8;
        margin: 0 20px;
        margin-top: clamp(24px, calc(40vw / var(--ratio)), 40px);
        font-family: "Cruinn Bold";
        font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
        line-height: 150%; /* 36px */
        letter-spacing: 1.92px;
    }
}
@media screen and (max-width: 834px) {
    .carusel {
        padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 0;
        max-width: 526px;
        .carusel__title {
            font-size: clamp(32px, calc(64vw / var(--ratio)), 64px);
            letter-spacing: 1.28px;
        }
        .carusel__check {
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
            .check__num {
                font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                letter-spacing: 0.8px;
            }
            .check_btn {
                .btn__arrow {
                    width: clamp(24px, calc(36vw / var(--ratio)), 36px);
                    height: clamp(24px, calc(36vw / var(--ratio)), 36px);
                    &:not(:last-child) {
                        margin-right: clamp(
                            8px,
                            calc(16vw / var(--ratio)),
                            16px
                        );
                    }
                }
            }
        }
        .galery__indicator {
            margin: clamp(12px, calc(24vw / var(--ratio)), 24px) 0;
            .indicator__bg {
                height: 4px;
            }
            .indicator__going {
                height: 4px;
            }
        }
        .galery__visible-image {
            aspect-ratio: 526/240;
        }
        .carusel__title-info {
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            letter-spacing: 0.48px;
        }
        .carusel__info {
            margin: 0 10px;
            margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
            font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
            letter-spacing: 1.28px;
        }
    }
}
@media screen and (max-width: 390px) {
    .carusel {
        padding: clamp(20px, calc(24vw / var(--ratio)), 24px) 0;
        max-width: 294px;
        .carusel__title {
            font-size: clamp(20px, calc(32vw / var(--ratio)), 32px);
            letter-spacing: 0.64px;
        }
        .carusel__check {
            margin-top: 16px;
            .check__num {
                font-size: clamp(20px, calc(24vw / var(--ratio)), 24px);
                letter-spacing: 0.48px;
            }
            .check_btn {
                .btn__arrow {
                    width: clamp(20px, calc(24vw / var(--ratio)), 24px);
                    height: clamp(20px, calc(24vw / var(--ratio)), 24px);
                    &:not(:last-child) {
                        margin-right: 8px;
                    }
                }
            }
        }
        .galery__indicator {
            margin: 8px 0;
            .indicator__bg {
                height: 2px;
            }
            .indicator__going {
                height: 2px;
            }
        }
        .galery__visible-image {
            aspect-ratio: 294/180;
        }
        .carusel__title-info {
            margin-top: clamp(12px, calc(16vw / var(--ratio)), 16px);
            font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
            letter-spacing: 0.32px;
        }
        .carusel__info {
            margin: 0 5px;
            margin-top: 8px;
            font-size: 12px;
            letter-spacing: 0.48px;
        }
    }
}
</style>
