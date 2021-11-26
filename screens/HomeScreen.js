import React from 'react'

import { View, Text,ScrollView,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Posts from '../components/home/Posts.js'
import Stories from '../components/home/Stories'

export default function HomeScreen({navigation}) {
   
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white'}}>
            <Header  />
            <Stories />

            <ScrollView >
               <Posts />
               <Posts />
               <Posts />
            </ScrollView>

            <BottomTabs navigation={navigation}/>
             
        </SafeAreaView>
      
    )
}


