let React = require('react');
let ReactDOM = require('react-dom');

let {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

//load foundation
$(document).foundation();

//app scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>React Boilerplate App</p>,
  document.getElementById('app')
);

// require('./redux-example.jsx');
require('./redux-todo-example.jsx');
