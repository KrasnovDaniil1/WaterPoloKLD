<script>
import { ref } from "vue";

import Arrow from "../assets/Arrow.png";

export default {
    setup() {
        const allVideo = [
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/KbMlp7lZUtw" title="Документальный цикл «Жестокий Спорт». Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/KbMlp7lZUtw" title="Документальный цикл «Жестокий Спорт». Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/KbMlp7lZUtw" title="Документальный цикл «Жестокий Спорт». Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/KbMlp7lZUtw" title="Документальный цикл «Жестокий Спорт». Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/KbMlp7lZUtw" title="Документальный цикл «Жестокий Спорт». Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/pQLGvi_byeg" title="Финал Азиады-2018 по водному поло. Япония - Казахстан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            '<iframe width="1056" height="594" src="https://www.youtube.com/embed/KbMlp7lZUtw" title="Документальный цикл «Жестокий Спорт». Водное поло" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ];
        const currentVideo = ref(0);

        const switchVideo = (e) => {
            if (allVideo.length - 1 < currentVideo.value + e) {
                currentVideo.value = 0;
            } else if (currentVideo.value + e < 0) {
                currentVideo.value = allVideo.length - 1;
            } else {
                currentVideo.value += e;
            }
            console.log(e, currentVideo.value);
        };
        const switchVideoClick = (e) => {
            currentVideo.value = e;
        };
        return {
            Arrow,
            allVideo,
            currentVideo,
            switchVideoClick,
            switchVideo,
        };
    },
};
</script>
<template>
    <div class="carusel">
        <div class="menu">
            <div class="arrow" @click="switchVideo(-1)">
                <img :src="Arrow" />
            </div>
            <div class="video_main" v-html="allVideo[currentVideo]" />
            <div class="arrow" @click="switchVideo(1)">
                <img style="transform: scale(-1, 1)" :src="Arrow" />
            </div>
        </div>
        <div class="preview">
            <div
                class="video_block"
                :class="{ active_video: currentVideo == index }"
                @click="switchVideoClick(index)"
                v-for="(item, index) in allVideo"
                v-html="item"
                :key="index"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.carusel {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--bg-primary);
    .menu {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        .arrow {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                padding: 0 1rem;
                width: 70px;
                aspect-ratio: 2/3;
            }
        }
        .video_main {
            width: 100%;
            aspect-ratio: 16/9;
        }
    }
    .preview {
        padding: 1rem 0;
        display: flex;
        grid-gap: 1rem;
        overflow-x: scroll;
        .video_block {
            position: relative;
            min-width: 15%;
            aspect-ratio: 16/9;
            cursor: pointer;
            &::before {
                content: "";
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
            }
        }
        .active_video {
            border: 3px solid var(--color-decor);
        }
    }
}
</style>
