<script>
export default {
    props: {
        allVideo: {
            type: Array,
        },
    },
    setup() {},
};
</script>

<template>
    <div class="video_block">
        <div
            class="video"
            v-for="(item, index) in allVideo"
            v-html="item.frame"
            :key="index"
        />
    </div>
</template>

<style lang="scss" scoped>
.video_block {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    background: var(--bg-primary);
    .video {
        width: 100%;
        aspect-ratio: 16/9;
    }
}
@media screen and (max-width: 460px) {
    .video_block {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
