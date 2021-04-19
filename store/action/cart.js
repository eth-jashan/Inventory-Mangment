export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItem = (item) => {

    return async (dispatch, getState) => {

        dispatch({ADD_ITEM, item:item})
    }

}

export const removeItem = (item) => {

    return async (dispatch, getState) => {
        
        dispatch({REMOVE_ITEM, item:item})
    }

}