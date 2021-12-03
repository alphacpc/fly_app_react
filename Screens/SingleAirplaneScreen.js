import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, Pressable, ActivityIndicator, ActionSheetIOS } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Avatar from '../assets/images/FlagSN.png';


import {useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,} from '@expo-google-fonts/inter';

const widthScreen = Dimensions.get('screen').width;

const SingleAirplaneScreen = ({navigation,route}) => {
    
    const {item} = route.params;
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });
    
    return (fontsLoaded)? (
        <SafeAreaView style={styles.SingleAirplaneContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header SingleAirplaneScreen */}
                <View style={styles.ViewHeader}>
                    <View style={styles.ViewHeaderContentLeft} >
                        <Ionicons name="md-chevron-back-outline" size={24} color="black" />
                        <Text style={styles.TextTitleScreen}>Détail du vol</Text>
                    </View>
                    <Image source={Avatar} style={styles.Avatar}/>
                </View>
                {/* Body SingleAirplaneScreen */}
                <View style={styles.ViewBody}>
                    <Text>{item.airline.name}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    ): (
        <SafeAreaView style={styles.SingleAirplaneContainer}>
            <View style={{paddingTop:40}}>
                <Text>En chargement...</Text>
                <ActivityIndicator color="#f05"/>
            </View>
        </SafeAreaView>
    )
}

export default SingleAirplaneScreen;

const styles = StyleSheet.create({
    SingleAirplaneContainer:{
        backgroundColor:'#97BFB4',
        paddingTop: 24,
    },
    ViewHeader:{
        backgroundColor:'#97BFB4',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    ViewHeaderContentLeft:{
        flexDirection:'row',
        alignItems:'center',
    },
    TextTitleScreen:{
        marginLeft: 10,
        fontFamily: 'Inter_600SemiBold',
        letterSpacing: 0.4,
        fontSize: 18
    },
    Avatar:{
        width: 40,
        height: 40,
        borderRadius:50,
        elevation: 10
    },
    // View Body
    ViewBody:{
        paddingHorizontal: 20,
        paddingTop:20,
        paddingBottom: 40,
        height: widthScreen * 2,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#ffffff',
    }
})
