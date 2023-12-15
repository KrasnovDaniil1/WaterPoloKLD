<script>
import AllWindow from "../components/AllWindow.vue";
import main from "../assets/images/allWindow/main.png";

export default {
    components: {
        AllWindow,
    },
    setup() {
        const allWindow = {
            title: "Федерация",
            info: "Наша федерация посвящена поддержке и развитию водного поло в Калининграде, объединяя в себе профессионалов, любителей и новичков",
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
