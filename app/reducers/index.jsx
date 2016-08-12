export var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type){
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};


var newHobbyId = 1;
export var hobbyReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: newHobbyId++,
          hobby: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id)
    default:
      return state;
  }
};


var newMovieId = 1;
export var movieReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: newMovieId++,
          movie: action.movie
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id)
    default:
      return state;
  }
};


export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type){
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      }
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      }
    default:
      return state;
  }
};
