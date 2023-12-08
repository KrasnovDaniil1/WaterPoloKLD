import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("../views/Main.vue"),
        },
        {
            path: "/amateurs",
            name: "amateurs",
            component: () => import("../views/Amateurs.vue"),
        },
        {
            path: "/children",
            name: "children",
            component: () => import("../views/Children.vue"),
        },
        {
            path: "/students",
            name: "students",
            component: () => import("../views/Students.vue"),
        },
        {
            path: "/federation",
            name: "federation",
            component: () => import("../views/Federation.vue"),
        },
        {
            path: "/news",
            name: "news",
            component: () => import("../views/News.vue"),
        },
        {
            path: "/news/:id",
            name: "news_id",
            component: () => import("../views/NewsID.vue"),
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import("../views/Contacts.vue"),
        },
    ],
});

export default router;
