import { collection, getDocs, query, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { auth, db } from '../../Firebase';

export default function BottomTabs({ navigation }) {
    const [userdata, setuserdata] = useState({})

    const getuserDetails = async () => {
        const ref = collection(db, 'users');
        const q = query(ref, where('owner_uid', '==', auth.currentUser.uid));

        const userDetail = await getDocs(q);

        userDetail.docs.map((doc) => {
            setuserdata({
                profile_pic: doc.data().profile_pic,
            })
        })

    }

    useEffect(() => {
        getuserDetails();
    }, [db])






    return (

        <View style={style.tabContainer}>
            <View style={{ borderBottomColor: '#F8F8F8', borderBottomWidth: 2, }} />
            <View style={style.imgContainer} >

                <TouchableOpacity>
                    <Image style={style.icons} source={require('../../assets/Images/Icons/tabs/icons8-home-64.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={style.icons} source={require('../../assets/Images/Icons/tabs/icons8-search-100.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image style={style.icons} source={require('../../assets/Images/Icons/tabs/icons8-add-new-48.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={style.image} source={{ uri: userdata.profile_pic }}></Image>
                </TouchableOpacity>



            </View>
        </View>
    )
}

const style = StyleSheet.create({
    tabContainer: {

        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 999,
        backgroundColor: 'white'
    },

    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingVertical: 10,
        marginHorizontal: 20
    },
    icons: {
        height: 30,
        width: 30,
        resizeMode: 'contain'

    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 30,
        resizeMode: 'cover'

    }
})
