import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
}from 'react-native'


export default class App extends Component{

  constructor(props){
    super(props)
    this.state={
      numero:0,
      botao:'VAI'
    };

    this.timer = null //variavel do timer do relogio

    this.vaipoxa = this.vaipoxa.bind(this) //metodo botao vai
    this.limpapai = this.limpapai.bind(this) //metodo botao limpa
  }

  vaipoxa(){

    let state = this.state

    if(this.timer != null){
      
      clearInterval(this.timer) //aqui vai parar o timer (metodo do javascript)
      this.timer = null

      state.botao = "VAI"

    }else{
      this.timer = setInterval(() => {  //comeca a girar o timer 
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      }, 100);

      state.botao = "PARAR"

    }

    this.setState(state)

  }

  limpapai(){

    if(this.timer != null){

      clearInterval(this.timer) //aqui vai parar o timer
      this.timer = null
    }

    let state = this.state
    state.numero = 0.0
    state.botao = "VAI"
    this.setState(state)

  }

  
  render(){

    return(
      <View style={styles.container} >



        <Image source={require('./src/cronometro.png')} />
        <Text style={styles.timer} >{this.state.numero.toFixed(1)}</Text>

        

        <View style={styles.btnArea} >

          <TouchableOpacity style={styles.botao} onPress={this.vaipoxa} > 
            <Text style={styles.btnTexto} >{this.state.botao}</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.botao} onPress={this.limpapai} > 
            <Text style={styles.btnTexto} >LIMPAR</Text>
          </TouchableOpacity>

        </View>

      </View>    

    )

  }

} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color:'white',
    fontSize:72,
    fontWeight:'bold',
  },
  btnArea:{
    flexDirection:'row',
    marginTop:75,
    height:40
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    height:40,
    margin:25,
    borderRadius: 10,
  },
  btnTexto:{
    fontSize:25,
    fontWeight:'bold',
    color:'#00aeef',
    
  }
 

})

