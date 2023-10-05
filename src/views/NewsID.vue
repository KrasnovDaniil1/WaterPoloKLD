<script>
import ImageCarusel from "../components/ImageCarusel.vue";
import VideoCarusel from "../components/VideoCarusel.vue";

import arrow from "../assets/ArrowNews.png";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
    components: {
        ImageCarusel,
        VideoCarusel,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        onMounted(async () => {
            await store.dispatch("actPage", "pageNews");
            window.scrollTo({
                top: 0,
                left: 0,
            });
        });
        return {
            route,
            newsId: computed(() => route.params.id),
            arrow,
            store,
            pageNews: computed(() => store.getters.getPageNews),
        };
    },
};
</script>

<template>
    <section v-if="Object.keys(pageNews).length != 0">
        <h1>{{ pageNews.news[newsId].title }}</h1>

        <div>
            <ImageCarusel
                class="carusel"
                :images="pageNews.news[newsId].images"
            />
            <p v-html="pageNews.news[newsId].msg"></p>
        </div>
        <VideoCarusel
            v-if="pageNews.news[newsId].videos.length > 0"
            :videos="pageNews.news[newsId].videos"
        />
        <span>{{ pageNews.news[newsId].time }} </span>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 1rem var(--px-block);

    h1 {
        text-align: center;
        padding: 2rem 0;
        font-size: var(--size-title);
        font-weight: bold;
        text-transform: uppercase;
    }
    div {
        font-size: var(--size-text);
        line-height: 1.2;
        padding-bottom: 1rem;
        p {
            ul,
            ol {
                display: none !important;
            }
        }
        .carusel {
            padding-left: 1rem;
            float: right;
            width: 50%;
        }
    }
    span {
        display: block;
        text-align: center;
        font-size: var(--size-text);
        font-weight: bold;
        margin-top: 1rem;
    }
}
@media screen and (max-width: 768px) {
    section {
        text-align: center;
        p {
            .carusel {
                padding-left: 0;
                padding-bottom: 1rem;
                float: none;
                width: 100%;
            }
        }
    }
}
</style>
