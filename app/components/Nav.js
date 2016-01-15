'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Nav = React.createClass({

  render: function(){
    return (
      <nav className="navbar" role="navigation" >
        <div>
          <div className="container">
            <div className="navbar-header"><a href="#map" className="navbar-brand" > Breadcrumbs </a></div>
            <div className="navbar-header"><a href="#login" className="navbar-brand"> Login </a></div>
            <div className="navbar-header"><a href="#signup" className="navbar-brand">Signup </a></div>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
