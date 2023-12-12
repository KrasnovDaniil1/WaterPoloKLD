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
    setup() {
        return {
            settings: {
                apiKey: "",
                lang: "ru_RU",
                coordorder: "latlong",
                enterprise: false,
                version: "2.1",
            },
        };
    },
};
</script>

<template>
    <div class="map">
        <yandexMap
            :coords="coords"
            :zoom="12"
            :settings="settings"
            :behaviors="['drag', 'scrollZoom']"
            :controls="[]"
        >
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
    width: 100%;
    .ymap-container {
        width: 100%;
        height: 100%;
    }
}
</style>
