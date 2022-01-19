import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Messages({ chat }) {
    return (
        <View>
            <Text>{chat.text}</Text>

        </View>
    )
}
