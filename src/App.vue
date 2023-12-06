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
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />

    <div class="app">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<style lang="scss">
body {
    background: var(--bg-warning);
    min-height: 100vh;
}
.app {
    max-width: 1920px;
    margin: 0 auto;
}
</style>
