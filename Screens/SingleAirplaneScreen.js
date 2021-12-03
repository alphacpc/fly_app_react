import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, Pressable, ActivityIndicator, ActionSheetIOS } from 'react-native';
import { Ionicons,MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Barcode from 'react-native-barcode-expo';

import Avatar from '../assets/images/FlagSN.png';
import Logo from '../assets/images/logo3.png';

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
                        <Pressable onPress={() => navigation.navigate("Home")} style={styles.PressableBackHome}>
                            <Ionicons name="md-chevron-back-outline" size={24} color="white" />
                        </Pressable>
                        <Text style={styles.TextTitleScreen}>Détail du vol</Text>
                    </View>
                    <Image source={Avatar} style={styles.Avatar}/>
                </View>
                {/* Body SingleAirplaneScreen */}
                <View style={styles.ViewBody}>
                    <View style={styles.ViewFromTo}>
                        <Text style={styles.ViewFromToLabelName}>De</Text>
                        <Text style={styles.ViewFromToLabelName}>A</Text>
                    </View>

                    {/* Airport Name */}
                    <View style={styles.ViewAirports}>
                        <View style={styles.ViewAirport}>
                            <Text style={styles.TextAirportName}>{item.departure.airport}</Text>
                            <Text style={styles.TextCodeCity}>({item.departure.iata})</Text>
                        </View>

                        <MaterialCommunityIcons name="airplane-takeoff" size={50} color="orangered" />
                        
                        <View style={styles.ViewAirport}>
                            <Text style={[styles.TextAirportName,{textAlign:'right'}]}>{item.arrival.airport}</Text>
                            <Text style={[styles.TextCodeCity,{textAlign:'right'}]}>({item.arrival.iata})</Text>
                        </View>
                    </View>

                    {/* Deadline and Compagny Name */}
                    <View style={styles.ViewDcContainer}>
                        <View style={styles.ViewDc}>
                            <Text style={styles.TextDcLabelName}>Date de depart</Text>
                            <View style={styles.ViewDcInfos}>
                                <AntDesign name="calendar" size={24} color="black" />
                                <Text style={styles.TextDeadlineDate}>{item.flight_date}</Text>
                            </View>
                        </View>

                        <View style={styles.ViewDc}>
                            <Text style={[styles.TextDcLabelName,{textAlign:'right', paddingRight:20}]}>Nom de la compagnie</Text>
                            <Text style={styles.TextCompagnyName}>{item.airline.name}</Text>
                            
                        </View>
                    </View>

                    {/* Flight Number and Infos */}
                    <View style={styles.ViewFlyContainer}>
                        <Text style={styles.TextFlyDescribe}>Informations supplémentaires du vol</Text>
                        
                        <View style={styles.ViewFlyItems}>
                            <View style={styles.ViewFlyItem}>
                                <Text style={styles.TextFlyItemLabelName}>Numero</Text>
                                <Text style={[styles.TextFlyItemValue,{textAlign:'center'}]}>404</Text>
                            </View>

                            <View style={styles.ViewFlyItem}>
                                <Text style={[styles.TextFlyItemLabelName, {textAlign:'center'}]}>ICAO</Text>
                                <Text style={styles.TextFlyItemValue}>IAW404</Text>
                            </View>

                            <View style={styles.ViewFlyItem}>
                                <Text style={[styles.TextFlyItemLabelName,{textAlign:'center'}]}>IATA</Text>
                                <Text style={styles.TextFlyItemValue}>IA404</Text>
                            </View>
                        </View>
                    </View>


                    {/* QR Code */}
                    <View style={{paddingTop:20}}>
                        <Barcode value="Mon Code Bar" text="Carte d'embarquement" format="CODE128"/>
                    </View>
                </View>



            </ScrollView>
        </SafeAreaView>
    ): (
        <SafeAreaView style={[styles.SingleAirplaneContainer,styles.SingleAirplaneContainerLoader]}>
            {/* Header SingleAirplaneScreen */}
            <View style={styles.ViewHeader}>
                    <View style={styles.ViewHeaderContentLeft} >
                        <Pressable onPress={() => navigation.navigate("Home")} style={styles.PressableBackHome}>
                            <Ionicons name="md-chevron-back-outline" size={24} color="white" />
                        </Pressable>
                        <Text style={styles.TextTitleScreen}>Détail du vol</Text>
                    </View>
                    <Image source={Avatar} style={styles.Avatar}/>
            </View>

            {/* <View style={styles.ActivityIndicator}> */}
                <Image source={Logo} style={styles.LogoLoader}/>
                <ActivityIndicator style={styles.ActivityIndicator} color="#f05" size="large"/>
            {/* </View> */}
            
        </SafeAreaView>
    )
}

export default SingleAirplaneScreen;

const styles = StyleSheet.create({
    SingleAirplaneContainer:{
        backgroundColor:'#009482',
        paddingTop: 24,
    },
    SingleAirplaneContainerLoader:{
        height: Dimensions.get("screen").height
    },
    ViewHeader:{
        backgroundColor:'#009482',
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
    PressableBackHome:{
        backgroundColor:'orangered',
        borderRadius: 50
    },
    TextTitleScreen:{
        marginLeft: 10,
        fontFamily: 'Inter_600SemiBold',
        letterSpacing: 0.4,
        fontSize: 18,
        color:"#ffffff"
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
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#ffffff',
    },
    // ViewFromTo
    ViewFromTo:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        paddingBottom:10
    },
    ViewFromToLabelName:{
        color:'#d2d2d2',
        fontFamily:'Inter_500Medium',
        fontSize: 18,
        letterSpacing:0.4
    },
    // ViewAirports
    ViewAirports:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:40
    },
    ViewAirport:{
        width: '38%',
        borderBottomColor:'#d2d2d2',
        borderBottomWidth:1
    },
    TextAirportName:{
        color:'#009482',
        fontFamily:'Inter_800ExtraBold',
        lineHeight: 20,
        height: 80,
        fontSize: 18,
        alignItems:'center',
        display:'flex',
        textAlignVertical:'center'
    },
    TextCodeCity:{
        color:'#97BFB4',
        fontFamily:'Inter_500Medium',
        paddingBottom: 5
    },
    // ViewDeadlineCompagny
    ViewDcContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    ViewDc:{
        // backgroundColor:'green'
    },
    ViewDcInfos:{
        flexDirection:'row',
        alignItems:'center'
    },
    TextDcLabelName:{
        fontFamily:'Inter_400Regular',
        color:'#d2d2d2',
        paddingBottom: 15
    },
    TextDeadlineDate:{
        marginLeft:10,
        fontFamily:"Inter_900Black",
        fontSize: 18
    },
    TextCompagnyName:{
        textAlign:'right',
        fontFamily:'Inter_500Medium',
        fontSize: 18,
        letterSpacing: 0.2,
        width: '90%'
    },
    // ViewFlyContainer
    ViewFlyContainer:{
        // backgroundColor:'yellow',
        paddingTop: 40
    },
    TextFlyDescribe:{
        color:'#d2d2d2',
        paddingBottom:20,
        fontSize: 15,
        letterSpacing:0.4
    },
    ViewFlyItems:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    ViewFlyItem:{
        // backgroundColor:'orangered'
    },
    TextFlyItemLabelName:{
        fontFamily:'Inter_500Medium',
        textTransform:'uppercase',
        fontSize: 15
    },
    TextFlyItemValue:{
        fontFamily:'Inter_800ExtraBold',
        fontSize: 22,
        letterSpacing: 0.4,
        paddingTop:10,
        color:'#009482'
    },
    // LogoLoader
    LogoLoader:{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width,
        opacity: 0.4,
        position:'absolute',
        top: Dimensions.get('screen').width / 2
    },
    ActivityIndicator:{
        position:'relative',
        top: Dimensions.get('screen').width / 1.7
    }
})
