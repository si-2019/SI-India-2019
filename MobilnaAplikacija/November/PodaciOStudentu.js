import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import axios from 'axios'
import * as res from './pomocniPodaciOStudentu'

export default class PodaciOStudentu extends Component {

state= { 
    ime: res.ime, 
    prezime: res.prezime, 
    spol: res.spol,  
    brIndeksa: res.brIndeksa,  
    jmbg: res.jmbg, 
    adresaUlica: res.adresaUlica, 
    adresaMjesto: res.adresaMjesto,   
    kontaktTelefon: res.kontaktTelefon, 
    kontaktEmail: res.kontaktEmail, 
    imeOca: res.imeOca, 
    prezimeOca: res.prezimeOca,
    imeMajke: res.imeMajke,
    prezimeMajke: res.prezimeMajke,
    datumRod: res.datumRod,
    mjestoRod: res.mjestoRod,
    opcinaRod: res.opcinaRod,
    drzavaRod: res.drzavaRod, 
    nacionalnost: res.nacionalnost, 
    kanton: res.kanton,
    drzavljanstvo: res.drzavljanstvo,
} 

APIpoziv = () =>
{
axios.get("https://httpbin.org/get").then(res =>{
   this.dodajPodatke(res);
})
}
//Privremeno dodavanje dummy podataka
dodajPodatke = (res) => {
this.setState({ime: res.ime, prezime: res.prezime, spol: res.spol, brIndeksa: res.brIndeksa,
jmbg: res.jmbg, adresaUlica: res.adresaUlica, adresaMjesto: res.adresaMjesto, kontaktTelefon: res.kontaktTelefon,
kontaktEmail: res.kontaktEmail, imeOca: res.imeOca, prezimeOca: res.prezimeOca, imeMajke: res.imeMajke, 
prezimeMajke: res.prezimeMajke, datumRod: res.datumRod, mjestoRod: res.mjestoRod, opcinaRod: res.opcinaRod,
drzavaRod: res.drzavaRod, nacionalnost: res.nacionalnost, kanton: res.kanton, drzavljanstvo: res.drzavljanstvo });
}
  render() { 
  return (   
  <ScrollView> 
      <View>
          <Text style = {styles.podnaslov}>
          Osnovni podaci
          </Text>
          <Text style = {styles.tekst1}>
          Ime:
          </Text>
          <TextInput style = {styles.input}
           value={this.state.ime}
           onChangeText={(text) => this.setState({ime: text})}/>
          <Text style = {styles.tekst1}>
          Prezime:
          </Text>
          <TextInput style = {styles.input}
           value={this.state.prezime}
           onChangeText={(text) => this.setState({prezime: text})}/>
          <Text style = {styles.tekst1}>
          Spol:
          </Text>
          <TextInput style = {styles.input}
           value={this.state.spol}
           onChangeText={(text) => this.setState({spol: text})}/>
          <Text style = {styles.tekst1}>
          Broj indeksa:
          </Text>
          <TextInput style = {styles.input}
           value={this.state.brIndeksa}
           onChangeText={(text) => this.setState({brIndeksa: text})}/>
          <Text style = {styles.tekst1}>
          JMBG:
          </Text>
          <TextInput style = {styles.input}
           value={this.state.jmbg}
           onChangeText={(text) => this.setState({jmbg: text})}/>
      </View> 
      <View>
        <Text style = {styles.podnaslov}>
        Kontakt podaci
        </Text>
        <Text style = {styles.tekst1}>
        Adresa (ulica i broj):
        </Text>
        <TextInput style = {styles.input}
       value={this.state.adresaUlica}
       onChangeText={(text) => this.setState({adresaUlica: text})}/>
        <Text style = {styles.tekst1}>
        Adresa (mjesto):
        </Text>
        <TextInput style = {styles.input}
        value={this.state.adresaMjesto}
        onChangeText={(text) => this.setState({adresaMjesto: text})}/>
        <Text style = {styles.tekst1}>
        Kontaks telefon:
        </Text>
        <TextInput style = {styles.input}
        value={this.state.kontaktTelefon}
        onChangeText={(text) => this.setState({kontaktTelefon: text})}/>
        <Text style = {styles.tekst1}>
        Kontakt e-mail:
        </Text>
        <TextInput style = {styles.input}
        value={this.state.kontaktEmail}
        onChangeText={(text) => this.setState({kontaktEmail: text})}/>
    </View>
    <View>
        <Text style = {styles.podnaslov}>
        Lični podaci
        </Text>
        <Text style = {styles.tekst1}>
        Ime oca:
        </Text>
        <TextInput style = {styles.input}
       value={this.state.imeOca}
       onChangeText={(text) => this.setState({imeOca: text})}/>
        <Text style = {styles.tekst1}>
        Prezime oca:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.prezimeOca}
        onChangeText={(text) => this.setState({prezimeOca: text})}/>
        <Text style = {styles.tekst1}>
        Ime majke:
        </Text>
        <TextInput style = {styles.input}
        value={this.state.imeMajke}
        onChangeText={(text) => this.setState({imeMajke: text})}/>
        <Text style = {styles.tekst1}>
        Prezime majke:
        </Text>
        <TextInput style = {styles.input}
        value={this.state.prezimeMajke}
        onChangeText={(text) => this.setState({prezimeMajke: text})}/>
        <Text style = {styles.tekst1}>
        Datum rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.datumRod}
        onChangeText={(text) => this.setState({datumRod: text})}/>
        <Text style = {styles.tekst1}>
        Mjesto rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.mjestoRod}
        onChangeText={(text) => this.setState({mjestoRod: text})}/>
        <Text style = {styles.tekst1}>
        Općina rođenja:
        </Text>
        <TextInput style = {styles.input}
        value={this.state.opcinaRod}
        onChangeText={(text) => this.setState({opcinaRod: text})}/>
        <Text style = {styles.tekst1}>
        Država rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.drzavaRod}
        onChangeText={(text) => this.setState({drzavaRod: text})}/>
        <Text style = {styles.tekst1}>
        Nacionalnost:
        </Text>
        <TextInput style = {styles.input}
        value={this.state.nacionalnost}
        onChangeText={(text) => this.setState({nacionalnost: text})}/>
        <Text style = {styles.tekst1}>
        Kanton/regija:
        </Text>
        <TextInput style = {styles.input}
        value={this.state.kanton}
        onChangeText={(text) => this.setState({kanton: text})}/>
        <Text style = {styles.tekst1}>
        Državljanstvo
        </Text>
        <TextInput style = {styles.input}
        value={this.state.drzavljanstvo}
        onChangeText={(text) => this.setState({drzavljanstvo: text})}/>
    </View>   
      <TouchableOpacity  style = {styles.button} >
          <Text>
          Pošalji zahtjev
          </Text>
      </TouchableOpacity>  
   </ScrollView>
  );
  }
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row'
    },
    button: {
    backgroundColor: 'lightgrey', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    marginLeft: '18%',
    marginRight: '18%',
    marginBottom: 20
    },      
    podnaslov: {
    backgroundColor: '#195dc4',
    color: 'white',
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    },
    input: {
    marginLeft: 7,
    height: 40,
    borderWidth: 1,
    width: '90%',
    borderColor: 'lightgrey'
    },
    tekst1: {
    color: '#737373',
    fontSize: 13,
    marginTop: 7,
    marginLeft: 10
    }
   })