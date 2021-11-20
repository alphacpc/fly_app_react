import React, { useContext} from 'react';
import {StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import {AuthenticatedUserContext} from '../navigation/AuthenticatedUserProvider'

const auth = Firebase.auth();

const HomeScreen = () => {
    const { user} = useContext(AuthenticatedUserContext)
    const handleSignOut = async () => {
        try{
            await auth.signOut();
        }catch(err){
            console.log(err);
        }
    };

    return (
      <View>
          <StatusBar style="dark-content"/>
          <View>
              <Text>Bienvenue {user.email}</Text>
              <IconButton name='logout' size={24} color="#fff" onPress={handleSignOut}/>
              <Text>Your UID is : {user.uid}</Text>
          </View>
      </View>  
    )
}

export default HomeScreen
