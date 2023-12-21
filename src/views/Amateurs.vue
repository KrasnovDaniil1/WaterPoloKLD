<script>
import AllWindow from "../components/AllWindow.vue";
import Goals from "../components/Goals.vue";
import TimeTable from "../components/TimeTable.vue";
import Progress from "../components/Amateurs/AmateursProgress.vue";
import main from "../assets/images/allWindow/main.png";

export default {
    components: {
        AllWindow,
        Goals,
        TimeTable,
        Progress,
    },
    setup() {
        const allWindow = {
            title: "Любителям",
            info: "Погружение в мир водных увлечений – это не только способ отдыха, но и настоящее приключение, которое пробуждает чувства и подарит невероятные впечатления!",
            image: main,
        };
        const goals = {
            title: "Как проходят тренировки",
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
        <TimeTable />
        <main class="block__bg">
            <Progress />
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
