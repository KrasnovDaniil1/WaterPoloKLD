<script>
import { ref } from "vue";

export default {
    props: {
        pageNews: {
            type: Object,
        },
    },
    setup(props) {
        const currentPage = ref(props.pageNews.page);
        return {
            currentPage,
        };
    },
};
</script>

<template>
    <div class="news">
        <div class="news_block">
            <router-link
                v-for="item in pageNews.news"
                :to="{ name: 'news_id', params: { id: item.id } }"
                class="card"
                :key="item.id"
            >
                <img :src="item.src" />
                <h1>{{ item.title }}</h1>
                <p>
                    {{ item.msg }}
                </p>
                <div class="btn_block">
                    <span>{{ item.time }}</span>
                    <button>Подробнее</button>
                </div>
            </router-link>
        </div>
        <nav class="pagination">
            <button
                v-for="i in pageNews.count"
                :key="i"
                :class="{ page_active: currentPage == i }"
                @click="currentPage = i"
            >
                {{ i }}
            </button>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.news {
    .news_block {
        padding: 1rem var(--px-block);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        .card {
            border: 3px solid var(--bg-primary);
            border-radius: 10px;
            overflow: hidden;
            font-size: var(--size-text);

            img {
                aspect-ratio: 16/9;
            }
            h1 {
                margin: 0.5rem;
                font-weight: bold;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            p {
                line-height: 1.2;
                padding: 0 0.5rem;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .btn_block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem 0 0 0.5rem;
                span {
                    font-weight: bold;
                }
                button {
                    background: var(--bg-primary);
                    color: var(--color-secondary);
                    padding: 0.5rem;
                    border-radius: 10px 0 0 0;
                }
            }
        }
    }
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            padding: 1rem;
            border-radius: 10px;
            font-size: var(--size-title);
            width: 3rem;
            height: 3rem;
            margin: 1rem;
            border: 2px solid var(--bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .page_active {
            background: var(--bg-primary);
            color: var(--color-secondary);
        }
    }
}
@media screen and (max-width: 820px) {
    .news {
        .news_block {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media screen and (max-width: 460px) {
    .news {
        .news_block {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
