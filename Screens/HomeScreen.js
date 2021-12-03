import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ImageBackground, View, Image, ActivityIndicator, SafeAreaView, FlatList, ScrollView, Dimensions, Pressable, TextInput } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import Travel from "./../assets/images/Travel2.png";

import Logo from '../assets/images/logo3.png';
import Avatar from '../assets/images/FlagSN.png';
import API from "../AvionStackApi";
import datas from '../Values';


const widthScreen = Dimensions.get("screen").width;

const HomeScreen = () => {

    const url = `http://api.aviationstack.com/v1/flights?access_key=${API}`;
    const [flightsData, setFlightData] = useState(null);
    const [loaderData, setLoaderData] = useState(true);

    const fetchFlightsData = async() => {
        // try{
        //     const response = await axios.get(url);
        //     console.log(response)
        //     setFlightData(await response.data.data);
        //     setLoaderData(false)
        // }
        // catch(error){
        //     console.log(error);
        // }

        setFlightData(datas);
        setLoaderData(false)

    }

    const SimpleFly = ({item}) => {
        return <View style={styles.SimpleFlyContainer}>
            <View style={styles.ViewAirport}>
                <View style={styles.ViewDeparture}>
                    <Text>{item.departure.airport} </Text>
                    <Text>({item.departure.iata})</Text>
                </View>
                <Text style={styles.ViewNameCompagny}>{item.airline.name}</Text>
                <View style={styles.ViewArrival}>
                    <Text style={{textAlign:'right'}}>{item.arrival.airport}</Text>
                    <Text style={{textAlign:'right'}}>({item.arrival.iata})</Text>
                </View>
            </View>

            <Image source={Travel} style={{
                    width:widthScreen/1.2,
                    height: 48,
                    marginBottom:10,
            }}/>

            <View style={styles.ViewTimes}>
                <View>
                    <Text>Depart</Text>
                    <Text>{item.departure.scheduled.substring(item.departure.scheduled.indexOf("T")+1,item.departure.scheduled.indexOf("+")-3)}</Text>
                </View>
                <View>
                    <Text>Arrivee</Text>
                    <Text style={{textAlign:'right'}}>{item.arrival.scheduled.substring(item.arrival.scheduled.indexOf("T")+1,item.arrival.scheduled.indexOf("+")-3)}</Text>

                </View>
            </View>

            <View style={styles.ViewMorePressable}>
                <Pressable style={styles.PressableButton}>
                    <Text style={styles.PressableText}>View more</Text>
                </Pressable>
            </View>
        </View>
    }

    useEffect( ()=>{
        fetchFlightsData();
    },[])


    return (!loaderData)? (
        <SafeAreaView style={styles.HomeContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ViewHeader}>
                    <View style={styles.ViewTopHeader}>
                        <Text></Text>
                        <Image style={styles.FlagSn} source={Avatar}/>
                    </View>
                    <View style={styles.ViewTextIntro}>
                        <Text style={styles.TextIntroBold}>Hello Alpha DIALLO, Bienvenue sur Tooky</Text>
                        <Text style={styles.TextIntroNoBold}>Rechercher un vol en un clic !</Text>
                    </View>
                    <Image source={Logo} style={styles.ImageLogo}/>
                </View>

                <View style={styles.ViewFlightsContainer}>
                    {/* For Search */}
                    
                    <View style={styles.FieldSearch}>
                        <TextInput placeholder="Recherche..." />
                        <AntDesign name="search1" size={18} color="black" />
                    </View>

                    <Text style={styles.TextMesageFlights} >{flightsData.length} vols disponibles pour le moment</Text>
                    
                    {/* Airplane List */}
                    <FlatList
                        data={flightsData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => `${flightsData.indexOf(item)}`}
                        renderItem={ ({item}) => <SimpleFly item={item} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    ): (<SafeAreaView style={styles.HomeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text>HomeScreen modification test</Text>
            </View>
            <ActivityIndicator color="#d2d2d2"/>
        </ScrollView>
    </SafeAreaView>)
}



export default HomeScreen

const styles = StyleSheet.create({
    HomeContainer:{
        flex:1,
        paddingTop: 20,
    },
    // SimpleFlyContainer
    SimpleFlyContainer:{
        backgroundColor: '#ffffff',
        marginBottom: 25,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    //ViewAirport
    ViewAirport:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom: 15
    },
    ViewDeparture:{
        width: widthScreen / 3
    },
    ViewArrival:{
        width: widthScreen / 4
    },
    ViewNameCompagny:{
        width: widthScreen / 5,
        display:'flex',
        justifyContent:'flex-end',
        alignContent:'flex-end',
    },
    // View Times
    ViewTimes:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom: 15
    },
    // View More Pressable
    ViewMorePressable:{
        display:'flex',
        alignItems:'flex-end',
    },
    PressableButton:{
        backgroundColor:'#f05',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius:20,
        elevation: 10
    },
    PressableText:{
        color:'#ffffff',
        fontWeight:'bold',
        letterSpacing:1.4
    },
    // Section Welcome
    ViewHeader:{
        backgroundColor:'#161853',
        paddingHorizontal:10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 100
    },
    ViewTopHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop: 10
    },
    FlagSn:{
        width: 40,
        height: 40,
        borderRadius: 50,
        elevation: 10
    },
    ViewTextIntro:{
        position:'absolute',
        top: widthScreen / 3,
        paddingLeft: 10
    },
    TextIntroBold:{
        fontSize: 35,
        fontWeight: "700",
        lineHeight: 50,
        color:'#ffffff'
    },
    TextIntroNoBold:{
        fontSize: 18,
        fontStyle:'italic',
        color:'#ffffff',
        paddingTop:20
    },
    ImageLogo:{
        width: widthScreen,
        height: widthScreen,
        opacity: .2
    },
    // View Flights Container
    ViewFlightsContainer:{
        paddingHorizontal: 10
    },
    FieldSearch:{
        backgroundColor:'gold',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:20,
        marginTop: 30
    },
    TextMesageFlights:{
        paddingVertical: 20,
        fontSize: 15,
        fontWeight:'bold'
    },
})
