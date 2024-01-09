<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import Trainers from "../components/Trainers.vue";
import Progress from "../components/Progress.vue";
import TimeTable from "../components/TimeTable.vue";
import Gallery from "../components/Students/StudentsGallery.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import main from "../assets/images/allWindow/main.png";

export default {
    components: {
        AllWindow,
        Goals,
        Trainers,
        Progress,
        TimeTable,
        Gallery,
    },
    setup() {
        const store = useStore();
        const allWindow = {
            title: "Студентам",
            info: "БФУ им. Канта приглашает тебя в нашу сборную по водному поло, где каждый бросок и каждый матч наполняют жизнь увлекательными моментами.",
            image: main,
        };
        const goals = {
            title: "Как попасть в команду",
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
        <Gallery v-if="false" />
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
