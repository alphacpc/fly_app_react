import React from "react";
import {StyleSheet, Text} from "react-native";

const ErrorMessage = ({err, visible}) => {
    if(!err || !visible){
        return null;
    }

    return <Text style={}>{err}</Text>
}


const styles = StyleSheet.create({
    errorText: {
        color: '#fdca40',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '600'
    }
});


export default ErrorMessage;