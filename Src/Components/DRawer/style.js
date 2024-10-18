import {StyleSheet} from 'react-native';
import Colors from '../../Colors';

const styles = darkmode =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 4,
      justifyContent: 'space-evenly',
      backgroundColor: darkmode ? Colors.Black : Colors.White,
    },
    container2: {
      alignItems: 'center',
    },
    imgstyle: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
    },
    icon1: {alignSelf: 'flex-start'},
    container3: {
      height: 100,
      width: 100,
      borderRadius: 50,
      backgroundColor: Colors.Grey,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Nametext: {
      fontFamily: 'Roboto-Bold',
      color: darkmode ? Colors.White : Colors.Black,
      textAlign: 'center',
    },
    Emailtext: {
      color: darkmode ? Colors.White : Colors.Black,
    },
    container4: {marginVertical: 50},
    // Pressablestyle:{
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     height: 60,
    //     padding: 5,
    //     backgroundColor: isfocussed ? Colors.drwfcs : darkmode?Colors.Black:Colors.White,
    //   },
    container5: {flexDirection: 'row', alignItems: 'center'},
    PressableText: {
      color: darkmode ? Colors.White : Colors.Black,
      marginHorizontal: 10,
    },
    settingtext: {color: Colors.Black, marginHorizontal: 10},
  });

export default styles;
