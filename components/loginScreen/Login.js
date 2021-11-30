import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import  {Validator}  from 'email-validator'

const LoginSchema = yup.object().shape({
    email: yup.string().email().required('email is requid'),
    password:yup.string().required().min(8,'min 8 characters'),
})


export default function Login() {
    return (
        <View style={{ marginHorizontal: 10, }}>
            <Formik initialValues={
                {
                    email: '',
                    password:''
                }
            }
                onSubmit={values => {
                console.log(values);
                }}
                validationSchema={LoginSchema}
            >
                {({handleBlur,handleChange,handleSubmit,values,errors,isValid }) => (
                    
                        <View style={{ marginTop: 40, marginHorizontal: 10 }}>
                            <View style={style.textBox}>
                            <TextInput style={style.textField} onBlur={handleBlur('email')} onChangeText={handleChange('email')} placeholder='Phonenumber, Username, Email'></TextInput>
                            </View>

                            <View style={style.textBox}>
                                <TextInput style={style.textField} value={values.password} onBlur={handleBlur('password')} onChangeText={handleChange('password')} placeholder='Password' autoComplete={false} secureTextEntry={true}></TextInput>
                            </View>

                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: '#2d9efa' }}>Forgot Password?</Text>
                            </View>

                            <View style={{ marginTop: 50, }}>
                                <Button disabled={!isValid} onPress={handleSubmit} title="Log in" ></Button>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'center' }} >
                                <Text>Don't have an account?</Text>
                                <TouchableOpacity>
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
        borderColor:'#FAFAFA',
        height: 50,
        backgroundColor: '#dedede',
        borderRadius: 5,
        justifyContent: 'center',
       marginBottom:10,
        
        
        
    },
    textField: {
        paddingHorizontal:10,
    }
    
    
})
