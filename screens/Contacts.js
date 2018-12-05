import React from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

class Contacts extends React.Component {
    static navigationOptions = {
        title: 'My Contacts'
    }

    constructor() {
        super();
        this.onPress = this.onPress.bind(this);
        this.state = {
            contacts: undefined
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10").then(x => {
            const results = JSON.parse(x._bodyInit).results;
            this.setState({ contacts: results });
        });
    }

    onPress(contact) {
        this.props.navigation.navigate("Details", {contact: contact});
    }

    drawContent(contact, index) {
        return (
            <TouchableNativeFeedback key={index} onPress={()=> {this.onPress(contact)}}>
                <View style={styles.contact}>
                    <Image style={styles.image} source={{ uri: contact.picture.thumbnail }} />
                    <View>
                        <Text style={styles.contactName}>{contact.name.first} {contact.name.last}</Text>
                        <Text>C: {contact.cell}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.wrapper}>
                    {this.state.contacts && this.state.contacts.map((contact, index) => {
                        return this.drawContent(contact, index)
                    })}
                </ScrollView>
                <Button onPress={() => { }} title="Add Contact" />
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    wrapper: {
        flex: 1,
        marginBottom: 10
    },
    contact: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        marginBottom: 10
    },
    contactName: {
        fontWeight: '600'
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        marginRight: 10
    }
})

export default Contacts;
