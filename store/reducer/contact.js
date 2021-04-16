import ContactModel from "../../model/contactModel"
import { ADD_CONTACT, FETCH_CONTACT } from "../action/contact"

const initailState = {
    contactList:[],
    contactCount:0
}

export default (state = initailState, action) => {

    switch(action.type){
        case FETCH_CONTACT:
        
        return{
            contactList:action.list,
            contactCount:action.list.length
        }

        case ADD_CONTACT:
        const newContact = new ContactModel(action.id, action.name, action.last, action.displayName, action.email, action.phone, action.mobile, action.businessType )
        const contactNumber = state.contactCount

        return{
            ...state,
            contactList:[...state.contactList].concat(newContact),
            contactCount:contactNumber+1
        }

        default:
            return state
        }

}