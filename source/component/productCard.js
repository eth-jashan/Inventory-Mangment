import React from 'react'
import { Pressable } from 'react-native'
import { Dimensions } from 'react-native'
import {View, StyleSheet, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import { useSelector } from 'react-redux'

const {width, height} = Dimensions.get('window')
 
const ProductCard = ({item, navigation, type}) => {


    console.log('Item', item)

    return(
    
    <TouchableOpacity disabled={type==='order'?true:false} onPress={()=>navigation.navigate('Product',{item:item})}>
    <View style={{width:width*0.95, backgroundColor:'white', borderRadius:5, marginVertical:4, alignSelf:'center', padding:8}}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row'}}>
        <View style={{width:65, height:65, borderRadius:65}}>
        <Image
            style={{width:'100%', height:'100%', borderRadius:65}}
            source={{uri:item.imageUri}}
            resizeMode='cover'
        />
        </View>
        <View style={{alignSelf:'center', marginHorizontal:16}}>
        <Text style={{fontFamily:'medium', fontSize:20}}>{item.productName}</Text>
        <Text style={{fontFamily:'light', fontSize:16}}>{item.id}</Text>
        </View>      
    </View>
        <View style={{alignItems:'center',alignSelf:'center'}}> 
            <Text style={{fontFamily:'book', fontSize:20}}>{item.open}</Text>
            <Text style={{fontFamily:'book', color:'#96c43f'}}>In Stocks</Text>
        </View>    
        </View>
    </View>
    </TouchableOpacity>
    )

}
export default withNavigation(ProductCard)