import DriverModel from "../../model/driverModel"

export const ADD_DRIVER = 'ADD_DRIVER'
export const DRIVER_FETCH = 'DRIVER_FETCH'

export const addDriver = (fullName, email, phoneNumber, birthdate, password) => {

    return async (dispatch, getState)=>{

        const uid = getState().auth.userId

        const signup = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMVcVMHiPs7_gle6nbQx-QmxPhgSZHN5M ',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })
        });
        
        const signupData = await signup.json();

        console.log('Signed Up',signupData)
        const empId = signupData.localId
        
        await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/driver/${empId}.json?`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:fullName,
                email:email,
                phoneNumber:phoneNumber,
                birthdate:birthdate,
                compId:uid
            })
        })
        
        const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/driver.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                name:fullName,
                email:email,
                phoneNumber:phoneNumber,
                birthdate:birthdate,
                empId:empId
            })
        })
        const resData = await response.json()
        
        dispatch({type:ADD_DRIVER, id:resData.name, name:fullName, phoneNumber:phoneNumber, email:email, birthdate:birthdate, empId:empId}) 

    }
}

export const driverFetch = () => {
    return async (dispatch, getState)=>{
    
    const uid = getState().auth.userId
    const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/driver.json?`)
    const resData = await response.json()
    
    const driverList = []

    for(const keys in resData){
    driverList.push(new DriverModel(keys, resData[keys].name, resData[keys].email, resData[keys].phoneNumber, resData[keys].birthDate, resData[keys].empId))
    }

    dispatch({type:DRIVER_FETCH, list:driverList})

}}