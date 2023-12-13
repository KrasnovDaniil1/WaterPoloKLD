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
            path: "/children",
            name: "children",
            component: () => import("../views/Children.vue"),
        },
        {
            path: "/amateurs",
            name: "amateurs",
            component: () => import("../views/Amateurs.vue"),
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
            path: "/blog",
            name: "blog",
            component: () => import("../views/Blog.vue"),
        },
        {
            path: "/blog/:id",
            name: "blog_id",
            component: () => import("../views/BlogID.vue"),
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import("../views/Contacts.vue"),
        },
    ],
});

export default router;
