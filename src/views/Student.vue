<script>
import ImageDecor from "../components/ImageDecor.vue";
import About from "../components/About.vue";
import Video from "../components/Video.vue";
import Trainers from "../components/Trainers.vue";
import Skills from "../components/Skills.vue";
import Table from "../components/Table.vue";

export default {
    components: {
        ImageDecor,
        About,
        Video,
        Trainers,
        Skills,
        Table,
    },
    setup() {},
};
</script>

<template>
    <section>
        <ImageDecor />
        <About />
        <Video />
        <Trainers />
        <Skills />
        <Table />
    </section>
</template>

<style lang="scss" scoped>
section {
    position: relative;
}
</style>
