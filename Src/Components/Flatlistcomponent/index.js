import { View, Text, FlatList, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

const FlatlistComponent = props => {
    const scheme=useColorScheme()
  const darkmode=scheme=='dark'?true:false
const styler=styles(darkmode)
    const navigation=useNavigation(0)
  return (
    <View style={styler.Container}>
        <Text style={styler.text}>Items</Text>

      <FlatList key={props.index}data={props.Data} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
return(
    <TouchableOpacity style={styler.flexboxstyle} onPress={()=>navigation.navigate('Descriptionpage',{product:item})}>
        <Text style={styler.flexdata}>{item.title}</Text>
        
        </TouchableOpacity>
        
)
}}/>
    </View>
  )
}

export default FlatlistComponent