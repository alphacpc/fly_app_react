import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import API from "../AvionStackApi";

const width = Dimensions.get("screen").width;

const HomeScreen = () => {

    const url = `http://api.aviationstack.com/v1/flights?access_key=${API}`;
    const [flightsData, setFlightData] = useState(null);

    const fetchFlightsData = async() => {
        try{
            const response = await axios.get(url);
            const myData = await response.data;
            console.log(myData)
            // setFlightData(myData)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect( ()=>{
        fetchFlightsData();
    },[])

    // console.log(flightsData);

    return (
        <SafeAreaView style={styles.HomeContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text>HomeScreen modification</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default HomeScreen

const styles = StyleSheet.create({
    HomeContainer:{
        flex:1,
        paddingHorizontal: 10,
        paddingTop: 20,
    }
})
