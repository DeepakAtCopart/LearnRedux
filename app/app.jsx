var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Learn redux app</p>,
  document.getElementById('app')
);

require('./redux-example.jsx');
//require('./redux-todo-exaple.jsx');
