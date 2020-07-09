const initialState = {
  favorites: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const favorites = state.favorites.concat(action.payload.newFavorite)
      return { ...state, favorites }

    default:
      return state
  }
}