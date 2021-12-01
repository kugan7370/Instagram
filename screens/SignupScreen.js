import React from 'react'

import { View, Text,StyleSheet,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignUp from '../components/SignupScreen/SignUp'


export default function SignupScreen({navigation}) {
    return (
        <View>
            
           <View style={style.imageContainer}>
                <Image style={style.image} source={{uri:('http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png')}}></Image>
            </View>
            <SignUp navigation={navigation }/>
       </View>
    )
}

const style = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop:100,
    },
    image: {
        height: 100,
        width:100,
    },
})

