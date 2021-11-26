import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NewPosts from '../components/newPost/NewPosts'

export default function NewPostScreen({navigation}) {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <NewPosts navigation={navigation} />
        </SafeAreaView>
    )
}
