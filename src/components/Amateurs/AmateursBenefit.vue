<template>
    <main class="benefit">
        <nav class="benefit__content">
            <h2 class="content__title"></h2>
            <div class="content__info">
                <h3 class="info__num">01</h3>
                <p class="info__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="content__info">
                <h3 class="info__num">02</h3>
                <p class="info__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="content__info">
                <h3 class="info__num">03</h3>
                <p class="info__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </nav>
        <img
            src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg"
            class="benefit__img"
        />
    </main>
</template>

<style lang="scss" scoped>
.benefit {
    display: flex;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
    .benefit__content {
        margin-left: 40px;
        color: #fffcf2;
        .content__title {
            font-family: "Akrobat ExtraBold";
            font-size: 128px;
            line-height: 85%; /* 108.8px */
            letter-spacing: 2.56px;
        }
        .content__info {
            .info__num {
                font-family: "Akrobat ExtraBold";
                font-size: 64px;
                font-style: normal;
                line-height: 65%;
            }
            .info__text {
                font-family: "Montserrat Regular";
                font-size: 24px;
                line-height: 150%; /* 36px */
                letter-spacing: 1.92px;
            }
        }
    }
    .benefit__img {
        width: 709px;
        aspect-ratio: 790/724;
    }
}
</style>
