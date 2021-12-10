import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development';
import { auth, db } from '../../Firebase';

export default function OnLineUsers() {
    const [users, setusers] = useState([]);

    useEffect(() => {

        const ref = collection(db, "users");
        const q = query(ref, where('owner_uid', 'not-in', [auth.currentUser.uid]))
        onSnapshot(q, (snapshot) => {
            let users = [];
            snapshot.docs.forEach(doc => {
                users.push(doc.data());
            });
            setusers(users);

        })
    }, [])
    return (

        <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>OnLine Users</Text>


            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#e1e3e1', padding: 10, borderRadius: 10, zIndex: 100, marginBottom: 20 }}>
                <View>
                    <Image style={style.stories} source={{ uri: 'https://image.winudf.com/v2/image/Y29tLndob29ud2hhdHNuZXd2ZXJzaW9uX2ljb25fYTRwamFodTU/icon.png?w=&fakeurl=1' }} />
                    <Text style={{ marginLeft: 10 }}> Online</Text>
                </View>
                {users && users.map((user) => (
                    user.isOnline ? (
                        <View key={user.owner_uid} >
                            <View>
                                <Image style={style.stories} source={{ uri: user.profile_pic }} />
                                <Text style={{ marginLeft: 10 }}>{user.username}</Text>
                            </View>
                        </View>
                    ) : null

                ))}



            </ScrollView>

        </View>
    )
}

const style = StyleSheet.create({

    stories: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#00a627',
        marginRight: 20,

    }
})