var React = require('react');
var _ = require('lodash');
var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');
var SearchUser = require('./SearchUser');
var helpers = require('../utils/helpers');
var Signup = require('./Signup');
var CreateRaceForm = require('./CreateRaceForm');
var CreatedRaceEntry = require('./CreatedRaceEntries');


var CreatedRaces = React.createClass({

  //I am assuming getInitialState() is no longer need now that we are using redux
  // getInitialState(){
  //   return {
  //   };
  // },

  //legacy auth stuff that we do not understand

  // loginUser(username){
  //   console.log("logged in:", username);
  //   this.setState({user: username, loggedin: true}); 
  //   helpers.getAllBreadCrumbs(username, function(data){
  //     if(data){
  //       this.setState({favorites: data.pins});
  //     }
  //   }.bind(this));

  // },

  render(){
    //if(this.state.loggedin){

      //dummy data below

      //returns a single object that was created

    this.races = [{
                          "__v": 0,
                          "creator": "56972c9fda7c03ae0a87b44e",
                          "start_location": [
                            0,
                            0
                          ],
                          "date": "20160113",
                          "time": "183000",
                          "name": "Da poo poo run",
                          "_id": "569839091d37c3bc1b22ac6c",
                          "results": [],
                          "racers": [],
                          "waymarks": [
                            [
                              0,
                              0
                            ],
                            [
                              0,
                              1
                            ],
                            [
                              0,
                              2
                            ]
                          ]
                        }]
      this.raceNodes = this.races.map(function(race) {

        return (<CreatedRaceEntry key = {race._id} race = {race}/>);
      });           
      return (

        <div>
          <h1 className="col-xs-12 col-md-6 col-md-offset-3">Your Created Races</h1>
          
          {this.raceNodes}
          
        </div>

      );
    // } else {
    //   return <Signup loginUser={this.loginUser}/>
    // }
  }

});

module.exports = CreatedRaces;
