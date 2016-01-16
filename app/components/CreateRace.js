var React = require('react');
var { render } = require('react-dom');

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');
var SearchUser = require('./SearchUser');
var helpers = require('../utils/helpers');
var Signup = require('./Signup');

// Actions
var { publishAction } = require('../actions');
var { centerMap, addWayPoint, publishRace } = publishAction;

// Sub-Components
var CreateRaceForm = require('./CreateRaceForm');
var watcher = undefined;

var CreateRace = React.createClass({


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
    console.log("logged in:", username);//TODO REMOVE THIS
    this.setState({user: username, loggedin: true});
    helpers.getAllBreadCrumbs(username, function(data){
      if(data){
        this.setState({favorites: data.pins});
      }
    }.bind(this));

  },

  //ADDED FOR TESTING
  onlocationChange(e){
    console.log(e);//TODO REMOVE THIS
  },

  componentDidMount(){
    //ADDED FOR TESTING
    window.navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos);
    })
  },

  addToFavBreadCrumbs(id, lat, lng, timestamp, details, location) {
    var favorites = this.state.favorites;
    var breadcrumb = {
      id: id,
      lat: lat,
      lng: lng,
      timestamp: timestamp,
      details: details,
      address: this.state.currentAddress,
      location: location
    };
    favorites.push(breadcrumb);

    this.setState({
      favorites: favorites
    });

    helpers.addBreadCrumb(this.state.user, breadcrumb, function(data){
      console.log(data);
    });
    localStorage.favorites = JSON.stringify(favorites);

  },

  searchForAddress(address, cb, recenter){
    var self = this;
    var addressArr = address.split(" ");
    this.props.publishAction.addWayPoint([addressArr[1], addressArr[0]])
    console.log("search called", address);


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

  handleHeaderClick(e){
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos);
      console.log(centerMap(pos));
    })
  },

  render(){

    console.log(this.props);
    return (

      <div>
        <h1 onMouseOver={this.handleHeaderClick} className="col-xs-12 col-md-6 col-md-offset-3">Create a Race</h1>
        <Search onSearch={this.searchForAddress} />

        <CreateRaceForm {...this.props}/>

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

         <LocationList locations={this.state.favorites}
          activeLocationAddress={this.state.currentAddress}
          onClick={this.handleHeaderClick} />


      </div>

    );
  }

});

module.exports = CreateRace;
