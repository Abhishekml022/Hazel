import { View, Text, FlatList, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgGradient from '../../Components/BgGradient'
import axios from 'axios'
import styles from './style'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'

const Products = () => {
  const [Data, setData] = useState()
  const navigation=useNavigation()
  const scheme=useColorScheme()
  const darkmode=scheme=='dark'?true:false

  const Styler=styles(darkmode)
  useEffect(() => {
    callApi()
    
  }, [])
  const callApi=()=>{
      
      axios.get('https://dummyjson.com/products').then(resp=>setData(resp.data.products)
      ).catch(err=>console.log(err)
      )
      }
  return (
    <BgGradient>
      <Header title='Products' back={()=>{navigation.navigate("Home")}}/>
    <View style={{flex:1,padding:15}}>
      <FlatList data={Data} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
return(
    <TouchableOpacity style={Styler.flexboxstyle} onPress={()=>navigation.navigate('Descriptionpage',{product:item})}>
        <Text style={Styler.flexdata}>{item.title}</Text>
        
        </TouchableOpacity>
        
)
}}/>
    </View>
    </BgGradient>
  )
}

export default Products