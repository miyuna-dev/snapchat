import React from'react'
import {StyleSheet,Text,View} from 'react-native'
import { Snap } from '../chats/snaps'

const Chatscreen = () => {
    return(
        <View>
            <Snap/>
        </View>
)}

export default Chatscreen
const styles=StyleSheet.create({
    devider:{
        borderBottomWidth:1,
        borderBottomColor:'#607D8B',
    }
})