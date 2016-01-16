var React = require('react');

var ReactDOM = require('react-dom');


/*Race

_id:
creator: user_id
waypoints: [ pin_id]
result: [ user_id ]
start_time: DateTime
start_location: { lat: Number, lng: Number }
end_location: { lat: Number, lng: Number }
racers: [ user_id ]*/

var RaceListItem = React.createClass({
	render: function(){
    const {
      key,
      name, //not currently on schema
      thumbnail,
      // creator,
      // waypoints,
      // result,
      startTime,
      startLocation,
      // endLocation
    } = this.props.race;

		return (
			<li key={key} className="created-races__list__item">
        <img src={thumbnail} alt={`${name} Image`} className="created-races__list__item__img--thumbnail" />
        <div className="created-races__list__item--details-block">
          <h2 className="created-races__list__item--title">{name}</h2>

          <span className="created-races__list__item--start-time">{startTime}</span>
          <span className="created-races__list__item--start-loc">{startLocation}</span>
        </div>
      </li>
		)
	}

});

module.exports = RaceListItem;
