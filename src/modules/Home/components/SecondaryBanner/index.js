import React from 'react';
import { Banner, Confira, TextoConfira, Container } from './styles'

const SecondaryBanner = () => (
    <Container>
        <Banner source={{uri:'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images//banners/s9OhVEL3UqqNydOtUL7CIQARwE3V47VdZCPIwgH7.png'}}/>

        <Confira>
            <TextoConfira>Confira</TextoConfira>
        </Confira>
        
    </Container>
)

export default SecondaryBanner;