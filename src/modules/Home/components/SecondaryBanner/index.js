import React from 'react';
import { Banner, Confira, TextoConfira, Container } from './styles'

const SecondaryBanner = ({ data }) => (
    <Container>
        <Banner source={{uri:data[0]?.image}}/>

        <Confira>
            <TextoConfira>Confira</TextoConfira>
        </Confira>
        
    </Container>
)

export default SecondaryBanner;