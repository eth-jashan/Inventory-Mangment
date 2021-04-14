import CategoryModel from "../../model/categoryModel"
import { ADD_CATEGORY, FETCH_CATEGORY } from "../action/category"

const initialState = {
    categoryList:[],
    categoryCount :0
}

export default (state = initialState, action) => {

    switch(action.type){
        case ADD_CATEGORY:
            const name = action.name
            const description = action.description
            const image = action.image
            const id = action.id
            const newcategory = new CategoryModel(id, name, description, image)
            
        return{
            ...state,
            categoryList:[...state.categoryList].concat(newcategory),
            categoryCount: state.categoryCount + 1
        }

        case FETCH_CATEGORY:
            const list = action.list
            const count = action.list.length
            
        return{
            ...state,
            categoryList:list,
            categoryCount:count
        }

        default:
            return state
    }

}