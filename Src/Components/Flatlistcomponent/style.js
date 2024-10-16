import { StyleSheet } from "react-native";

const styles = (darkmode) => StyleSheet.create({
    Container:{
        backgroundColor:darkmode ? '#000' : '#f0eeed',overflow:'hidden',padding:10,borderRadius:30,marginVertical:10
    },
    flexdata:{
        color:darkmode ? '#fff' :'#000',
        fontFamily:'Roboto-Medium',
        fontSize:19
    },
    flexboxstyle:{
        borderBottomWidth:0.4,borderRadius:10,height:48,justifyContent:'flex-end',backgroundColor:darkmode ? '#000' : '#f0eeed',
        borderColor:darkmode ? '#f0eeed' : '#000'
    },
    text:{
        color:darkmode ? '#fff' :'#000',
        fontFamily:'Roboto-Black',
        fontSize:24,textAlign:'center',
    },
})

export default styles