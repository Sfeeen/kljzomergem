import React, {Component} from 'react';
import { List } from 'react-native-paper';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <List.Section title="KLJ Zomergem">
          <List.Item
            title="Activiteiten"
            onPress={() => this.props.navigation.navigate('Act')}
            left={() => <List.Icon icon="nature-people" />}
         />
          <List.Item
            title="FB-login"
            left={() => <List.Icon icon="folder" />}
         />
         <List.Item
           title="Contacts"
           onPress={() => this.props.navigation.navigate('Con')}
           left={() => <List.Icon icon="folder" />}
        />
         <List.Item
           title="GPS"
           onPress={() => this.props.navigation.navigate('Geo')}
           left={() => <List.Icon icon="room" />}
         />
         <List.Item
           title="instellingen"
           onPress={() => this.props.navigation.navigate('Set')}
           left={() => <List.Icon icon="settings" />}
         />
       </List.Section>
     </PaperProvider>
    );
  }
}
module.exports = HomeScreen;

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff', //#314674
    accent: '#f1c40f',
    background:  'blue',
  }

};
