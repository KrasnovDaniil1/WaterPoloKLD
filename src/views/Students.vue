<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import Trainers from "../components/Trainers.vue";
import Progress from "../components/Progress.vue";
import TimeTable from "../components/TimeTable.vue";
import Gallery from "../components/Students/StudentsGallery.vue";

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
        const trainers = [
            {
                img: "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",
                name: "Павлик Морозов",
                des: "Был  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum.",
                contacts: "+7 888 888 88 88",
            },
            {
                img: "https://ru.sport-wiki.org/wp-content/themes/sportwiki/img/water-polo.jpg",
                name: "Павлик Ltl",
                des: "Стало  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum.",
                contacts: "+7 999 999 99 99",
            },
        ];
        return {
            allWindow,
            goals,
            trainers,
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
        <TimeTable />
        <main class="block__bg">
            <Progress />
        </main>
        <Gallery />
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
