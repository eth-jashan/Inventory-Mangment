import React from 'react'
import { Text, View ,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useSelector} from 'react-redux'
import CategoryCard from '../component/categoryCard'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Pressable } from 'react-native'
import ProductCard from '../component/productCard'

const ListPage = ({navigation}) => {

    const type = navigation.getParam('type')
    const title = navigation.getParam('title')

    const category = useSelector(x=>x.category.categoryList)
    const item = useSelector(x=>x.item.itemList)
    const contact = useSelector(x=>x.contact.contactList)
    
    console.log("Type",item)
    
    return(
        <SafeAreaView>
        {/* <Pressable onPress={()=>navigation.navigate('CategoryForm')} style={{height:65, width:65,  borderRadius:50, backgroundColor:'#cb202d',top:Dimensions.get('window').height - 100, left:Dimensions.get('window').width - 80, justifyContent:'center'}}>
       
            <Ionicons style={{alignSelf:'center'}} name="add" size={26} color="white" />
  
        </Pressable> */}
        <Text style={{fontFamily:'book', fontSize:28, alignSelf :'center'}}>{title}</Text>
        {type==='category'?<FlatList
            style={{marginVertical:8}}
            data={category}
            keyExtractor={x=>x.id}
            renderItem={({item}) => {
                return<CategoryCard
                    item={item}
                />
            }}
        />:null}

        {type==='item'?<FlatList
            style={{marginVertical:8}}
            data={item}
            keyExtractor={x=>x.id}
            renderItem={({item}) => {
                return<ProductCard
                    item={item}
                />
            }}
        />:null}

        </SafeAreaView>
    )

}

ListPage.navigationOptions=()=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default ListPage