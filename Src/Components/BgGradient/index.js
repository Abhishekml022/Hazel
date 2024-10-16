import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'
import Colors from '../../Colors'


const BgGradient = ({children}) => {
  const scheme=useColorScheme()
  const darkmode=scheme=='dark'?true:false

  return (

   <LinearGradient
   colors={darkmode?Colors.Gradientdark:Colors.Gradientwhite}
    style={{flex: 1}}
    
  > 
  <View style={styles.Container}>
    {children}
  </View>


  </LinearGradient>
  )
}

export default BgGradient