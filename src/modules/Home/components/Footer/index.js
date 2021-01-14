import React from 'react';
import { SafeAreaView } from 'react-native';
import { FooterBanner, Confira, TextoConfira } from './styles'

const Footer = () => (
    <SafeAreaView>
        <FooterBanner source={{uri:'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg'}}/>

        <Confira>
            <TextoConfira>Confira</TextoConfira>
        </Confira>    
    </SafeAreaView>
)

export default Footer;