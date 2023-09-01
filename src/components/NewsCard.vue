<script>
import { ref } from "vue";

export default {
    setup() {
        const newsPage = ref({
            pageCount: 3,
            currentPage: 2,
            news: [
                {
                    id: "1",
                    title: "Балтика выйграла матч",
                    msg: "Расстояние между стойками ворот должно быть 3 м. Если глубина бассейна составляет 1,8 м и более, как того требуют правила игры, то нижний край перекладины должен находиться на высоте 0,90 м над поверхностью воды (при игре любительских и профессиональных команд в бассейнах, в которых есть глубокая и мелкая часть, правилами предусмотрена установка ворот при глубине от 1,5 м и менее таким образом, чтобы перекладина отстояла от дна бассейна не менее чем на 2,4 м).",
                    time: "27.08.2023",
                    url: "https://cska.ru/upload/thumbs/920w0h761d9796630c96f1a2d27cb38dd6fb3e.jpg",
                },
                {
                    id: "1",
                    title: "Балтика выйграла матч",
                    msg: "Расстояние между стойками ворот должно быть 3 м. Если глубина бассейна составляет 1,8 м и более, как того требуют правила игры, то нижний край перекладины должен находиться на высоте 0,90 м над поверхностью воды (при игре любительских и профессиональных команд в бассейнах, в которых есть глубокая и мелкая часть, правилами предусмотрена установка ворот при глубине от 1,5 м и менее таким образом, чтобы перекладина отстояла от дна бассейна не менее чем на 2,4 м).",
                    time: "27.08.2023",
                    url: "https://cska.ru/upload/thumbs/920w0h761d9796630c96f1a2d27cb38dd6fb3e.jpg",
                },
                {
                    id: "1",
                    title: "Балтика выйграла матч",
                    msg: "Расстояние между стойками ворот должно быть 3 м. Если глубина бассейна составляет 1,8 м и более, как того требуют правила игры, то нижний край перекладины должен находиться на высоте 0,90 м над поверхностью воды (при игре любительских и профессиональных команд в бассейнах, в которых есть глубокая и мелкая часть, правилами предусмотрена установка ворот при глубине от 1,5 м и менее таким образом, чтобы перекладина отстояла от дна бассейна не менее чем на 2,4 м).",
                    time: "27.08.2023",
                    url: "https://cska.ru/upload/thumbs/920w0h761d9796630c96f1a2d27cb38dd6fb3e.jpg",
                },
            ],
        });

        return {
            newsPage,
        };
    },
};
</script>

<template>
    <div class="news">
        <div class="news_block">
            <router-link
                :to="{ name: 'news_id', params: { id: '1' } }"
                class="card"
                v-for="(item, i) in newsPage.news"
                :key="i"
            >
                <img :src="item.url" />
                <h1>{{ item.title }}</h1>
                <p>
                    {{ item.msg }}
                </p>
                <div class="btn_block">
                    <span>11.02.2003</span>
                    <button>Подробнее</button>
                </div>
            </router-link>
        </div>
        <nav class="pagination">
            <button
                v-for="i in newsPage.pageCount"
                :key="i"
                :class="{ page_active: newsPage.currentPage == i }"
                @click="newsPage.currentPage = i"
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
