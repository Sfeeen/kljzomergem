
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Camera from 'react-native-camera';
import {Snackbar,Provider as PaperProvider, Appbar} from 'react-native-paper';
import theme from '../theme/theme.js';

class Fotomaker extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      opklj: false,
      error: null,
      visible: false,
    };

  }

  componentDidMount() {

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        var opKLJ = false;
        if(position.coords.latitude > 51.119651 && position.coords.latitude < 51.121126){
          if(position.coords.longitude > 3.560335 && position.coords.longitude < 3.562126) opKLJ = true;
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
    const { opklj } = this.state;
    return (
      <PaperProvider theme={theme}>
      <Appbar.Header >
        <Appbar.BackAction
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Appbar.Content
          title="Foto's nemen voor de klj"
        />
      </Appbar.Header>

      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Neem KLJ foto</Text>
        </Camera>
        <Snackbar
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
        >
          Je kan enkel foto's nemen op de klj
        </Snackbar>
      </View>

      </PaperProvider>
    );
  }

  takePicture() {
    this.setState({ visible: !this.state.opklj });
    if(this.state.opklj){
      const options = {};
      //options.location = ...
      this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#314674',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 60
  }
});

export default Fotomaker;
