<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Other/Loader.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

export default {
    components: {
        Header,
        Footer,
        Loader,
    },
    setup() {
        const store = useStore();

        onMounted(async () => {
            await store.dispatch("actPage");
        });
        return {
            store,
            loader: computed(() => store.getters.getLoader),
        };
    },
};
</script>

<template>
    <div class="app">
        <Header v-if="true" />
        <RouterView />
        <Footer v-if="true" />
        <Loader :loader="loader" />
    </div>
</template>

<style lang="scss">
html {
    font-size: 10px;
    overflow-x: hidden;

    body {
        min-height: 100vh;
        background: #003362;
        .app {
            max-width: 1920px;
            margin: 0 auto;
        }
    }
}
@media screen and (max-width: 400px) {
    .app {
        max-width: 100%;
        overflow: hidden;
    }
}
</style>
