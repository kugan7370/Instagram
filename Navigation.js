import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ChatScreen from './screens/ChatScreen'
import MessageScreen from './screens/MessageScreen';

const Stack = createNativeStackNavigator();


export function SignedInStack() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='Chat' component={ChatScreen} />
                <Stack.Screen name='Message' component={MessageScreen} />
                <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}



export function SignOutStack() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='SignupScreen' component={SignupScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

