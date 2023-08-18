<script>
import { ref } from "vue";

export default {
    props: {
        img: {
            type: String,
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
        return {
            rout,
        };
    },
};
</script>
<template>
    <footer>
        <div class="logo_block">
            <i class="fas fa-volleyball-ball"></i>
            <span>Water Polo</span>
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
        <div class="contact_block">
            <a class="contact_url" href="#">
                <i class="fab fa-telegram"></i>
            </a>
            <a class="contact_url" href="#">
                <i class="fab fa-vk"></i>
            </a>
            <a class="contact_url" href="#">
                <i class="fab fa-telegram"></i>
            </a>
        </div>
        <div class="decor_img">
            <div class="img_dark"></div>
            <img :src="img" />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;

    .logo_block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color-warning);
        z-index: 2;
        i {
            font-size: 100px;
        }
        span {
            margin-top: 20px;
            font-size: var(--size-title);
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
            margin: 15px 0 0 0;
        }
        .router-link-active {
            position: relative;
            color: var(--color-warning);
        }
    }
    .contact_block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        z-index: 2;
        color: var(--color-secondary);
        .contact_url {
            i {
                font-size: var(--size-title);
            }
        }
    }
    .decor_img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .img_dark {
            position: absolute;
            top: 0;
            background: var(--bg-dark);
            width: 100%;
            height: 100%;
            z-index: 1;
        }
        img {
            position: absolute;
            top: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
@media screen and (max-width: 720px) {
    footer {
        padding: 10px;
        .logo_block {
            i {
                font-size: 75px;
            }
        }
        nav {
            .rout {
                margin: 10px 0 0 0;
            }
        }
    }
}
@media screen and (max-width: 420px) {
    footer {
        flex-direction: column;
        .logo_block {
            i {
                font-size: 50px;
            }
            span {
                margin: 10px 0;
            }
        }
        .contact_block {
            flex-direction: row;
            margin-top: 20px;
        }
    }
}
</style>
