import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PodaciOStudentu from './PodaciOStudentu';
import Slika from './Slika';

const Student = (props) => {
  return (
  <ScrollView>   
      <Slika />
      <PodaciOStudentu/>
  </ScrollView>
)
}
  
export default Student