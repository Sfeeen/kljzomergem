import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList, Text, View} from 'react-native';
import {Provider as PaperProvider } from 'react-native-paper';

class FlatListItem extends Component {

  render() {
    return (

      <View style={[styles.flatlistview_std,this.props.stijl]}>
        <Text style={styles.flatlisttitle}>{this.props.item.title.toUpperCase()}</Text>
        <Text style={styles.flatlistitem}>{this.props.item.title}</Text>
      </View>
    );
  }
}

export default class Lijst extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item, index}) => {
            return(
              <FlatListItem item={item} index={index} stijl={this.props.stijl}>
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
  },
  flatlistitem: {
    padding: 10,
    fontSize: 16,
  },
  flatlisttitle: {
    textAlign: 'center',
    padding: 10,
    fontSize: 25,
  },
  flatlistview_std: {
    flex: 1,
    marginBottom: 20,
    margin: 5,
    borderWidth: 3,
  },

})
