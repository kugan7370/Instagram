import { onAuthStateChanged } from '@firebase/auth';
import React, { useState,useEffect } from 'react'
import { View, Text } from 'react-native'
import { auth } from './Firebase'
import { SignedInStack, SignOutStack } from './Navigation'





export default function AuthNavigation() {
    // null means initial false so first login page will be assign then 
    // after signin state will be change to true so homepage will be assign
    const [currentUser, setCurrentUser] = useState(null);

    const useHandler = (user) => {
        user?setCurrentUser(user):setCurrentUser(null)
    }

     useEffect(()=>onAuthStateChanged(auth, (user) => useHandler(user)),[])  
    

   
    return (
        <>
            {currentUser? <SignedInStack/>: <SignOutStack/>}
        </>
    )
}
