import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { Text } from 'react-native'
import { View ,TouchableOpacity} from 'react-native'
import { ScrollView,  } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductImageHandler from '../component/productImageHandler'
import {  TextInput, Button } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { useSelector } from 'react-redux'
const {width, height} = Dimensions.get('window')

const ProductInfo = ({productName, setProdctName, sku, setsku, productUnit, setProductUnit, ImageTaken, categoryId, setCategory}) => {

    const category  = useSelector(x=>x.category.categoryList)
    console.log('Category', category)
    const onImageTaken = (imagePath) => {
     
        ImageTaken(imagePath)
        console.log(imagePath)
    } 
    
    const unitData = ['kg', 'km', 'cm', 'dz', 'm','box', 'pcs', 'mg', 'lb', 'inch', 'g', 'ft'] 

    return(
        <View>
        <View style={{width:width, padding:12}}>

            <ProductImageHandler
                onImageTaken={onImageTaken}
            />
            
            </View>
            
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {productName}
                onChangeText={setProdctName}
                label='Product Name'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>

            <View style={{alignSelf:'center',
              height: 60, width: '92%', borderWidth: 1, borderColor: 'gray', marginVertical: 7, borderRadius: 5,
            }}
            >
            <Picker
                prompt='Select a category for product'
                style={{ height: 60, width: '100%' }}
                selectedValue={categoryId}
                onValueChange={(itemValue, itemIndex) =>setCategory(itemValue)}>
                {category.map((item)=>{
                    return <Picker.Item   key={item.id} label={item.name} value={item.id} />
                })}
            </Picker>
            </View>
            
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {sku}
                onChangeText={setsku}
                label='Product SKU'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            
            <View style={{alignSelf:'center',
              height: 60, width: '92%', borderWidth: 1, borderColor: 'gray', marginVertical: 7, borderRadius: 5,
            }}
            >
            <Picker
                prompt='Select a unit for product'
                style={{ height: 60, width: '100%' }}
                selectedValue={productUnit}
                onValueChange={(itemValue, itemIndex) =>setProductUnit(itemValue)}>
                {unitData.map((item)=>{
                    return <Picker.Item   key={item} label={item} value={item} />
                })}
            </Picker>
            </View>
            </View>
    )

}
export default ProductInfo