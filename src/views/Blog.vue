<script>
import AllWindow from "../components/AllWindow.vue";
import img6 from "../assets/images/allWindow/6.jpg";
import News from "../components/Blog/BlogNews.vue";

export default {
    components: {
        AllWindow,
        News,
    },
    setup() {
        const allWindow = {
            title: "Новостной блог",
            info: "Наши талантливые спортсмены продолжают покорять водные глубины, устанавливая новые рекорды. Следите за нами, чтобы быть в курсе всех захватывающих моментов!",
            image: img6,
        };
        return {
            allWindow,
        };
    },
};
</script>

<template>
    <section>
        <AllWindow :allWindow="allWindow" />
        <News />
    </section>
</template>

<style lang="scss" scoped></style>
