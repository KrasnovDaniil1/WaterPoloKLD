<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

import TableDecor from "../assets/TableDecor.png";
export default {
    components: {
        yandexMap,
        ymapMarker,
    },
    setup() {
        const table = {
            class: [
                {
                    day: "Понедельник",
                    time: "12.00-14.00",
                },
                {
                    day: "Вторник",
                    time: "12.00-14.00",
                },
                {
                    day: "Среда",
                    time: "12.00-14.00",
                },
                {
                    day: "Четверг",
                    time: "12.00-14.00",
                },
                {
                    day: "Пятница",
                    time: "12.00-14.00",
                },
                {
                    day: "Суббота",
                    time: "12.00-14.00",
                },
                {
                    day: "Воскресенье",
                    time: "12.00-14.00",
                },
            ],
            price: [
                {
                    title: "Разовое занятие в будни",
                    price: "700",
                },
                {
                    title: "Разовое занятие в воскресенье",
                    price: "800",
                },
                {
                    title: "Абонемент",
                    price: "3200",
                },
            ],
            mapCoords: [54.720657, 20.351297],
        };
        return {
            TableDecor,
            table,
        };
    },
};
</script>

<template>
    <div class="table_block">
        <div class="info">
            <h1>Занятия</h1>
            <p>
                Командный водный олимпийский вид спорта, целью в котором
                является забросить мяч в ворота соперника большее число раз, чем
                это сделает оппонент в установленное время. Игра проходит в
                воде, а мяч держат и забрасывают в ворота одной рукой.
                Прародителем водного поло можно считать японскую игру, суть
                которой заключалась в передаче мяча специальными шестами игрокам
                своей команды, находясь при этом на плаву на соломенных бочках.
                Современное водное поло было изобретено Уильямом Уилсоном во
                второй половине XIX века. Сначала игра очень походила на регби,
                так как в первых редакциях правил было разрешено
            </p>
            <img style="left: 0" :src="TableDecor" />
            <img style="right: 0; transform: scale(-1, 1)" :src="TableDecor" />
        </div>
        <table class="date_table">
            <tr v-for="(item, index) in table.class" :key="index">
                <th>
                    {{ item.day }}
                </th>
                <td>
                    {{ item.time }}
                </td>
            </tr>
        </table>
        <table
            class="price_table"
            :style="`grid-template-columns: repeat(${table.price.length}, 1fr);`"
        >
            <tr v-for="(item, index) in table.price" :key="index">
                <th>
                    {{ item.title }}
                </th>
                <td>
                    {{ item.price }}
                </td>
            </tr>
        </table>
        <div class="map">
            <yandexMap :coords="table.mapCoords" :zoom="12">
                <ymapMarker
                    :coords="table.mapCoords"
                    marker-id="123"
                    hint-content="some hint"
                />
            </yandexMap>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.table_block {
    padding: 1rem 0;
    .info {
        position: relative;
        color: var(--color-primary);
        text-align: center;
        padding: 0 15%;
        line-height: 1.5;
        h1 {
            font-size: var(--size-title);
            font-weight: bold;
            text-transform: uppercase;
            padding-bottom: 1rem;
        }
        p {
            font-size: var(--size-text);
        }
        img {
            position: absolute;
            top: 0;
            width: 20%;
            max-height: 100%;
            opacity: 0.3;
        }
    }
    .date_table,
    .price_table {
        padding: 1rem 10%;
        display: grid;
        font-size: var(--size-text);
        tr {
            display: flex;
            flex-direction: column;
            text-align: center;

            th {
                font-weight: bold;
                background: var(--bg-primary);
                color: var(--color-secondary);
                border: 1px solid var(--bg-secondary);
                padding: 10px 0;
            }
            td {
                border: 1px solid var(--bg-primary);
                background: var(--bg-secondary);
                padding: 10px 0;
            }
        }
    }
    .date_table {
        grid-template-columns: repeat(7, 1fr);
    }
    .price_table {
        // font-size: var(--size-title);
        // grid-template-columns: repeat(auto, 1fr);
    }
    .map {
        width: 100vw;
        aspect-ratio: 4/1;
        .ymap-container {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
