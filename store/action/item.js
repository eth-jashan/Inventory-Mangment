export const ADD_ITEM = "ADD_ITEM"
export const FETCH_ITEM = 'FETCH_ITEM'

import firebase from '../../firebase'
import ItemModel from '../../model/itemModel'

export const addItem = (sellPrice, costPrice, open, reorder, productName, productUnit, sku, imageUri, categoryId) => {

    return async (dispatch, getState) => {

        const uid = getState().auth.userId
        console.log(uid)
        
        const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/item.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                sellPrice, costPrice, open, reorder, productName, productUnit, sku,categoryId
            })
        })
        const resData = await response.json()
        const image = await fetch(imageUri);
        const blob = await image.blob();
        const ref = firebase.storage().ref(`${'items/product/' + `${resData.name}`}`);
        await ref.put(blob);
        const url = await firebase.storage().ref(`${'items/product/' + `${resData.name}/`}`).getDownloadURL();
        
        await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/item/${resData.name}.json?`,{
            method:'PATCH',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                image:url
            })
        })
        

        dispatch({type:ADD_ITEM, id:resData.name, sellPrice, costPrice, open, reorder, productName, productUnit, sku, url,categoryId})

    }

}

export const fetchItem = () => {

    return async (dispatch, getState)=>{

        const uid = getState().auth.userId
    const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/item.json?`)
    const resData = await response.json()
    
    const itemList = []

    for(const keys in resData){
    itemList.push(new ItemModel(keys, resData[keys].categoryId, resData[keys].sellPrice, resData[keys].costPrice,resData[keys].open, resData[keys].reorder, resData[keys].productName, resData[keys].productUnit, resData[keys].sku, resData[keys].image))
    }

    console.log("Item", itemList)

    dispatch({type:FETCH_ITEM, list:itemList})

    }

}