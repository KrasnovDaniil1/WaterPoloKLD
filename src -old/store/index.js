import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
    pageAmateur: {},
    pageChildren: {},
    pageStudent: {},
    pageFederation: {},
    pageNews: {},
    pageMedio: {},
    loader: false,
};

const store = createStore({
    state,
    getters,
    actions,
    mutations,
});

export default store;
