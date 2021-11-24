import React from 'react'
import { View, Text, SafeAreaView, ScrollView,StyleSheet } from 'react-native'
import BottomTabs from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Posts from '../components/home/Posts.js'
import Stories from '../components/home/Stories'

export default function HomeScreen() {
   
    return (
        <SafeAreaView style={style.container}>
            <Header />
            <Stories />

            <ScrollView >
               
                <Posts />
                <Posts />
                <Posts />
                
                
            </ScrollView>

            <BottomTabs/>
          
           
           
        </SafeAreaView>
      
    )
}


const style = StyleSheet.create({
    container: {
        flex:1,
    }
})
