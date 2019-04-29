import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PrijavljeniIspiti extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.naslov1}>Prijavljeni ispiti</Text>
        <View style={styles.predmet}>
        <Text style = {styles.naslov} id = "t1">Predmet</Text>
        <Text style = {styles.prvi} id = "t2">Vjestacka inteligencija</Text>
        <Text style = {styles.drugi} id = "t3">Organizacija softverskog projekta</Text>
        <Text style = {styles.treci} id = "t4">Softverski inzenjering</Text>
        <Text style = {styles.cetvrti} id = "t5">Projektovanje informacionih sistema</Text> 
        <Text style = {styles.peti}></Text> 
        <Text style = {styles.sesti}></Text> 
        <Text style = {styles.sedmi}></Text> 
        <Text style = {styles.osmi}></Text> 
        <Text style = {styles.deveti}></Text> 
        <Text style = {styles.deseti}></Text> 
        </View>

        <View style={styles.tip}>
        <Text style = {styles.naslov} id = "t6">Tip ispita</Text>
        <Text style = {styles.prvi} id = "t7">Prvi parcijalni</Text>
        <Text style = {styles.drugi} id = "t8">Drugi parcijalni</Text>
        <Text style = {styles.treci} id = "t9">Prvi parcijalni</Text>
        <Text style = {styles.cetvrti} id = "t10">Usmeni</Text>
        <Text style = {styles.peti}></Text> 
        <Text style = {styles.sesti}></Text> 
        <Text style = {styles.sedmi}></Text> 
        <Text style = {styles.osmi}></Text> 
        <Text style = {styles.deveti}></Text> 
        <Text style = {styles.deseti}></Text> 
        </View>

        <View style={styles.datum}>
        <Text style = {styles.naslov} id = "t6">Datum</Text>
        <Text style = {styles.prvi} id = "t7">10.6.2019. 13:00</Text>
        <Text style = {styles.drugi} id = "t8">13.6.2019. 18:00</Text>
        <Text style = {styles.treci} id = "t9">15.6.2019. 10:30</Text>
        <Text style = {styles.cetvrti} id = "t10">16.6.2019. 11:00</Text>
        <Text style = {styles.peti}></Text> 
        <Text style = {styles.sesti}></Text> 
        <Text style = {styles.sedmi}></Text> 
        <Text style = {styles.osmi}></Text> 
        <Text style = {styles.deveti}></Text> 
        <Text style = {styles.deseti}></Text> 
        </View>

      </View> 
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',   
  },
  predmet: {
    marginTop: '25%',
    flex:1/3,
  },
 
  tip: { 
    flex:1/3, 
    marginTop: '25%',
  },

  datum: { 
    flex:1/3, 
    marginTop: '25%',
  },

   naslov: {
    position: 'absolute',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    top: '10%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },

  naslov1: {
    position: 'absolute',
    top: '5%',
    fontSize: 20,
    left: '30%',

  },

  prvi: {
    position: 'absolute',
    top: '20%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   drugi: {
    position: 'absolute',
    top: '30%',
     fontSize: 12,
     paddingRight: '5%',
     paddingLeft: '5%',
   },
   treci: {
    position: 'absolute',
    top: '40%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   cetvrti: {
    position: 'absolute',
    top: '50%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   peti: {
    position: 'absolute',
    top: '60%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   sesti: {
    position: 'absolute',
    top: '70%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   sedmi: {
    position: 'absolute',
    top: '80%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   osmi: {
    position: 'absolute',
    top: '90%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   deveti: {
    position: 'absolute',
    top: '100%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   deseti: {
    position: 'absolute',
    top: '110%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
});
