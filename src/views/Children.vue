<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import img2 from "../assets/images/allWindow/2.jpg";
import Trainers from "../components/Trainers.vue";
import TimeTable from "../components/TimeTable.vue";
import DecorTrainerBlock from "../components/DecorTrainerBlock.vue";
import Gallery from "../components/Children/ChildrenGallery.vue";
import Reviews from "../components/Children/ChildrenReviews.vue";
import Carusel from "../components/Children/ChildrenCarusel.vue";
import Progress from "../components/Progress.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Price from "../components/Price.vue";

import img1G from "../assets/images/mainGoals/1.jpg";
import img2G from "../assets/images/mainGoals/2.jpg";
import img3G from "../assets/images/mainGoals/3.jpg";

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
        Price,
        Progress,
    },
    setup() {
        const store = useStore();
        const allWindow = {
            title: "Детям",
            info: "Дорогие дети и родители, представляем вам захватывающий мир водного поло, где вашему ребенку откроются удивительные возможности развития и веселья в водной среде.",
            image: img2,
        };
        const goals = {
            title: "Почему Мы?",
            cards: [
                {
                    img: img1G,
                    title: "Физическое развитие",
                    des: "Водное поло способствует развитию физической выносливости, координации и силы.",
                },
                {
                    img: img2G,
                    title: "Мышление",
                    des: "Водное поло учит детей командной работе и стратегическому мышлению",
                },
                {
                    img: img3G,
                    title: "Командная работа",
                    des: "Водное поло формирует лидерские качества и пониманию важности сотрудничества",
                },
            ],
        };

        return {
            store,
            allWindow,
            goals,
            images: computed(() => store.getters.getChildrenAllGallery),
            imagesChildren: computed(() => store.getters.getChildrenGallery),

            trainers: computed(() => store.getters.getTrainers("children")),
            progress: computed(() => store.getters.getBlog("children")),
        };
    },
};
</script>

<template>
    <section>
        <AllWindow :allWindow="allWindow" />
        <main class="block__bg">
            <Gallery :images="images" />
        </main>
        <Goals :goals="goals" />
        <Reviews />
        <Trainers :trainers="trainers" />
        <TimeTable category="children" />
        <Price category="children" />
        <DecorTrainerBlock v-if="false" />
        <main class="block__bg">
            <Carusel :images="imagesChildren" />
        </main>
        <!-- <main class="block__bg"> -->
        <Progress :progress="progress" />
        <!-- </main> -->
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
