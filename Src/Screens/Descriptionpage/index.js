import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './style'
import BgGradient from '../../Components/BgGradient'
import Header from '../../Components/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Descriptionpage = () => {
    const route=useRoute()
    const item={...route?.params.product}
    const navigation=useNavigation()
    const scheme = useColorScheme();
    const darkmode = scheme == 'dark' ? true : false;
    const Styler = styles(darkmode);
    
    
  return (
    <BgGradient>
<Header title="Description" back={()=>navigation.navigate('Footers')}/>    
    <View style={Styler.Container}>
<Image source={{uri:item.images?item?.images[0]:null}}style={Styler.Img}/>
{!item.images? <FontAwesome name='user' size={100}/>:null}
<Text>Photo</Text>
</View>
    <View style={Styler.Container2}>
      <View style={Styler.Container3}>
      <Text style={Styler.Headtext}>{item.firstName?item.firstName+item.lastName:item.title}</Text>
      <Text style={Styler.Desctext}>{item.brand?"Brand: " :'Email: '}{item.email?item.email:item.brand}</Text>
      <Text style={Styler.Desctext}>{item.minimumOrderQuantity?"Minimum Qty: " :'University: '}{item.university?item.university:item.minimumOrderQuantity}</Text>
      <Text style={Styler.Desctext}>{item.description? "Description : " :'Age: '}{item.age?item.age:item.description}</Text>
      <Text style={Styler.Desctext}>{item.returnPolicy}</Text>
      {item?.price?
      <Text style={Styler.Pricetext}>Price: {item.price}</Text>:null}



      </View>

    </View>
    </BgGradient>
  )
}

export default Descriptionpage