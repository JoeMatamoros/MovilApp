import React,{useState} from 'react'
import {View,Text, Image, Picker, StyleSheet, Button, Alert} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'

export default class Citas extends React.Component{
    state ={
        cita: "Java"
    }
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
                <Text style={{ paddingHorizontal:10, fontWeight:"bold", fontSize:16 }}>Para quien es la cita?</Text>
                </View>
            </View>
            </View>

          </ScrollView>
          <View style={{  flex: 1, paddingTop: 1, alignItems:"center"}}>
            <Picker selectedValue={this.state.cita} style={{ height: 50, width: 150 }}
                 onValueChange={(itemValue, itemIndex) => this.setState({cita:itemValue})}>
                <Picker.Item label="Mascota 1" value="java" />
                <Picker.Item label="Mascota 2" value="js" />
                <Picker.Item label="Mascota 3" value="js" />
          </Picker>
        
        </View>

        <View style ={{ flexDirection: '0.3', justifyContent:"flex-end", alignItems:"flex-end",top:350, right:20}}>
          <Button title="+ button" onPress={() => Alert.alert('Plus button clicked')}/>
        </View>
        </View>
       
  
        );

        
}

}



