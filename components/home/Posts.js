import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


export default function Posts() {
    return (
        <View style={style.container}>
            <View style={{borderBottomColor: '#F8F8F8',borderBottomWidth: 2,}}/>
            <PostHeader />
            <PostImage />
            <PostFooter />
            
        </View>
    )
}



 function PostHeader() {
    return (
        <View style={style.headerContainer}>
            <View style={ style.userTab}>
                <Image style={style.image} source={{uri:'https://s3media.247sports.com/Uploads/Assets/769/656/9656769.jpg'}}></Image>
                <Text style={{ fontWeight: 'bold' }}>kugapri</Text>
            </View>

            <View>
                <Image style={style.icon} source={require('../../assets/Images/Icons/icons8-menu-vertical-64.png')}></Image>
            </View>
        </View>
    )
}




 function PostImage() {
    return (
        <View style={style.postContainer}>
            <Image style={style.postImg} source={{uri:'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'}}></Image>
        </View>
    )
}




function PostFooter() {
    return (
        <View>
            <FooterIcons />
            <FooterLikes />
            <Comments/>
        </View>
        
       
    )
}

const FooterIcons = () =>(
    <View style={style.footerContainer}>
        <View style={style.threeIcons} >
            <Image style={style.footerIcon} source={require('../../assets/Images/Icons/icons8-heart-50.png')}/>
            <Image style={style.footerIcon} source={require('../../assets/Images/Icons/icons8-speech-bubble-64.png')}/>
            <Image style={style.footerIcon} source={require('../../assets/Images/Icons/icons8-sent-150.png')} />
            
        </View>
    
        <View>
        <Image style={style.saveIcon} source={require('../../assets/Images/Icons/icons8-save-search-64.png')} />
        </View>
    
    </View>
    
)


const FooterLikes = ()=>(
    <View >
        <Text style={{marginLeft:20,fontWeight:'bold',}} >7,320 likes</Text>
    </View>
)

const Comments = () => (
    <View style={{ marginLeft: 20, }}>
        <Text >
            <Text style={{fontWeight: 'bold'}} >kugan </Text>
            <Text >woooooooooooooooow</Text>
        </Text>

        <Text style={{ color: 'grey' }} >View all 2 comments</Text>
        <Text >
            <Text style={{fontWeight: 'bold'}} >priyan </Text>
            <Text >this is a miracle, ww0!..</Text>
        </Text>
    </View>
)






const style = StyleSheet.create({

   //--------------------- header---------------------
    container: {
        
        marginVertical:10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom:10,    
    },
    userTab: {
        flexDirection: 'row',
        alignItems:'center'
        
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        resizeMode: 'contain',
        marginRight:10,
        
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
        
    },

     //--------------------- POsts---------------------
    postContainer: {
        height: 450,
        width:'100%'   
    },
    postImg: {
       
        height: '100%',
        resizeMode:'cover',
    },
 //--------------------- footer---------------------
 footerContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginHorizontal: 20,
     marginVertical:10,
    },
    threeIcons: {
        flexDirection: 'row'
        
    },
    footerIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight:20,
        
    },
    saveIcon:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },

    
})
