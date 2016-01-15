// 'use strict';

var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');

var Nav = require('../components/Nav');
var CreateRace = require('../components/CreateRace');
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
          <Nav links={this.props.view}/>
          <CreateRace
            newRace={this.props.newRace}
            action={this.props.publishAction}
          />
        </div>

      );
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
