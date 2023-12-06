<script>
import bg from "../assets/Footer.png";
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
                name: "sbory",
            },
            {
                title: "Новости",
                name: "news",
            },
            {
                title: "Медио",
                name: "medio",
            },
        ];
        return {
            rout,
            bg,
        };
    },
};
</script>
<template>
    <footer>
        <div class="decor">
            <img :src="bg" />
            <div class="dark_fon"></div>
        </div>
        <nav>
            <router-link
                class="rout"
                v-for="(r, i) in rout"
                :key="i"
                :to="{ name: r.name }"
            >
                {{ r.title }}
            </router-link>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    .decor {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        .dark_fon {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
    }
    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: var(--size-text);
        color: var(--color-secondary);
        z-index: 2;
        .rout {
            margin: 1rem 0 0 0;
        }
        .router-link-active {
            color: var(--color-decor);
        }
    }
}
</style>
