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
        const goals = {
            title: "Наши цели",
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
            goals,
            trainers,
        };
    },
};
</script>

<template>
    <section>
        <MainWindow />
        <main class="block__bg">
            <MainResult />
            <MainGallery />
        </main>
        <Trainers :trainers="trainers" />
        <TimeTable />
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
