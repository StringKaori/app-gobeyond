import styled from 'styled-components/native'
import {Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView({
    flex:1
})

export const ContainerSlide = styled.View({
    width, 
    height:448,
})

export const ImageSlide = styled.Image({
    height:'100%'
})

export const ButtonMore = styled.TouchableOpacity({
    position:'absolute',
    borderWidth: 1,
    borderColor:'#FFF',
    top: 342,
    left:21,
    height:50,
    width:166,
    justifyContent:'center',
    alignItems:'center'
})

export const TextButtonMore = styled.Text({
    color:'#FFF',
    fontSize:26,
})