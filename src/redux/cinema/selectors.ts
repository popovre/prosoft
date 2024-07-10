export const selectCinemaModule = (state) => state.cinema;

export const selectCinemaIds = (state) => selectCinemaModule(state).ids;

export const selectCinemaById = (state, id) =>
  selectCinemaModule(state).entities[id];
