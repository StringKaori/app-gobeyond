import React from 'react';
import { SafeAreaView } from 'react-native';
import { Banner, Footer } from './styles'

const Body = () => (
    <SafeAreaView>
        <Banner source={{uri:'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images//banners/s9OhVEL3UqqNydOtUL7CIQARwE3V47VdZCPIwgH7.png'}}/>

        <Footer source={{uri:'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg'}}/>
    </SafeAreaView>
)

export default Body;