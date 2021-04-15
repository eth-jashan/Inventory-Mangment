export const ADD_CATEGORY = 'ADD_CATEGORY'
export const FETCH_CATEGORY = 'FETCH_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

import firebase from '../../firebase'
import CategoryModel from '../../model/categoryModel'

export const addcategory = (categoryName, categoryDescription) => {

    return async (dispatch, getState) => {

        const uid = getState().auth.userId
        
        // const uid = '1'
        const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/category.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                name:categoryName,
                description:categoryDescription
            })
        })
        const resData = await response.json()
        
        

        dispatch({type:ADD_CATEGORY, id:resData.name, name:categoryName, description:categoryDescription})

    }

}

export const categoryFetch = () => {
    return async (dispatch, getState)=>{
    
    const uid = getState().auth.userId
    const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/category.json?`)
    const resData = await response.json()
    
    const categoryList = []

    for(const keys in resData){
    categoryList.push(new CategoryModel(keys, resData[keys].name, resData[keys].description  ))
    }

    dispatch({type:FETCH_CATEGORY, list:categoryList})

}}