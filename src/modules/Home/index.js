import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';

import HeaderBar from './components/HeaderBar';
import SecondaryBanner from './components/SecondaryBanner';
import FooterBanner from './components/FooterBanner';
import { FooterPosition, Container } from './styles';
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
    <Container>
      <HeaderBar />
      <ScrollView>
        <PrimaryBannerSlider data={banners[0]?.data || []}/>
        <SecondaryBanner />
        <FooterPosition>
          <FooterBanner />
        </FooterPosition>
      </ScrollView>
    </Container>
  );
}

export default Home;