import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';




class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>   
      
        <View style={styles.predmet}>
        <Text style = {styles.naslov} id = "t1">Predmet</Text>
        <Text style = {styles.prvi} id = "t2">VI</Text>
        </View>

        <View style={styles.tip}>
        <Text style = {styles.naslov} id = "t6">Tip</Text>
        <Text style = {styles.prvi} id = "t7">Prvi parcijalni</Text>
        </View>

        <View style={styles.datum}>
        <Text style = {styles.naslov} id = "t6">Datum</Text>
        <Text style = {styles.prvi} id = "t7">10.6.2019./13:00</Text>
      </View>

      <View style={styles.dugme}>
        <Text style = {styles.naslov} id = "t6">Prijava</Text>
        <Text style = {styles.prvi} onPress={this.handleClick} color = 'blue'>Prijavi</Text>
    </View>
      </View>
    );
  }
  handleClick = () => alert('Ispit prijavljen!')

}

class SettingsScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>   
      
        <View style={styles.predmet}>
        <Text style = {styles.naslov} id = "t1">Predmet</Text>
        <Text style = {styles.prvi} id = "t2">VI</Text>
        </View>
        <View style={styles.tip}>
        <Text style = {styles.naslov} id = "t6">Tip</Text>
        <Text style = {styles.prvi} id = "t7">Prvi parcijalni</Text>
        </View>

        <View style={styles.datum}>
        <Text style = {styles.naslov} id = "t6">Datum</Text>
        <Text style = {styles.prvi} id = "t7">10.6.2019./13:00</Text>
      </View> 

      <View style={styles.dugme}>
      <Text style = {styles.naslov} id = "t6">Prijava</Text>
      <Text style = {styles.prvi} onPress={this.handleClick}>Odjavi</Text>
      </View> 

      </View>
    );
  
  }

  handleClick = () => alert('Ispit odjavljen!')

}

const TabNavigator = createBottomTabNavigator({
  Aktivni: HomeScreen,
  Prijavljeni: SettingsScreen,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',   
  },
  predmet: {
    marginTop: '25%',
    flex:1/5,
  },
 
  tip: { 
    flex:1/5, 
    marginTop: '25%',
  },

  datum: { 
    flex:2/5, 
    marginTop: '25%',
  },

  dugme: { 
    flex:1/5, 
    marginTop: '25%',
  },

   naslov: {
    color: 'black',
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    top: '10%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },


  prvi: {
    position: 'absolute',
    top: '20%',
    fontSize: 14,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
 
});


export default createAppContainer(TabNavigator);
