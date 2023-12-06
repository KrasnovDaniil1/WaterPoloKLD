<script>
import logo from "../assets/logo.png";

export default {
    props: {
        img: {
            type: Image,
        },
    },
    setup() {
        return {
            logo,
        };
    },
};
</script>

<template>
    <div class="decor">
        <img class="main_img" :src="img" />
        <div class="dark_block"></div>
        <div class="logo_block">
            <img :src="logo" />
            <span>Моржи</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.decor {
    position: relative;
    width: 100%;
    height: 100vh;
    .main_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
    .dark_block {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .logo_block {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 8rem;
            aspect-ratio: 1/1;
        }
        span {
            margin-top: 1rem;
            font-size: var(--size-logo);
            color: var(--color-secondary);
        }
    }
}
@media screen and (max-width: 1024px) {
    .decor {
        height: auto;
        aspect-ratio: 16/9;
        .logo_block {
            top: 50%;
            img {
                width: 6rem;
            }
        }
    }
}
</style>
