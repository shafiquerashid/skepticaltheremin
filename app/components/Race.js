var React = require('react');
var NavBar = require('./NavBar');


var Race = React.createClass({
	render: function(){
		return (
			<div className="race-view">
				<NavBar />
				<h1>Race View!!</h1>
			</div>
		)
	}

});