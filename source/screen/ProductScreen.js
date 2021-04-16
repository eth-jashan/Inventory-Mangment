import React from 'react'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { Dimensions } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductScreen = ({navigation}) => {

    const item = navigation.getParam('item')
    console.log('item', item)

    return(
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'white'}}>
            
            <View style={{width:Dimensions.get('window').width, height:200}}>
            <Image
                resizeMode='cover'
                style={{width:'100%', height:'100%'}}
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/items%2Fproduct%2F-MYJ0tIN1ahGLlWpT890?alt=media&token=e32a8764-3280-4ac2-a21e-8717268e4ec3'}}
            />
            </View>
            <View style={{width:Dimensions.get('window').width, padding:12}}>
                <Text style={{fontFamily:'medium', fontSize:30}}>{item.productName}</Text>
                <Text style={{fontFamily:'light', fontSize:18}}>{item.id}</Text>
            </View>

            <View style={{width:'90%', borderWidth:0.75, borderColor:'black', marginTop:16, alignSelf:'center'}}/>
            <Text style={{fontFamily:'medium', fontSize:20, alignSelf:'center',margin:8}}>Stock Information</Text>

            <View style={{width:'90%', borderWidth:0.75, borderColor:'black', marginTop:16, alignSelf:'center'}}/>
            <Text style={{fontFamily:'medium', fontSize:20, alignSelf:'center',margin:8}}>Cost Information</Text>

        </ScrollView>
        </SafeAreaView>
    )

}

ProductScreen.navigationOptions=({navigation})=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default ProductScreen