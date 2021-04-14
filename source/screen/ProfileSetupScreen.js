import React, { useState } from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextInput } from 'react-native-paper';
const {width, height} = Dimensions.get('window')
import DateTimePicker from '@react-native-community/datetimepicker';
import * as profileActon from '../../store/action/auth'

const ProfileSetup = ({navigation}) => {

    const companyName = 'Jaarx'
    const [city, setCity] = useState()
    const [state, setState] = useState()  
    const [pincode, setPincode] = useState()
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000))
    const [dateVisible, setVisible] = useState(false)
    const dispatch = useDispatch()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false)
        setVisible(true)
        console.log('Date:', currentDate)
    };

    
    
    const updateProfile = () => {

        dispatch(profileActon.updateProfile(pincode, state, city, date))
        navigation.navigate('Main')

    } 

    return(
        <SafeAreaView>
        <ScrollView>
            
            <View style={{padding:10}}>
                <Text style={{fontFamily:'medium',fontSize:30, color:'black'}}>Profile Setup</Text>
                <Text style={{fontFamily:'medium',fontSize:24, color:'red'}}>Let us know your need.</Text>
            </View>

            <View style={{width:width, alignSelf:'center', justifyContent:'center'}}>
            
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                disabled
                value = {companyName}
                label="Business Name"
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                keyboardType='number-pad'
                value = {pincode}
                onChangeText={setPincode}
                label='Postal Code'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {city}
                onChangeText={setCity}
                label='City'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {state}
                onChangeText={setState}
                label='State'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <TouchableOpacity onPress={()=>setShow(true)}>
            <View style={{width:'92%', alignSelf:'center', marginVertical:4, borderWidth:1, borderColor:'gray',padding:12, borderRadius:4}}>
            <Text style={{fontFamily:'book', fontSize:18}}>{dateVisible? date.toString() :"Select a start date"}</Text>
            </View>
            </TouchableOpacity>

            

            <Button onPress={updateProfile}  mode='contained' style={{backgroundColor:'#cb202d', width:'90%', alignSelf:'center', margin:12,padding:6, borderRadius:8}}>
            <Text style={styles.buttonStyle}>Update Profile</Text>
            </Button>

            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}

            </View>
        
        </ScrollView>
        </SafeAreaView>
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

export default ProfileSetup