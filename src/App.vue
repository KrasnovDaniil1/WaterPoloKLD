<script>
import { ref, watch } from "vue";
import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
import { useRouter } from "vue-router";
export default {
    components: {
        Header,
        // Footer,
    },
    setup() {
        const router = useRouter();
        const headerNumImg = ref("1");

        watch(
            () => router.currentRoute.value.meta[0],
            async () => {
                headerNumImg.value = router.currentRoute.value.meta[0];
                console.log(router.currentRoute.value.meta[0]);
            }
        );
        setInterval(() => {
            console.log(router.currentRoute.value.meta[0]);
            console.log("V", headerNumImg.value);
        }, 1000);
        return {
            //     router,
            headerNumImg,
        };
    },
};
</script>

<template>
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Kablammo&family=Montserrat&display=swap"
        rel="stylesheet"
    />
    <div class="app">
        <Header :img="headerNumImg" />
        <RouterView />
        <!-- {{ router.currentRoute.value.meta["0"] }} -->
        <!--<Footer />-->
    </div>
</template>

<style lang="scss">
:root {
    --size-title: 30px;
    --size-text: 24px;
    --size-logo: 50px;

    --color-primary: #000;
    --color-secondary: #fff;
    --color-warning: #e8ec2a;

    --bg-primary: #125197;
    --bg-secondary: #fff;
    --bg-warning: #e8ec2a;
    --bg-dark: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 920px) {
    :root {
        --size-title: 24px;
        --size-text: 20px;
        --size-logo: 40px;
    }
}
@media screen and (max-width: 460px) {
    :root {
        --size-title: 20px;
        --size-text: 16px;
        --size-logo: 24px;
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
    background: var(--bg-secondary);
    width: 5px;
}
::-webkit-scrollbar-thumb {
    background: var(--bg-warning);
}

#app {
    background: var(--bg-secondary);
    max-width: 100vw;
    overflow: hidden;
    font-family: "Montserrat", sans-serif !important;
}
</style>
