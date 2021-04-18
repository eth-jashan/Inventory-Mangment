import React, { useState } from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import {View, Text} from 'react-native'
import {  TextInput, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as driverAction from '../../store/action/driver'
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';

const CreateDriver = ({navigation}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const {width, height} = Dimensions.get('window')

    // let mailAdress   

    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000))
    const [dateVisible, setVisible] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState()

    const dispatch = useDispatch()

    const driverHandler = async() => {
        if(password === repassword){
        await dispatch(driverAction.addDriver(firstName+' '+lastName, email,phoneNumber,date, password ))
        navigation.navigate('Main')
    }
        else{
            alert('Both Password Do not Match !')
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false)
        setVisible(true)
        console.log('Date:', currentDate)
    };

    return(
        <SafeAreaView style={{flex:1}}>

        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {firstName}
                onChangeText={(data)=>setFirstName(data)}
                label='First Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
        </View>

        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {lastName}
                onChangeText={(data)=>setLastName(data)}
                label='Last Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
        </View>

        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {phoneNumber}
                onChangeText={setPhoneNumber}
                label='Phone Number'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
        </View>

        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {email}
                onChangeText={setEmail}
                label='User Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
        </View>

        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {password}
                onChangeText={setPassword}
                label='Password'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
        </View>

        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {repassword}
                onChangeText={setRePassword}
                label='Re-Enter Password'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
        </View>

        
        <TouchableOpacity onPress={()=>setShow(true)}>
            <View style={{width:'92%', alignSelf:'center', marginVertical:4, borderWidth:1, borderColor:'gray',padding:12, borderRadius:4}}>
            <Text style={{fontFamily:'book', fontSize:18}}>{dateVisible? date.toString() :"Select birth date"}</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={driverHandler}>
            <View style={{backgroundColor:'#cb202d', width:width*0.9, alignSelf:'center', margin:12,padding:12, borderRadius:8}}>
                <Text style={{fontFamily:'book', color:'white', fontSize:18, alignSelf:'center'}}>Add Contact</Text>
            </View>
        </TouchableOpacity>

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

        </SafeAreaView>
    )

}

CreateDriver.navigationOptions=({navigation})=>{
    return{
        header:()=>{

            return false
            
        }
    }
}

export default CreateDriver