<script>
import About from "../components/About.vue";
import Carusel from "../components/Carusel.vue";
import Trainers from "../components/Trainers.vue";
import Table from "../components/Table.vue";

export default {
    components: {
        About,
        Carusel,
        Trainers,
        Table,
    },
    setup() {
        const title = "Любители";
        const msg =
            "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.";
        const allImg = [
            "https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg",
            "https://ru.sport-wiki.org/wp-content/themes/sportwiki/img/water-polo.jpg",
            "https://aqualeo.ru/media/django-summernote/2019-08-28/088ab781-b175-4d73-8c2b-ea7b1085560a.jpg",
            "https://static.legalcdn.org/66/85/5b8e3db68b2ac_1536048566.png",
            "https://usport.uz/images/news/BASN4867.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjr1DaRvk1aGR485UNJGdzJLEfMRjwbS9LQ&usqp=CAU",
            "https://sportsgroup.ru/wp-content/uploads/2018/01/water_polo2.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4c2BmPligjjFQ9GfyEKG-_s606S2pfHTLg&usqp=CAU",
        ];
        return { title, msg, allImg };
    },
};
</script>

<template>
    <Table />
    <Trainers />
    <About :title="title" :msg="msg" />
    <Carusel :img="allImg" />
</template>

<style scoped></style>
