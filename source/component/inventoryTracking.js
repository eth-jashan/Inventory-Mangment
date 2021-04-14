import React, { useState } from 'react'
import { View } from 'react-native'
import {TextInput} from 'react-native-paper'

const InventoryTracking = ({open, setOpen,reorder, setReorder}) => {

    

    return<View>
        <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {open}
                onChangeText={setOpen}
                label='Opening Stock'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
            <View style={{width:'92%', alignSelf:'center', marginVertical:4}}>
            <TextInput
                value = {reorder}
                onChangeText={setReorder}
                label='Reorder Level'
                mode = 'outlined'
                theme ={{colors:{primary:'red',underlineColor:'transparent'}}}
            />
            </View>
    </View>

}

export default InventoryTracking