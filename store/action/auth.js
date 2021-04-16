export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const SIGN_ACCOUNT = 'SIGN_ACCOUNT'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const AUTHENTICATE = 'AUTHENTICATE'
import AsyncStorage from '@react-native-community/async-storage'

import firebase from '../../firebase'


export const authenticate = (uid,token) => {
   return async (dispatch) => {      
    dispatch({type:AUTHENTICATE,token:token,userId:uid,signedIn:false})
   }
}

export const signinAccount = (verificationId, code) => {

    return async (dispatch, getState) => {

        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId,code)
        const auth = await firebase.auth().signInWithCredential(credential)

        const token = await auth.user.getIdToken(true)
        const userId = auth.user.uid
        const signedIn = auth.additionalUserInfo.isNewUser
        const number = auth.user.phoneNumber

        let expireTime =  (await auth.user.getIdTokenResult()).expirationTime
        expireTime = new Date(expireTime).getTime()/1000
        let issuedTime = (await auth.user.getIdTokenResult()).issuedAtTime
        issuedTime = new Date(issuedTime).getTime()/1000
        let expiration = expireTime - issuedTime

        console.log('Userid:', userId)

        dispatch({type:SIGN_ACCOUNT, token:token, userId:userId, newUser:signedIn, number:number})
        const expirationDate = new Date(new Date().getTime() + parseInt(expiration)*1000);
        saveDataToStorage(token,userId,expirationDate);
    }

}

export const signupAccount = (name, compName, verificationId, code) => {

    return async (dispatch, getState) => {

        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId,code)
        const auth = await firebase.auth().signInWithCredential(credential)

        const token = await auth.user.getIdToken(true)
        const userId = auth.user.uid 
        const signedIn = auth.additionalUserInfo.isNewUser
        const number = auth.user.phoneNumber

        const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${userId}/info.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                merchantName:name,
                merchantMumber:number,
                businessName:compName
            })
        })

        const resData =  await response.json()

        let expireTime =  (await auth.user.getIdTokenResult()).expirationTime
        expireTime = new Date(expireTime).getTime()/1000
        let issuedTime = (await auth.user.getIdTokenResult()).issuedAtTime
        issuedTime = new Date(issuedTime).getTime()/1000
        let expiration = expireTime - issuedTime

        dispatch({type:ADD_ACCOUNT, token:token, userId:userId, newUser:signedIn, name:name, compName:compName, number:number, profileId: resData.name})
        const expirationDate = new Date(new Date().getTime() + parseInt(expiration)*1000);
        saveDataToStorage(token,userId,expirationDate);
    }

}


export const updateProfile = (pincode, state, city, date) => {
    return async (dispatch, getState)=>{
        const id = getState().auth.profileId
        const uid = getState().auth.userId

        fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/info/${id}.json?`,{
            method:'PATCH',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                postalCode:pincode,
                state:state,
                city:city,
                date:date
            })
        })

        dispatch({type:UPDATE_PROFILE, state:state, pincode:pincode, city:city, date:date})
        
    }
}


const saveDataToStorage = (token,userId,expiryDate) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token:token,
        userId:userId,
        expiryDate:expiryDate.toISOString()
    }));
}