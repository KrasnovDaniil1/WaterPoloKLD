<script>
import MainWindow from "../components/MainWindow.vue";
import MainResult from "../components/Main/MainResult.vue";
import MainGallery from "../components/Main/MainGallery.vue";
import Trainers from "../components/Trainers.vue";
import Questions from "../components/Main/Questions.vue";

export default {
    components: {
        MainWindow,
        MainResult,
        MainGallery,
        Trainers,
        Questions,
    },
    setup() {},
};
</script>

<template>
    <section class="main">
        <MainWindow />
        <main class="block__bg">
            <MainResult />
            <MainGallery />
        </main>
        <Trainers />
        <main class="block__bg">
            <Questions />
        </main>
    </section>
</template>

<style lang="scss" scoped>
.main {
    .block__bg {
        background: linear-gradient(
            180deg,
            rgba(0, 77, 243, 0.5) 0%,
            rgba(0, 77, 243, 0.1) 100%
        );
    }
}
@media screen and (max-width: 834px) {
    .main {
    }
}
@media screen and (max-width: 390px) {
    .main {
    }
}
</style>
