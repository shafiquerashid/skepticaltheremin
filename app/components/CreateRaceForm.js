var React = require('react');
var LocationItem = require('./LocationItem');

var LocationList = React.createClass({

  render(){
    return (
     <form>
        <input type="text" value="Race Name"></input>
        <input type="date" value="Start Date"></input>
        <input type="time" value="Start Time"></input>
    </form>
    )

  }

});

module.exports = LocationList;