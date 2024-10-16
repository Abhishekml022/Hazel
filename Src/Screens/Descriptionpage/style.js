import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const styles = (darkmode)=>StyleSheet.create({
Container:{
    flex:1
},
Headtext:{
    fontSize:25,fontFamily:'Roboto-Black',
    textAlign:'center',color:darkmode?Colors.White:Colors.Black
},Toptext:{
    fontSize:28,fontFamily:'Roboto-Black',
    textAlign:'center',color:darkmode?Colors.White:Colors.Black,marginTop:25,textDecorationLine:'underline'
},
Desctext:{
    fontSize:15,fontFamily:'Roboto-Medium',color:darkmode?Colors.White:Colors.Black,marginVertical:8
},Pricetext:{
    fontSize:23,fontFamily:'Roboto-Bold',color:Colors.White,marginVertical:3,backgroundColor:'green',borderRadius:15,padding:10,textAlign:'center',marginVertical:35
},
Container:{alignItems:'center',marginVertical:10},
Img:{height:200,width:200,resizeMode:'contain'},
Container2:{flex:1},
Container3:{backgroundColor:darkmode?Colors.Black:Colors.White,borderRadius:25,padding:15,}
})

export default styles