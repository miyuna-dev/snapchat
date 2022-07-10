import React from 'react'
import { StyleSheet,SafeAreaView, View, Text,TouchableOpacity} from 'react-native'
import {AntDesign,Ionicons} from '@expo/vector-icons'


export const Snap = ({name,timeAgo,}) => {
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.Container}>
                <View style={styles.contentContainer}>
                <View style={styles.User}>
                  <View style={styles.IconsChat}>
                        <AntDesign name='user' size={20} color='#263238'/>
                    </View>

                    <View>
                        <Text style={styles.title}>{name} </Text>
                        <View style={styles.newContainer}>
                            <View style={styles.newSnap} />
                              <Text style={styles.newSnapTxt}>New Snap . {timeAgo} ago </Text> 
                        </View>
                    </View>
                      
                  </View>
                <View style={styles.replayIcon}>
                  
                    <Ionicons name='camera-outline' size={30} color='red'/>
                </View>
              

          </View>
        </TouchableOpacity>
    </SafeAreaView>

  )
}

const styles=StyleSheet.create({
  Container:{
    padding:10,
    
    
  },
  contentContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
    User: {
      flexDirection: 'row',
      alignItems: 'center',
      
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  IconsChat: {
    width: 45,
    height: 45,
    borderRadius: 45/2,
    padding: 10,
    borderColor: "#263238",
    borderWidth: 2,
    alignItems: 'center',
    marginRight: 10,
  },
  newContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newSnap: {
    width:16, 
    height:16,
    borderRadius:5,
    backgroundColor:"red",
    marginRight:10,
    marginVertical:5,
  },
  newSnapTxt: {
    color: '#607D8B',
  },
  replayIcon: {
    padding: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#ccc',
  }





})

