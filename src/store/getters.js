export const getLoader = (state) => state.loader;

export const getTrainers = (state) => (sort) => {
    let sortTrainers = state.trainers.filter((item) => {
        if (item.train.includes(sort) || sort == "all") {
            return true;
        }
    });
    return sortTrainers;
};

export const getStatistics = (state) => {
    return state.statistics;
};
export const getChildrenGallery = (state) => {
    return state.childrenGallery;
};
export const getAllGallery = (state) => {
    return state.allGallery;
};

export const getBlog = (state) => (sort) => {
    let sortBlog = state.blog.filter((item) => {
        if (item.category == sort || sort == "new") {
            return true;
        }
    });
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
    console.log("1111");
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

export const getTime = (state) => (active) => {
    if (active.in == "Пн") {
        active.in = "monday";
    } else if (active.in == "Вт") {
        active.in = "tuesday";
    } else if (active.in == "Ср") {
        active.in = "wednesday";
    } else if (active.in == "Чт") {
        active.in = "thursday";
    } else if (active.in == "Пт") {
        active.in = "friday";
    } else if (active.in == "Сб") {
        active.in = "saturday";
    } else if (active.in == "Вс") {
        active.in = "sunday";
    }

    let sortTime = state.time.filter((elem) => {
        if (
            elem.week == active.in &&
            elem[active.week] &&
            elem.category == active.category
        ) {
            return true;
        }
    });
    if (sortTime.length == 0) {
        sortTime = [
            {
                time: "-",
                title: "-",
                address: "-",
                one: true,
                two: true,
            },
        ];
    }
    return sortTime;
};
