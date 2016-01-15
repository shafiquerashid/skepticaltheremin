var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Login = require('../components/Login');
var Signup = require('../components/Signup');
var CreateRace = require("../components/CreateRace")
var CreatedRaces = require("../components/CreatedRaces")
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
//var MapApp = require('../components/MapApp');
    // <IndexRoute component={Home} />


module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={CreateRace} />
    //<Route name="login" path="login" component={Login} />
    //<Route name="home" path="home" component={Home} />
    <Route name="create-race" path="create-race" component={CreateRace} />
    <Route name="created-races" path="created-races" component={CreatedRaces} />
    //<Route name="signup" path="signup" component={Signup} />
  </Route>
);