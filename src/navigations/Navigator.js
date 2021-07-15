import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Detail2 from '../screens/Detail2';
import Primavera from '../screens/Primavera';

const Stack  = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () =>{
    return <Stack.Navigator screenOptions ={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Detail2" component={Detail2}/>
        <Stack.Screen name ="Primavera" component={Primavera}/>
    </Stack.Navigator>
}
export default HomeStackNavigator;
