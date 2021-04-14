import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { Text } from 'react-native'
import { View ,TouchableOpacity, StyleSheet} from 'react-native'
import { ScrollView,  } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductImageHandler from '../component/productImageHandler'
import {  TextInput, Button, Switch } from 'react-native-paper';
import ProductInfo from '../component/productInfo'
import SalesInfo from '../component/salesInfo'
import InventoryTracking from '../component/inventoryTracking'
const {width, height} = Dimensions.get('window')

const ItemForm = () => {
    
    const [sales, isSales] = useState(false);
    const [inventory, setInventory] = useState(false)
    const [costPrice, setCostPrice] = useState()
    const [sellPrice, setSellPrice] = useState()
    const [open, setOpen] = useState()
    const [reorder, setReorder] = useState()
    const [productName, setProdctName] = useState('')
    const [sku, setsku] = useState('')
    const [productUnit, setProductUnit] = useState();

    const [imageUri, setImageUri] = useState('')
    const ImageTaken = (imagePath) => {
        setImageUri(imagePath)
        console.log(imagePath)
    } 

    const submitHandler = () =>{ 
    console.log("Input :",)
    }

    return(
        <SafeAreaView>
        <ScrollView>
            <ProductInfo productName={productName} setProdctName={setProdctName} sku={sku} setsku={setsku} productUnit={productUnit} setProductUnit={setProductUnit} ImageTaken={ImageTaken} />
            
            <View style={{flexDirection:'row', justifyContent:'space-between', width:width*0.85, alignSelf:'center'}}>
            <Text style={{fontFamily:'medium', fontSize:22, alignSelf:'center', marginVertical:8}}>Sales Information</Text>
            <Switch color="red"  value={sales} onValueChange={()=>isSales(!sales)} />
            </View>
            {sales?<SalesInfo costPrice={costPrice} setCostPrice={setCostPrice} sellPrice={sellPrice} setSellPrice={setSellPrice} />:null}

            <View style={{flexDirection:'row', justifyContent:'space-between', width:width*0.85, alignSelf:'center'}}>
            <Text style={{fontFamily:'medium', fontSize:22, alignSelf:'center', marginVertical:8}}>Inventory Tracking</Text>
            <Switch color="red"  value={inventory} onValueChange={()=>setInventory(!inventory)} />
            </View>
            {inventory?<InventoryTracking open={open} setOpen={setOpen} reorder={reorder} setReorder={setReorder} />:null}
        
            <Button onPress={submitHandler}  mode='contained' style={{backgroundColor:'#cb202d', width:'90%', alignSelf:'center', margin:12,padding:6, borderRadius:8}}>
            <Text style={styles.buttonStyle}>Update Profile</Text>
            </Button>

        </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    heading:{
        fontFamily:'medium',
        fontSize:30,
        color:'black',  
    },
    heading2:{
        fontFamily:'medium',
        fontSize:20,
        color:'gray',  
    },
    buttonStyle:{
        fontFamily:'book', 
        fontSize:18
    }
})

ItemForm.navigationOptions = ({navigation}) => {
    
    return{
        header:()=>{
            return false
        }
    }
}

export default ItemForm