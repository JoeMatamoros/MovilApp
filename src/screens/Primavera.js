/*import React,{useState} from 'react'
import {View,Text, Image, Picker, StyleSheet, Button, Alert, AppRegistry, Platform, ActivityIndicator} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import axios from 'axios'

export default class Primavera extends React.Component{
    constructor(props){
        super(props);
        this.state = { isLoading: true, PickerValueHolder : '' }   
 }
 componentDidMount() {
    //const id= 1;
    return fetch('/api/historial/listar/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.mascotas,
        })
    }).catch((error) => {
        console.error(error);
      });
  }

    render(){
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            )
          } else {
            let mascotas = this.state.dataSource.map((val, key)=>{
                return <View key={key} >
                    <Text>{val.Nom_mascotas}</Text>
                </View>
            })
            
        return(
            <View>
                {mascotas}
            </View>
        );
    }
    
    }


}*/
import React from 'react';
import { AppRegistry, StyleSheet, View, Platform, Picker, ActivityIndicator, Button, Alert} from 'react-native';
 
export default class Project extends React.Component {
 
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
        })
        .catch((error) => {
          console.error(error);
        });
    }
 
    GetPickerSelectedItemValue=()=>{
      Alert.alert(this.state.PickerValueHolder);
    }
 
 render() {
 
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }
 
   return (
    <View style={styles.MainContainer}>
          <Picker
            selectedValue={this.state.PickerValueHolder}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.Nom_mascotas} value={item.Nom_mascotas} key={key} />)
            )}
          </Picker>
          <Button title="Click Here To Get Picker Selected Item Value" onPress={ this.GetPickerSelectedItemValue } />
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