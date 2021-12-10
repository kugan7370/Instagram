import { onAuthStateChanged } from '@firebase/auth';
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { auth } from './Firebase'
import { SignedInStack, SignOutStack } from './Navigation'





export default function AuthNavigation() {
    // null means initial false so first login page will be assign then 
    // after signin state will be change to true so homepage will be assign
    const [currentUser, setCurrentUser] = useState(false);

    const useHandler = () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(true);
            }
            else {
                setCurrentUser(false);
            }
        })
    }
    useEffect(() => {
        useHandler();
    })



    return (
        <>
            {currentUser ? <SignedInStack /> : <SignOutStack />}
        </>
    )
}
