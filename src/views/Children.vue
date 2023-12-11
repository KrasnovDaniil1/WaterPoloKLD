<script>
import AllWindow from "../components/AllWindow.vue";
import main from "../assets/images/allWindow/main.png";

export default {
    components: {
        AllWindow,
    },
    setup() {
        const allWindow = {
            title: "Детям",
            info: "Дорогие дети и родители, представляем вам захватывающий мир водного поло, где вашему ребенку откроются удивительные возможности развития и веселья в водной среде.",
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
