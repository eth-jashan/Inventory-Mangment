import React, { useCallback } from 'react';
import {View,ActivityIndicator,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import * as authActions from '../../store/action/auth';



const StartUpScreen = props => {
    const dispatch = useDispatch();

    const Authenticate = useCallback( async(userId,token) =>{
        await dispatch(authActions.authenticate(userId,token))
        props.navigation.navigate('Main')

    },[dispatch])

    useEffect(()=>{
        const tryLogin = async()=>{
            const userData = await AsyncStorage.getItem('userData');
            if(!userData){
                props.navigation.navigate('Auth')
                return;
            }
            const transformedData = JSON.parse(userData);
            const {token,userId,expiryDate} = transformedData;
            const expirationDate = new Date(expiryDate);

            if(
                //expirationDate<= new Date() || 
                !token || !userId)
                {
                props.navigation.navigate('Auth');
                return;
            }
            Authenticate(userId,token)
        };
        tryLogin();
    },[dispatch]);

    return(
        <View style = {styles.screen}>
            <ActivityIndicator color='#009efd' size = 'large'/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default StartUpScreen;