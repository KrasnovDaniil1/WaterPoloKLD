<script>
// import { ref, watch } from "vue";
import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
// import { useRouter } from "vue-router";

// import DecorImg1 from "./assets/Header/Header-1.jpg";
// import DecorImg2 from "./assets/Header/Header-2.jpg";
// import DecorImg3 from "./assets/Header/Header-3.jpg";
// import DecorImg4 from "./assets/Header/Header-4.jpg";

export default {
    components: {
        Header,
        // Footer,
    },
    // setup() {
    //     const router = useRouter();
    //     const headerNumImg = ref("1");
    //     const imgDecorList = [DecorImg1, DecorImg2, DecorImg3, DecorImg4];

    //     watch(
    //         () => router.currentRoute.value.meta[0],
    //         async () => {
    //             headerNumImg.value = router.currentRoute.value.meta[0];
    //         }
    //     );

    //     return {
    //         headerNumImg,
    //         imgDecorList,
    //     };
    // },
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
        <Header />
        <!-- <Header :img="imgDecorList[headerNumImg-1]" /> -->
        <RouterView />
        <!-- <Footer :img="imgDecorList[headerNumImg-1]" /> -->
    </div>
</template>

<style lang="scss">
:root {
    --size-title: 24px;
    --size-text: 20px;
    --size-logo: 50px;
    // --size-title: 30px;
    // --size-text: 24px;
    // --size-logo: 50px;

    --color-primary: #000;
    --color-secondary: #fff;
    --color-decor: #e8ec2a;

    --bg-primary: rgba(45, 87, 129, 1);
    --bg-secondary: #fff;
    --bg-decor: #e8ec2a;

    --w-icon: 40px;

    // --bg-dark: rgba(0, 0, 0, 0.5);
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
