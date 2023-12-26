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
        <Header v-if="true" />
        <RouterView />
        <Footer v-if="true" />
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
</style>
