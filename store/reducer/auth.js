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
            const token = action.token
            const userId = action.userId
            const newUser = action.newUser
            const name = action.name
            const compName = action.compName
            const number = action.number
            const id = action.profileId
        
        return{
                ...state,
                userId:userId,
                token:token,
                merchantName:name,
                phoneNumber:number,
                businessName:compName,
                newUser:newUser,
                profileId:id
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
            return{
                ...state,
                token:action.token,
                userId:action.userId,
                newUser:action.newUser,
                phoneNumber:action.number
            }
        
        default:
            return initialState
    }
}