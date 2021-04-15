import ItemModel from "../../model/itemModel"
import { ADD_ITEM, FETCH_ITEM } from "../action/item"

const initialState={
    itemList:[],
    itemCount:0
}

export default (state=initialState, action) => {

    switch(action.type){
        case FETCH_ITEM:
            const list = action.list
            return{
                ...state,
                itemList:list,
                itemCount:list.length
            }
        case ADD_ITEM:
            const id = action.id
            const sellPrice = action.sellPrice
            const costPrice = action.costPrice
            const open = action.open 
            const reorder = action.reorder
            const productName = action.productName  
            const sku = action.sku
            const productUnit= action.productUnit
            const url = action.url
            const newItem = new ItemModel(id, 0, sellPrice, costPrice, open, reorder, productName, productUnit, sku, url) 
            const product = [...state.itemList]

            return{
                ...state,
                itemList:product.concat(newItem),
                itemCount:state.itemCount + 1
            }
        default:
            return state
        }

}