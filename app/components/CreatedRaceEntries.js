var React = require('react');
//var moment = require('moment');

var LocationItem = React.createClass({

  handleClick(){
    //This method will send user to "Summary" view for race
  },

  render(){

    var cn = "list-group-item";

    return (
      <a className={cn} onClick={this.handleClick}>
        {this.props.race.name}
        <span className="createdAt">{this.props.race.date}</span>
        <span className="createdAt">{this.props.race.time}</span>
      </a>
    )

  }

});

module.exports = LocationItem;
