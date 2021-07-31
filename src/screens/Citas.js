import React,{useState} from 'react'
import {View,Text, Image, Picker, StyleSheet, Button, Alert, AppRegistry, Platform, ActivityIndicator} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import axios from 'axios'

axios.defaults.baseURL='http://192.168.0.6:3002';
axios.defaults.headers.post['Content-Type']='application/json';

export default class Citas extends React.Component{
  
  constructor(props){
    super(props);
    this.state = { isLoading: true,  PickerValueHolder : '' }
  }
  
  componentDidMount() {
    
       return fetch('http://192.168.0.6:3002/api/historial/listar/1')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         }).catch((error) => {
           console.error(error);
         });
     }
  
    estilos=StyleSheet.create({
      contenedor:{
          paddingHorizontal:20
      },
      item: {
          backgroundColor: "#f9c2ff",
          padding: 20,
          marginVertical: 8
        },
      contenedorTextos:{
          flexDirection: "row",
          justifyContent:"flex-start",
          alignContent:"center",
          paddingHorizontal:"auto",
          paddingVertical:5,
          width: "100%",
          maxWidth: "auto",
          maxHeight: 500
      },
      entradas:{
          color: "#000",
          margin: 20,
          paddingHorizontal:20,
          paddingVertical:10,
          fontSize: 20,
          backgroundColor: "#bbc8ba",
          borderRadius: 45,
      },
      titulo:{
          fontSize:50,
          color: "#fab73d",
          fontWeight:"bold",
          textAlign: "left",
          marginVertical: 30
      },
      titulos:{
          fontSize:20,
          color: "#000",
          fontWeight:"bold",
          marginHorizontal: 5
      },
      contenedorBotones:{
          flexDirection: "row",
          justifyContent:'flex-end',
          margin: 20,
          top: 350
      },
      boton:{
          width: "50%",
          paddingHorizontal:5,
          marginVertical: 10,
          borderRadius: 45,
          backgroundColor: "#546747"
      },
      mostrarcoultar:{
          display: "none"
      },
      imagen: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        },
        datos:{
          fontSize:20,
          color: "#000",
          textAlign: "left"
      },
      img:{
          width: 160,
          height: 160
      }
  });
    render(){
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
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
                  <Text style={{ paddingHorizontal:10, fontWeight:"bold", fontSize:16 }}>Para quien es la cita?</Text>
                </View>
              </View>
           </View>
        </ScrollView>

        <View style={styles.MainContainer}>
          <Picker selectedValue={this.state.PickerValueHolder}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.Nom_mascotas} value={item.Nom_mascotas} key={key} />)
            )}
          </Picker>
       </View>

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

 
const styles = StyleSheet.create({
 
  MainContainer :{
   
  justifyContent: 'center',
  flex:1,
  margin: 10
  }
   
  });


