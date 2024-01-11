<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import TimeTable from "../components/TimeTable.vue";
import Progress from "../components/Progress.vue";
import Benefit from "../components/Amateurs/AmateursBenefit.vue";
import Trainers from "../components/Trainers.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import img3 from "../assets/images/allWindow/3.jpg";
import Price from "../components/Price.vue";

import img1G from "../assets/images/mainGoals/1.jpg";
import img2G from "../assets/images/mainGoals/2.jpg";
import img3G from "../assets/images/mainGoals/3.jpg";

export default {
    components: {
        AllWindow,
        Goals,
        TimeTable,
        Progress,
        Trainers,
        Benefit,
        Price,
    },
    setup() {
        const store = useStore();
        const allWindow = {
            title: "Любителям",
            info: "Погружение в мир водных увлечений – это не только способ отдыха, но и настоящее приключение, которое пробуждает чувства и подарит невероятные впечатления!",
            image: img3,
        };
        const goals = {
            title: "Как проходят тренировки",
            cards: [
                {
                    img: img1G,
                    title: "Техническая подготовка",
                    des: "Улучшение навыков плавания, паса, подачи мяча и других базовых техник",
                },
                {
                    img: img2G,
                    title: "Физическая подготовка",
                    des: "Работа над выносливостью, силой, скоростью и гибкостью через различные упражнения",
                },
                {
                    img: img3G,
                    title: "Тактическая подготовка",
                    des: "Освоение основных тактик, стратегий и взаимодействие с партнерами по команде.",
                },
            ],
        };
        return {
            allWindow,
            goals,
            trainers: computed(() => store.getters.getTrainers("amateur")),
            progress: computed(() => store.getters.getBlog("amateur")),
            store,
        };
    },
};
</script>

<template>
    <section>
        <AllWindow :allWindow="allWindow" />
        <main class="block__bg">
            <Goals :goals="goals" />
        </main>
        <Trainers :trainers="trainers" />
        <TimeTable category="amateur" />
        <Price category="amateur" />
        <main class="block__bg">
            <Progress :progress="progress" />
        </main>
        <Benefit v-if="false" />
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
