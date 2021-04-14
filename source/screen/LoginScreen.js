import React, { useState, useRef } from 'react'
import { Dimensions, StyleSheet, Text, View ,Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  TextInput } from 'react-native-paper';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from '../../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import OtpModal from '../component/otpModal';


const {width, height} = Dimensions.get('window')

const LoginScreen = ({navigation}) => {

    
    const [phoneNumber, setPhoneNumber] = useState()
    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        
    };    

    const signinHandler = async() => {
        const newNum = '+91'+phoneNumber
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        await phoneProvider.verifyPhoneNumber(newNum, recaptchaVerifier.current).then(setVerificationId)
        setModalVisible(true) 
       
    }

    return(
        <SafeAreaView>
        
        <FirebaseRecaptchaVerifierModal
                    ref = {recaptchaVerifier}
                    firebaseConfig = {firebase.app().options}
                    attemptInvisibleVerification={true}
        />
            <View style={{width:width, height:height, padding:16, justifyContent:'center'}}>

            <View style={{width:width,position:'absolute',top:height/5, left:16 }}>
                <Text style={styles.heading}>Signin to account</Text>
                <Text style={styles.heading2}>Simplify your inventory managment.</Text>
            </View>

            <View style={{width:width,justifyContent:'center', alignSelf:'center'}}>
            
            <View style={{width:'92%', alignSelf:'center',marginVertical:4}}>
            <TextInput
                value = {phoneNumber}
                onChangeText={(text)=>setPhoneNumber(text)}
                label="Phone Number"
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            </View>

            <TouchableOpacity onPress={signinHandler}>
            <View style={{backgroundColor:'#cb202d', width:width*0.9, alignSelf:'center', margin:12,padding:12, borderRadius:8}}>
                <Text style={{fontFamily:'book', color:'white', fontSize:18, alignSelf:'center'}}>Get Otp</Text>
            </View>
            </TouchableOpacity>

            <View style={{width:width, flexDirection:'row', justifyContent:'center'}}>
                <Text style={{fontFamily:'book',  fontSize:16}}>I'm new  merchant.  </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={{fontFamily:'book',  color:'red',  fontSize:16}}>Signup</Text>
                </TouchableOpacity>
            </View>

            <OtpModal
                type='login'
                visible={isModalVisible}
                toggleHandler={toggleModal}
                verificationId={verificationId}
            />

            
        </View>
        </SafeAreaView>
    )

}

LoginScreen.navigationOptions = (navData) => {
    return {
      header: () => {
        return false
      }
    }
}
const styles = StyleSheet.create({
    heading:{
        fontFamily:'medium',
        fontSize:28,
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

export default LoginScreen