import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'

import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Posts from '../components/home/Posts.js'
import Stories from '../components/home/Stories'
import { db } from '../Firebase'

export default function HomeScreen({ navigation }) {
    const [userPosts, setuserPosts] = useState([])

    const getposts = () => {
        const q = query((collection(db, 'post')), orderBy("createAt", "desc"))
        onSnapshot(q, (snapshot) => {
            setuserPosts((snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))));
        })
    }
    useEffect(() => {

        getposts();



    }, [db])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <Stories />

            <ScrollView style={{ marginBottom: 20 }} >
                {userPosts.map((post, index) => (
                    <Posts key={index} post={post} />
                ))}


            </ScrollView>

            <BottomTabs navigation={navigation} />

        </SafeAreaView>

    )
}


