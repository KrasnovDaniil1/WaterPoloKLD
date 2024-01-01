export const getLoader = (state) => state.loader;

export const getTrainers = (state) => (sort) => {
    let sortTrainers = state.trainers.filter((item) => {
        if (item.train.includes(sort) || sort == "all") {
            return true;
        }
    });
    return sortTrainers;
};

export const getBlog = (state) => (sort) => {
    let sortBlog = state.blog.filter((item) => {
        if (item.category == sort || sort == "new") {
            return true;
        }
    });
    console.log(sortBlog);
    return sortBlog;
};

export const getBlogId = (state) => (id) => {
    for (let blog of state.blog) {
        if (blog.id == id) {
            return blog;
        }
    }
};

export const getFederationMembers = (state) => {
    return state.federationMembers;
};

export const getReviews = (state) => {
    return state.reviews;
};

export const getPrice = (state) => (sort) => {
    let sortPrice = state.price.filter((item) => {
        if (item.category == sort) {
            return true;
        }
    });
    return sortPrice;
};

export const getTime = (state) => (sort) => {
    let sortTime = state.time[sort];
    console.log("сорт время", sortTime);
    return sortTime;
};
