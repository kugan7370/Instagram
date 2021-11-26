import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

const Stack = createNativeStackNavigator();


export default function SignedINStack() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>

            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

