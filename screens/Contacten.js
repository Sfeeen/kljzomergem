import React from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import Contacts from 'react-native-contacts';
import { List, DefaultTheme,Provider as PaperProvider, Appbar, FAB } from 'react-native-paper';
import ContactLijst from '../components/ContactLijst';

import theme from '../theme/theme.js';

class Contacten extends React.Component {

  static navigationOptions = {
    header: null,
  };


    constructor() {
        super();
        this.state = { contacten: [], };
        Contacts.getContactsMatchingString("klj", (err, contacts) => {
          if (err) throw err;
          this.setState({ contacten: contacts });

        })
    }

    componentDidMount() {

    }

    render() {
        return (
          <PaperProvider theme={theme}>
          <Appbar.Header >
            <Appbar.BackAction
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Appbar.Content
              title="vrienden van de klj"
            />
          </Appbar.Header>
          <View style={styles.view}>
            <ContactLijst data={this.state.contacten}></ContactLijst>

            <FAB
              style={styles.fab}
              small
              icon="add"
              onPress={() => this.props.navigation.navigate('Add')}
            />
            </View>
          </PaperProvider>

        )}

}


const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  view: {
    flex: 1,
    backgroundColor: "#88a5ce",
  },
})


export default Contacten;
