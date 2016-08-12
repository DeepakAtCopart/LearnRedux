var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbyReducer, movieReducer, mapReducer} = require('./../reducers/index');

export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer,
    hobby: hobbyReducer,
    movie: movieReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )); // this second argument will configure this store to use redux extension

  return store;
};
