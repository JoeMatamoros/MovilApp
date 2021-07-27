import React from 'react'
import {View,Text, Image, StyleSheet} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import CalendarPicker from 'react-native-calendar-picker';


export default class Detail2 extends React.Component{
    constructor(props){
        super(props);
        this.state ={ selectedStartDate: null }
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date){
        this.setState({selectedStartDate: date});
    }
    
    render(){
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
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
                <Text style={{ paddingHorizontal:10, fontWeight:"bold", fontSize:16 }}>Observar ahora (Card 2)</Text>
                </View>
            </View>
            </View> 
            <View style={styles.container}>
              <CalendarPicker onDateChange={this.onDateChange} />
            </View>
            <View>
                <Text>FECHA:{startDate}</Text>
            </View>
          </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 100,
    },
  });