<script>
import menu from "../assets/Header/Menu.png";
import logo from "../assets/logo.png";

import { ref } from "vue";

export default {
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
            {
                title: "Медио",
                name: "medio",
            },
            {
                title: "Новости",
                name: "news",
            },
        ];
        const activeNavMobile = ref(false);
        return {
            rout,
            activeNavMobile,
            logo,
            menu,
        };
    },
};
</script>

<template>
    <header>
        <nav class="logo_block">
            <img :src="logo" />
            <span>Моржи</span>
        </nav>
        <div class="decor_line"></div>
        <nav class="menu_block" :class="{ menu_block_active: !activeNavMobile }">
            <router-link v-for="(r, i) in rout" :key="i" :to="{ name: r.name }">
                {{ r.title }}
            </router-link>
        </nav>
        <nav class="burger" @click="activeNavMobile = !activeNavMobile">
            <img :src="menu" />
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 100%;
    background: var(--bg-primary);
    color: var(--color-secondary);
    z-index: 999;
    nav {
        display: flex;
        align-items: center;
    }
    .logo_block {
        font-size: var(--size-title);
        img {
            width: var(--w-icon);
            aspect-ratio: 1/1;
        }
        span {
            margin-left: 0.5rem;
        }
    }
    .decor_line {
        margin: 1rem 0;
        width: 100%;
        height: 1px;
        background: var(--color-secondary);
    }
    .menu_block {
        font-size: var(--size-text);
        a {
            position: relative;
            margin: 0 1rem;
        }
        .router-link-active {
            color: var(--color-decor);
            &::before {
                content: "";
                position: absolute;
                left: 50%;
                top: 120%;
                transform: translateX(-50%);
                width: 110%;
                height: 2px;
                background: var(--color-decor);
            }
        }
    }
    .burger {
        position: relative;
        display: none;
        cursor: pointer;
        img {
            width: var(--w-icon);
            aspect-ratio: 1/1;
        }
    }
}
@media screen and (max-width: 1024px) {
    header {
        position: relative;
    }
}
@media screen and (max-width: 768px) {
    header {
        flex-direction: row;
        justify-content: space-between;
        .decor_line {
            display: none;
        }
        .menu_block {
            position: absolute;
            top: calc(2rem + var(--w-icon));
            right: 0;
            flex-direction: column;
            padding: 0 1rem;
            background: var(--bg-primary);
            transition: all 1s;
            a {
                padding: 0.5rem;
            }
            .router-link-active {
                &::before {
                    top: 90%;
                }
            }
        }
        .menu_block_active {
            right: -50%;
        }
        .burger {
            display: block;
        }
    }
}
</style>
