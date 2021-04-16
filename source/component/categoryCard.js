import React from 'react'
import { Dimensions } from 'react-native'
import {View, StyleSheet, Text} from 'react-native'
import { useSelector } from 'react-redux'

const {width, height} = Dimensions.get('window')
 
const CategoryCard = ({item}) => {

    let product = useSelector(x=>x.item.itemList) 
    product = product.filter(x=>x.catId === item.id)
    console.log('item:', product)
    

    return(
    <View style={{width:width*0.9, backgroundColor:'white', borderRadius:5, marginVertical:4, alignSelf:'center', padding:8, flexDirection:'row', justifyContent:'space-between'}}>
        
        <View>
        <Text style={{fontFamily:'medium', fontSize:20}}>{item.name}</Text>
        <Text style={{fontFamily:'light', fontSize:16}}>{item.id}</Text>
        </View>

     
        <Text style={{fontFamily:'book', fontSize:20, alignSelf:'center'}}>{product.length}</Text>
        
        
        </View>
    )

}
export default CategoryCard