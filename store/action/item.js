export const ADD_ITEM = "ADD_ITEM"
export const FETCH_ITEM = 'FETCH_ITEM'

export const addItem = (sellPrice, costPrice, open, reorder, productName, productUnit, sku, imageUri) => {

    return async (dispatch, getState) => {

        const uid = getState().auth.userId
        
        
        const response = await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/items.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                sellPrice, costPrice, open, reorder, productName, productUnit, sku
            })
        })
        const resData = await response.json()
        const image = await fetch(categoryImage);
        const blob = await image.blob();
        const ref = firebase.storage().ref(`${'items/product/' + `${resData.name}`}`);
        await ref.put(blob);
        const url = await firebase.storage().ref(`${'items/product/' + `${resData.name}/`}`).getDownloadURL();
        
        await fetch(`https://inventory-managment-1f9cc-default-rtdb.firebaseio.com/${uid}/category/${resData.name}.json?`,{
            method:'PATCH',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                image:url
            })
        })
        

        dispatch({type:ADD_ITEM, id:resData.name, sellPrice, costPrice, open, reorder, productName, productUnit, sku, url})

    }

}