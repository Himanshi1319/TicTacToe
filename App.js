import React from 'react';
import { View,StyleSheet,Button, Text, TouchableOpacity, TextInput } from 'react-native';
import Game from './Game'


export default class App extends React.Component {
  state = {
    player1: 'Player1',
    player2: 'Player2',
    id :1,
  };
  
  bind=()=>{
   
    this.setState({id:0})
  }
  render() {
    if(this.state.id!==1)
    {
      return <Game player1={this.state.player1}
      player2={this.state.player2}></Game>
    }
    return (
     
      <View style={styles.container}>
      <Text style={styles.titleText}>Hi, Welcome To</Text>
        <Text style={styles.titleText}>TicTacToe</Text>
        <TextInput
          value={this.state.player1}
          
          onChangeText={(player1) => this.setState({ player1 })}
          placeholder='Player1'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TextInput
          value={this.state.player2}
          onChangeText={(player2) => this.setState({ player2 })}
          placeholder={'Player2'}
          placeholderTextColor = 'black'
          style={styles.input}
        />
         <TouchableOpacity
          style={styles.button}
          onPress={this.bind}>
         <Text style={styles.buttonText}> Start </Text>
       </TouchableOpacity>
      
      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 5,
    borderColor: 'black',
    marginVertical: 10,
  },
});
