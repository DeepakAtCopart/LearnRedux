var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state ', store.getState());

  if (state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url){
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + ' "target="_blank">View Your Location</>'
  }
});

var currentState = store.getState();
console.log('Current state', currentState);

store.dispatch(actions.fetchLocation());

// store dispatches
store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emiley'));

store.dispatch(actions.addMovie('Dhoom'));
store.dispatch(actions.addMovie('Gadar'));
store.dispatch(actions.addMovie('Mohanjodaro'));
store.dispatch(actions.removeMovie(2));

// combineReducers takes only one object as an argument
//------------------------------------

// this createStore will take one function as argument. this argument
// is pure function which in terms of react is called a reducer.

// the reducer takes the existing state and action as arguments and it computes the new state.
// the reducer is called automatically by redux and passed two arguments (state-before the action was triggered)

// var stateDefault = {
//   name: 'Anonoymous',
//   hobbies: [],
//   movies: []
// };

// var newHobbyId = 1;
// var newMovieId = 1;
// var oldreducer = (state=stateDefault, action) => {
//   // default
//   //state = state || {name: 'Anonymous'};
//   console.log('New action', action);
//   switch (action.type){
//     case 'CHANGE_NAME':
//       // here we generated a new state for our application
//       return {
//         ...state,
//         name: action.name
//       };
//     case 'ADD_HOBBY':
//       return {
//         ...state,
//         hobbies: [
//           ...state.hobbies,
//           {
//             id: newHobbyId++,
//             hobby: action.hobby
//           }
//         ]
//       };
//       // we will use filter method to remove the object from array
//       // it basically creates a new array, so not updates the exist-
//       // ing state, which means we have a pure funtion in the end.
//     case 'REMOVE_HOBBY':
//       return{
//         ...state,
//         hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
//         // (function(hobby){
//         //   return hobby.id !== action.id
//         // });
//       }
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         name: action.name,
//         movies: [
//           ...state.movies,
//           {
//             id: newMovieId++,
//             movie: action.movie
//           }
//         ]
//       };
//     default:
//       return state;
//   }
//   //return state; // we are not making any changes to the state
// };

// state is just a string because we are manging a single piece of information


// Subscribe to changes
// all it takes is a callback function that gets called everytime the state gets changed.

// we can call unsubscribe our callback whenever we want to unsubscribe



// actions are object, just they should have a type property
// type --> action name




// // pure functions
// // --> always return same output for same input
// // --> it is not rely on variable defined outside
// // --> can't have any asynchronous requests
// function add(a, b){
//   return a + b;
// }
//
// var a = 3;
// function add(b){
//   return a+b;
// }
//
// var result;
// function add (a+b){
//   result = a+b;
//   return result;
// }
//
// function add(a+b){
//   return a+b+new Date().getSeconds();
// }
//
// function changeProp(obj){
//   return{
//     ...obj,
//     name: 'Jen'
//   };
//
//   // obj.name = 'Jen';
//   // return obj;
// }
//
// var startingValue = {
//   name: 'Andrew',
//   age:25
// };
// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);
