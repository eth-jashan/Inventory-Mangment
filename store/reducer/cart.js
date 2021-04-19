import { ADD_ITEM } from "../action/cart"

class CartModel{
    constructor(id, name, quantity, totalSellingPrice, totalCostPrice){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.totalSellingPrice= totalSellingPrice;
        this.totalCostPrice = totalCostPrice
    }
}

const initialState = {
    item:{},
    cartTotal:0,
    cartItem:0
}

export default (state = initialState , action) => {

    switch(action.type){
        case ADD_ITEM:
            const item = action.item
            const itemInculde = Boolean(state.cartItem[item.id])
            if(itemInculde){
                const updatedItem = new CartModel(item.id,item.name,state.cartItem[item.id].quantity +1 )
            }
    }

}