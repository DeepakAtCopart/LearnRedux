var axios = require('axios');

export var changeName = (name) => {
  // Needs argument required to dispatch the action but it doesn't need the type
  return {
    type: 'CHANGE_NAME',
    name // name: name (ES6 feature)
  }
};


export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}
export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}


export var addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie
  }
}
export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}


export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};
export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};
export var fetchLocation = () => {
  // By using redux thunk (which is a middleware), we can have action generators to return functions.
  // We wanna have this functionality when action generators doing something asynchronous and needs
  // to dispatch actions inside of it.
  return(dispatch, getState) => {
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function(res){
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + loc));
    });
  }
};
