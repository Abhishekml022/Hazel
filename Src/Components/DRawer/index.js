import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  useColorScheme,
  Image,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused} from '@react-navigation/native';
import styles from './style';
import Colors from '../../Colors';

const Drawercustom = ({state, description, navigation}) => {
  const filtered = state.routes.filter(route => route.name !== 'Footers');
  const scheme = useColorScheme();
  const darkmode = scheme == 'dark' ? true : false;
  const Styler = styles(darkmode);
  const activeRouteName =
    state.index !== 5 ? filtered[state.index].name : 'Home';

  return (
    <View style={Styler.container}>
      <View style={Styler.container2}>
        <AntDesign name="close" color="#000" size={25} style={Styler.icon1} />

        <View style={Styler.container3}>
          <Image source={require('../../Images/propic.jpg')} style={Styler.imgstyle} />
        </View>
        <Text style={Styler.Nametext}>Jonna Doe</Text>
        <Text style={Styler.Emailtext}>jonnadoe@xyz.com</Text>
      </View>
      <View style={Styler.container4}>
        {filtered.map((route, index) => {
          const isfocussed = activeRouteName === route.name;

          return route.name !== 'Footers' ? (
            <TouchableOpacity
              key={index}
              style={ {               flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 60,
                padding: 5,
                backgroundColor: isfocussed ? Colors.drwfcs : darkmode?Colors.Black:Colors.White,
              }}
              onPress={() => {
                navigation.navigate(route.name), navigation.closeDrawer();
              }}>
              <View style={Styler.container5}>
                <Entypo
                  name={
                    route.name == 'Home'
                      ? 'home'
                      : route.name == 'Reports'
                      ? 'bar-graph'
                      : route.name == 'Customers'
                      ? 'user'
                      : route.name == 'Leads'
                      ? 'heart'
                      : route.name == 'Products'
                      ? 'shopping-bag'
                      : null
                  }
                  color={darkmode?isfocussed?Colors.Black:Colors.White:Colors.Black}
                  size={25}
                />
                <Text
                  style={{
                    flexDirection: 'row',
                    padding: 5,fontWeight:'800',fontSize:15,
                    color:darkmode?isfocussed?Colors.Black:Colors.White:Colors.Black,
                    backgroundColor: isfocussed
                      ? Colors.drwfcs
                      : darkmode
                      ? Colors.Black
                      : Colors.White,
                  }}>
                  {route.name}
                </Text>
              </View>
              <Entypo
                name={isfocussed ? 'chevron-left' : 'chevron-right'}
                color={darkmode?isfocussed?Colors.Black:Colors.White:Colors.Black}
                size={25}
              />
            </TouchableOpacity>
          ) : null;
        })}
      </View>
      <TouchableOpacity
        style={Styler.container4}
        onPress={() => Alert.alert('Comming soon', 'Feature not released')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Entypo name={'cog'} color={darkmode?Colors.White:Colors.Black} size={25} />
          <Text style={{color:darkmode?Colors.White:Colors.Black}}> Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Drawercustom;
