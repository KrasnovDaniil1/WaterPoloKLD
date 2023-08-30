<script>
export default {
    props: {
        tableGroups: {
            type: Array,
        },
        tablePrice: {
            type: Array,
        },
    },
    setup() {
        const tableDay = [
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
            "Воскресенье",
        ];

        return {
            tableDay,
        };
    },
};
</script>

<template>
    <div class="table">
        <table
            class="date_table"
            v-for="(item, index) in tableGroups"
            :key="index"
        >
            <h1>{{ item.title }}</h1>
            <div class="table_block">
                <tr v-for="(item, index) in item.time" :key="index">
                    <th>
                        {{ tableDay[index] }}
                    </th>
                    <td>
                        {{ item }}
                    </td>
                </tr>
            </div>
        </table>

        <table
            v-if="tablePrice"
            class="price_table"
            :style="`grid-template-columns: repeat(${tablePrice.length}, 1fr);`"
        >
            <tr v-for="(item, index) in tablePrice" :key="index">
                <th>
                    {{ item.title }}
                </th>
                <td>
                    {{ item.price }}
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.table {
    padding: 1rem 0;
    font-size: var(--size-text);
    line-height: 1.2;
    .date_table {
        display: grid;
        grid-template-columns: 1fr;
        h1 {
            padding: 0.5rem 0;
            text-align: center;
            background: var(--bg-primary);
            font-size: var(--size-title);
            color: var(--color-secondary);
            font-weight: bold;
        }
        .table_block {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            tr {
                display: flex;
                flex-direction: column;
                text-align: center;
                th,
                td {
                    border: 1px solid var(--bg-primary);
                    padding: 0.5rem;
                }
            }
        }
    }
    .price_table {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        tr {
            display: flex;
            flex-direction: column;
            text-align: center;
            font-weight: bold;

            th {
                background: var(--bg-primary);
                border: 1px solid var(--bg-secondary);
                color: var(--color-secondary);
                padding: 0.5rem;
            }

            td {
                border: 1px solid var(--bg-primary);
                padding: 0.5rem;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .table {
        .price_table {
            grid-template-columns: repeat(1, 1fr) !important;
        }
    }
}

@media screen and (max-width: 768px) {
    .table {
        .date_table {
            .table_block {
                grid-template-columns: repeat(1, 1fr);
                tr {
                    flex-direction: row;
                    th,
                    td {
                        width: 50%;
                    }
                }
            }
        }
    }
}
</style>
