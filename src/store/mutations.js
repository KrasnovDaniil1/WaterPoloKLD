export const mutPage = (state, data) => {
    state.trainers = data.trainers;
    state.blog = data.blog;
    state.time = data.time;
    state.reviews = data.reviews;
    state.federationMembers = data.federationMembers;
    state.studentsTeams = data.studentsTeams;
    state.price = data.price;
    state.statistics = data.statistics;
    state.childrenGallery = data.childrenGallery;
    state.allGallery = data.allGallery;
    state.federationEvent = data.federationEvent;
    state.questions = data.questions;
};

export const mutLoader = (state, status) => (state.loader = status);
