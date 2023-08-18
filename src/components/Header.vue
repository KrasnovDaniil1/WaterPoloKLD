<script>
import { ref } from "vue";

export default {
    props: {
        img: {
            type: Image,
            default:
                "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",
        },
    },
    setup() {
        const rout = [
            {
                title: "Любителям",
                name: "amateur",
            },
            {
                title: "Детям",
                name: "children",
            },
            {
                title: "Студентам",
                name: "student",
            },

            {
                title: "Федерация",
                name: "federation",
            },
        ];
        const activeNavMobile = ref(false);
        return {
            rout,
            activeNavMobile,
        };
    },
};
</script>

<template>
    <header>
        <nav class="nav_desktop">
            <div class="logo_block">
                <i class="fas fa-volleyball-ball"></i>
                <span>Water Polo</span>
            </div>
            <div class="nav_block">
                <router-link
                    v-for="(r, i) in rout"
                    :key="i"
                    :to="{ name: r.name }"
                >
                    {{ r.title }}
                </router-link>
            </div>
            <i
                @click="activeNavMobile = !activeNavMobile"
                class="fas fa-bars menu"
            ></i>
        </nav>
        <nav class="nav_mobile" :class="{ nav_mobile_active: activeNavMobile }">
            <router-link
                v-for="(r, i) in rout"
                :key="i"
                :to="{ name: r.name }"
                class="rout"
            >
                {{ r.title }}
            </router-link>
        </nav>
        <img :src="img" />
        <p>Water Polo</p>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: var(--bg-dark);
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-dark);
    }
    .nav_desktop {
        position: absolute;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-self: center;
        padding: 10px 30px;
        font-size: var(--size-text);
        color: var(--color-secondary);
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-dark);
        }
        .logo_block {
            display: flex;
            align-items: center;
            color: var(--color-warning);
            z-index: 1;
            i {
                font-size: var(--size-title);
                margin-right: 20px;
            }
        }
        .nav_block {
            display: flex;
            align-items: center;
            grid-gap: 30px;
            z-index: 1;
            .router-link-active {
                position: relative;
                color: var(--color-warning);
                &::before {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 120%;
                    transform: translateX(-50%);
                    width: 110%;
                    height: 1px;
                    background: var(--color-warning);
                }
            }
        }
        .menu {
            display: none;
        }
    }
    .nav_mobile {
        display: none;
    }
    img {
        width: 100%;
        height: 100%;
    }
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: var(--size-logo);
        color: var(--color-warning);
    }
}
@media screen and (max-width: 1368px) {
    header {
        height: inherit;
        aspect-ratio: 16/10;
    }
}
@media screen and (max-width: 720px) {
    header {
        .nav_desktop {
            padding: 5px 10px;

            .nav_block {
                display: none;
            }
            .logo_block {
                i {
                    margin-right: 10px;
                }
            }
            .menu {
                display: block;
                z-index: 3;
                font-size: var(--size-title);
            }
        }
        .nav_mobile {
            position: absolute;
            right: 0%;
            transform: translateX(100%);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: var(--size-text);
            color: var(--color-secondary);
            background: var(--bg-dark);
            z-index: 2;
            transition: all 0.5s;
            .rout {
                margin: 10px 20px;
            }
            .router-link-active {
                position: relative;
                color: var(--color-warning);
                &::before {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 120%;
                    transform: translateX(-50%);
                    width: 110%;
                    height: 1px;
                    background: var(--color-warning);
                }
            }
        }
        .nav_mobile_active {
            transform: translateX(0%);
        }
    }
}
@media screen and (max-width: 480px) {
    header {
        .nav_desktop {
            .logo_block {
                i {
                    margin-right: 5px;
                }
            }
        }
        .nav_mobile {
            .rout {
                margin: 5px 15px;
            }
        }
    }
}
</style>
