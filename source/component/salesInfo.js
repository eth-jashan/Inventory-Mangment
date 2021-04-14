import React, { useState } from 'react'
import { View } from 'react-native'
import {TextInput} from 'react-native-paper'

const SalesInfo = ({costPrice, setCostPrice,sellPrice, setSellPrice}) => {

    

    return<View>
        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {costPrice}
                onChangeText={setCostPrice}
                label='Cost Price'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {sellPrice}
                onChangeText={setSellPrice}
                label='Sell Price'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
    </View>

}

export default SalesInfo