var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Login = require('../components/Login');
var Signup = require('../components/Signup');
var CreateRace = require("../components/CreateRace")
var NavBar = require("../components/NavBar")
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
//var MapApp = require('../components/MapApp');
    // <IndexRoute component={Home} />


module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route name="login" path="login" component={Login} />
    <Route name="home" path="home" component={Home} />
    <Route name="create-race" path="create-race" component={CreateRace} />
    <Route name="signup" path="signup" component={Signup} />
    <Route name="navbar" path="navbar" component={NavBar} />
  </Route>
);