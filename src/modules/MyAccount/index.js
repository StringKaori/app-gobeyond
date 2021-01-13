import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyAccount = () => {

  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{flex:1, alignItems:'center'}}>
      
        <Text>My Account</Text>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity style={styles.botao} onPress={() => {navigate('Home')}}>
            <Text style={styles.textoBotao}>Ir para Home</Text>
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


export default MyAccount;