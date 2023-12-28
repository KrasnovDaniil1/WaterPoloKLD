import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
    // pageAmateur: {},
    // pageChildren: {},
    // pageStudent: {},
    // pageFederation: {},
    // pageNews: {},
    // pageMedio: {},
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
    blogs: [
        {
            title: "Чемпионы",
            time: "11.12.2023",
            msg: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: ["student", "amateur", "children", "federation"],
        },
        {
            title: "Чемпионы",
            time: "11.12.2023",
            msg: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: ["student", "amateur", "children", "federation"],
        },
        {
            title: "Чемпионы",
            time: "11.12.2023",
            msg: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: ["student", "amateur", "children", "federation"],
        },
        {
            title: "Чемпионы",
            time: "11.12.2023",
            msg: "sfsd",
            src: "https://klwp.pro/uploads/2974e7a2.jpeg",
            category: ["student", "amateur", "children", "federation"],
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
