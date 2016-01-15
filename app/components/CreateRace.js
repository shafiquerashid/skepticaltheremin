var React = require('react');

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');
var SearchUser = require('./SearchUser');
var helpers = require('../utils/helpers');
var Signup = require('./Signup');
var CreateRaceForm = require('./CreateRaceForm');
var publishActions = require('../actions').publishAction;


var CreateRace = React.createClass({
  //getInitialState no longer needed because REDUX
  getInitialState(){

    // Extract the favorite locations from local storage

    var favorites = [];

    return {
      user: '',
      loggedin: false,
      favorites: favorites,
      currentAddress: 'Hack Reactor',
      mapCoordinates: {
        lat: 37.7836966,
        lng: -122.4089664
      },
      center: {
        lat: 37.7836966,
        lng: -122.4089664
      }
    };
  },

  loginUser(username){
    //legacy code, will need to revisit
    console.log("logged in:", username);
    this.setState({user: username, loggedin: true}); 
    helpers.getAllBreadCrumbs(username, function(data){
      if(data){
        this.setState({favorites: data.pins});
      }
    }.bind(this));

  },

  componentDidMount(){
    // Not sure what this is

  },

  //Legacy code - no longer need
  // addToFavBreadCrumbs(id, lat, lng, timestamp, details, location) {
  //   var favorites = this.state.favorites;
  //   var breadcrumb = {
  //     id: id,
  //     lat: lat,
  //     lng: lng,
  //     timestamp: timestamp,
  //     details: details,
  //     address: this.state.currentAddress,
  //     location: location
  //   };
  //   favorites.push(breadcrumb);

  //   this.setState({
  //     favorites: favorites
  //   });

  //   helpers.addBreadCrumb(this.state.user, breadcrumb, function(data){
  //     console.log(data);
  //   });
  //   localStorage.favorites = JSON.stringify(favorites);

  // },

  searchForAddress(address, cb, recenter){
    var self = this;

    var addressArray = address.split(' ');
    console.log("in searchForAddress, address is", );
    publishActions.addWayPoint({
      address: [addressArray[0], addressArray[1]]
    });


    // We will use GMaps' geocode functionality,
    // which is built on top of the Google Maps API

    GMaps.geocode({
      address: address,
      callback: function(results, status) {

        if (status !== 'OK') return;

        var latlng = results[0].geometry.location;

        self.setState({
          currentAddress: results[0].formatted_address,
          mapCoordinates: {
            lat: latlng.lat(),
            lng: latlng.lng()
          }
        });

        if(recenter){
          self.setState({
            center: {
              lat: latlng.lat(),
              lng: latlng.lng()
            }
          });
        }

        if(cb){
          cb(results[0].formatted_address); 
        }

      }
    });

  },

  render(){
    //commenting out legacy auth code which does not work
    //if(this.state.loggedin){
      return (

        <div>
          <h1 className="col-xs-12 col-md-6 col-md-offset-3">Create a Race</h1>
          <Search onSearch={this.searchForAddress} />

          <CreateRaceForm />

          <Map lat={this.state.mapCoordinates.lat}
            lng={this.state.mapCoordinates.lng}
            favorites={this.state.favorites}
            onFavoriteToggle={this.toggleFavorite}
            onAddToFavBcs={this.addToFavBreadCrumbs}
            searchAddress={this.searchForAddress}
            address={this.state.currentAddress} 
            center={this.state.center} 
            loginUser={this.loginUser}
            user={this.state.user} />
        </div>
      );
    // } else {
    //   return <Signup loginUser={this.loginUser}/>
    // }
  }

});

module.exports = CreateRace;
