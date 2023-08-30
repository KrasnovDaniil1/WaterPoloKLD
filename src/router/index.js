import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "amateur",
            component: () => import("../views/Amateur.vue"),
            meta: "1",
        },
        {
            path: "/children",
            name: "children",
            component: () => import("../views/Children.vue"),
            meta: "2",
        },
        {
            path: "/student",
            name: "student",
            component: () => import("../views/Student.vue"),
            meta: "3",
        },
        {
            path: "/federation",
            name: "federation",
            component: () => import("../views/Federation.vue"),
            meta: "4",
        },
        {
            path: "/medio",
            name: "medio",
            component: () => import("../views/Medio.vue"),
        },
        {
            path: "/sbory",
            name: "sbory",
            component: () => import("../views/Sbory.vue"),
        },
        {
            path: "/news",
            name: "news",
            component: () => import("../views/News.vue"),
        },
        {
            path: "/news:id",
            name: "news_id",
            component: () => import("../views/NewsID.vue"),
        },
    ],
});

export default router;
