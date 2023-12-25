<script>
import AllWindow from "../components/AllWindow.vue";
import Carusel from "../components/Federation/FederationCarusel.vue";

import main from "../assets/images/allWindow/main.png";
import FederationPeople from "../components/Federation/FederationPeople.vue";

export default {
    components: {
        AllWindow,
        Carusel,
        FederationPeople,
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
        <main class="block__bg">
            <Carusel />
        </main>
        <FederationPeople />
    </section>
</template>

<style lang="scss" scoped>
section {
    .block__bg {
        background: linear-gradient(
            180deg,
            rgba(0, 77, 243, 0.5) 0%,
            rgba(0, 77, 243, 0.1) 100%
        );
    }
}
</style>
