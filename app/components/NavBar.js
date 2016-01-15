var React = require('react');



var NavBar = React.createClass({
	render: function () {
    var navCreatedRaces = function(){
      this.props.navigateToAction.navigateCreatedRaces(this.props.userId);
    }.bind(this);
		return (
			<div className="nav-bar">
				<ul>
					<li className="nav-item" onClick={this.props.navigateToAction.navigateCreateRace}>Create</li>
					<li className="nav-item" onClick={navCreatedRaces}>Created Races</li>
					<li className="nav-item" onClick={this.props.navigateToAction.navigateRace}>Race</li>
				</ul>
			</div>
		)
	}
})

module.exports = NavBar;
