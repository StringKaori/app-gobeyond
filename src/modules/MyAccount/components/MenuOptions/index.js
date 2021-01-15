import React from 'react';
import { Container, Icon, ButtonIcon, TextIcon } from './styles';
import { useNavigation } from '@react-navigation/native';

import iconHome from '../../../../images/iconHome.png';
import iconCategories from '../../../../images/iconCategories.png';
import iconHeart from '../../../../images/iconHeart.png';
import iconBag from '../../../../images/iconBag.png';
import iconOrders from '../../../../images/iconOrders.png';

const MenuOptions = () => {
    
    const { navigate } = useNavigation();

    return (
      <Container>
          <ButtonIcon onPress={() => {navigate('Home')}}>
              <Icon source={iconHome}/>
              <TextIcon>Home</TextIcon>
          </ButtonIcon>

          <ButtonIcon onPress={() => {alert('Em desenvolvimento')}}>
              <Icon source={iconCategories}/>
              <TextIcon>Categorias</TextIcon>
          </ButtonIcon>

          <ButtonIcon onPress={() => {alert('Em desenvolvimento')}}>
              <Icon source={iconHeart}/>
              <TextIcon>Favoritos</TextIcon>
          </ButtonIcon>
          
          <ButtonIcon onPress={() => {alert('Em desenvolvimento')}}>
              <Icon source={iconBag}/>
              <TextIcon>Minha Sacola</TextIcon>
          </ButtonIcon>

          <ButtonIcon onPress={() => {alert('Em desenvolvimento')}}>
              <Icon source={iconOrders}/>
              <TextIcon>Meus Pedidos</TextIcon>
          </ButtonIcon>
      </Container>
    );
  }
  
  export default MenuOptions;