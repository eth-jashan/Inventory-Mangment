import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import { Button, TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from '../../store/action/auth'
import { withNavigation } from 'react-navigation';


const OtpModal = ({visible, toggleHandler, name, compName, verificationId, number, navigation, type}) => {
    
    const [otp, setOtp] = useState()
    const dispatch = useDispatch()
    const isNewUser = useSelector(x=>x.auth.newUser)

    const navigationhandler = (route) => {

        navigation.navigate(route)

    }

    const signuphandler = async() => {
        await dispatch(authAction.signupAccount(name, compName, verificationId, otp));
        if(isNewUser){
            navigationhandler("Setup")
        }else{
            navigationhandler('Main')
        }
        
    }

    const signinhandler = async() => {

        await dispatch(authAction.signinAccount(verificationId, otp));        
        navigationhandler('Main')        
    }

    return (
        
        <Modal
            onSwipeComplete={toggleHandler}
            swipeDirection="down"
            backdropOpacity = {0.4} 
            isVisible={visible}>
        <View style={{felx:1, backgroundColor:'white',bottom:0, position:'absolute',left:0, right:0, alignSelf:'center', height:Dimensions.get('window').height/3, borderRadius:12, padding:10}}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>    
            <Text style={{alignSelf:'center',fontFamily:'medium',fontSize:20}}>Sent OTP to </Text>
            <Text style={{alignSelf:'center',fontFamily:'book',fontSize:20, color:'red'}}>{number}</Text>
        </View>

        <View style={{width:'92%', alignSelf:'center', marginVertical:8}}>
            <TextInput
                value = {otp}
                onChangeText={(text)=>setOtp(text)}
                label="One time password"
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
        </View>

        <Button onPress={type==='login'?signinhandler:signuphandler} mode='contained' style={{backgroundColor:'#cb202d', width:'90%', alignSelf:'center', margin:12,padding:6, borderRadius:8}}>
            <Text style={styles.buttonStyle}>Confirm Otp</Text>
        </Button>

        <View style={{ flexDirection:'row', justifyContent:'center'}}>
        <Button onPress={toggleHandler}>
            <Text style={{color:'black'}}>Entered a wrong number. </Text>
            <Text style={{color:'red'}}>Change it.</Text>
        </Button>
        </View>

        </View>
        </Modal>

    );
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

export default withNavigation(OtpModal);