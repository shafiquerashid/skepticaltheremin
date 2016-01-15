var React = require('react');
var publishActions = require('../actions').publishAction;
var CreateRaceForm = React.createClass({

  getInitialState(){
    return {
      raceName: '',
      raceDate: null,
      raceTime: null
    }
  },

  createRace(e){
      //post request with props to server to create race
      //change location to created races view
      e.preventDefault();
      console.log('EVENT IS', e);
      

      this.raceName.state = e.Name;
      console.log('STATE IS', this.state)
    },

  handleNameChange(e){
      return e.target.value;
  },

  handleSubmit(e){
    e.preventDefault();
    var payload = {
      name: e.target[0].value,
      date: e.target[1].value,
      time: e.target[2].value
    }

    publishActions.publishRace(payload);
    console.log('target 2 is', e.target[2].value);
    console.log("STATE IS", this.state);
    //e.target is array of internal inputs
    //e.g. e.target[0].value === "Race Name" by default
    //dispatch(index.publishAction.publishRace({stuff}));
  },

  render(){
    return (
     <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input type="text" name='Name' defaultValue='Race Name' ></input>
        <input type="date" name='date' ></input>
        <input type="time" name='time' ></input>
        <input type="submit"></input>
    </form >
    )

  }

});

module.exports = CreateRaceForm;