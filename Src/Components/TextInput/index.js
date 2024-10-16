import { View, Text, TextInput } from 'react-native'
import React from 'react'
import style from './style'

const TExtInput =props => {
    const {settext,masked}=props
  return (
    <View>
    <TextInput style={style.inputStyle} onChangeText={settext} secureTextEntry={masked?true:false}/>
    </View>
  )
}

export default TExtInput