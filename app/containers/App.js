// 'use strict';

var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');

var CREATE = require('../constants').view.CREATE;
var RACE = require('../constants').view.RACE;
var SUMMARY = require('../constants').view.SUMMARY;

var NavBar = require('../components/NavBar');
var CreateRace = require('../components/CreateRace');
var actions = require('../actions');


var Create = require('../components/CreateRace');
var Race = require('../components/Race'); // TO DO: MAKE THIS
var CreatedRaceList = require('../components/CreatedRaceList');
var Summary = require('../components/Summary')

var contextType = {
  redux: React.PropTypes.object
}

var App = React.createClass({

  // doubl-check later
  // propTypes: {
  //   user: PropTypes.object.isRequired,
  //   view: PropTypes.string.isRequired,
  //   activeRace: PropTypes.object,
  //   newRace: PropTypes.object
  // },


  render: function() {
    console.log('APP ID',this.props.user._id)
    // {currentView}
    // if(this.props.view === 'Create'){
    //
    var currentView;

    switch(this.props.view){
      case CREATE:
        currentView = (<CreateRace {...this.props} />);
      case RACE:
        currentView = (<Race {...this.props} />);
      case SUMMARY:
        currentView = (<Summary {...this.props} />);
      case CREATED_RACE_LIST:
        currentView = (<CreatedRaceList {...this.props} />);
    }


      return (
        <div>
          <NavBar userId={this.props.user._id} navigateToAction={this.props.navigateToAction}/>
          {currentView}
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
  // console.log("THE MAPPED ACTIONS", actions);
  var actionsObj = {}
  for(var key in actions) {
    actionsObj[key] = bindActionCreators(actions[key], dispatch);
  }
  console.log('actionsObj',actionsObj);
  return actionsObj;
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
