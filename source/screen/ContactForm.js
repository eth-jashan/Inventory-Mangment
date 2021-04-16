import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text, View, Dimensions, TouchableOpacity} from 'react-native'
import {  TextInput, Button, Switch } from 'react-native-paper';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import * as contactAction from '../../store/action/contact'

const {width, height} = Dimensions.get('window')

const ContactForm = () => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [companyname, setCompanyName] = useState()
    const [displayName, setDisplayName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [mobile, setMobile] = useState()
    const [isBuisness, setBuisness] = useState()
    const dispatch = useDispatch()

    const addContacthandler = () => {
        dispatch(contactAction.addcontact(firstName, lastName, displayName, email, phone, mobile, isBuisness))
    }

    return(
        <SafeAreaView>
            <View style={{width:width, padding:8}}>

            <Pressable>
                <View style={{padding:4, backgroundColor:''}}></View>
            </Pressable>

            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {firstName}
                onChangeText={setFirstName}
                label='First Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {lastName}
                onChangeText={setLastName}
                label='Last Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {companyname}
                onChangeText={setCompanyName}
                label='Company Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {displayName}
                onChangeText={setDisplayName}
                label='Display Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {email}
                onChangeText={setEmail}
                label='Email Address'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{width:'92%', marginVertical:4, flexDirection:'row',alignSelf:'center'}}>
            <View style={{width:'48%',  marginVertical:4, marginRight:"4%"}}>
            <TextInput
                value = {phone}
                onChangeText={setPhone}
                label='Landline Number'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            <View style={{width:'48%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {mobile}
                onChangeText={setMobile}
                label='Phone Number'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            </View>

            <View style={{width:'100%', padding:8, flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text style={{fontFamily:'medium', fontSize:18, alignSelf:'center'}}>Individual</Text>
                <Switch
                    style={{alignSelf:'center'}}
                    value={isBuisness}
                    onValueChange={()=>setBuisness(!isBuisness)}
                    color='red'
                />
                <Text style={{fontFamily:'medium', fontSize:18,alignSelf:'center'}}>Buisiness</Text>
                
            </View>

            <TouchableOpacity onPress={addContacthandler}>
            <View style={{backgroundColor:'#cb202d', width:width*0.9, alignSelf:'center', margin:12,padding:12, borderRadius:8}}>
                <Text style={{fontFamily:'book', color:'white', fontSize:18, alignSelf:'center'}}>Add Contact</Text>
            </View>
            </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

ContactForm.navigationOptions = ({navigation}) => {
    
    return{
        header:()=>{
            return false
        }
    }
}

export default ContactForm