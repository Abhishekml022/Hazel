import { View, Text, FlatList, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgGradient from '../../Components/BgGradient'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import styles from './style'

const Customers = () => {
  const navigation=useNavigation()
  const scheme = useColorScheme();
  const darkmode = scheme == 'dark' ? true : false;
  const Styler = styles(darkmode);
  const [Data, setData] = useState()
console.warn(Data);

  
  useEffect(() => {
    callApi()
    
  }, [])
  const callApi=()=>{
      
      axios.get('https://dummyjson.com/users').then(resp=>setData(resp.data.users)
      ).catch(err=>console.log(err)
      )
      }
  return (
    <BgGradient>
      <Header title='Customers' back={()=>{navigation.navigate("Footers")}}/>
    <View style={Styler.Container}>
      <FlatList data={Data} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
return(
    <TouchableOpacity style={Styler.flexboxstyle} onPress={()=>navigation.navigate('Descriptionpage',{product:item})}>
        <Text style={Styler.flexdata}>{item.firstName+item.lastName}</Text>
        
        </TouchableOpacity>
        
)
}}/>
    </View>
    </BgGradient>
  )
 
}

export default Customers