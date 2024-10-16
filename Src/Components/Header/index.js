import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Header = props => {
    const navigation=useNavigation()
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{}}>
      <AntDesign name="left" color='#fff' size={35} style={{alignSelf:'flex-start'}} onPress={props?.back}/>
      </View>
      <Text style={{fontSize:30,fontFamily:'Roboto-Black',color:"#FFF",alignItems:'center'}}>{props.title}</Text>
      
      <Text style={{fontSize:30,fontFamily:'Roboto-Black',color:"#FFF",alignSelf:'center'}}></Text>

      </View>
  )
}

export default Header