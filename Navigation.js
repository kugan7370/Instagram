import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


const Stack = createNativeStackNavigator();


export default function SignedINStack() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="SignupScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='SignupScreen' component={SignupScreen}/>

            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

