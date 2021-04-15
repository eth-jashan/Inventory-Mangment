import React, { useState } from 'react'
import { View, Dimensions,Text, StyleSheet } from 'react-native'
import {  TextInput, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler'
import ImageHandler from '../component/imageHandler';
import * as categoryAction from '../../store/action/category'
import { useDispatch } from 'react-redux';




const CategoryForm = ({navigation}) => {

    const dispatch = useDispatch()
    const [categoryName, setCategoryName] = useState()
    const [categoryDescription, setCategoryDescription] = useState()
    const [categoryImage, setCategoryImage] = useState()

    const imageTaken = (uri) => {
        setCategoryImage(uri)
    }

    const categoryHandler = async() => {
        await dispatch(categoryAction.addcategory(categoryName, categoryDescription))
        navigation.navigate('Main')
    }  

    return(
        <ScrollView style={{width:Dimensions.get("window").width}}>
            
            {/* <ImageHandler
                onImageTaken = {imageTaken}
            /> */}
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {categoryName}
                onChangeText={setCategoryName}
                label='Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {categoryDescription}
                onChangeText={setCategoryDescription}
                label='Description'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            <Button onPress={categoryHandler}  mode='contained' style={{backgroundColor:'#cb202d', width:'90%', alignSelf:'center', margin:12,padding:6, borderRadius:8}}>
            <Text style={styles.buttonStyle}>Update Profile</Text>
            </Button>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    heading:{
        fontFamily:'medium',
        fontSize:30,
        color:'black',  
    },
    heading2:{
        fontFamily:'medium',
        fontSize:20,
        color:'gray',  
    },
    buttonStyle:{
        fontFamily:'book', 
        fontSize:18
    }
})

export default CategoryForm