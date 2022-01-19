import { useNavigation } from '@react-navigation/native'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react/cjs/react.development'
import { auth, db } from '../../Firebase'
import { setSelectedChats } from '../../redux/Reducers/MessageSlicer'
import { selectProfile_pic, selectUsername, setSelectedUser } from '../../redux/Reducers/SelectedUsers'

export default function AllUser({ navigation }) {

    const [users, setusers] = useState([]);
    const [chats, setChats] = useState([]);

    const dispatch = useDispatch();
    // const navigation = useNavigation();


    useEffect(() => {
        // for chat list users
        const ref = collection(db, "users");
        const q = query(ref, where('owner_uid', 'not-in', [auth.currentUser.uid]))
        onSnapshot(q, (snapshot) => {
            let users = [];
            snapshot.docs.forEach(doc => {
                users.push(doc.data());
            });
            setusers(users);

        })
    }, [db])

    const SelectedUser = (user) => {
        // for get user data
        dispatch(setSelectedUser({
            username: user.username,
            profile_pic: user.profile_pic,
            userID: user.owner_uid,
        }));


        const user2 = user.owner_uid;
        const user1 = auth.currentUser.uid;
        const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

        const messageRef = collection(db, 'messages', id, 'chat');
        const q = query(messageRef, orderBy('createAt', 'asc'));

        onSnapshot(q, (snapshot) => {
            let chat = [];
            snapshot.docs.forEach(doc => {
                chat.push(doc.data());
            });
            setChats(chat);

        });




        dispatch(setSelectedChats({
            Chat: chats,
        }));
        navigation.push('Message')







    }
    console.log('users', users);
    console.log('chats', chats);


    return (
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <View style={{ marginBottom: 30 }}>
                <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>All Users</Text>
            </View>




            <View>
                {users && users.map((user) => (
                    <View key={user.owner_uid}  >
                        <TouchableOpacity onPress={() => SelectedUser(user)} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e1e3e1', padding: 10, borderRadius: 10, zIndex: 100, marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={style.stories} source={{ uri: user.profile_pic }} />

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{user.username}</Text>
                                    <Text style={{ color: 'gray' }}>Message</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ backgroundColor: 'white', padding: 5, paddingHorizontal: 10, borderRadius: 10 }}>12 min</Text>
                            </View>
                        </TouchableOpacity>
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