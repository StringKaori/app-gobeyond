import React from 'react';
import { Container, Banner, Confira, TextoConfira } from './styles'

const FooterBanner = () => (
    <Container>
        <Banner source={{uri:'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg'}}/>

        <Confira>
            <TextoConfira>Confira</TextoConfira>
        </Confira>    
    </Container>
)

export default FooterBanner;