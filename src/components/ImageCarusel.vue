<script>
import { ref } from "vue";

export default {
    props: {
        images: {
            type: Array,
        },
    },
    setup(props) {
        const allImg = props.images;
        const currentImg = ref(0);

        return {
            allImg,
            currentImg,
        };
    },
};
</script>

<template>
    <div class="carusel">
        <img class="main" :src="allImg[currentImg]" />
        <div class="block">
            <img
                @click="currentImg = i"
                class="preview"
                :class="{ preview_active: currentImg == i }"
                v-for="(item, i) in allImg"
                :src="item"
                :key="i"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.carusel {
    width: 100%;
    .main {
        aspect-ratio: 16/9;
        border-radius: 10px;
    }
    .block {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-gap: 0.5rem;
        .preview {
            aspect-ratio: 1/1;
            border-radius: 10px;
            cursor: pointer;
        }
        .preview_active {
            border: 5px solid var(--color-decor);
        }
    }
}
@media screen and (max-width: 768px) {
    .carusel {
        .block {
            grid-template-columns: repeat(6, 1fr);
        }
    }
}
</style>
