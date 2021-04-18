import React from 'react'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { Dimensions,TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductScreen = ({navigation}) => {

    const item = navigation.getParam('item')
    console.log('item', item)

    let profitPercent = (parseInt(item.sellPrice)/parseInt(item.costPrice)*100)

    return(
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'white'}}>
            
            <View style={{width:Dimensions.get('window').width, height:200}}>
            <Image
                resizeMode='cover'
                style={{width:'100%', height:'100%'}}
                source={{uri:item.imageUri}}
            />
            </View>
            <View style={{width:Dimensions.get('window').width, padding:12, flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                <Text style={{fontFamily:'medium', fontSize:30}}>{item.productName}</Text>
                <Text style={{fontFamily:'light', fontSize:18}}>{item.id}</Text>
                </View>
                <View style={{padding:4, backgroundColor:parseInt(item.open)>parseInt(item.reorder)?'#96c43f':'red',alignSelf:'center', borderRadius:10}}>
                    <Text style={{fontFamily:'book', fontSize:20, alignSelf:'center',color:'white'}}>{parseInt(item.open)>parseInt(item.reorder)?'In stock':'Low stock'}</Text>
                </View>
            </View>

            <View style={{width:'90%', borderWidth:0.75, borderColor:'gray', marginTop:16, alignSelf:'center'}}/>
            <Text style={{fontFamily:'medium', fontSize:20, alignSelf:'center',margin:8}}>Stock Information</Text>

            
            <View style={{width:'90%', backgroundColor:'#ececec',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row', marginVertical:4 }}>
            <View style={{width:50, height:50,  alignItems:'center', justifyContent:'center'}}> 
            <Image
                resizeMode='contain'
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/now-in-stock.png?alt=media&token=9bb39580-74d8-46d3-8214-9ce23499c4a2'}}
                style={{width:'100%', height:'100%'}}
            />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>{item.open}</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Products In Hand</Text>
            </View>
            </View>

            <View style={{width:'90%', backgroundColor:'#ececec',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row', marginVertical:4 }}>
            <View style={{width:50, height:50, backgroundColor:'#6b52ae', borderRadius:50, alignItems:'center', justifyContent:'center'}}> 
            <Image
                resizeMode='contain'
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/low-battery.png?alt=media&token=4a1c86c6-e3af-49fe-8fc9-02c9b64b677e'}}
                style={{width:'100%', height:'100%'}}
            />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>{item.reorder}</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Reorder Level</Text>
            </View>
            </View>
            
            <View style={{width:'90%', backgroundColor:'#ececec',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row', marginVertical:4 }}>
            <View style={{width:50, height:50,  alignItems:'center', justifyContent:'center'}}> 
            <Image
                resizeMode='contain'
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/estate-agent.png?alt=media&token=e95b1368-5269-4dfe-8fba-c60d2f222d85'}}
                style={{width:'100%', height:'100%'}}
            />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>{item.open}</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Products For Sale</Text>
            </View>
            </View>

            <View style={{width:'90%', borderWidth:0.75, borderColor:'black', marginTop:16, alignSelf:'center'}}/>
            <Text style={{fontFamily:'medium', fontSize:20, alignSelf:'center',margin:8}}>Cost Information</Text>

            <View style={{width:'90%', backgroundColor:'#ececec',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row', marginVertical:4 }}>
            <View style={{width:50, height:50,  alignItems:'center', justifyContent:'center'}}> 
            <Image
                resizeMode='contain'
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/profits.png?alt=media&token=573e2efd-402a-4910-a31a-5ce9e747a4ae'}}
                style={{width:'100%', height:'100%'}}
            />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>{item.sellPrice}</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Sell Price of product</Text>
            </View>
            </View>

            <View style={{width:'90%', backgroundColor:'#ececec',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row', marginVertical:4 }}>
            <View style={{width:50, height:50,  alignItems:'center', justifyContent:'center'}}> 
            <Image
                resizeMode='contain'
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/profit.png?alt=media&token=b5ef0617-ed76-4ea8-bfd7-de4355b01283'}}
                style={{width:'100%', height:'100%'}}
            />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>{profitPercent}</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Profit per order(in %)</Text>
            </View>
            </View>
            
            <View style={{width:'90%', backgroundColor:'#ececec',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row', marginVertical:4 }}>
            <View style={{width:50, height:50,  alignItems:'center', justifyContent:'center'}}> 
            <Image
                resizeMode='contain'
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/inventory-managment-1f9cc.appspot.com/o/affordable.png?alt=media&token=df969670-7e0f-42eb-b19f-72accc57dbfd'}}
                style={{width:'100%', height:'100%'}}
            />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>{item.costPrice}</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Cost Price of product</Text>
            </View>
            </View>

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