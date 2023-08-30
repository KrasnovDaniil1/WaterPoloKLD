<script>
export default {
    setup() {
        const allVideo = [
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/KbMlp7lZUtw" title="Документальный цикл «Жестокий Спорт». Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ];
        return {
            allVideo,
        };
    },
};
</script>

<template>
    <div class="video_block">
        <div
            class="video"
            v-for="(item, index) in allVideo"
            v-html="item"
            :key="index"
        />
    </div>
</template>

<style lang="scss" scoped>
.video_block {
    padding: 1rem;
    display: flex;
    justify-content: center;
    grid-gap: 1rem;
    background: var(--bg-primary);
    .video {
        width: 100%;
        aspect-ratio: 16/9;
    }
}
</style>
