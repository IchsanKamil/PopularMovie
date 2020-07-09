const initialState = {
  movies: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      const movies = state.movies.concat(action.payload.movies)
      return { ...state, movies }

    default:
      return state
  }
}