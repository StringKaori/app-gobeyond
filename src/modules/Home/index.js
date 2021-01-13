import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{flex:1, alignItems:'center'}}>
        <Text>Home</Text>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity style={styles.botao} onPress={() => {navigate('MyAccount')}}>
            <Text style={styles.textoBotao}>Ir para Perfil</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create ({
  botao:{
    width: 150,
    height: 50,
    backgroundColor:'#4971fe',
    alignItems:'center',
    justifyContent:'center'
  },
  textoBotao:{
    color:'#fff',
  }
});


export default Home;