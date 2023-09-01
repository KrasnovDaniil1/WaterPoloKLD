<script>
import ImageCarusel from "../components/ImageCarusel.vue";
import VideoCarusel from "../components/VideoCarusel.vue";

import arrow from "../assets/ArrowNews.png";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    components: {
        ImageCarusel,
        VideoCarusel,
    },
    setup() {
        const store = useStore();
        return {
            arrow,
            store,
            newsId: computed(() => store.getters.getNewsId),
        };
    },
};
</script>

<template>
    <section>
        <h1>{{ newsId.title }}</h1>

        <p>
            <ImageCarusel class="carusel" :images="newsId.images" />
            {{ newsId.msg }}
        </p>
        <VideoCarusel :videos="newsId.videos" />
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
    p {
        font-size: var(--size-text);
        line-height: 1.2;
        padding-bottom: 1rem;
        .carusel {
            padding-left: 1rem;
            float: right;
            width: 50%;
        }
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
