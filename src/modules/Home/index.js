import React from 'react';
import { SafeAreaView } from 'react-native';

import HeaderBar from './components/HeaderBar';
import Body from './components/Body';

const Home = () => {

  return (
    <SafeAreaView style={{flex:1}}>
        <HeaderBar/>
        <Body/>
    </SafeAreaView>
  );
}

export default Home;