<script>
import Icons from "../Other/Icons.vue";
export default {
    components: { Icons },
    setup() {},
};
</script>

<template>
    <main class="progress">
        <h2 class="progress__title">Наши достижения</h2>
        <div class="progress__block">
            <Icons
                icons="arrow"
                style="transform: rotate(180deg)"
                class="block__arrow"
            />
            <nav class="block__carusel">
                <div class="carusel__item">
                    <router-link
                        to="/"
                        class="item"
                        v-for="(item, index) in 3"
                        :key="index"
                    >
                        <div class="item__content">
                            <img
                                src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg"
                                class="content__img"
                            />
                            <h4 class="content__about">
                                Подробнее
                                <Icons
                                    icons="arrowDefault"
                                    class="about__arrow"
                                />
                            </h4>
                        </div>
                        <h6 class="item__data">4 Ноября, 2023</h6>
                        <h5 class="item__title">Победа в соревнованиях</h5>
                    </router-link>
                </div>
            </nav>
            <Icons icons="arrow" class="block__arrow" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.progress {
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
    max-width: 1620px;
    margin: 0 auto;
    color: #fffcf2;
    .progress__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(64px, calc(160vw / var(--ratio)), 160px);
        line-height: 65%; /* 104px */
        letter-spacing: 3.2px;
        text-align: center;
    }
    .progress__block {
        margin-top: clamp(40px, calc(80vw / var(--ratio)), 80px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .block__arrow {
            width: clamp(36px, calc(72vw / var(--ratio)), 72px);
            height: clamp(36px, calc(72vw / var(--ratio)), 72px);
            opacity: 0.4;
            transition: all 0.25s;
            margin: 0 40px;
            &:hover {
                opacity: 1;
            }
        }
        .block__carusel {
            .carusel__item {
                display: flex;
                grid-gap: 2%;

                .item {
                    width: 32%;
                    .item__content {
                        .content__img {
                            width: 100%;
                        }
                        .content__about {
                            .about__arrow {
                            }
                        }
                    }
                    .item__data {
                    }
                    .item__title {
                    }
                }
            }
        }
    }
}
</style>
