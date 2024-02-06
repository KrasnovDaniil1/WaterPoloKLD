<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import Trainers from "../components/Trainers.vue";
import Progress from "../components/Progress.vue";
import TimeTable from "../components/TimeTable.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import img4 from "../assets/images/allWindow/4.jpg";

import img1G from "../assets/images/mainGoals/1.jpg";
import img2G from "../assets/images/mainGoals/2.jpg";
import img3G from "../assets/images/mainGoals/3.jpg";
import img4G from "../assets/images/mainGoals/4.jpg";

export default {
    components: {
        AllWindow,
        Goals,
        Trainers,
        Progress,
        TimeTable,
    },
    setup() {
        const store = useStore();
        const allWindow = {
            title: "Студентам",
            info: "БФУ им. Канта приглашает тебя в нашу сборную по водному поло, где каждый бросок и каждый матч наполняют жизнь увлекательными моментами.",
            image: img4,
        };
        const goals = {
            title: "Как попасть в команду",
            cards: [
                {
                    img: img1G,
                    title: "Технические навыки",
                    des: "Умение плавать и быть знакомым с основами техники водного поло, такие как пасы и подача мяча",
                },
                {
                    img: img2G,
                    title: "Физическая подготовка",
                    des: "Высокий уровень физической выносливости. Способность выдерживать тренировачные  нагрузки",
                },
                {
                    img: img3G,
                    title: "Тактическое понимание",
                    des: "Знание основ тактики и умение адаптироваться к игровым ситуациям",
                },
                {
                    img: img4G,
                    title: "Успеваемость",
                    des: "Поддержка среднего уровня академической успеваемости для участия в соревнованиях",
                },
            ],
        };

        return {
            allWindow,
            goals,
            trainers: computed(() => store.getters.getTrainers("student")),
            progress: computed(() => store.getters.getBlog("student")),
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
        <TimeTable category="student" />
        <main class="block__bg">
            <Progress :progress="progress" />
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
