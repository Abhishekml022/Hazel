import { View, Text } from 'react-native'
import React from 'react'
import BgGradient from '../../Components/BgGradient'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'

const Leads = () => {
  const navigation=useNavigation()
  return (
    <BgGradient>
    <View>
    <Header title='Leads' back={()=>{navigation.navigate("Footers")}}/>
<Text>Something is Brewing here !!!</Text>
<Text>Comming Soon......</Text>

        </View>
    </BgGradient>
  )
}

export default Leads