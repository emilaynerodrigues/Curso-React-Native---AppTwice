/* App biscoito da sorte com musicas do Twice */
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./scr/twicw.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Feel Special',
      'I Cant Stop',
      'Pop',
      'The Feels',
      'Espresso',
      'Moonlight',
      'Cruel',
      'All or Nothing'

    ]; 
  }

  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase:'"' + this.frases[numAleatorio] + '"',
      img: require('./scr/dance.gif'),
    })
  }

  render() {
    return( 
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.text}> {this.state.textoFrase} </Text>
        <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>MÚSICA DO TWICE</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: '90%',
    height: '20%',
  },
  text:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
