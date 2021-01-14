import styled from 'styled-components/native';

export const FooterBanner = styled.Image({
    height: 344,
    width:380,
    alignSelf:'center',
})

export const Confira = styled.TouchableOpacity({
    height: 33,
    width:147,
    backgroundColor:'black',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    position:"absolute",
    bottom:-10
})

export const TextoConfira = styled.Text({
    color:'white'
})