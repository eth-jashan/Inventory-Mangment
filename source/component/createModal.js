import React from 'react'
import { Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import {View, StyleSheet, Text,TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const CreateModal = ({visible, dismisshandler, navigation}) => {

    const navigationhandler = (route) => {

        dismisshandler()
        navigation.navigate(route)
    }    

    return(
        <Modal
            backdropOpacity={0.4}
            isVisible={visible}
        >
            <View style={{width:Dimensions.get('window').width*0.9, height:Dimensions.get('window').height*0.9, backgroundColor:'white',alignItems:'center', padding:16, borderRadius:12}}>
                
                <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'medium', fontSize:24, alignSelf:'center'}}>Update Inventory</Text>
                    <Button
                        onPress={dismisshandler}
                        type='clear'
                        title='Close'
                    />
                </View>
                
                
                <View style={{width:'100%', padding:8, marginVertical:16, alignSelf:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>navigationhandler('CategoryForm')}>
                <View style={{width:'100%', flexDirection:'row-reverse', justifyContent:'space-between',marginVertical:8}}>
                    <Text style={{fontFamily:'book', fontSize:22}}>Category</Text>
                    <MaterialIcons name="category" size={26} color="#cb202d" />
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigationhandler('ItemForm')}>
                <View style={{width:'100%', flexDirection:'row-reverse', justifyContent:'space-between',marginVertical:8}}>
                    <Text style={{fontFamily:'book', fontSize:22}}>Item</Text>
                    <Ionicons name="ios-cart" size={26} color="#cb202d" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigationhandler('ContactForm')}>
                <View style={{width:'100%', flexDirection:'row-reverse', justifyContent:'space-between',marginVertical:8}}>
                    <Text style={{fontFamily:'book', fontSize:22}}>Contacts</Text>
                    <MaterialIcons name="contacts" size={26} color="#cb202d" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigationhandler('DriverForm')}>
                <View style={{width:'100%', flexDirection:'row-reverse', justifyContent:'space-between',marginVertical:8}}>
                    <Text style={{fontFamily:'book', fontSize:22}}>Create Driver</Text>
                    <MaterialIcons name="contacts" size={26} color="#cb202d" />
                </View>
                </TouchableOpacity>

                </View>
                

            </View>
        </Modal>
    )

}

export default withNavigation(CreateModal)