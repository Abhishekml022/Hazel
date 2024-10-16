import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Src/Screens/Login';
import Home from './Src/Screens/Home';
import BOttomTabs from './Src/Components/BOttomtab';
import Drawercustom from './Src/Components/DRawer';
import Descriptionpage from './Src/Screens/Descriptionpage';
import Reports from './Src/Screens/Reports';
import Customers from './Src/Screens/Customers';
import Leads from './Src/Screens/Leads';
import Products from './Src/Screens/Products';
import Sellers from './Src/Screens/Sellers';
const Drawer=createDrawerNavigator()
const Footer=createBottomTabNavigator()
const Stack=createStackNavigator()
const App = () => {
 
  
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Drawers' component={Drawerscreen}/>
      <Stack.Screen name="Descriptionpage" component={Descriptionpage} />


    </Stack.Navigator>
   </NavigationContainer>
  )
}
const Drawerscreen=()=>{
return(
  <Drawer.Navigator initialRouteName='Footers' screenOptions={{headerShown:false,drawerStyle:{width:225}}}drawerContent={props=><Drawercustom {...props}/>}>
  
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name='Reports' component={Reports}/>
    <Drawer.Screen name='Customers' component={Customers}/>
    <Drawer.Screen name='Leads' component={Leads}/>
    <Drawer.Screen name='Products' component={Products}/>
    <Drawer.Screen name='Footers' component={Footerscreen}/>

    
    
  </Drawer.Navigator>
)
}

const Footerscreen=()=>{
  return(
    <Footer.Navigator screenOptions={{headerShown:false}} tabBar={props=><BOttomTabs {...props}/>}>
      <Footer.Screen name="Home" component={Home} />
      <Footer.Screen name="Products" component={Products} />
      <Footer.Screen name="Sellers" component={Sellers} />
      <Footer.Screen name="More" component={Products} />





    </Footer.Navigator>
  )
  }
export default App