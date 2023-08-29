<script>
import Arrow from "../assets/Arrow.png";
export default {
    setup() {
        return {
            Arrow,
        };
    },
};
</script>
<template>
    <div class="carusel">
        <div class="menu">
            <div class="arrow">
                <img :src="Arrow" />
            </div>
            <iframe
                width="1056"
                height="594"
                src="https://www.youtube.com/embed/xKRA4zqjSDs"
                title="Сумасшедший гол.(Водное поло)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
            <div class="arrow">
                <img style="transform: scale(-1, 1)" :src="Arrow" />
            </div>
        </div>
        <div class="preview">
            <div v-for="(item, index) in 5" class="video_block" :key="index">
                <iframe
                    width="1056"
                    height="594"
                    src="https://www.youtube.com/embed/xKRA4zqjSDs"
                    title="Сумасшедший гол.(Водное поло)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.carusel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--bg-primary);
    padding: 1rem;
    .menu {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .arrow {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                position: relative;
                width: 75px;
                // height: 100px;
                aspect-ratio: 2/3;
                padding: 0 1rem;
            }
        }
        iframe {
            width: 100%;
            aspect-ratio: 16/9;
        }
    }
    .preview {
        display: flex;
        grid-gap: 1rem;
        padding-top: 1rem;
        // overflow-x: scroll;
        .video_block {
            width: 15%;
            aspect-ratio: 16/9;

            iframe {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
