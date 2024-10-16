import { View, Text, FlatList, TouchableOpacity, useColorScheme, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgGradient from '../../Components/BgGradient'
import styles from './style'
import axios from 'axios'
import { useIsFocused, useNavigation, useRoute} from '@react-navigation/native'
import FlatlistComponent from '../../Components/Flatlistcomponent'

const Home = () => {
const [Data, setData] = useState('')
const navigation=useNavigation()
const scheme=useColorScheme()
  const darkmode=scheme=='dark'?true:false

const Styler=styles(darkmode)
const [loading, setloading] = useState(false)


useEffect(() => {
  setloading(true)
  callApi()
  setloading(false)

}, [])
const callApi=()=>{
    
    axios.get('https://dummyjson.com/products').then(resp=>setData(resp.data.products)
    ).catch(err=>console.log(err)
    )
    }
// console.log(Data.data);

  return (
    <View style={{flex:1,justifyContent:'flex-end'
    }}>
  
    <BgGradient>  
<View style={{alignItems:'center'}}>
      <Text style={Styler.Headtext} >Home</Text>
  {loading?<ActivityIndicator size='large' color='blue'/>:    
<FlatlistComponent Data={Data}/>}
</View>



      {/* </View> */}
    </BgGradient>
    </View>



  )
}


export default Home