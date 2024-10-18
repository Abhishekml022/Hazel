import { StyleSheet } from 'react-native';
import Colors from '../../Colors';

const style = (darkmode) =>  StyleSheet.create({
    container:{
        alignItems:'center',justifyContent:'center'
    },
  Loginbox: {
    marginTop: 20,
    height: '60%',
    width: '95%',
    backgroundColor: darkmode ? Colors.Black : Colors.offWhite,
    borderRadius: 20,
    elevation: 2,
    padding: 15,alignSelf:'center'
  },
  LogoBox: {
    marginVertical: 25,alignSelf:'center',alignItems:'center'
  },
  textbox: {
    marginVertical: 15,
  },
  Text: {
    fontSize: 20,
    color: darkmode ? Colors.White:Colors.Black,
  },
  heading: {
    fontFamily: 'Roboto-Black',
    color: darkmode ?Colors.White:Colors.Black,
    fontSize: 25,
  },
  subtext: {
    color: darkmode ? Colors.White:Colors.Grey,
    fontSize: 15,
  },
  subtext4: {
    color: darkmode ? Colors.White:Colors.Grey,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 15,
  },
  Placeholdertext: {
    color: 'red',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
})

export default style

