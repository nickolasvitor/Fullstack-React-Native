import React, { Fragment, useState } from "react";

import { StatusBar, SafeAreaView,View,StyleSheet,Text,Button,Image,TextInput,Alert,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { novo} from './services/request';


function Newbueiro({navigation}) {
  const [nome,setNome]=useState({})
  const [lat,setLat]=useState({})
  const [lng,setLng]=useState({})
  const [level,setlevel]=useState({})
  const [id,setid]=useState({})


  console.log(nome)
  async function criar(){
    const att = await novo(nome,lng,lat,level,id)
    if(att){
      Alert.alert("Bueiro criado")
    }
  }
  
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#f1f1f1"}}>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="Nome do bairro"
       autoCapitalize="none"
       onChangeText={setNome}
       >
       
       </TextInput>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="latitude do bueiro"
       autoCapitalize="none"
       onChangeText={setLat}
       >
       
       </TextInput>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="Longitude do bueiro"
       autoCapitalize="none"
       onChangeText={setLng}
      >
       
       </TextInput>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="Nivel de entupimento"
       autoCapitalize="none"
       onChangeText={setlevel}
       >
       
       </TextInput>
       <TextInput
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:5,width:350,height:60,borderRadius:3,fontSize:18,padding:5,}}
       placeholder="id"
       autoCapitalize="none"
       onChangeText={setid}
       
       >
       
       </TextInput>
     
    
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      
      <TouchableOpacity style={{ height: 55,width:250, marginTop: 10,backgroundColor:"#372FDB",borderRadius:8}}  onPress={criar}>
         <Text style={{color:"#ffffff",textAlign:"center",textAlignVertical:"center",margin:10,fontSize:18}}>Salvar</Text>
     </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      
      </View>
    </View>
  );
};

export default Newbueiro;