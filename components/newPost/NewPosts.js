import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormikPostUpload from './FormikPostUpload'


export default function NewPosts({navigation}) {
    return (
        <View>
            <NewPostHeader navigation={navigation}/>
            <FormikPostUpload navigation={navigation}/>
        </View>
      


    )
}

const NewPostHeader = ({navigation}) => {
    return (
        <View style={style.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image style={style.backIcon} source={require('../../assets/Images/Icons/icons8-back-64.png')}></Image>
        </TouchableOpacity>

        <Text style={{fontWeight:'bold', fontSize:20}}>New Posts</Text>
        <Text></Text>
    </View>
    )
}
    




const style = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        

    },
    backIcon: {
        height: 30,
        width:30,
    },
    
})
