const initialState = {
  movies: [],
  movie: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      const movies = state.movies.concat(action.payload.movies)
      return { ...state, movies }

    case 'GET_MOVIE':
      const movie = action.payload.movie
      return { ...state, movie }

    default:
      return state
  }
}