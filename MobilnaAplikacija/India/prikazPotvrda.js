import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert} from 'react-native';

//const data =  [ { key: 'Probni', value: 'Vrijednost'}];
const extractKey = ({key}) => key

class Zahtjev extends React.Component {
    state = {
        data: [
            {key: 'Potvrda o regulisanju stipendije', value: '25.01.2019', status: 'Neobrađen'}, {key: 'Potvrda o regulisanju zdravstvenog osiguranja', value:'02.02.2019.', status: 'Obrađen'}
        ],
    }
    ponistiZahtjev(zahtjev, status) {
        console.log("status: " + status);
        Alert.alert(
            'Da li ste sigurni da želite poništiti zahtjev za potvrdu',
            
            zahtjev,
            [
                {text: 'Poništi', onPress: () => this.deleteItemByKey(zahtjev, status)},
                {text: 'Odustani', onPress: () => console.log('Odustao'), style: 'cancel'},
            ],
              {cancelable: false}
        );
    }
    deleteItemByKey(key, status) {
        console.log(status);
        if(status != 'Obrađen') {
            console.log("TU");
            const filteredData = this.state.data.filter(item => item.key !== key);
            this.setState({ data: filteredData });
        }
        else Alert.alert("Ne možete poništiti obrađenu potvrdu");
        console.log(this.state.data);
    }
    
    renderItem=({item}) => {
        //console.log("TU SAM");
        return(
            <View style={styles.item}>
                <Text style ={styles.itemText}>Vrsta potvrde: </Text>
                <Text style ={styles.itemT}> {item.key}</Text> 
                <Text style ={styles.itemText}>Datum izdavanja: </Text>
                <Text style={styles.itemT}> {item.value}</Text>
                <Text style ={styles.itemText}>Status: </Text>
                <Text style={styles.itemT}> {item.status}</Text>
                <View style={styles.dugmic}>
                    <Button onPress={() => this.ponistiZahtjev(item.key, item.status)}  title="Poništi zahtjev"/>
                </View>
            </View>
        );
    };
    
    render() {
        //console.log("TU SAM 2");
        
        return (
            <View>
                <FlatList data={this.state.data} extraData={this.state} renderItem={this.renderItem} keyExtractor={extractKey} /> 
            </View>
        );
    }
}
export default Zahtjev;

const styles = StyleSheet.create({
  container: {
      flex:1,
      marginVertical:20, 
      alignSelf: 'stretch',    
      marginRight:50, 
  },
  dugmic: {
    width: '50%'
  },
  item:{
    paddingBottom: 10, 
    paddingTop: 5, 
    alignItems: 'center'
  },
  itemT:{
    flex:1,
    fontStyle: 'italic',
  },
  itemText:{
    flex:1,
    fontWeight: 'bold'
  }
});