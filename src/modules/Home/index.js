import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';

import HeaderBar from './components/HeaderBar';
import SecondaryBanner from './components/SecondaryBanner';
import Showcase from './components/Showcase';
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
      console.log(response);
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
        <SecondaryBanner data={banners[1]?.data || []} />
        <Showcase data={banners[2]?.data || []} />
        <FooterPosition>
          <FooterBanner data={banners[3]?.data || []} />
        </FooterPosition>
      </ScrollView>
    </Container>
  );
}

export default Home;