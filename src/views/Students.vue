<script>
import AllWindow from "../components/AllWindow.vue";
import main from "../assets/images/allWindow/main.png";

export default {
    components: {
        AllWindow,
    },
    setup() {
        const allWindow = {
            title: "Студентам",
            info: "БФУ им. Канта приглашает тебя в нашу сборную по водному поло, где каждый бросок и каждый матч наполняют жизнь увлекательными моментами.",
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
