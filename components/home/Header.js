import { signOut } from '@firebase/auth'
import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { auth } from '../../Firebase'

export default function Header() {
    const SignOut = () => {
        signOut(auth)
    }
    return (
        <View style={style.headerContainer}>
            <View >
                <TouchableOpacity onPress={SignOut}>
                    <Image style={style.logo} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/320px-Instagram_logo.svg.png" }}></Image>

                </TouchableOpacity>
            </View>

            <View style={style.iconTab}>


                <TouchableOpacity>

                    <Image style={style.icon} source={require('../../assets/Images/Icons/icons8-heart-50.png')}></Image>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Image style={style.icon} source={require('../../assets/Images/Icons/icons8-add-new-64.png')}></Image>

                    <View style={style.badgetab}>
                        <Text style={style.badge}> 11 </Text>
                    </View>
                </TouchableOpacity>


            </View>

        </View>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 120,
        height: 50,
        resizeMode: 'contain'


    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,

    },
    iconTab: {
        flexDirection: 'row',

    },
    icon: {
        marginLeft: 10,
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    badgetab: {
        backgroundColor: '#ff3250',
        borderRadius: 10,
        position: 'absolute',
        left: 20,
        bottom: 20,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    badge: {
        color: 'white',
    }

})