<script>
import GoalsOne from "../assets/Federation/1.jpg";
import GoalsTwo from "../assets/Federation/2.jpg";
import GoalsThree from "../assets/Federation/3.jpg";
import GoalsFour from "../assets/Federation/4.jpg";
export default {
    setup() {
        const goals = [
            {
                src: GoalsOne,
                msg: "Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.",
            },
            {
                src: GoalsTwo,
                msg: "Создать команду. Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м",
            },
            {
                src: GoalsThree,
                msg: "Найти спонсоров Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м",
            },
            {
                src: GoalsFour,
                msg: "Развивать спорт Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м",
            },
        ];
        return {
            goals,
        };
    },
};
</script>

<template>
    <div class="goals">
        <h1>Наши планы и цели</h1>
        <div class="block">
            <div class="card" v-for="(item, i) in goals" :key="i">
                <p>{{ item.msg }}</p>
                <img :src="item.src" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.goals {
    padding: 1rem var(--px-block);
    text-align: center;
    line-height: 1.2;
    h1 {
        font-size: var(--size-title);
        font-weight: bold;
        text-transform: uppercase;
        padding-bottom: 1rem;
    }
    .block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .card {
            display: flex;
            align-items: center;
            margin: 0.5rem;
            background: var(--bg-primary);

            p {
                width: 50%;
                color: var(--color-secondary);
                font-size: var(--size-text);
                padding: 0.5rem;
            }
            img {
                width: 50%;
                aspect-ratio: 1/1;
                object-fit: cover;
            }
            &:nth-child(even) {
                flex-direction: row-reverse;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .goals {
        .block {
            grid-template-columns: repeat(1, 1fr);
            .card {
                margin: 0;
            }
        }
    }
}
</style>
