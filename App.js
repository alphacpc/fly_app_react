import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ResetPasswordScreen from './Screens/ResetPasswordScreen';


//Firebase
import FirebaseContext from "./firebase/FirebaseContext";
import Firebase from "./firebase/firebase";




const Stack = createStackNavigator();


const App = () => {



  return (
    <FirebaseContext.Provider value={Firebase}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen}/>
          <Stack.Screen options={{headerShown:false}} name="Register" component={RegisterScreen}/>
          <Stack.Screen options={{headerShown:false}} name="ResetPassword" component={ResetPasswordScreen}/>
          <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({

})
