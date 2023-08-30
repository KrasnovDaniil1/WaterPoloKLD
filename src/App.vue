<script>
import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";

export default {
    components: {
        Header,
        // Footer,
    },
    setup() {},
};
</script>

<template>
    <!-- <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Kablammo&family=Montserrat&display=swap"
        rel="stylesheet"
    /> -->
    <div class="app">
        <Header />
        <RouterView />
        <!-- <Footer :img="imgDecorList[headerNumImg-1]" /> -->
    </div>
</template>

<style lang="scss">
html {
    font-size: 16px;
}
:root {
    --size-title: 24px;
    --size-text: 20px;
    --size-logo: 50px;

    --color-primary: #000;
    --color-secondary: #fff;
    --color-decor: #e8ec2a;

    --bg-primary: rgba(45, 87, 129, 1);
    --bg-secondary: #fff;
    --bg-decor: #e8ec2a;

    --w-icon: 40px;
    --px-block: 10%;

    // --bg-dark: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 1024px) {
    html {
        font-size: 14px;
    }
    :root {
        --size-title: 22px;
        --size-text: 18px;
        --size-logo: 40px;
        --w-icon: 35px;
        --px-block: 8%;
    }
}

@media screen and (max-width: 768px) {
    html {
        font-size: 12px;
    }
    :root {
        --size-title: 20px;
        --size-text: 16px;
        --size-logo: 30px;
        --w-icon: 30px;
        --px-block: 2rem;
    }
}

@media screen and (max-width: 460px) {
    html {
        font-size: 10px;
    }
    :root {
        --size-title: 18px;
        --size-text: 16px;
        --size-logo: 20px;
        --w-icon: 25px;
        --px-block: 1rem;
    }
}

@font-face {
    font-family: "Gilroy";
    src: url("./assets/font/Gilroy-Medium.eot");
    src: local("Gilroy Medium"), local("Gilroy-Medium"),
        url("./assets/font/Gilroy-Medium.eot?#iefix")
            format("embedded-opentype"),
        url("./assets/font/Gilroy-Medium.woff2") format("woff2"),
        url("./assets/font/Gilroy-Medium.woff") format("woff"),
        url("./assets/font/Gilroy-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
}

::-webkit-scrollbar {
    background: var(--bg-dark);
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    background: var(--bg-decor);
}

#app {
    background: var(--bg-secondary);
    max-width: 100vw;
    overflow: hidden;
    font-family: "Montserrat", sans-serif !important;
}
</style>
