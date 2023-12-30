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
            category: "student",
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
    federationMembers: [
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Иванович",
            post: "Должность",
            info: "Тренер с хорошей карьерой",
        },
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Иванович",
            post: "Должность",
            info: "Тренер с хорошей карьерой",
        },
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Иванович",
            post: "Должность",
            info: "Тренер с хорошей карьерой",
        },
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Иванович",
            post: "Должность",
            info: "Тренер с хорошей карьерой",
        },
        {
            src: "https://klwp.pro/uploads/657b8bb0.jpg",
            name: "Алексей Иванович",
            post: "Должность",
            info: "Тренер с хорошей карьерой",
        },
    ],
    reviews: [
        {
            text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
            name: "Имя Отчеств",
        },
        {
            text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
            name: "Имя Отчест",
        },
        {
            text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec.",
            name: "Имя Отчес",
        },

        {
            text: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. ",
            name: "Имя -2",
        },
        {
            text: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. ",
            name: "Имя -1",
        },
    ],
    time: [
        {
            25: [
                {
                    time: 12.0,
                    category: "children",
                    address: "Тихоокеанская улица, 5",
                },
                {
                    time: 9.0,
                    category: "children",
                    address: "Тихоокеанская улица, 5",
                },
            ],
            1: [
                {
                    time: 12.0,
                    category: "children",
                    address: "Тихоокеанская улица, 5",
                },
                {
                    time: 9.0,
                    category: "children",
                    address: "Тихоокеанская улица, 5",
                },
            ],
        },
    ],

    price: [
        {
            title: "Разовое посещение",
            info: "Разовый платеж",
            cost: "600",
            descriptions: [
                "Первая тренировка бесплатно",
                "Разовое посещение тренировки",
            ],
            category: "children",
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
