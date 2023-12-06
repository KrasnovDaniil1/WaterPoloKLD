export const mutPage = (state, { page, data }) => (state[page] = data);

export const mutLoader = (state, status) => (state.loader = status);
