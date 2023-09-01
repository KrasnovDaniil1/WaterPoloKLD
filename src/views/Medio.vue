<script>
import About from "../components/About.vue";
import ImageCarusel from "../components/ImageCarusel.vue";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
    components: {
        About,
        ImageCarusel,
    },
    setup() {
        const store = useStore();
        const about = {
            title: "Медио",
            msg: "Для игр мужских команд расстояние между лицевыми линиями должно быть 30 м, ширина поля 20 м. Для игр женских команд расстояние между лицевыми линиями должно быть 25 м, ширина поля 17 м. Границы игрового поля (лицевые линии) должны находиться на расстоянии 0,30 м за линиями ворот.По обе стороны игрового поля устанавливаются ворота. Ворота представляют собой две стойки и перекладину прямоугольной формы толщиной 0,075 м, обращённые в сторону игрового поля и окрашенные в белый цвет. Они должны быть установлены строго посередине линии ворот и на расстоянии не менее 0,30 м от границ игрового поля. Расстояние между стойками ворот должно быть 3 м. Если глубина бассейна составляет 1,8 м и более, как того требуют правила игры, то нижний край перекладины должен находиться на высоте 0,90 м над поверхностью воды (при игре любительских и профессиональных команд в бассейнах, в которых есть глубокая и мелкая часть, правилами предусмотрена установка ворот при глубине от 1,5 м и менее таким образом, чтобы перекладина отстояла от дна бассейна не менее чем на 2,4 м).",
        };
        return {
            store,
            pageMedio: computed(() => store.getters.getPageMedio),
            about,
        };
    },
};
</script>

<template>
    <section>
        <About :about="about" />
        <div class="card" v-for="(item, i) in pageMedio" :key="i">
            <ImageCarusel class="carusel" :images="item.images" />
            <div class="block">
                <h1>{{ item.title }}</h1>
                <p>{{ item.time }}</p>
                <p>{{ item.place }}</p>
                <p>
                    {{ item.msg }}
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    .card {
        padding: 1rem var(--px-block);
        display: flex;
        .carusel,
        .block {
            width: 50%;
        }
        .block {
            padding-left: 1rem;
            h1 {
                font-size: var(--size-title);
                font-weight: bold;
            }
            p {
                margin-top: 1rem;
                font-size: var(--size-text);
                line-height: 1.2;
            }
        }
        &:nth-child(even) {
            flex-direction: row-reverse;
            .block {
                padding-left: 0;
                padding-right: 1rem;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    section {
        .card {
            display: flex;
            flex-direction: column !important;
            .carusel,
            .block {
                width: 100%;
            }
            .block {
                padding: 1rem 0;
            }
        }
    }
}
</style>
