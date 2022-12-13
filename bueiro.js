import React, { Fragment, useState } from "react";

import { StatusBar, SafeAreaView,View,StyleSheet,Text,Button,Image,TextInput,Alert,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { deletar, update } from './services/request';


function InfoBueiros({route,navigation}) {
  const [nome,setNome]=useState(route.params.item.name)
  const [lat,setLat]=useState(route.params.item.lat)
  const [lng,setLng]=useState(route.params.item.lng)
  const [level,setlevel]=useState(route.params.item.level)
  const [id,setid]=useState(route.params.item._id)


  console.log(nome)
  async function salvar(){
    const att = await update(nome,lng,lat,level,route.params.item._id)
    if(att){
      Alert.alert("Bueiro atualizado")
      navigation.goBack();
    }
  }
  
  async function deletando(){
    setid(route.params.item._id)
    const att = await deletar(nome,lng,lat,level,route.params.item._id)
    if(att){
      Alert.alert("Bueiro deletado")
      navigation.goBack();
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#f1f1f1"}}>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="Nome do bairro"
       autoCapitalize="none"
       value={nome}
       onChangeText={setNome}>
       
       </TextInput>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="latitude do bueiro"
       autoCapitalize="none"
       value={lat}
       onChangeText={setLat}>
       
       </TextInput>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="Longitude do bueiro"
       autoCapitalize="none"
       value={lng}
       onChangeText={setLng}>
       
       </TextInput>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="Nivel de entupimento"
       autoCapitalize="none"
       value={level}
       onChangeText={setlevel}>
       
       </TextInput>
     
    
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      
      <TouchableOpacity style={{ height: 55,width:250, marginTop: 10,backgroundColor:"#372FDB",borderRadius:8}}  onPress={salvar}>
         <Text style={{color:"#ffffff",textAlign:"center",textAlignVertical:"center",margin:10,fontSize:18}}>Salvar</Text>
     </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      
      <TouchableOpacity style={{ height: 55,width:250, marginTop: 10, backgroundColor:"#FF1810",borderRadius:8 }}  onPress={deletando}>
         <Text style={{color:"#ffffff",textAlign:"center",textAlignVertical:"center",margin:10,fontSize:18}}>Deletar</Text>
     </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoBueiros;