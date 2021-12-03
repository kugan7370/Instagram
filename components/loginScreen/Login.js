import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import * as EmailValidator from 'email-validator';


import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '../../Firebase';
import { collection, getDocs, query } from '@firebase/firestore';





const LoginSchema = yup.object().shape({
    email: yup.string().email().required('email is requid'),
    password: yup.string().required().min(8, 'min 8 characters'),
})


export default function Login({ navigation }) {



    //--------------signWith username----------------------------------------

    const onLogin = async (email, password) => {

        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert("welcome!");




            // console.log("firebase login successfull",email,password);


        } catch (error) {
            Alert.alert(error.message);
        }



    }
    return (
        <View style={{ marginHorizontal: 10, }}>
            <Formik initialValues={
                {
                    email: '',
                    password: ''
                }
            }
                onSubmit={values => {
                    onLogin(values.email, values.password)
                }}
                validationSchema={LoginSchema}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (

                    <View style={{ marginTop: 40, marginHorizontal: 10 }}>
                        <View style={[style.textBox, { borderColor: values.email.length < 1 || EmailValidator.validate(values.email) ? '#ccc' : 'red' }]}>
                            <TextInput style={style.textField} onBlur={handleBlur('email')} onChangeText={handleChange('email')} placeholder='Phonenumber, Username, Email'></TextInput>
                        </View>

                        <View style={[style.textBox, { borderColor: 1 > values.password.length || values.password.length >= 8 ? '#ccc' : 'red' }]}>
                            <TextInput style={style.textField} value={values.password} onBlur={handleBlur('password')} onChangeText={handleChange('password')} placeholder='Password' autoComplete={false} secureTextEntry={true}></TextInput>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ color: '#2d9efa' }}>Forgot Password?</Text>
                        </View>

                        <View style={{ marginTop: 50, }}>
                            <Button disabled={!isValid} onPress={handleSubmit} title="Sign in" ></Button>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'center' }} >
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                                <Text style={{ color: '#2d9efa' }}> Sign Up</Text>
                            </TouchableOpacity>

                        </View>


                    </View>

                )}
            </Formik>
        </View>
    )
}

const style = StyleSheet.create({


    textBox: {
        borderWidth: 1,
        borderColor: '#FAFAFA',
        height: 50,
        backgroundColor: '#dedede',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10,



    },
    textField: {
        paddingHorizontal: 10,
    }


})
