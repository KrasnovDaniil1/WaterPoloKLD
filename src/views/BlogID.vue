<script>
import BtnToMain from "../components/Btn/BtnToMain.vue";
import BtnToBlog from "../components/Btn/BtnToBlog.vue";

export default {
    components: { BtnToMain, BtnToBlog },
    setup() {},
};
</script>

<template>
    <section class="id">
        <nav class="id__window">
            <img
                class="window__image"
                src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg"
            />
            <p class="window__data">9.12.2003</p>
            <h1 class="window__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
        </nav>
        <p class="id__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh
            lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum
            mollis. Vestibulum consequat erat sapien, a pellentesque quam
            accumsan nec. Mauris ex ex, placerat sollicitudin nisi sed, pharetra
            cursus mauris. Ut pretium eros eget mauris tempor dictum. Aenean non
            lorem erat. Quisque a tristique lorem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi
            lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in,
            ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat
            erat sapien, a pellentesque quam accumsan
        </p>
        <div class="btn__block">
            <BtnToBlog class="btn_to_blog" />
            <BtnToMain />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.id {
    color: #fffcf2;
    .id__window {
        position: relative;
        background: #161616;
        padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 0;
        .window__image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.5;
        }
        .window__data {
            position: relative;
            margin: 0 auto;
            padding: 0 50px;
            max-width: 1330px;
            font-family: "Cruinn Black";
            font-size: clamp(16px, calc(24vw / var(--ratio)), 24px);
            line-height: normal;
            letter-spacing: 0.48px;
            z-index: 1;
        }
        .window__title {
            position: relative;
            margin: 0 auto;
            padding: 0 50px;
            padding-top: clamp(90px, calc(120vw / var(--ratio)), 120px);
            max-width: 1330px;
            font-family: "Akrobat ExtraBold";
            font-size: clamp(40px, calc(96vw / var(--ratio)), 96px);
            line-height: 85%; /* 81.6px */
            letter-spacing: 1.92px;
            z-index: 1;
        }
    }
    .id__content {
        margin: 0 auto;
        padding: clamp(40px, calc(80vw / var(--ratio)), 80px) 50px;
        max-width: 1330px;
        font-family: "Montserrat Medium";
        font-size: clamp(20px, calc(32vw / var(--ratio)), 32px);
        line-height: 150%; /* 48px */
        letter-spacing: 2.56px;
    }
    .btn__block {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: clamp(40px, calc(80vw / var(--ratio)), 80px);
        .btn_to_blog {
            margin-right: 20px;
        }
    }
}
@media screen and (max-width: 834px) {
    .id {
        .id__window {
            padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 0;

            .window__data {
                padding: 0 30px;
                max-width: 526px;
                font-size: clamp(12px, calc(16vw / var(--ratio)), 16px);
                letter-spacing: 0.32px;
            }
            .window__title {
                padding: 0 30px;
                padding-top: clamp(60px, calc(90vw / var(--ratio)), 90px);
                max-width: 526px;
                font-size: clamp(24px, calc(40vw / var(--ratio)), 40px);
                letter-spacing: 0.8px;
            }
        }
        .id__content {
            padding: clamp(24px, calc(40vw / var(--ratio)), 40px) 30px;
            max-width: 526px;
            font-size: clamp(12px, calc(20vw / var(--ratio)), 20px);
            letter-spacing: 1.6px;
        }
        .btn__block {
            margin-bottom: clamp(24px, calc(40vw / var(--ratio)), 40px);
            .btn_to_blog {
                margin-right: 16px;
            }
        }
    }
}
@media screen and (max-width: 390px) {
    .id {
        .id__window {
            padding: 24px 0;

            .window__data {
                padding: 0 10px;
                max-width: 296px;
                font-size: 12px;
                letter-spacing: 0.24px;
            }
            .window__title {
                padding: 0 10px;
                padding-top: 60px;
                max-width: 296px;
                font-size: 24px;
                letter-spacing: 0.48px;
            }
        }
        .id__content {
            padding: 24px 10px;
            max-width: 296px;
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
