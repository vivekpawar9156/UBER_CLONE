import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './app/screens/HomeScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import MapScreen from './app/screens/MapScreen';



const Stack = createNativeStackNavigator();

export default function App() {
    return (

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
}

const styles = StyleSheet.create({})