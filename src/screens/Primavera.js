import React from 'react'
import {View,Text, Image} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'

export default class Primavera extends React.Component{
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
                <Image source={require('../images/3.png')} style={{height:25,width:20}} />
                <Text style={{ paddingHorizontal:10, fontWeight:"bold", fontSize:16 }}>Pantalla de primavera</Text>
                </View>
            </View>

            <View style={{width:"10%"}}>
                    <Icon name="heart" color="#f9dd7a" size={30} />
            </View>
            </View> 
          </ScrollView>
        </View>
        );
    }


}