import { StyleSheet } from "react-native";

const styles = (darkmode)=>StyleSheet.create({
    flexdata:{
        color:darkmode?"#fff":'#000',
        fontFamily:'Roboto-Medium',
        fontSize:17
    },
    flexboxstyle:{
        borderBottomWidth:0.4,borderRadius:10,height:48,justifyContent:'flex-end',backgroundColor:darkmode?"#000":'#fff',padding:10,marginVertical:5
    }
})

export default styles