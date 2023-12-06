<script>
import GoalsOne from "../assets/Sbory/1.jpg";
import GoalsTwo from "../assets/Sbory/2.jpg";
import GoalsThree from "../assets/Sbory/3.jpg";
import GoalsFour from "../assets/Sbory/4.jpg";
export default {
    setup() {
        const place = [
            {
                src: GoalsOne,
                msg: "Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.",
            },
            {
                src: GoalsTwo,
                msg: "Создать команду. Для игр мужских команд расстояние между лицевыми линиями должно быть 30 мСтать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.",
            },
            {
                src: GoalsThree,
                msg: "Найти спонсоров Для игр мужских команд расстояние между лицевыми линиями должно быть 30 мСтать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.",
            },
            {
                src: GoalsFour,
                msg: "Развивать спорт Для игр мужских команд расстояние между лицевыми линиями должно быть 30 мСтать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.Стать первыми Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м,.",
            },
        ];
        return {
            place,
        };
    },
};
</script>

<template>
    <div class="place">
        <h1>Что мы можем предоставить</h1>
        <div class="block">
            <div class="card" v-for="(item, i) in place" :key="i">
                <img :src="item.src" />
                <p>{{ item.msg }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.place {
    padding: 1rem var(--px-block);
    background: var(--bg-primary);
    color: var(--color-secondary);
    line-height: 1.2;

    h1 {
        font-size: var(--size-title);
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        padding-bottom: 1rem;
    }
    .block {
        display: flex;
        flex-direction: column;
        .card {
            display: flex;
            align-items: center;
            background: var(--bg-primary);

            p {
                width: 50%;
                font-size: var(--size-text);
                padding: 1rem 0 1rem 1rem;
            }
            img {
                width: 50%;
                aspect-ratio: 16/9;
                object-fit: cover;
            }
            &:nth-child(even) {
                flex-direction: row-reverse;
                text-align: right;
                p {
                    padding: 1rem 1rem 1rem 0;
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .place {
        .block {
            .card {
                flex-direction: column !important;
                text-align: center !important;
                p,
                img {
                    width: 100%;
                    padding: 0 0 1rem 0 !important;
                }
            }
        }
    }
}
</style>
