<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import main from "../assets/images/allWindow/main.png";
import Trainers from "../components/Trainers.vue";
import TimeTable from "../components/TimeTable.vue";
import DecorTrainerBlock from "../components/DecorTrainerBlock.vue";
export default {
    components: {
        AllWindow,
        Goals,
        Trainers,
        TimeTable,
        DecorTrainerBlock,
    },
    setup() {
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
        <DecorTrainerBlock />
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
