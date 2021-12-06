import { arrayRemove, arrayUnion, collection, doc, onSnapshot, updateDoc, where } from '@firebase/firestore'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { useEffect } from 'react/cjs/react.development'
import { auth, db } from '../../Firebase'

const likedIcon = "https://www.shareicon.net/data/2017/06/22/887607_heart_512x512.png";
const UnlikedIcon = 'https://iconape.com/wp-content/png_logo_vector/like.png';





export default function Posts({ post }) {


    const handleClick = async (post) => {
        //    include mean, if the values in  it will show true, ifnot false
        //  but in here it will work opposite  (!)


        const currentLikeStatus = !post.likes_by_users.includes(
            auth.currentUser.email
        )

        await updateDoc(doc(db, 'post', post.id), {
            likes_by_users: currentLikeStatus ? arrayUnion(
                auth.currentUser.email
            ) : arrayRemove(
                auth.currentUser.email
            )

        })

    }


    return (
        <View style={style.container}>
            <View style={{ borderBottomColor: '#F8F8F8', borderBottomWidth: 2, }} />
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter post={post} handleClick={handleClick} />

        </View>
    )

}


function PostHeader({ post }) {
    return (
        <View style={style.headerContainer}>
            <View style={style.userTab}>
                <View style={style.headerImgaeContainer}>
                    <Image style={style.image} source={{ uri: post.profile_pic }}></Image>
                </View>

                <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>{post.username}</Text>
            </View>

            <View>
                <Image style={style.icon} source={require('../../assets/Images/Icons/icons8-menu-vertical-64.png')}></Image>
            </View>
        </View>
    )
}




function PostImage({ post }) {
    return (
        <View style={style.postContainer}>
            <Image style={style.postImg} source={{ uri: post.imgurl }}></Image>
        </View>
    )
}




function PostFooter({ post, handleClick }) {


    return (
        <View>
            <FooterIcons post={post} handleClick={handleClick} />
            <FooterLikes post={post} />
            <Comments />
        </View>


    )
}

const FooterIcons = ({ post, handleClick }) => (

    <View style={style.footerContainer}>
        <View style={style.threeIcons} >
            <TouchableOpacity onPress={() => handleClick(post)}>
                <Image style={style.footerIcon} source={{ uri: post.likes_by_users.includes(auth.currentUser.email) ? likedIcon : UnlikedIcon }} />
            </TouchableOpacity>
            <Image style={style.footerIcon} source={require('../../assets/Images/Icons/icons8-speech-bubble-64.png')} />
            <Image style={style.footerIcon} source={require('../../assets/Images/Icons/icons8-sent-150.png')} />

        </View>

        <View>
            <Image style={style.saveIcon} source={require('../../assets/Images/Icons/icons8-save-search-64.png')} />
        </View>

    </View>

)


const FooterLikes = ({ post }) => (
    <View >
        <Text style={{ marginLeft: 20, fontWeight: 'bold', }} >{post.likes_by_users.length} likes</Text>
    </View>
)

const Comments = () => (
    <View style={{ marginLeft: 20, }}>
        <Text >
            <Text style={{ fontWeight: 'bold' }} >kugan </Text>
            <Text >woooooooooooooooow</Text>
        </Text>

        <Text style={{ color: 'grey' }} >View all 2 comments</Text>
        <Text >
            <Text style={{ fontWeight: 'bold' }} >priyan </Text>
            <Text >this is a miracle, ww0!..</Text>
        </Text>
    </View>
)






const style = StyleSheet.create({

    //--------------------- header---------------------
    container: {

        paddingVertical: 10,

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    userTab: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    headerImgaeContainer: {
        height: 40,
        width: 40,
        borderRadius: 100,
        overflow: 'hidden',
    },

    image: {
        width: "100%",
        height: "100%",
        // borderRadius: 100,
        resizeMode: 'contain',
        marginRight: 10,

    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'

    },

    //--------------------- POsts---------------------
    postContainer: {
        height: 450,
        width: '100%',
        overflow: 'hidden',
        paddingHorizontal: 15


    },
    postImg: {

        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    //--------------------- footer---------------------
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    threeIcons: {
        flexDirection: 'row'

    },
    footerIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 20,

    },
    saveIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },


})
