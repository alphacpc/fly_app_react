import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable, ActivityIndicator, ActionSheetIOS } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
                    <Ionicons name="md-chevron-back-outline" size={24} color="black" />
                    <Text>Detail du vol</Text>
                </View>
                {/* Body SingleAirplaneScreen */}
                <View>
                    <Text>{item.airline.name}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    ): (
        <SafeAreaView>
            <View style={{paddingTop:40}}>
                <Text>En chargement...</Text>
                <ActivityIndicator color="#f05"/>
            </View>
        </SafeAreaView>
    )
}

export default SingleAirplaneScreen;

const styles = StyleSheet.create({
    SingleAirplaneContainer:{},
    SingleAirplaneContainer:{},
})
