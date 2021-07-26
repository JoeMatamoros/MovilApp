import React, { Component, useState } from 'react';
import { StyleSheet, View,Text, SafeAreaView, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';

axios.defaults.baseURL='http://192.168.0.2:3002';
axios.defaults.headers.post['Content-Type']='application/json';

export default class Horario extends React.Component {
  constructor(props) {
    super(props);
    /*ESTADO PARA DEFINIR EL VECTOR Y LOS ENCABEZADOS*/
    this.state = { bandera: true, horarios: [], tableHead:["IdHorario","Descripcion"] }

     /*ESTO IGNORENLO */
    this.handleChange = this.handleChange.bind(this);
  }
  /*ESTO IGNORENLO */
 handleChange(event){
    this.setState({});
  }

  /*FUNCION DE INICIO AL ENTRAR EN LA PANTALLA */
  inicio(){
    //VARIABLES "BANDERA" PARA SABER SI ESTA VACIO O NO
    const { bandera } = this.state;

    //VECTOR PARA RECORRER LA TABLA EN LA BDD
    const horario = [];

    //CONTADOR
    var j = 0;

    if(bandera === true){
      //PETICIO A LA API... Y PARA QUE VEAN QUE NO ESTOY LOCO
      axios.get('/api/horarios/obtenerHorarios').then((respuesta)=>{
        console.log("Hola de nuevo");

        //CICLO DO WHILE PARA LLENAR Y RECORRER LOS DATOS EN LA TABLA DE LA BDD
        do{
          horario.push( [respuesta.data[j].Id_horario, respuesta.data[j].Descrip_horario] );
          j++;
         if(respuesta.data[j] === undefined){
            break;
          }
       } while(j<10);
        console.log(horario);
        this.setState({horarios: horario});

      }).catch((error)=>{
        console.log(error);
      });
      this.setState({bandera: false})
    }
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
        justifyContent:"center",
        margin: 20,
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

styles = StyleSheet.create({
  container: {width: "100%", maxWidth: "auto", backgroundColor: '#fff' , justifyContent:"flex-start", paddingRight: 20},
  head: { height: "auto", backgroundColor: '#fab73d' },
  text: { margin: 6 }
});
  
  render() {
    //VARIABLES DE ESTADO PARA DATA EN TABLE
    const {horarios, tableHead} = this.state;
    //LLAMADO A LA FUNCION CUANDO SE RENDERICE LA PAGINA
    this.inicio();
    return (
     <SafeAreaView>
       <ScrollView style = {this.estilos.contenedor}>
       <View style={this.styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
          
            <Row data={tableHead} style={this.styles.head} textStyle={this.styles.text}/>
            <Rows data={horarios} textStyle={this.styles.text}/>

          </Table>
        </View>
       </ScrollView>
       
     </SafeAreaView>

    );
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});