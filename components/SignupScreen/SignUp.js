import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import * as EmailValidator from 'email-validator';

const SignupSchema = yup.object().shape({
    email: yup.string().trim().email().required('email is requid'),
    password: yup.string().trim().required().min(8, 'min 8 characters'),
    username:yup.string().trim().required('username required'),
    confirmPassword:yup.string().trim().oneOf([yup.ref('password'), null], 'Passwords must match'),
})


export default function SignUp({navigation}) {
    return (
        <View style={{ marginHorizontal: 10, }}>
            <Formik initialValues={
                {
                    email: '',
                    password: '',
                    username: '',
                    confirmPassword:'',
                }
            }
                onSubmit={values => {
                console.log(values);
                }}
                validationSchema={SignupSchema}
            >
                {({handleBlur,handleChange,handleSubmit,values,errors,isValid }) => (
                    
                        <View style={{ marginTop: 40, marginHorizontal: 10 }}>
                            <View style={[style.textBox,{borderColor: values.email.length < 1 || EmailValidator.validate(values.email) ? '#ccc' : 'red' }]}>
                            <TextInput style={style.textField} onBlur={handleBlur('email')} onChangeText={handleChange('email')} placeholder='Phonenumber, Username, Email'></TextInput>
                        </View>
                        
                        <View style={[style.textBox,{borderColor: (1 > values.username.length || 1 < values.username.length )  ? '#ccc' :'red'}]}>
                                <TextInput style={style.textField} value={values.username} onBlur={handleBlur('username')} onChangeText={handleChange('username')} placeholder='username' autoComplete={false} ></TextInput>
                        </View>

                        <View style={[style.textBox,{borderColor: 1 > values.password.length || values.password.length >= 8  ? '#ccc' :'red'}]}>
                                <TextInput style={style.textField} value={values.password} onBlur={handleBlur('password')} onChangeText={handleChange('password')} placeholder='Password' autoComplete={false} secureTextEntry={true}></TextInput>
                        </View>

                        <View style={[style.textBox,{borderColor: 1 > values.confirmPassword.length || values.confirmPassword.length >= 8  ? '#ccc' :'red'}]}>
                                <TextInput style={style.textField} value={values.confirmPassword} onBlur={handleBlur('confirmPassword')} onChangeText={handleChange('confirmPassword')} placeholder='confirm Password' autoComplete={false} secureTextEntry={true}></TextInput>
                        </View>

                            

                            <View style={{ marginTop: 50, }}>
                            <Button disabled={!isValid} onPress={handleSubmit} title="Sign up"  ></Button>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'center' }} >
                                <Text>Already have an account?</Text>
                                <TouchableOpacity onPress={()=>navigation.push('LoginScreen')}>
                                    <Text style={{ color: '#2d9efa' }}> Log in</Text>
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

