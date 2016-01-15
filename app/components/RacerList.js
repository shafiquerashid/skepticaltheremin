var React = require('react');
var RacerEntry = require('./RacerEntry');

var RacerList = React.createClass({

	render: function () {
		var racerNodes = this.props.racers.map(function (racer, index) {
			return (
				<RacerEntry racer={racer} rank={index}>
				</RacerEntry>
			);
		})
		return (
			<div className ="racerList">
				{racerNodes}
			</div>
		);
	}
});

module.exports = RacerList;