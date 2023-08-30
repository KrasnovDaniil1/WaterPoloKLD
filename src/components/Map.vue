<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
    props: {
        coords: {
            type: Array,
        },
    },
    components: {
        yandexMap,
        ymapMarker,
    },
    setup() {},
};
</script>

<template>
    <div class="map">
        <yandexMap :coords="coords" :zoom="12">
            <ymapMarker
                :coords="coords"
                marker-id="123"
                hint-content="some hint"
            />
        </yandexMap>
    </div>
</template>

<style lang="scss" scoped>
.map {
    position: relative;
    padding: 1rem 0;
    width: 100vw;
    aspect-ratio: 4/1;
    .ymap-container {
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width: 1024px) {
    .map {
        aspect-ratio: 2/1;
    }
}
@media screen and (max-width: 460px) {
    .map {
        aspect-ratio: 1/1;
    }
}
</style>
