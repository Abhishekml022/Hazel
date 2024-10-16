import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'

const ButtonPrimary = props => {
  
  return (
    <TouchableOpacity style={style.buttonview}onPress={props.click}>
      <Text style={style.btntext}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary