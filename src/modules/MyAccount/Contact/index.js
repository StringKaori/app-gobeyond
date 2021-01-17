import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';
import { Container, Input, Label, Header, Field, SendButton, ButtonText, ButonPosition, ContainCheckbox, Checkbox, CheckboxText, CheckboxFalse } from './styles';

const Contact = () => {

    const [check, setcheck] = useState(false);

    return(
        <Container>
            <Header>
                <Text>CONTATO</Text>
            </Header>

            <Field>
                <Label>
                    Email
                </Label>
                <Input
                    placeholder="alice.ramos@tester.com.br"
                    placeholderTextColor="#666"
                />
            </Field>

            <Field>
                <Label>
                    Nome
                </Label>
                <Input 
                    placeholder="Alice da Silva Ramos"
                    placeholderTextColor="#666"
                />
            </Field>

            <Field>
                <Label>
                    Assunto
                </Label>
                <Input 
                    placeholder="Alice da Silva Ramos"
                    placeholderTextColor="#666"
                />
            </Field>

            <Field>
                <Label>
                    Mensagem
                </Label>
                <Input 
                    placeholder="Alice da Silva Ramos"
                    placeholderTextColor="#666"
                    multiline={true}
                    numberOfLines={10}
                />
            </Field>

            <ContainCheckbox onPress={() => setcheck(!check)}>
                {check ? <Checkbox />: <CheckboxFalse />}
                <CheckboxText>Autorizo envio de e-mails</CheckboxText>
            </ContainCheckbox>

            <ButonPosition>
                <SendButton>
                    <ButtonText>Enviar formulário</ButtonText>
                </SendButton>
            </ButonPosition>      
        </Container>
    )

}

export default Contact;