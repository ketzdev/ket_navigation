import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Home() {

  //declarar o navigation
  const navigation = useNavigation ()

  //hook useState
  const [link, setLink] = useState('')


  return (
    <View style={styles.container}>

     <View>
      <Text style ={styles.titulo}>Encurtador de URL</Text>
     </View>

     <View>
      <TextInput value={link}
      onChangeText={setLink}
      placeholder='Digite a URL com o http://'
      style= {styles.inputForm}
      />
     </View>

    <TouchableOpacity style= {styles.bntForm}>
      <Text style={styles.txtForm}> ENCURTAR </Text>
    </TouchableOpacity>

    <TouchableOpacity 
      onPress={() => navigation.navigate('Historico')}
    >
      <Text style={styles.txtForm}> HISTÓRICO DE LINKS </Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
    color: '#ac8ef3',
  },

  inputForm:{
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    width: 300,
    height: 50,
  },

  bntForm:{
    borderRadius: 10,
    backgroundColor: '#ac8ef3',
    width: 300,
    height: 50,
    padding: 10,
    margin: 10,
  },

  txtForm:{
    color:'#ffff',
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',



  },

  

});
