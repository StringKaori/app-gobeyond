import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import HeaderBar from './components/HeaderBar';
import Body from './components/Body';
import Footer from './components/Footer';
import { FooterPosicao } from './styles';
import PrimaryBannerSlider from './components/PrimaryBannerSlider';

import services from '../../services';

const Home = () => {

  const [banners, setBanners] = useState([]);

  useEffect(async ()=>{
    
    var response;

    try{
      response = await services.getBanners();
    }catch(error){
      console.log(error);
    }
    
    const { data, status } = response;

    setBanners(data);

  }, [])

  return (
    <SafeAreaView style={{flex:1,}}>
      <HeaderBar />
      <ScrollView>
          <PrimaryBannerSlider data={banners[0]?.data || []}/>
          <Body />
          <FooterPosicao>
            <Footer />
          </FooterPosicao>
        </ScrollView>
    </SafeAreaView>
  );
}

export default Home;