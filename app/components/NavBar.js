var React = require('react');
var navigateToAction = require('../actions/').navigateToAction;


var NavBar = React.createClass({
	render: function () {
		return (
			<div className="nav-bar">
				<ul>
					<li className="nav-item" onClick={navigateToAction.navigateCreateRace()}>Create</li>
					<li className="nav-item" onClick={navigateToAction.navigateCreatedRaces()}>Created Races</li>
					<li className="nav-item" onClick={navigateToAction.navigateRace()}>Race</li>
				</ul>
			</div>
		)
	}
})

module.exports = NavBar;