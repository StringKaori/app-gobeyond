import styled from 'styled-components/native';

export const Container = styled.SafeAreaView({
    flex:1,
    alignItems:'center',
})

export const Product = styled.Image({
    width:135,
    height:135,
})

export const MoreButton = styled.TouchableOpacity({
    border:1,
    width:72,
    height:26,
    alignItems:'center',
    justifyContent:'center',
})

export const MoreButtonText = styled.Text({
    fontSize:10,
})

export const ProductLabel = styled.Text({
    fontSize:12
})