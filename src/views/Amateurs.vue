<script>
import AllWindow from "../components/AllWindow.vue";
import main from "../assets/images/allWindow/main.png";

export default {
    components: {
        AllWindow,
    },
    setup() {
        const allWindow = {
            title: "Любителям",
            info: "Погружение в мир водных увлечений – это не только способ отдыха, но и настоящее приключение, которое пробуждает чувства и подарит невероятные впечатления!",
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
