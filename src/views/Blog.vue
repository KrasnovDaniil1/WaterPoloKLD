<script>
import AllWindow from "../components/AllWindow.vue";
import main from "../assets/images/allWindow/main.png";

export default {
    components: {
        AllWindow,
    },
    setup() {
        const allWindow = {
            title: "Новостной блог",
            info: "Наши талантливые спортсмены продолжают покорять водные глубины, устанавливая новые рекорды. Следите за нами, чтобы быть в курсе всех захватывающих моментов!",
            image: main,
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
    </section>
</template>

<style lang="scss" scoped></style>
