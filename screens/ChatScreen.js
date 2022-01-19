import { useNavigation } from '@react-navigation/native'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react/cjs/react.development'
import AllUser from '../components/ChatScreen/AllUser'
import OnLineUsers from '../components/ChatScreen/OnLineUsers'
import { auth, db } from '../Firebase'

export default function ChatScreen({ navigation }) {
    // const navigation = useNavigation();




    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
                    <Image style={style.backIcon} source={require('../assets/Images/Icons/icons8-back-64.png')}></Image>
                </TouchableOpacity>

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Chats</Text>

                <Text></Text>
            </View>



            <OnLineUsers navigation={navigation} />
            <AllUser navigation={navigation} />

        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    backIcon: {
        width: 30,
        height: 30,

    },

})