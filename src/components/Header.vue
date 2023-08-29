<script>
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
                title: "Сборы",
                name: "federation",
            },
            {
                title: "Медио",
                name: "federation",
            },
            {
                title: "Новости",
                name: "federation",
            },
        ];
        const activeNavMobile = ref(false);
        return {
            rout,
            activeNavMobile,
            logo,
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
        <nav class="menu_block">
            <router-link v-for="(r, i) in rout" :key="i" :to="{ name: r.name }">
                {{ r.title }}
            </router-link>
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
}
</style>
