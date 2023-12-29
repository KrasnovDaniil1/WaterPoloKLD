import * as api from "../api/api";

export const actPage = async (context) => {
    context.commit("mutLoader", true);
    // context.commit("mutPage", await api.Page(page));
    context.commit("mutLoader", false);
};
