<script>
import { ref } from "vue";
export default {
    props: {
        img: {
            type: Array,
        },
    },
    setup(props) {
        const allImg = props.img;
        const currentImg = ref(0);

        const switchImg = (e) => {
            if (allImg.length - 1 < currentImg.value + e) {
                currentImg.value = 0;
            } else if (currentImg.value + e < 0) {
                currentImg.value = allImg.length - 1;
            } else {
                currentImg.value += e;
            }
            console.log(e, currentImg.value);
        };
        const switchImgClick = (e) => {
            currentImg.value = e;
        };
        return {
            allImg,
            currentImg,
            switchImg,
            switchImgClick,
        };
    },
};
</script>

<template>
    <div class="carusel">
        <div class="main">
            <i class="far fa-chevron-left" @click="switchImg(-1)"></i>
            <div>
                <img :src="allImg[currentImg]" />
            </div>
            <i class="far fa-chevron-right" @click="switchImg(+1)"></i>
        </div>
        <div class="preview">
            <div
                v-for="(item, index) in allImg"
                class="img_block"
                :class="{ active_img: currentImg == index }"
                @click="switchImgClick(index)"
                :key="index"
            >
                <img :src="item" />
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
    padding: 25px 75px;
    img {
        aspect-ratio: 20/9;
        border-radius: 10px;
        object-fit: cover;
    }
    .main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        grid-gap: 75px;
        i {
            cursor: pointer;
            font-size: 100px;
            color: var(--color-secondary);
        }
    }
    .preview {
        display: flex;
        grid-gap: 30px;
        padding: 10px 0;
        overflow-x: scroll;
        .img_block {
            cursor: pointer;
            min-width: 200px;
            max-width: 200px;
            border-radius: 10px;
            overflow: hidden;
        }
        .active_img {
            border: 1px solid var(--bg-warning);
        }
    }
}
@media screen and (max-width: 1368px) {
    .carusel {
        padding: 20px 50px;
        .main {
            grid-gap: 50px;
            i {
                font-size: 75px;
            }
        }
    }
}

@media screen and (max-width: 920px) {
    .carusel {
        padding: 15px 25px;
        .main {
            grid-gap: 25px;
            i {
                font-size: 50px;
            }
        }
        .preview {
            grid-gap: 20px;
        }
    }
}
@media screen and (max-width: 720px) {
    .carusel {
        padding: 10px;
        .main {
            position: relative;
            grid-gap: 25px;
            i {
                padding: 0 10px;
                position: absolute;
                font-size: 30px;
                &:first-child {
                    left: 0;
                }
                &:last-child {
                    right: 0;
                }
            }
        }
        .preview {
            grid-gap: 10px;
            .img_block {
                min-width: 100px;
                max-width: 100px;
            }
        }
    }
}
</style>
