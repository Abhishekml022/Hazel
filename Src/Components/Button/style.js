import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const style = StyleSheet.create({
    buttonview:{
        backgroundColor:'red',
        height:60,width:260,alignItems:'center',justifyContent:'center',borderRadius:12,alignSelf:'center'
    },
    btntext:{
        fontSize:29,
        fontFamily:'Roboto-Black',
        color:Colors.BtnWhite
    }
})
export default style