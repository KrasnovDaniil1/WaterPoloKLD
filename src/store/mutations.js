export const mutPage = (state, data) => {
    state.trainers = data.trainers;
    state.blog = data.blog;
    state.time = data.time;
    state.reviews = data.reviews;
    state.federationMembers = data.federationMembers;
    state.studentsTeams = data.studentsTeams;
    state.price = data.price;
};

export const mutLoader = (state, status) => (state.loader = status);
