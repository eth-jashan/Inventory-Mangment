import { ADD_ACCOUNT, AUTHENTICATE, SIGN_ACCOUNT, UPDATE_PROFILE } from "../action/auth"

const initialState = {
    
    userId:null,
    token:null,
    merchantName:null,
    phoneNumber:null,
    businessName:null,
    newUser:null,
    profileId:null,
    state:null,
    city:null,
    pincode :null
}

export default (state=initialState, action)=>{
    switch(action.type){
        case ADD_ACCOUNT:
                   
        return{
                ...state,
                userId:action.userId,
                token:action.token,
                merchantName:action.name,
                phoneNumber:action.number,
                businessName:action.compName,
                newUser:action.newUser,
                profileId:action.profileId
            }
        case UPDATE_PROFILE:
            const stateProvince = action.state
            const pincode = action.pincode
            const city = action.city
            const date = action.date
        return{
            ...state,
            state:stateProvince,
            pincode:pincode,
            city:city,
            date:date
        }
        case AUTHENTICATE:
            return{
                ...state,
                token : action.token,
                userId : action.userId,
                newUser:action.signedIn,
            }
        case SIGN_ACCOUNT:
             
            console.log('Action', action.userId, action.newUser, action.number, action.token)
            return{
                ...state,
                userId:action.userId,
                token:action.token,
                phoneNumber:action.number,
                newUser:action.newUser
            }
        
        default:
            return state
    }
}