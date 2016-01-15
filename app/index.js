'use strict';

var React = require('react');
var render = require('react-dom').render;
var Provider = require('react-redux').Provider;
var Main = require('./components').Main;
var configureStore = require('./store/configureStore');

var store = configureStore();

render(
 <Provider store={store}>
  < Main />
 </Provider>

)
