<script>
export default {
    setup() {},
};
</script>

<template>
    <div class="trainers">
        <div class="info">
            <h1>НАШИ ТРЕНЕРА</h1>
            <p>
                Командный водный олимпийский вид спорта, целью в котором
                является забросить мяч в ворота соперника большее число раз, чем
                это сделает оппонент в установленное время. Игра проходит в
                воде, а мяч держат и забрасывают в ворота одной рукой.
                Прародителем водного поло можно считать японскую игру, суть
                которой заключалась в передаче мяча специальными шестами игрокам
                своей команды, находясь при этом на плаву на соломенных бочках.
                Современное водное поло было изобретено Уильямом Уилсоном во
                второй половине XIX века.
            </p>
        </div>
        <div class="cards_block">
            <div class="card" v-for="i in 3" :key="i">
                <img
                    src="https://static.tildacdn.com/tild6361-6639-4662-b163-393938373363/DSC_18568.jpg"
                />
                <div class="card_text">
                    <h1>Иван Иванович Иванов</h1>
                    <p>Мастер Спорта</p>
                    <span>+79990001122</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.trainers {
    padding: 1rem 15%;
    .info {
        position: relative;
        color: var(--color-primary);
        text-align: center;
        line-height: 1.5;
        margin-bottom: 1rem;
        h1 {
            font-size: var(--size-title);
            padding-bottom: 1rem;
            font-weight: bold;
            text-transform: uppercase;
        }
        p {
            font-size: var(--size-text);
        }
    }
    .cards_block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        .card {
            display: flex;
            flex-direction: column;
            background: var(--bg-primary);
            color: var(--color-secondary);
            border-radius: 10px;
            text-align: center;
            overflow: hidden;
            font-size: var(--size-text);
            line-height: 1.2;

            img {
                aspect-ratio: 35/45;
                object-fit: cover;
            }
            .card_text {
                padding: 1rem;
                h1 {
                    font-weight: bold;
                }
                p {
                    padding: 0.5rem 0;
                }
            }
        }
    }
}
</style>
