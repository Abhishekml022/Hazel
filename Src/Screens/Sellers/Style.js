import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const styles = (darkmode)=>StyleSheet.create({
    flexdata:{
        color:darkmode?Colors.White:Colors.Black,
        fontFamily:'Roboto-Medium',
        fontSize:17
    },
    flexboxstyle:{
        borderBottomWidth:0.4,borderRadius:10,height:48,justifyContent:'flex-end',backgroundColor:darkmode?Colors.Black:Colors.White,padding:10,marginVertical:10
    },
    Container:{flex:1,padding:15},
})

export default styles