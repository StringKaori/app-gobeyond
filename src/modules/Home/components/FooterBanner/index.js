import React from 'react';
import { Container, Banner, Confira, TextoConfira } from './styles'

const FooterBanner = ({ data }) => {   

    return(
        
        <Container>
            <Banner source={{uri:data[0]?.image}}/>

            <Confira>
                <TextoConfira>Confira</TextoConfira>
            </Confira>    
        </Container>
    )
}
export default FooterBanner;