import React from 'react';
import { Container, MoreButton, MoreButtonText, Product } from './styles'
import { Text } from 'react-native';

const Showcase = ({ data }) => {
  return (
    <Container>
      <Product source={{uri:data[0]?.image}}/>
      <MoreButton>
          <MoreButtonText>+3 opções</MoreButtonText>
      </MoreButton>
    </Container>
  );
}

export default Showcase;