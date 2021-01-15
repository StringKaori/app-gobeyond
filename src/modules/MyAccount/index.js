import React from 'react';
import { Container, ProfileView } from './styles';
import MenuOptions from './components/MenuOptions';
import WelcomeMessage from './components/WelcomeMessage';

const MyAccount = () => {

  return (
    <Container>
      <WelcomeMessage/>
      <ProfileView>
        <MenuOptions/>
      </ProfileView>
    </Container>
  );
}


export default MyAccount;