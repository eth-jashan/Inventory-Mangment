import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import CategoryCard from '../component/categoryCard'


const CategoryCatalogue = () => {

    const categoryList = useSelector(x=>x.category.categoryList)

    return(
        <SafeAreaView>
           <FlatList
               data = {categoryList}
               keyExtractor={x=>x.id}
               renderItem={({item}) =>{
                   return<CategoryCard
                       item={item}
                       type='order'/>
               }}
           /> 
        </SafeAreaView>
    )

}

CategoryCatalogue.navigationOptions=()=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default CategoryCatalogue