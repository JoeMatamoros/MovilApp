import React from 'react'
import {View,Image,Picker, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/Product'

export default class Catalogo extends React.Component{
    render(){
    return(
<ScrollView style={{backgroundColor:"#FFF"}}>
        <View style={{ flexDirection:"row", alignItems:"center", marginTop:40, marginHorizontal:20 }}>
          <View style={{width:"10%"}}>
            <Image source={require('../images/1.png')}/>
          </View>
            <View style={{ width:"80%",alignItems:"center"}}>
            </View>
            <View style={{width:"10%"}}>
                <Icon name="magnifying-glass" size={30}/>
            </View>
        </View>
               
        <View style={{paddingHorizontal:20, marginTop:50}}>
          <Text style={{fontSize:30, fontWeight:"bold"}}>Catalogo</Text>
          <Text style={{ fontSize:30, fontWeight:"bold"}}>Explora nuestro catalogo</Text>
         </View>


 <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:40}}>
         <View style={{
            alignItems:"center",
            flexDirection:"row",
            backgroundColor:"#f9dd7a",
            marginHorizontal:15,
            borderRadius:25,
            paddingVertical:5,
            paddingHorizontal:15}}>
            <Image source={require('../images/flores.jpg')} style={{height:40,width:40, borderRadius:15}}/>
            <Text style={{ fontWeight:"bold",fontSize:18, paddingLeft:10}} onPress={()=>this.props.navigation.navigate('Primavera')}>
                Primavera
            </Text>
        </View>
           <View style={{
              alignItems:"center",
              flexDirection:"row",
              backgroundColor:"#e5e4eb",
              marginHorizontal:15,
              borderRadius:25,
              paddingVertical:5,
              paddingHorizontal:15 }}>
                <Image source={require('../images/3.png')} style={{height:40,width:40, borderRadius:10}} />
                <Text style={{ fontWeight:"bold", fontSize:18, paddingLeft:10}}>
                  Verano
                </Text>
            </View>

            <View style={{
                alignItems:"center",
                flexDirection:"row",
                backgroundColor:"#e5e4eb",
                marginHorizontal:15,
                borderRadius:25,
                paddingVertical:5,
                paddingHorizontal:15 }}>
              <Image source={require('../images/seca.png')} style={{height:40,width:40, borderRadius:15}} />
                 <Text style={{ fontWeight:"bold", fontSize:18, paddingLeft:10}}>
                    Oto??o
                 </Text>
            </View>

            <View style={{
                alignItems:"center",
                flexDirection:"row",
                backgroundColor:"#e5e4eb",
                marginHorizontal:15,
                borderRadius:25,
                paddingVertical:5,
                paddingHorizontal:15 }}>
              <Image source={require('../images/copo.png')} style={{height:40,width:40, borderRadius:15}} />
                <Text style={{ fontWeight:"bold", fontSize:18, paddingLeft:10 }}>
                  Invierno
                </Text>
            </View>
 </ScrollView>

    <View style={{
        alignItems:"center",
        marginHorizontal:20,
        flexDirection:"row",
        marginTop:40 }}>
      <View style={{width:"50%" }}>
         <Text style={{ fontSize:22, fontWeight:"bold"}}>Pantalla principal</Text>
      </View>
        <View style={{width:"50%",alignItems:"flex-end"}}>
          <Icon name="dots-three-horizontal" size={25} color="#848385" onPress={()=>this.props.navigation.navigate('Citas')}/>
        </View>
    </View>
                  
                  
    <View style={{ flexDirection:"row", marginHorizontal:15, marginTop:30, }}>
       <Product image={require("../images/chaqueta.jpg")} title="Purina" price="12.99"
           onPress={() => this.props.navigation.navigate('Detail')} />
        <Product image={require("../images/primavera.jpeg")} title="Shampoo antipulgas" price="10.99" marginTop={25}
        onPress={()=> this.props.navigation.navigate('Detail2')} />
    </View>

    <View style={{flexDirection:"row", marginHorizontal:15, marginTop:30, }}>
      <Product image={require("../images/6.png")} title="Huesitos de goma" price="11.99"
      onPress={()=>this.props.navigation.navigate('Horario')} />
       <Product image={require("../images/10.png")} title="Pedigree's pollito" price="10.99" marginTop={25} />
    </View>

</ScrollView>
        )
    }
}