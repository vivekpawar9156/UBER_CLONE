import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { s as tw} from "react-native-wind";
import { alignSelf } from 'react-native-wind/dist/styles/flex/align-self';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';


const Data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen',
  },
];

const NavOptions = () => {

  const navigation = useNavigation();
  return (
    <FlatList
      data={Data}
      horizontal
      keyExtractor={(item)=>item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.container1}
          onPress={()=>navigation.navigate(item.screen)}
        
        >

            <View style={{padding:10}}>
                <Image
                    style={styles.container}
                    source={{uri:item.image}}
                />
            </View>
            <Text style={styles.text}>{item.title}</Text>
            <View style={{width:40, height:40, borderRadius:100, backgroundColor:'#000', alignItems:'center', marginLeft:10, marginTop:10}}>            
                <AntDesign name="arrowright" size={20} color="#FFF" style={{ marginTop:10}}/>
            </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
    container:{
        width:120, 
        height:120, 
        resizeMode:'contain'
    },
    container1:{
        padding:2,
        margin:7,
        backgroundColor:'#BDC3C7',
        paddingTop:4,
        paddingLeft:6,
        paddingBottom:8,
    },
    text:{
        marginTop:10,
        fontSize:17,
        fontWeight:'700',
        // alignSelf:'center'
        marginLeft:10, 
        color:'black'
    }
});
