import { View, Text, FlatList, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgGradient from '../../Components/BgGradient'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import styles from './Style'

const Sellers = () => {
    const [Data, setData] = useState()
    const navigation=useNavigation()
    const scheme = useColorScheme();
    const darkmode = scheme == 'dark' ? true : false;
    const Styler = styles(darkmode);
    
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
        <Header title='Sellers' back={()=>{navigation.navigate("Home")}}/>
      <View style={Styler.Container}>
        <FlatList data={Data} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
  return(
      <TouchableOpacity style={Styler.flexboxstyle} onPress={()=>navigation.navigate('Descriptionpage',{product:item})}>
          <Text style={Styler.flexdata}>{item.brand}</Text>
          
          </TouchableOpacity>
          
  )
  }}/>
      </View>
      </BgGradient>
    )



 
}

export default Sellers