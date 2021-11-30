import { Formik } from 'formik'
import React, { useState } from 'react'
import { View, Text, Image, TextInput,StyleSheet, Button } from 'react-native'
import * as yup from 'yup'
import validUrl from 'valid-url'

const placehorderImage = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg';


export default function FormikPostUpload() {

    const uploadPostSchema = yup.object().shape({
        imageUrl: yup.string().url().required('url required!'),
        caption: yup.string().max(2200, 'maximum 2200 words'),
    })

    const [thumnail, setThumnail] = useState(placehorderImage)
    return (
        <Formik
            initialValues={
                {
                    caption: '',
                    imageUrl:'',
                }
        }
            onSubmit={values => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, isValid, errors }) => (
                
                <View style={style.postContainer}>
                    <View style={style.captionContainer}>
                        <Image style={style.image} source={{uri:validUrl.isUri(thumnail)?thumnail:placehorderImage} }></Image>
                        <TextInput style={style.caption} placeholder='Caption here' multiline={true} onChangeText={handleChange('caption')} onBlur={handleBlur('caption')} value={values.caption}/>
                    </View>

                    <View>
                        <View style={{borderBottomColor: '#F8F8F8',borderBottomWidth: 2,}}/>
                        <TextInput style={{ marginTop: 20 }} onChange={(e)=>setThumnail(e.nativeEvent.text)} placeholder="Url here" multiline={true} onChangeText={handleChange('imageUrl')} onBlur={handleBlur('imageUrl')} value={values.imageUrl} />
                        {errors.imageUrl && (
                        <Text style={{ color: 'red', fontSize: 10 }}>{errors.imageUrl}</Text>)}
                    </View>

                    <View style={{marginTop:20,}}>
                        <Button disabled={!isValid}  title='Share' onPress={handleSubmit}></Button>
                    </View>
                    
                    




                </View>
            )}



        </Formik>
    )
}



const style = StyleSheet.create({
    postContainer: {
        marginVertical: 20,
        marginHorizontal:20,
    },
    image: {
        width: 100,
        height:100,
    },
    captionContainer: {
        flexDirection: 'row',
        alignItems:'flex-start'
        
        
    },
    caption: {
        marginLeft:30,
    }
})