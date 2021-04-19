import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import ProductCard from '../component/productCard'

const ProductList = ({navigation}) => {

    let category = navigation.getParam('item')
    let product = useSelector(x=>x.item.itemList)
    // product = product.filter(x=>x.catId === category.id)
    product = product.filter(x=>x.catId === category.id)
    console.log('Product', category, product)

    return(
        <SafeAreaView>
        <FlatList
            data={product}
            keyExtractor={x=>x.id}
            renderItem={({item})=>{
                return<ProductCard
                    item={item}
                    type='order'
                />
            }}
        />
        </SafeAreaView>
    )
}

ProductList.navigationOptions=({navigation}) => {

    return{
        header:()=>{
            return false
        }
    }

}

export default ProductList