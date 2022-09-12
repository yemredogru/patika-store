import {StyleSheet,Dimensions} from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#d3d3d3',
        margin:10,
        padding:10,
        borderRadius:10,
    },
    image:{
        height:Dimensions.get('window').height/4,
        borderRadius:10,
    },
    title:{fontWeight:'bold',
    fontSize:18,
    },
    price:{
        marginTop:5,
    },
    author:{
        fontStyle:'italic',
        textAlign:'right',
    },
    inner_container:{padding:5,},
    stock:{
        textTransform:'uppercase',
        color:'red',
        fontWeight:'bold',

    },


})