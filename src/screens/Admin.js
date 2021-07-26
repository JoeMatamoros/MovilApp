import React from 'react'
import {View,Text, Image} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import Product from '../components/Product'

export default class Admin extends React.Component{
    state={
        quantity:1
    }
    addQuantity = (quantity) =>{
        this.setState({quantity: this.state.quantity+1});
    }

    subtractQuantity = (quantity) =>{
        if(this.state.quantity > 0){
            this.setState({quantity: this.state.quantity -1});
        }
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
                
                <Text style={{ paddingHorizontal:10, fontWeight:"bold", fontSize:16 }}>Pantalla de Administrador</Text>
                </View>
            </View>


            </View> 
          </ScrollView>
        </View>
        );
    }

}