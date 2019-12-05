import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
}from 'react-native'

class Botao extends Component{

  constructor(props){
    super(props)
    this.state = {}

    this.bstyle = StyleSheet.create({
      botao:{
        width:230,
        height:50,
        borderWidth:2,
        borderColor: props.cor,
        borderRadius:23
      },
      btnArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      btnTexto:{
        fontSize: 18,
        fontWeight:'bold',
        color: props.cor
      }

    })

  }
  
  render(){
    return(
      <TouchableOpacity style={this.bstyle.botao} onPress={this.props.umclique} >
        <View style={this.bstyle.btnArea} >
          <Text style={this.bstyle.btnTexto} >{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}


export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      textoFrase:'',
      varQGuarda:""
    }
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)

    this.frases = ['Tudo vai dar certo.','A maior barreira para  o sucesso é o medo do fracasso','Acredite em milagres, mas não dependa deles',
    'Deixe de lado as preocupações e seja feliz.','O riso é a menor distância entre duas pessoas','Nenhum homem vivo ou morto me comanda.Eu respondo ao Senhor.',
    'Erga essa cabeça','Os olhos nunca mentem.','Eu fui escolhi pelos céus!','Coroado por Deus, não pela igreja',
    'Basta acreditar que um novo dia vai raiar...sua hora vai chegar...','Um homem sem palavra é uma barata.']  //verdadeiro

    // this.frasexxt = ['1','2','3','4','5','6','7','8','9','10','11']  //pra tester 

  }

  quebrarBiscoito(){
    let state = this.state

    var numeroAleatorio = Math.floor(Math.random()*this.frases.length)

    while (this.varQGuarda == numeroAleatorio) {
      var numeroAleatorio = Math.floor(Math.random()*this.frases.length)
      
    }

      state.textoFrase = '"'+this.frases[numeroAleatorio]+'"' 
      this.varQGuarda = numeroAleatorio
      
    this.setState(state) 
    

  }

  
  render(){

    return(
      <View style={styles.container} >

        <Image source={require('./src/biscoito.png')} style={styles.img} />

        <Text style={styles.textoFrase} > {this.state.textoFrase} </Text>

        <Botao cor="#dd7b22" nome="Abrir Biscoito" umclique ={this.quebrarBiscoito} />

        {/* <Botao cor="#000000" nome="Sair do App" /> */}

      </View>    

    )

  }

} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    justifyContent:'center',
    alignItems: 'center'
  },
  img:{
    width:250,
    height:250
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    textAlign:'center',
    fontStyle:'italic',

  }
})

