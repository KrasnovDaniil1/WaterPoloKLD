<script>
import MainWindow from "../components/Main/MainWindow.vue";
import MainResult from "../components/Main/MainResult.vue";
import MainGallery from "../components/Main/MainGallery.vue";
import Trainers from "../components/Trainers.vue";
import Questions from "../components/Main/MainQuestions.vue";
import Goals from "../components/Goals.vue";
import News from "../components/Main/MainNews.vue";
import TimeTable from "../components/TimeTable.vue";
import DecorTrainerBlock from "../components/DecorTrainerBlock.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

import img1 from "../assets/images/mainGoals/1.jpg";
import img2 from "../assets/images/mainGoals/2.jpg";
import img3 from "../assets/images/mainGoals/3.jpg";
import img4 from "../assets/images/mainGoals/4.jpg";

export default {
    components: {
        MainWindow,
        MainResult,
        MainGallery,
        Trainers,
        Questions,
        Goals,
        News,
        TimeTable,
        DecorTrainerBlock,
    },
    setup() {
        const store = useStore();
        const goals = {
            title: "Наши цели",
            cards: [
                {
                    img: img1,
                    title: "Популяризация",
                    des: "Популяризация водного поло среди населения и увеличение числа участников",
                },
                {
                    img: img2,
                    title: "Проведение соревнований",
                    des: "Проведение регулярных национальных и международных соревнований",
                },
                {
                    img: img3,
                    title: "Сотрудничество",
                    des: "Сотрудничество с другими федерациями и организациями для обмена опытом и ресурсами",
                },
                {
                    img: img4,
                    title: "Развитие инфраструктуры",
                    des: "Развитие инфраструктуры, включая строительство или реконструкцию бассейнов",
                },
            ],
        };

        return {
            goals,
            trainers: computed(() => store.getters.getTrainers("all")),
            images: computed(() => store.getters.getChildrenAllGallery),
            store,
        };
    },
};
</script>

<template>
    <section>
        <MainWindow />
        <main class="block__bg">
            <MainResult />
            <MainGallery :images="images" />
        </main>
        <Trainers :trainers="trainers" />
        <TimeTable v-if="false" />
        <DecorTrainerBlock />
        <Goals :goals="goals" />
        <main class="block__bg">
            <Questions />
        </main>
        <News />
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
