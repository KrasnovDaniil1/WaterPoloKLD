<script>
import AllWindow from "../components/AllWindow.vue";
import Carusel from "../components/Federation/FederationCarusel.vue";

import main from "../assets/images/allWindow/main.png";
import FederationPeople from "../components/Federation/FederationPeople.vue";
import FederationNews from "../components/Federation/FederationNews.vue";
import FederationContacts from "../components/Federation/FederationContacts.vue";

export default {
    components: {
        AllWindow,
        Carusel,
        FederationPeople,
        FederationNews,
        FederationContacts,
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
        <main class="block__bg">
            <FederationNews />
        </main>
        <FederationContacts />
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
