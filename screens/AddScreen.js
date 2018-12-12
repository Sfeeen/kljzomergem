import React, {Component} from 'react';
import { Provider as PaperProvider, TextInput , Button, Appbar, List} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Contacts from 'react-native-contacts';
import theme from '../theme/theme.js';

export default class AddScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    voornaam: "",
    achternaam: "",
    nummer: "",
  };

  voegtoe(){
    var newPerson = {
      familyName: this.state.achternaam,
      givenName: this.state.voornaam,
      middleName: 'klj',
      phoneNumbers: [{
        label: "mobile",
        number: this.state.nummer,
      }],
    }
    Contacts.addContact(newPerson, (err) => {
      if (err) throw err;
        console.log(err);
    })
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <PaperProvider theme={theme}>
      <Appbar.Header >
        <Appbar.BackAction
          onPress={() => this.props.navigation.navigate('Con')}
        />
        <Appbar.Content
          title="Voeg een vriend toe"
        />
      </Appbar.Header>
      <View style={styles.view}>
      <TextInput
        label='Naam'
        value={this.state.voornaam}
        onChangeText={voornaam => this.setState({ voornaam })}
        style={{margin:15}}
      />
      <TextInput
        label='Achternaam'
        value={this.state.achternaam}
        onChangeText={achternaam => this.setState({ achternaam })}
        style={{margin:15}}
      />
      <TextInput
        label='nummer'
        value={this.state.nummer}
        onChangeText={nummer => this.setState({ nummer })}
        style={{margin:15}}
      />
      <Button mode="contained" onPress={() => this.voegtoe()} style={{margin:10}}>
        Voeg vriend toe
      </Button>
      </View>
     </PaperProvider>
    );
  }
}
module.exports = AddScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#88a5ce",
    padding: 0,
  },

})
