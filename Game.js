import React, {Component} from 'react';
import { StyleSheet, Text,View, TouchableOpacity,Alert,Button} from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'
import PropTypes from 'prop-types';



export default class Game extends Component {
  constructor(props){
    super(props);
    this.state={
      gameState:[ [0,0,0],
      [0,0,0],
      [0,0,0]
    ]},
    currentPlayer=1;
   }
   static propTypes={
     player1:PropTypes.string.isRequired,
     player2:PropTypes.string.isRequired,
   }
  
  renderIcon =(row,col)=>{
      var value=this.state.gameState[row][col];
      switch(value){
          case 1:return <Icon name='close' style={styles.tilex}/>
          case -1: return <Icon name='circle-outline' style={styles.tileo}/>
          default : return <View/>
      }
    
  }
  onTilePress=(row,col)=>{
      var value=this.state.gameState[row][col];
      if(value!==0){
          return ;
      }
      var currentPlayer=this.state.currentPlayer
      var arr=this.state.gameState.slice();
      arr[row][col]=currentPlayer;
      this.setState({gameState:arr});
      var nextPlayer=(currentPlayer==1?-1:1)
      this.setState({currentPlayer:nextPlayer});
      var winner=this.getWinner();
      if(winner==1)
      {
        Alert.alert(this.props.player1," Won");
        
        this.initialGame()
      }
      else if(winner==-1)
      {
        Alert.alert(this.props.player2 , " Won ");
        
        this.initialGame()
      }
  }
  getWinner=()=>{
      var ar=this.state.gameState;
      var sum=0,i;
      for(i=0;i<3;i++)
      {
        sum=ar[i][0]+ar[i][1]+ar[i][2];
        if(sum == 3 )
        {
          return 1;
        }
        else if(sum==-3 )
       {
          return-1
       }
        
      }
      
      for(i=0;i<3;i++)
      {
        sum=ar[0][i]+ar[1][i]+ar[2][i];
        if(sum == 3 )
        {
          return 1;
         }
        else if(sum==-3 )
        {
          return-1
        }
        
      }
      
      
      sum=ar[0][0]+ar[1][1]+ar[2][2];
      if(sum==3 )
        {
          return 1;
        }
        else if(sum==-3 )
        {
          return-1
        }
        sum=ar[0][2]+ar[1][1]+ar[2][0];
        if(sum==3 )
        {
          return 1;
        }
        else if(sum==-3)
        {
          return-1
        }
        return 0;
      

  }
  componentDidMount(){
    this.initialGame();
  }
  initialGame=()=>{
    this.setState({
      gameState:[ [0,0,0],
      [0,0,0],
      [0,0,0]
    ]});
    this.setState({currentPlayer:1});
    this.setState({currentPlayer:1})
    
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection : "row"}}>
       <TouchableOpacity  onPress={()=>this.onTilePress(0,0)} style={[styles.tile,{borderLeftWidth:0,borderTopWidth:0}]}>
        {this.renderIcon(0,0)}
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.onTilePress(0,1)} style={[styles.tile,{borderTopWidth:0}]}>
       
       {this.renderIcon(0,1)}
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.onTilePress(0,2)} style={[styles.tile,{borderRightWidth:0,borderTopWidth:0}]}>
       {this.renderIcon(0,2)}
       </TouchableOpacity>
        </View>
        <View style={{flexDirection : "row"}}>
       <TouchableOpacity onPress={()=>this.onTilePress(1,0)} style={[styles.tile,{borderLeftWidth:0}]}>
       {this.renderIcon(1,0)}
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.onTilePress(1,1)} style={styles.tile}>
       {this.renderIcon(1,1)}
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.onTilePress(1,2)} style={[styles.tile,{borderRightWidth:0}]}>
       {this.renderIcon(1,2)}
       </TouchableOpacity>
        </View>
        <View style={{flexDirection : "row"}}>
       <TouchableOpacity onPress={()=>this.onTilePress(2,0)} style={[styles.tile,{borderLeftWidth:0,borderBottomWidth:0}]}>
       {this.renderIcon(2,0)}
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.onTilePress(2,1)} style={[styles.tile,{borderBottomWidth:0}]}>
       {this.renderIcon(2,1)}
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.onTilePress(2,2) }style={[styles.tile,{borderBottomWidth:0,borderRightWidth:0}]}>
       {this.renderIcon(2,2)}
       </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <Button title="Refresh" onPress={this.initialGame}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tile: {
    borderWidth:10,
    width:100,
    height:100,
    
  },
  tilex:{
    fontSize:80,
    color:'red',
  },
  tileo:{
    fontSize:80,
    color:'green',
  },
  button:{
    paddingTop:60,
  }
  
});