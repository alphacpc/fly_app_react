import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SingleAirplaneScreen = ({navigation,route}) => {
    
    const item = route.params.item
    
    return (
        <View style={{paddingTop:40}}>
            <Text>Single Screen Airplane</Text>
            <Text>{item.airline.name}</Text>
        </View>
    )
}

export default SingleAirplaneScreen;

const styles = StyleSheet.create({})
