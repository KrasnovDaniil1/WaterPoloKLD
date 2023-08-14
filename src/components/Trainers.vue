<script>
export default {
    setup() {},
};
</script>
<template>
    <section>
        <div class="info">
            <h1>НАШИ ТРЕНЕРА</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                omnis cumque aut temporibus voluptatum quo tempore accusamus
                quasi, doloribus commodi accusantium laudantium aperiam
                blanditiis laboriosam repudiandae necessitatibus dicta obcaecati
                tempora.
            </p>
        </div>
        <div class="cards_block">
            <div class="card" v-for="i in 3" :key="i">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hans-Dieter_Flick%2C_Germany_national_football_team_%2803%29.jpg/179px-Hans-Dieter_Flick%2C_Germany_national_football_team_%2803%29.jpg"
                />
                <h1>Иван Иванович Иванов</h1>
                <p>Мастер Спорта</p>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    .info {
        position: relative;
        color: var(--color-primary);
        text-align: center;
        padding: 20px 20%;
        h1 {
            font-size: var(--size-title);
            padding-bottom: 20px;
            font-weight: bold;
            text-transform: uppercase;
        }
        p {
            font-size: var(--size-text);
            line-height: 1.2;
        }
    }
    .cards_block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5vw 8vw;
        margin: 0 8vw;

        .card {
            display: flex;
            flex-direction: column;
            background: var(--bg-primary);
            color: var(--color-secondary);
            border-radius: 10px;
            text-align: center;
            overflow: hidden;
            img {
                aspect-ratio: 35/45;
            }
            h1 {
                padding-top: 10px;
                font-size: var(--size-text);
                font-weight: bold;
                line-height: 1.2;
            }
            p {
                padding: 10px 0;
                font-size: var(--size-text);
            }
        }
    }
}

@media screen and (max-width: 1368px) {
    section {
        .info {
            padding: 10px 5%;
            h1 {
                padding-bottom: 10px;
            }
        }
        .cards_block {
            grid-gap: 5vw;
            margin: 0 5vw;
        }
    }
}
@media screen and (max-width: 920px) {
    section {
        .cards_block {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media screen and (max-width: 420px) {
    section {
        .info {
            padding: 10px 2%;
        }
        .cards_block {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
