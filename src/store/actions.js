import * as api from "../api/api";

export const actPage = async (context, page) => {
    context.commit("mutLoader", true);
    context.commit("mutPage", {
        page: page,
        data: await api.Page(page),
    });
    context.commit("mutLoader", false);
};