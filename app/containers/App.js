// 'use strict';

var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
// var Component = require('react').Component;
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');
// import {Nav, Main} from '../components';

var Nav = require('../components/Nav');
var Main = require('../components/Main');
var actions = require('../actions');

var View = {
  Create: require('../components').CreateRace,
  Race: require('../components').Race, // TO DO: MAKE THIS
  CreatedRaceList: require('../components').CreatedRaceList,
  Summary: require('../components').Summary
};


var App = React.createClass({

  // doubl-check later
  // propTypes: {
  //   user: PropTypes.object.isRequired,
  //   view: PropTypes.string.isRequired,
  //   activeRace: PropTypes.object,
  //   newRace: PropTypes.object
  // },


  render: function() {

    // if(this.props.view === 'Create'){
      return (
        <div>
          Hello world!
          <Nav links={this.props.view}/>
        </div>

      );
    // else if (this.props.view === 'Race'){
    //   return (
    //     <Nav links={this.props.view}/>
    //     < View[Race]  />
    //   );
    // } else if (this.props.view === 'CreatedRaceList'){
    //   return (
    //     <Nav links={this.props.view}/>
    //     < View[CreatedRaceList]  />
    //   );
    // } else if (this.props.view === 'Summary'){
    //   return (
    //     <Nav links={this.props.view}/>
    //     < View[Summary]  />
    //   );
    // }        <Nav links={this.props.view}/>

  }
});

function mapStateToProps(state) {
    // instantiate empty object
    // keys currently are: user, view, newRace, activeRace
    var mapping = {};

    for (var k in state){
      mapping[k] = state[k];
    }

  return mapping;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
