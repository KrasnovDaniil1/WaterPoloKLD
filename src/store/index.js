import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
    trainers: [
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Иванович",
            phone_number: "+79990001122",
            info: "Тренер с хорошей карьерой",
            vk: "https://klwp.pro/uploads/657b8bb0.jpg",
            telegram: "https://klwp.pro/uploads/657b8bb0.jpg",
            train: ["children", "student"],
        },
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Ива",
            phone_number: "+7999000112288",
            info: "Тренер с хорошей карьерой Тренер с хорошей карьерой Тренер с хорошей карьерой Тренер с хорошей карьерой Тренер с хорошей карьерой",
            vk: "https://klwp.pro/uploads/657b8bb0.jpg",
            telegram: "https://klwp.pro/uploads/657b8bb0.jpg",
            train: ["children"],
        },
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Иванов",
            phone_number: "+79990001122",
            info: "Тренер с хорошей карьерой",
            vk: "https://klwp.pro/uploads/657b8bb0.jpg",
            telegram: "https://klwp.pro/uploads/657b8bb0.jpg",
            train: ["children", "amateur"],
        },
    ],
    blog: [
        {
            id: 0,
            title: "Чемпионы",
            time: "11.12.2023",
            info: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: "students",
        },
        {
            id: 1,
            title: "Чемпионы",
            time: "11.12.2023",
            info: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: "amateur",
        },
        {
            id: 2,
            title: "Чемпионы",
            time: "11.12.2023",
            info: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: "children",
        },
        {
            id: 3,
            title: "Чемпионы",
            time: "11.12.2023",
            info: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: "federation",
        },
    ],
    loader: false,
};

const store = createStore({
    state,
    getters,
    actions,
    mutations,
});

export default store;
