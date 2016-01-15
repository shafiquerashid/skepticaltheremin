var React = require('react');

var RacerEntry = React.createClass({
	render: function() {
		return (
			<div className="racerEntry">
				<span className="rank">{this.props.rank}: </span>
				<span className="racer-name">{this.props.racer.name}</span>
			</div>	
		);
	}
})

module.exports = RacerEntry;