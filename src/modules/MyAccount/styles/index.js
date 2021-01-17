import styled from 'styled-components/native';

export const Container = styled.SafeAreaView({
    marginTop:50,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
})

export const ProfileView = styled.View({
    position: 'absolute',
    borderWidth:0,
    borderTopWidth:1,
    borderTopColor:'black',
    left:38,
    right:36,
    top:63,
    width:340,
    height:409
})