import React,{useState} from 'react'
import {View,Text, Image, Picker, StyleSheet, Button, Alert, AppRegistry, Platform, ActivityIndicator} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import axios from 'axios'

export default class Primavera extends React.Component{
 
    render(){
        return(
        <View style={{backgroundColor:"#FFF"}}>
          <ScrollView>
            <View style={{ flexDirection:"row", alignItems:"center",marginTop:40, marginHorizontal:20 }}>
            <View style={{width:"10%"}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Image source={require('../images/2.png')} />
            </TouchableOpacity>
            </View>

            <View style={{width:"80%",alignItems:"center"}}>
              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center" }}>
                <Text style={{ paddingHorizontal:10, fontWeight:"bold", fontSize:16 }}>Pantalla Response</Text>
              </View>
            </View>

            </View> 
          </ScrollView>

      
          <View style={this.estilos.contenedorBotones}>
            <View style ={this.estilos.boton}>
              <Button title="+ button" color="#fff" onPress={() => Alert.alert('Plus button clicked')}/>
            </View>
         </View>
        <View style= {this.estilos.contenedorBotones}>
          <View style={this.estilos.boton}>
              <Button title="Catalogo" color="#fff" onPress={()=> this.props.navigation.navigate('Catalogo')}/>
          </View>
       </View>
        </View>
        
        );
    
    }


}