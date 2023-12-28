// export const getPageData = (state) => state.pageData;
// export const getNewsId = (state) => state.newsId;
// export const getPageAmateur = (state) => state.pageAmateur;
// export const getPageChildren = (state) => state.pageChildren;
// export const getPageStudent = (state) => state.pageStudent;
// export const getPageFederation = (state) => state.pageFederation;
// export const getPageNews = (state) => state.pageNews;
// export const getPageMedio = (state) => state.pageMedio;

export const getLoader = (state) => state.loader;

export const getTrainers = (state) => (sort) => {
    let sortTrainers = state.trainers.filter((item) => {
        if (item.train.includes(sort) || sort == "all") {
            return true;
        }
    });
    return sortTrainers;
};

export const getBlogs = (state) => (sort) => {
    let sortBlogs = state.trainers.filter((item) => {
        if (item.train.includes(sort) || sort == "all") {
            return true;
        }
    });
    return sortTrainers;
};
