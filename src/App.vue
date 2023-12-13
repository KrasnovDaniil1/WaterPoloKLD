<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
    setup() {},
};
</script>

<template>
    <div class="app">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<style lang="scss">
html {
    font-size: 10px;
    body {
        min-height: 100vh;
        background: var(--bg-warning);
        .app {
            max-width: 1920px;
            margin: 0 auto;
        }
    }
}
</style>
