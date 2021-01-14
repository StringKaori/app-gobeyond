import React from 'react';
import { SafeAreaView } from 'react-native';

import HeaderBar from './components/HeaderBar';
import Body from './components/Body';
import Footer from './components/Footer';
import { FooterPosicao } from './styles';

const Home = () => {

  return (
    <SafeAreaView style={{flex:1,}}>
        <HeaderBar />
        <Body />
        <FooterPosicao>
          <Footer />
        </FooterPosicao>
        
    </SafeAreaView>
  );
}

export default Home;