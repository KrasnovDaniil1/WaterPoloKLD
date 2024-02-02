<script>
import BtnToMain from "../components/Btn/BtnToMain.vue";
import BtnToBlog from "../components/Btn/BtnToBlog.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
    components: { BtnToMain, BtnToBlog },
    setup() {
        const store = useStore();
        const route = useRoute();

        return {
            route,
            store,
            blogId: computed(() =>
                store.getters.getFederationEventId(route.params.id)
            ),
        };
    },
};
</script>

<template>
    <section class="id" v-if="Object.keys(blogId).length != 0">
        <img class="id__image" :src="blogId.src" />
        <p class="id__data">{{ blogId.time }}</p>
        <h1 class="id__title">
            {{ blogId.title }}
        </h1>
        <p class="id__content" v-html="blogId.msg"></p>
    </section>
    <section class="id__md" v-if="Object.keys(blogId).length != 0">
        <nav class="id__window">
            <div class="window__info">
                <p class="info__data">{{ blogId.time }}</p>
                <h1 class="info__title">
                    {{ blogId.title }}
                </h1>
            </div>
            <img class="window__image" :src="blogId.src" />
        </nav>
        <p class="id__content" v-html="blogId.msg"></p>
        <div class="btn__block">
            <BtnToBlog class="btn_to_blog" />
            <BtnToMain />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.id {
    color: #fffcf2;
    padding: clamp(40px, calc(80vw / var(--ratio)), 80px)
        clamp(64px, calc(120vw / var(--ratio)), 120px);
    min-height: 500px;
    .id__image {
        width: 50%;
        aspect-ratio: 16/9;
        float: left;
        margin-right: clamp(16px, calc(24vw / var(--ratio)), 24px);
    }
    .id__data {
        font-family: "Cruinn Black";
        font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
        line-height: normal;
        letter-spacing: 0.48px;
        text-align: right;
    }
    .id__title {
        font-family: "Akrobat ExtraBold";
        font-size: clamp(32px, calc(64vw / var(--ratio)), 64px);
        line-height: 85%; /* 81.6px */
        letter-spacing: 1.92px;
        text-align: right;
        margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
        padding-left: clamp(16px, calc(24vw / var(--ratio)), 24px);
    }
    .id__content {
        font-family: "Montserrat Medium";
        font-size: clamp(20px, calc(32vw / var(--ratio)), 32px);
        line-height: 150%; /* 48px */
        letter-spacing: 2.56px;
        margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
    }
}
.id__md {
    display: none;
    color: #fffcf2;
    padding: 0 clamp(64px, calc(120vw / var(--ratio)), 120px);
    .id__window {
        padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
        display: flex;
        justify-content: space-between;
        .window__info {
            .info__data {
                font-family: "Cruinn Black";
                font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
                line-height: normal;
                letter-spacing: 0.48px;
            }
            .info__title {
                margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
                font-family: "Akrobat ExtraBold";
                font-size: clamp(32px, calc(64vw / var(--ratio)), 64px);
                line-height: 85%; /* 81.6px */
                letter-spacing: 1.92px;
            }
        }
        .window__image {
            width: 50%;
            aspect-ratio: 16/9;
            object-fit: cover;
        }
    }
    .id__content {
        // margin: 0 auto;
        // padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 50px;
        // max-width: 1330px;
        font-family: "Montserrat Medium";
        font-size: clamp(20px, calc(32vw / var(--ratio)), 32px);
        line-height: 150%; /* 48px */
        letter-spacing: 2.56px;
    }
    .btn__block {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
        .btn_to_blog {
            margin-right: 20px;
        }
    }
}
@media screen and (max-width: 834px) {
    .id {
        display: none;
    }
    .id__md {
        display: block;
        padding: 0;
        .id__window {
            position: relative;
            padding: 0;
            display: block;
            background: black;
            .window__info {
                z-index: 1;
                padding: clamp(10px, calc(40vw / var(--ratio)), 40px);
                position: absolute;
                top: 0;
                left: 0;
                .info__data {
                    font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
                    letter-spacing: 0.32px;
                }
                .info__title {
                    margin-top: clamp(16px, calc(24vw / var(--ratio)), 24px);
                    letter-spacing: 0.8px;
                }
            }
            .window__image {
                width: 100%;
                opacity: 0.5;
            }
        }
        // .id__window {
        //     padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 0
        //     .window__data {
        //         padding: 0 30px;
        //         max-width: 526px;
        //         font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
        //         letter-spacing: 0.32px;
        //     }
        //     .window__title {
        //         padding: 0 30px;
        //         padding-top: clamp(60px, calc(90vw / var(--ratio)), 90px);
        //         max-width: 526px;
        //         font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
        //         letter-spacing: 0.8px;
        //     }
        // }
        .id__content {
            padding: clamp(24px, calc(40vw / var(--ratio)), 40px)
                clamp(10px, calc(40vw / var(--ratio)), 40px);
            // max-width: 526px;
            font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
            letter-spacing: 1.6px;
        }
        .btn__block {
            margin: 0;
            margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .btn_to_blog {
                margin-right: 16px;
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .id__md {
        .id__window {
            .window__info {
                padding: clamp(5px, calc(10vw / var(--ratio)), 10px);
                .info__data {
                    font-size: 12px;
                    letter-spacing: 0.24px;
                }
                .info__title {
                    margin-top: clamp(10px, calc(16vw / var(--ratio)), 16px);
                    font-size: 24px;
                    letter-spacing: 0.48px;
                }
            }
            .window__image {
                width: 100%;
                opacity: 0.5;
            }
        }
        // .id__window {
        //     padding: 24px 0
        //     .window__data {
        //         padding: 0 10px;
        //         max-width: 296px;
        //         font-size: 12px;
        //         letter-spacing: 0.24px;
        //     }
        //     .window__title {
        //         padding: 0 10px;
        //         padding-top: 60px;
        //         max-width: 296px;
        //         font-size: 24px;
        //         letter-spacing: 0.48px;
        //     }
        // }
        .id__content {
            padding: 24px 10px;
            font-size: 12px;
            letter-spacing: 0.96px;
        }
        .btn__block {
            margin-bottom: 24px;
            .btn_to_blog {
                margin-right: 8px;
            }
        }
    }
}
</style>
