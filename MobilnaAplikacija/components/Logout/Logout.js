import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

class Logout extends Component {
    state = {
        userID: ""
    }
    componentWillMount() {
        // Hardkodirani primjer za korisnički ID
        // Napomena da ovdje treba staviti stvarni ID pri loginu
        // Ova varijabla bi trebala biti globalno dostupna
        this.state.userID = "PRIJAVLJEN";
    }
    logout() {
        this.setState({ userID: "ODJAVLJEN" });
        alert("Logout uspješan. Sada bi se trebalo prebaciti na login screen kada ubacimo navigaciju.");
        // Ubaciti redirect na login screen
    }
    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.submitButton}
                    title="Odjava"
                    testID="LogoutBtn"
                    onPress={() => this.logout()}>
                </Button>
                <Text title="prikazID" testID="PrikazID"> ID: {this.state.userID} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: 'powderblue',
        padding: 5,
        width: 120,
        height: 60,
        alignSelf: 'center',
        margin: 20
    },
    submitButton: {
        backgroundColor: '#195dc4',
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    }
});
export default Logout;