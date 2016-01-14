var React = require('react');
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

  handleChange(e){
      console.log(e.target.value);
      console.log('STATE IS', this.state);
  },

  render(){
    return (
     <form onChange={this.handleChange}>
        <input type="text" name='Name' defaultValue='Race Name'></input>
        <input type="date" name='date'></input>
        <input type="time" name='time'></input>
        <input type="submit"></input>
    </form >
    )

  }

});

module.exports = CreateRaceForm;