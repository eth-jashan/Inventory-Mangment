import ContactModel from "../../model/contactModel"

export const ADD_CONTACT= 'ADD_CONTACT'
export const FETCH_CONTACT = 'FETCH_CONTACT'
export const addcontact = (name, last, displayName,email, phone, mobile, businessType ) => {

    return async (dispatch, getState) => {

        const uid = getState().auth.userId

        const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/contact.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                name, last, displayName,email, phone, mobile, businessType 
            })
        })
        const resData = await response.json()

        dispatch({type:ADD_CONTACT, id:resData.name, name, last, displayName,email, phone, mobile, businessType })

    }

}

export const contactFetch = () => {
    return async (dispatch, getState)=>{
    
    const uid = getState().auth.userId
    const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/contact.json?`)
    const resData = await response.json()
    
    const contactList = []

    for(const keys in resData){
    contactList.push(new ContactModel(keys, resData[keys].name, resData[keys].last, resData[keys].displayName, resData[keys].email, resData[keys].phone, resData[keys].mobile, resData[keys].businessType  ))
    }

    dispatch({type:FETCH_CONTACT, list:contactList})

}}