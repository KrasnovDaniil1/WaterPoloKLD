<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import main from "../assets/images/allWindow/main.png";
import Trainers from "../components/Trainers.vue";
import TimeTable from "../components/TimeTable.vue";
import DecorTrainerBlock from "../components/DecorTrainerBlock.vue";
import Gallery from "../components/Children/ChildrenGallery.vue";
import Reviews from "../components/Children/ChildrenReviews.vue";
import Carusel from "../components/Children/ChildrenCarusel.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
    components: {
        AllWindow,
        Goals,
        TimeTable,
        DecorTrainerBlock,
        Gallery,
        Reviews,
        Carusel,
        Trainers,
    },
    setup() {
        const store = useStore();
        const allWindow = {
            title: "Детям",
            info: "Дорогие дети и родители, представляем вам захватывающий мир водного поло, где вашему ребенку откроются удивительные возможности развития и веселья в водной среде.",
            image: main,
        };
        const goals = {
            title: "Почему Мы?",
            cards: [
                {
                    img: "https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg",
                    title: "Пункт 1",
                    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum.",
                },
                {
                    img: "https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg",
                    title: "Пункт 1",
                    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum.",
                },
                {
                    img: "https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg",
                    title: "Пункт 1",
                    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum.",
                },
            ],
        };

        return {
            store,
            allWindow,
            goals,
            trainers: computed(() => store.getters.getTrainers("children")),
        };
    },
};
</script>

<template>
    <section>
        <AllWindow :allWindow="allWindow" />
        <main class="block__bg">
            <Gallery />
        </main>
        <Goals :goals="goals" />
        <Reviews />
        <Trainers :trainers="trainers" />
        <TimeTable category="children" />
        <DecorTrainerBlock v-if="false" />
        <main class="block__bg">
            <Carusel />
        </main>
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
