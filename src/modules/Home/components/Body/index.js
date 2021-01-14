import React from 'react';
import { SafeAreaView } from 'react-native';
import { Banner, Confira, TextoConfira } from './styles'

const Body = () => (
    <SafeAreaView>
        <Banner source={{uri:'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images//banners/s9OhVEL3UqqNydOtUL7CIQARwE3V47VdZCPIwgH7.png'}}/>

        <Confira>
            <TextoConfira>Confira</TextoConfira>
        </Confira>
        
    </SafeAreaView>
)

export default Body;