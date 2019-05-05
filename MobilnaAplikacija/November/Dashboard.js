import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SubjectsList } from './SubjectsList';
import { Divider } from 'react-native-elements';
import Obavijesti from './NewsFeed/Obavijesti';
export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
         <View style={styles.subjectsContainer}>
           <SubjectsList />
         </View>
         <Divider style={styles.divider} />
         <View style={styles.notificationsContainer}>
             <Obavijesti id={1}/>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  subjectsContainer: {
    height: '30%',
    // backgroundColor: 'skyblue',
    justifyContent: 'center'
  },
  divider: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  notificationsContainer: {
  //  height: '60%',
    marginTop: 30,
    // backgroundColor: 'powderblue',
    //justifyContent: 'center'
  }
});
