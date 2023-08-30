<script>
import SkillIcon from "../assets/SkillIcon.png";
export default {
    setup() {
        return { SkillIcon };
    },
};
</script>

<template>
    <div class="skills">
        <h1>Кандидат</h1>
        <div class="card_block" v-for="i in 3" :key="i">
            <img :src="SkillIcon" />
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
    </div>
</template>

<style lang="scss" scoped>
.skills {
    padding: 1rem 15%;
    background: var(--bg-primary);
    color: var(--color-secondary);
    h1 {
        font-size: var(--size-title);
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
    }
    .card_block {
        display: flex;
        align-items: center;
        padding: 1rem 0;
        font-size: var(--size-text);
        line-height: 1.5;

        img {
            width: 150px;
            aspect-ratio: 1/1;
        }
        p {
            margin-left: 1rem;
        }
        &:nth-child(2n + 1) {
            flex-direction: row-reverse;
            text-align: right;
            p {
                margin-right: 1rem;
                margin-left: 0;
            }
        }
    }
}
</style>
