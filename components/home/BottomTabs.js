import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'

export default function BottomTabs() {
    return (
        <View style={style.tabContainer}>
            <View style={{borderBottomColor: '#F8F8F8',borderBottomWidth: 2,}}/>
            <View style={style.imgContainer} >
            <Image style={style.icons} source={require('../../assets/Images/Icons/tabs/icons8-home-64.png')}></Image>
            <Image style={style.icons} source={require('../../assets/Images/Icons/tabs/icons8-search-100.png')}></Image>
            <Image style={style.icons} source={require('../../assets/Images/Icons/tabs/icons8-add-new-48.png')}></Image>
            <Image style={style.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68wdEq2VI5hUenQIDvF6N4gwV84Qx6t3U8dW6lkWl9fUhR4vUANq4Fc_Dt5XCrwmGI4E&usqp=CAU'}}></Image>
        
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    tabContainer: {
       
        position: 'absolute',
        width:'100%',
        bottom: 0,
        zIndex: 999,
        backgroundColor:'white'
    },

    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height: 60,
        paddingVertical: 10,
        marginHorizontal:20
    },
    icons: {
        height: 30,
        width: 30,
        resizeMode:'contain'
        
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 30,
        resizeMode:'cover'
        
    }
})
