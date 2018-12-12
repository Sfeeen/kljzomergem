import React, {Component} from 'react';
import {PermissionsAndroid, StyleSheet, View, NetInfo} from 'react-native';
import { List } from 'react-native-paper';
import { DefaultTheme,Provider as PaperProvider, Appbar , Snackbar} from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import theme from '../theme/theme.js';


export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }
  state = { isConnected: true };

  constructor() {
      super();

      (async () => {
           await this.requestPermissions();
       })();

  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', isConnected => {
      console.log(isConnected);
        this.setState({isConnected });
    });

    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({ status: isConnected }); }
    );
  }

  componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('connectionChange', isConnected => {
        console.log(isConnected);
          this.setState({isConnected });
      });
  }

  async requestPermissions() {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE])
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use requested permissions")
      } else {
        console.log("permissions denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <PaperProvider theme={theme} style={{margin: 0, flex:1}}>
      <Appbar.Header style={{margin: 0}}>
          <Appbar.Content
            title="KLJ Zomergem"
          />
        </Appbar.Header>
        <View style={styles.view}>
        <List.Section style={{backgroundColor: "#becce2", flex: 1}}>
          <List.Item
            title="Activiteiten"
            onPress={() => {
              if(this.state.isConnected)this.props.navigation.navigate('Act')}
            }
            left={() => <List.Icon icon="nature-people" />}
         />
         <List.Item
           title="Vrienden van de klj"
           onPress={() => this.props.navigation.navigate('Con')}
           left={() => <List.Icon icon="contact-phone" />}
        />
         <List.Item
           title="Neem KLJ foto's"
           onPress={() => this.props.navigation.navigate('Fot')}
           left={() => <List.Icon icon="photo-camera" />}
         />
         <List.Item
           title="instellingen"
           onPress={() => this.props.navigation.navigate('Set')}
           left={() => <List.Icon icon="settings" />}
         />
       </List.Section>
       </View>
       <Snackbar
         visible={!this.state.isConnected}
       >
         Geen internet verbinding
       </Snackbar>
     </PaperProvider>
    );
  }
}
module.exports = HomeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#becce2",
  },
})
