var React = require('react');
var RacerList = require('./RacerList');
var NavBar = require('./NavBar');

var Summary = React.createClass({
	render: function(){
		return (
			<div>
        <h2>Results of {this.props.activeRace.name}:</h2>
        <RacerList racers={this.props.activeRace.results} />
      </div>
		)
	}
});

module.exports = Summary;
