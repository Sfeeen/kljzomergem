
import React, { Component } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      opklj: "nee",
      error: null,
    };

    (async () => {
       await this.requestLocationPermission();
   })();
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Location Permission',
          'message': 'This app needs access to your location',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
      } else {
        console.log("Location permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  componentDidMount() {

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        var opKLJ = "nee";
        if(position.coords.latitude > 51.119651 && position.coords.latitude < 51.121126){
          if(position.coords.longitude > 3.560335 && position.coords.longitude < 3.562126) opKLJ = "ja";
        }
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          opklj: opKLJ,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );

  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>opklj: {this.state.opklj}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}

      </View>
    );
  }
}

export default Geolocation;
