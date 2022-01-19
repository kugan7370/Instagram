import { useNavigation } from '@react-navigation/native'
import { addDoc, collection, serverTimestamp, Timestamp } from 'firebase/firestore'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import { date } from 'yup'
import { auth, db, storage } from '../Firebase'
import { selectProfile_pic, selectuserID, selectUsername, unSelectedUser } from '../redux/Reducers/SelectedUsers'
import Messages from '../components/Messages/Messages'
import * as ImagePicker from 'expo-image-picker';
import { SelectedChats, setSelectedChats, unSelectedChats } from '../redux/Reducers/MessageSlicer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


export default function MessageScreen({ navigation }) {
    const Chats = useSelector(SelectedChats);
    const username = useSelector(selectUsername);
    const Profile_pic = useSelector(selectProfile_pic);
    // const navigation = useNavigation();
    const userID = useSelector(selectuserID);
    const dispatch = useDispatch();

    //  for message
    const [Message, setMessage] = useState('')

    // for media
    const [img, setImg] = useState('');

    // for image pic permission

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImg(result.uri);
        }
    };


    const handleSubmit = async () => {

        const user1 = auth.currentUser.uid
        const user2 = userID
        const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

        let url;
        if (img) {
            const response = await fetch(img);
            const blob = await response.blob();
            console.log('bolb', blob);
            const imgRef = ref(storage, `images/${new Date().getTime()}`);
            const snap = await uploadBytes(imgRef, blob);
            const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
            url = downloadUrl;
        }

        await addDoc(collection(db, 'messages', id, 'chat'), {
            text: Message,
            from: user1,
            to: user2,
            createAt: serverTimestamp(),
            media: url || '',
        })
        setMessage('');
    };
    const unsetAll = () => {
        dispatch(unSelectedUser());
        dispatch(unSelectedChats());
    }





    return (
        <View style={{ flex: 1 }}>

            {/* contact head */}
            <SafeAreaView style={{ backgroundColor: '#e1e3e1' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={style.backIcon} source={require('../assets/Images/Icons/icons8-back-64.png')}></Image>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={style.stories} source={{ uri: Profile_pic }}></Image>
                        <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 18 }}>{username}</Text>
                    </View>
                </View>

            </SafeAreaView>
            {/* for message */}

            {Chats.length ? Chats.map((chat, i) => (<Messages chat={chat} key={i} />)) : null}



            {/* for footer */}
            <View style={{ backgroundColor: '#e1e3e1', height: 100, width: '100%', position: 'absolute', bottom: 0, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, left: 0, }}>
                <TouchableOpacity onPress={pickImage}   >
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/Images/Icons/icons8-arrow-64.png')}></Image>
                </TouchableOpacity>

                <TextInput value={Message} onChangeText={(text) => setMessage(text)} placeholder='Message' style={{ height: 50, width: '70%', textAlign: 'center' }}></TextInput>

                <TouchableOpacity onPress={handleSubmit} >
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/Images/Icons/icons8-email-send-64.png')}></Image>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    backIcon: {
        height: 30,
        width: 30,
    },
    stories: {
        width: 30,
        height: 30,
        borderRadius: 30,

    }
})