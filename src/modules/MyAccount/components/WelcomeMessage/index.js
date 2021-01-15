import React from 'react';
import { Container, ProfilePicture, ProfileWelcomeMessage } from './styles';

import profilePic from '../../../../images/imageAccount.png'

const WelcomeMessage = () => {

    return (
      <Container>
          <ProfilePicture source={profilePic}/>
          <ProfileWelcomeMessage>
              Olá Alice.
              Bem Vinda!
          </ProfileWelcomeMessage>
      </Container>
    );
  }
  
  export default WelcomeMessage;