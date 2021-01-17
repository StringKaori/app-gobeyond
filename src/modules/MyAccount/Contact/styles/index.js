import styled from 'styled-components/native'

export const Container = styled.SafeAreaView({
    flex:1,
})

export const Header = styled.View({
    marginTop:50,
    alignItems:'center',
    height:60,
    width:414,
    borderBottomWidth:1,
    borderBottomColor:'#FFE',
})

export const Input = styled.TextInput({
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginRight:36
})

export const Field = styled.View({
    marginLeft:38,
    marginBottom:50
})

export const Label = styled.Text({
    
})

export const ButtonText = styled.Text({
    color:'#FFF'
})

export const ButonPosition = styled.View({
    flex:1,
    justifyContent:'flex-end'
})

export const SendButton = styled.TouchableOpacity({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000',
    width:415,
    height:72
})

export const ContainCheckbox = styled.TouchableOpacity({
   flexDirection:'row',
   marginTop:22.5,
   alignItems: 'center',
})

export const Checkbox = styled.View({
    borderColor:'#000',
    borderWidth:1,
    width:18,
    height:18,
    backgroundColor:'#000'
})

export const CheckboxFalse = styled.View({
    borderColor:'#000',
    borderWidth:1,
    width:18,
    height:18
})

export const CheckboxText = styled.Text({
    marginLeft:18,
    fontSize:14,
})