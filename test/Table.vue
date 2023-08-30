<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
    props: {
        table: {
            type: Object,
            default: {
                title: "Ошибка",
                msg: "Ошибка",
                class: [
                    {
                        day: "Понедельник",
                        time: "-",
                    },
                    {
                        day: "Вторник",
                        time: "-",
                    },
                    {
                        day: "Среда",
                        time: "-",
                    },
                    {
                        day: "Четверг",
                        time: "-",
                    },
                    {
                        day: "Пятница",
                        time: "-",
                    },
                    {
                        day: "Суббота",
                        time: "-",
                    },
                    {
                        day: "Воскресенье",
                        time: "-",
                    },
                ],
                mapCoords: [54.720657, 20.351297],
            },
        },
    },
    components: {
        yandexMap,
        ymapMarker,
    },
};
</script>

<template>
    <section>
        <div class="info">
            <h1>{{ table.title }}</h1>
            <p>
                {{ table.msg }}
            </p>
            <img style="left: 0" src="../assets/TableDecor.png" />
            <img
                style="right: 0; transform: scale(-1, 1)"
                src="../assets/TableDecor.png"
            />
        </div>
        <table>
            <tr v-for="(item, index) in table.class" :key="index">
                <th>
                    {{ item.day }}
                </th>
                <td>
                    {{ item.time }}
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
        img {
            position: absolute;
            top: 0;
            width: 20%;
        }
    }
    table {
        position: relative;
        margin: 0 auto;
        font-size: var(--size-text);
        z-index: 5;
        width: 90%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        tr {
            display: flex;
            flex-direction: column;
            th {
                font-weight: bold;
            }
            th,
            td {
                border: 3px solid var(--bg-primary);
                background: var(--bg-secondary);
                padding: 10px 0;
                text-align: center;
            }
        }
    }
    .map {
        margin-top: 20px;
        width: 100vw;
        aspect-ratio: 4/1;
        .ymap-container {
            position: relative;
            width: 100%;
            height: 100%;
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
            img {
                display: none;
            }
        }
        table {
            width: 100%;
            tr {
                th,
                td {
                    padding: 5px;
                }
            }
        }
    }
}
@media screen and (max-width: 920px) {
    section {
        table {
            grid-template-columns: repeat(1, 1fr);
            tr {
                flex-direction: row;
                th,
                td {
                    width: 100%;
                }
            }
        }
        .map {
            margin-top: 10px;
            aspect-ratio: 2/1;
        }
    }
}
@media screen and (max-width: 420px) {
    section {
        .info {
            padding: 10px 2%;
        }
        .map {
            aspect-ratio: 1/1;
        }
    }
}
</style>
