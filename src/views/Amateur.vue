<script>
import ImageDecor from "../components/ImageDecor.vue";
import About from "../components/About.vue";
import VideoCarusel from "../components/VideoCarusel.vue";

export default {
    components: {
        ImageDecor,
        About,
        VideoCarusel,
    },
    setup() {},
};
</script>

<template>
    <section>
        <ImageDecor />
        <About />
        <VideoCarusel />
    </section>
</template>

<style lang="scss" scoped>
section {
    position: relative;
}
</style>
