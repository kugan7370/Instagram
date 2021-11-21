import React from 'react'
import { View, Text,Image, StyleSheet, ScrollView, } from 'react-native'

export default function Stories() {
    return (
        <View style={style.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <Image style={style.stories} source={{ uri:"https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"}}/>
                    <Text style={{}}>kugapriy..</Text>
                </View>
                <View>
                    <Image style={style.stories} source={{ uri:"https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"}}/>
                    <Text style={{}}>kugapriy..</Text>
                </View>
                <View>
                    <Image style={style.stories} source={{ uri:"https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"}}/>
                    <Text style={{}}>kugapriy..</Text>
                </View>
                <View>
                    <Image style={style.stories} source={{ uri:"https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"}}/>
                    <Text style={{}}>kugapriy..</Text>
                </View>
                <View>
                    <Image style={style.stories} source={{ uri:"https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"}}/>
                    <Text style={{}}>kugapriy..</Text>
                </View>
                <View>
                    <Image style={style.stories} source={{ uri:"https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"}}/>
                    <Text style={{}}>kugapriy..</Text>
                </View>
            </ScrollView>

           

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal:20,
    },
    stories: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth:3,
        borderColor: '#ff8501',
        marginRight: 20,   
        
    }
})