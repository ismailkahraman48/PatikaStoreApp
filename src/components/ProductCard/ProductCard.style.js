import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

    container : {

        flex : 1,



        
    },

    inner_container : {
        padding : 5,
        borderWidth : 1,
        margin : 4,
        backgroundColor : '#ECEFF1',
        borderRadius : 10


    },  


    image : {
        height : Dimensions.get('window').height / 5,
        width : '100%',
        resizeMode : 'contain'
        


    },

    title : {
        fontSize : 20
    },

    price : {
        fontWeight : 'bold',
        marginTop : 5,
        padding : 3
    },
    inStock :{
        color : 'red'
    }




})