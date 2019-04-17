import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Logout from './components/Logout/Logout';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logout />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  submitButton: {
    backgroundColor: '#195dc4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center'
  }
});