import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
    pageData: {
        images: [
            {
                id: "1",
                url: "https://ru.sport-wiki.org/wp-content/themes/sportwiki/img/water-polo.jpg",
            },
            {
                id: "2",
                url: "https://static.legalcdn.org/66/85/5b8e3db68b2ac_1536048566.png",
            },
            {
                id: "3",
                url: "https://olympic.kz/images/1572846012.jpeg",
            },
            {
                id: "4",
                url: "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/b0/5d/b73492e2dd4d334d028b52a6f70c3552610f986484588970994984.jpg",
            },
            {
                id: "5",
                url: "https://espanarusa.com/files/autoupload/13/12/16/tuubs2uv419810.jpg",
            },
        ],
        video: [
            {
                id: "1",
                url: "https://www.youtube.com/watch?v=G1Iky17Btcw",
            },
            {
                id: "2",
                url: "https://www.youtube.com/watch?v=Tfsemj7plKo&pp=ygUV0LLQvtC00L3QvtC1INC_0L7Qu9C-",
            },
            {
                id: "3 ",
                url: "https://i.ytimg.com/an_webp/pQLGvi_byeg/mqdefault_6s.webp?du=3000&sqp=CPCGuKcG&rs=AOn4CLD8kdxaBFJTxui2tLANzVZcIq6biQ",
            },
        ],
        treners: [
            {
                id: "1",
                img: " https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bianchi_velez.jpg/170px-Bianchi_velez.jpg",
                name: "Иван Иванович Иванов",
                rank: "Мастер Спорта",
                phone_number: "+79990001122",
            },
        ],
        time: [
            {
                id: "1",
                data: [
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                    "12.00-13.00",
                ],
            },
        ],
        price: [
            {
                id: "1",
                title: "Разовое занятие",
                price: "800",
            },
            {
                id: "2",
                title: "Абонемент",
                price: "800",
            },
        ],
    },
};

const store = createStore({
    state,
    getters,
    actions,
    mutations,
});

export default store;
