import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development'
import { auth, db } from '../../Firebase'

export default function AllUser() {
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
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <View style={{ marginBottom: 30 }}>
                <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>All Users</Text>
            </View>



            <View>
                {users && users.map((user) => (
                    <View key={user.owner_uid}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e1e3e1', padding: 10, borderRadius: 10, zIndex: 100, marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={style.stories} source={{ uri: user.profile_pic }} />

                                <View>
                                    <Text>{user.username}</Text>
                                    <Text>Message</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ backgroundColor: 'white', padding: 5, paddingHorizontal: 10, borderRadius: 10 }}>12 min</Text>
                            </View>
                        </View>
                    </View>
                )

                )}





            </View>
        </View>
    )
}


const style = StyleSheet.create({

    stories: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 20,

    },

})