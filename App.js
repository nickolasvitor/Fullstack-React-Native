import {useEffect,useState} from 'react';
import { View, Text, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoBueiros from './bueiro';
import { getall } from './services/request';
import Newbueiro from './newbueiro';




function HomeScreen({navigation}) {
  const [Bueiro , setnomeBueiro] = useState([])
  const estaNaTela = useIsFocused()

  useEffect(() => {
    buscar();
    }, [estaNaTela])

  async function buscar (){
    const resultado = await getall();
    console.log(resultado)
    if(resultado){
      setnomeBueiro(resultado)
    }
    else{
      Alert.alert('Não foi')
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

   
      <Text style={{marginBottom:15,fontSize:25}}>Lista de Bueiros Cadastrados</Text>

      <TouchableOpacity style={{ height: 55,width:250, marginTop: 10,backgroundColor:"#372FDB",borderRadius:8}}  onPress={()=>navigation.navigate("Novo")}>
         <Text style={{color:"#ffffff",textAlign:"center",textAlignVertical:"center",margin:10,fontSize:18}}>Criar novo bueiro</Text>
       </TouchableOpacity>

      <FlatList
      data={Bueiro}
      keyExtractor={Bueiro=>Bueiro._id}
      renderItem ={({item})=>(
        <TouchableOpacity
        style={{width:350,height:45,backgroundColor:"#a30000",borderRadius:8,margin:10,}}
        onPress={()=>navigation.navigate("Info",{item})}>

        <Text style={{fontSize:15,color:"#ffffff", justifyContent:"center",textAlign:"center",textAlignVertical:"center",margin:8,}}>Bueiro: {item.name}</Text>

        </TouchableOpacity>
      )}
      />
    </View>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={InfoBueiros} />
        <Stack.Screen name="Novo" component={Newbueiro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;