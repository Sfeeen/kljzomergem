import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList, Text, View} from 'react-native';
import {Provider as PaperProvider, List } from 'react-native-paper';

class FlatListItem extends Component {

  render() {
    console.log(this.props.item);
    return (
      <View style={styles.flatlistview_std}>
        <Text style={styles.flatlisttitle}>{this.props.item.givenName + " " + this.props.item.familyName}</Text>
        <Text>{"gsm: " + this.props.item.phoneNumbers[0].number}</Text>
      </View>
    );
  }
}

export default class ContactLijst extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item, index}) => {
            return(
              <FlatListItem item={item} index={index}>
              </FlatListItem>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        >

        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    backgroundColor: "#88a5ce",
  },
  flatlistitem: {
    padding: 10,
    fontSize: 16,
  },
  flatlisttitle: {


    fontSize: 25,
  },
  flatlistview_std: {
    flex: 1,
    marginBottom: 20,
    margin: 5,
    borderWidth: 3,
    backgroundColor: "#becce2",
    padding: 10,
  },

})
