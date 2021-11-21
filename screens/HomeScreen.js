import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import BottomTabs from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Posts from '../components/home/Posts.js'
import Stories from '../components/home/Stories'

export default function HomeScreen() {
   
    return (
        <SafeAreaView>
            <Header />
            <Stories />

            <ScrollView>
               
                <Posts />
                
                
            </ScrollView>

            <BottomTabs/>
          
           
           
        </SafeAreaView>
      
    )
}
