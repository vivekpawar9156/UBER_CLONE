import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NavOptions from '../navigations/NavOptions'



const HomeScreen = () => {
  return (
    <SafeAreaView>    
      <View style={{paddingLeft:10}}>
        <Image
          style={{
            width: '30%',
            height: '40%',
            resizeMode: 'contain'
          }}
          source={{uri:"https://links.papareact.com/gzs"}}
        
        />


        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
})