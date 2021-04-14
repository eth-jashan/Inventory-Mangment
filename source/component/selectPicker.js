import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const SelectionPicker = ({type}) => {

    return(
        <View style={{width:20, height:20, borderRadius:16,borderWidth:1, borderColor:'red', alignItems:'center', justifyContent:'center'}}>
            {type?<View style={{width:12, height:12, borderRadius:12, backgroundColor:'red',alignSelf:'center'}}/>:null}
        </View>
    )

}
export default SelectionPicker