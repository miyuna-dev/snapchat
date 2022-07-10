import React from 'react'
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, ActivityIndicator, PixelRatio } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const size = 70;

const imagen = require('./snap.png');

const Main= ({navigation}) => { 
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Image 
            source={imagen}
            style={{
            width: PixelRatio.getPixelSizeForLayoutSize(size),
            height: PixelRatio.getPixelSizeForLayoutSize(size)
            }}
          />
          {/* <ActivityIndicator color="#f7c0d6" size="large" animating={true}/>
          <ActivityIndicator color="#f7c0d6" size="large" animating={true}/> */}
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => navigation.navigate('Register')}>
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.roundButton} onPress={() => navigation.navigate('Login')}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F400',
    justifyContent: 'center',
  },
  view: {
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 16,
  },
  img: {
    width: '82%',
    height: '58%',
  },
  roundButton: {
    margin: 8,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'lightblue',
  },
})

export default Main;