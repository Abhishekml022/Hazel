import { View, Text } from 'react-native'
import React from 'react'
import BgGradient from '../../Components/BgGradient'
import Header from '../../Components/Header'

const Reports = () => {
  return (
    <BgGradient>
    <View>
    <Header title='Reports' back={()=>{navigation.navigate("Footers")}}/>
    <Text>Something is Brewing here !!!</Text>
    <Text>Comming Soon......</Text>
    </View>
    </BgGradient>
  )
}

export default Reports