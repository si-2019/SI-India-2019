import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
 class Obavijest extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Obavijest: {this.props.naziv}</Text>
          <Text style={styles.text}>{this.props.tekst}</Text>
      </View>
    )
  }
}
Obavijest.propTypes={
    naziv:PropTypes.string.isRequired,
    tekst:PropTypes.string.isRequired
}
const styles = StyleSheet.create({
    container: {
        marginTop:5,
        width: "100%",
        textAlign:"left"
    },
    text:{
        width:"100%",
        fontSize:16
    }
    ,
  });
export default Obavijest;