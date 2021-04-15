import React, { useState, useCallback, useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CreateModal from '../component/createModal'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native';
import * as categoryaction from '../../store/action/category'
import * as itemaction from '../../store/action/item'

const {width, height} = Dimensions.get('window').width

const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const category = useSelector(x=>x.category.categoryList)
    console.log('Category:', category) 
    const [visible, setVisible] = useState(false)
    const [load, setLoad] = useState(false)

    const fetchAction = useCallback( async() => {
        
        setLoad(true)
        dispatch(categoryaction.categoryFetch())    
        // dispatch(itemaction.fetchItem())
        setLoad(false)
    
    },[dispatch, setLoad])
    
    useEffect(()=>{
    
        const willFocusListener = navigation.addListener('didFocus',fetchAction)
        return()=>{
            willFocusListener.remove();
        };
    
    },[fetchAction]);
    
    
    useEffect(()=>{
    
        fetchAction()
        
    },[fetchAction, dispatch])

    const userId = useSelector(x=>x.auth.userId)
    console.log('Userid', userId)

    

    const visibility = () => {
        setVisible(!visible)
        console.log(visible)
    }

    return(

        <SafeAreaView>
        <View style={{width:width, height:height }}>
                   
            <View style={{height:65, width:65, position:'absolute', borderRadius:50, backgroundColor:'#cb202d',top:Dimensions.get('window').height - 100, left:Dimensions.get('window').width - 80, justifyContent:'center'}}>
            <TouchableOpacity onPress={visibility}>
            <Ionicons style={{alignSelf:'center'}} name="add" size={26} color="white" />
            </TouchableOpacity>
            </View>

            <CreateModal
                visible={visible}
                dismisshandler={visibility}
            />
            <View style={{margin:16}}>
            <Text style={{fontFamily:'medium', fontSize:24}}>Inventory Summary</Text>
            </View>
            <View style={{width:'90%', backgroundColor:'white',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row' }}>
            
            <View style={{width:50, height:50, backgroundColor:'orange', borderRadius:50, alignItems:'center', justifyContent:'center'}}>
            <MaterialIcons name="category" size={30} color="white" />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>8</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Categories Added</Text>
            </View>

            </View>

            <View style={{width:'90%', backgroundColor:'white',padding:8,alignSelf:'center',borderRadius:5, flexDirection:'row', marginVertical:16 }}>
            
            <View style={{width:50, height:50, backgroundColor:'#6b52ae', borderRadius:50, alignItems:'center', justifyContent:'center'}}>
            <Ionicons name="ios-cart" size={30} color="white" />
            </View>
            <View style={{alignSelf:'center', marginLeft:24}}>
                <Text style={{fontFamily:'black', fontSize:28}}>10</Text>
                <Text style={{fontFamily:'book', fontSize:20}}>Products Added</Text>
            </View>
            
            </View>
            
        </View>
        </SafeAreaView>
    )

}

MainScreen.navigationOptions = ({navigation}) => {
    
    return{
        header:()=>{
            return false
        }
    }
}

export default MainScreen