import { View, Text, Dimensions, Button, Image, useColorScheme } from 'react-native'
import React from 'react'
import BgGradient from '../../Components/BgGradient'
import style from './Style'
import Logo from"../../Images/Svg/logo.svg"
import TExtInput from '../../Components/TextInput'
import ButtonPrimary from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation=useNavigation()
  const scheme=useColorScheme()
  const darkmode=scheme=='dark'?true:false
  
const Styler=style(darkmode)
  
  return (
     
  <BgGradient>
    <View style={Styler.LogoBox}>  
      <Logo height={50} width={50}/>
  <Text style={Styler.Text}>Tumbler</Text>
  </View>
    <View style={Styler.Loginbox}>   
<Text style={Styler.heading}>Sign In</Text>
<Text style={Styler.subtext}>Hi there! nice to see you again</Text>
<View style={Styler.textbox}>
  <Text style={Styler.Placeholdertext}>Email</Text>
<TExtInput settext={text=>console.warn(text)
}/>
<Text style={Styler.Placeholdertext}>Password</Text>
<TExtInput masked={true}/>
</View>

<ButtonPrimary title="SignIn" click={()=>navigation.navigate('Drawers')}/>
<Text style={Styler.subtext4}>Forgot Password?</Text>

    
    </View>

  </BgGradient>
        
        
  )
}

export default Login