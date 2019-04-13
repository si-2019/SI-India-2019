import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { ImagePicker } from 'expo';

class Slika extends React.Component  { 
  state = {
    image: null,
  };
render() {  
  let { image } = this.state;

return (
<View>
<Text style = {styles.podnaslov}>
  Slika
</Text>
{image && <Image source={{ uri: image }} style={styles.slika} />}
  <TouchableOpacity
    style={styles.buttonChoose}
    onPress={this._pickImage}
  >
  <Text>
    Choose file
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttonChoose}>
  <Text>
    Dodaj sliku
  </Text>
  </TouchableOpacity>
        
      </View>
);
}
_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
  }
};
}

export default Slika

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
    buttonChoose: {
    backgroundColor: 'lightgrey', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginLeft: '8%',
    marginRight: '8%'
    },
    buttonAdd: {
    backgroundColor: 'lightgrey', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    marginRight: '8%'
    },      
    podnaslov: {
    backgroundColor: '#B9D6DF',
    color: 'black',
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    },
    slika: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 300,
    width: 300,
    marginTop: 10,
    marginLeft: '8%',
    marginRight: '8%'
    },
    imagestyle: {
    justifyContent: 'center',
    alignItems: 'center',
    }
   })