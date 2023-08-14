<script>
import About from "../components/About.vue";
import Carusel from "../components/Carusel.vue";
import Trainers from "../components/Trainers.vue";

export default {
    components: {
        About,
        Carusel,
        Trainers,
    },
    setup() {
        const title = "Любители";
        const msg =
            "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.";
        const allImg = [
            "./src/assets/Header/Header-1.jpg",
            "./src/assets/Header/Header-2.jpg",
            "./src/assets/Header/Header-3.jpg",
            "./src/assets/Header/Header-4.jpg",
            "./src/assets/Header/Header-1.jpg",
            "./src/assets/Header/Header-2.jpg",
            "./src/assets/Header/Header-3.jpg",
            "./src/assets/Header/Header-4.jpg",

        ];
        return { title, msg, allImg };
    },
};
</script>

<template>
    <About :title="title" :msg="msg" />
    <Carusel :img="allImg" />
    <Trainers />
    <About :title="title" :msg="msg" />
</template>

<style scoped></style>
