import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';

const BOttomTabs = ({state, desctiption, navigation}) => {
  const filtered = state.routes;
  const scheme = useColorScheme();
  const darkmode = scheme == 'dark' ? true : false;
  return (
    <View
      style={{
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.Gradientwhite[0],
      }}>
      {filtered.map((route, index) => {
        const isfocussed = state.index === index;

        return route.name !== 'Descriptionpage' ? (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: isfocussed ? Colors.drwfcs : null,
              borderRadius: 20,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              height: 35,
            }}>
            <TouchableOpacity
              key={index}
              style={{flexDirection: 'column', justifyContent: 'center'}}
              onPress={() =>  {route.name == 'More' ?navigation.openDrawer(): navigation.navigate(route.name)}}>
              <Text style={{color: isfocussed? Colors.Black:Colors.White, marginHorizontal: 10}}>
               { route.name}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null;
      })}
    </View>
  );
};

export default BOttomTabs;
