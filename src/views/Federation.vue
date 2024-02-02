<script>
import AllWindow from "../components/AllWindow.vue";
import Carusel from "../components/Federation/FederationCarusel.vue";

import img5 from "../assets/images/allWindow/5.jpg";
import FederationPeople from "../components/Federation/FederationPeople.vue";
import FederationNews from "../components/Federation/FederationNews.vue";
import FederationContacts from "../components/Federation/FederationContacts.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
    components: {
        AllWindow,
        Carusel,
        FederationPeople,
        FederationNews,
        FederationContacts,
    },
    setup() {
        const store = useStore();
        const allWindow = {
            title: "Федерация",
            info: "Наша федерация посвящена поддержке и развитию водного поло в Калининграде, объединяя в себе профессионалов, любителей и новичков",
            image: img5,
        };
        return {
            allWindow,
            images: computed(() => store.getters.getChildrenAllGallery),
            people: computed(() => store.getters.getFederationMembers),
            news: computed(() => store.getters.getBlog("federation")),
            store,
        };
    },
};
</script>

<template>
    <section>
        <AllWindow :allWindow="allWindow" />
        <main class="block__bg">
            <Carusel :images="images" />
        </main>
        <FederationPeople :people="people" />
        <main class="block__bg">
            <FederationNews :blockCard="news" />
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
