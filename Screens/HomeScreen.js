import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'

const HomeScreen = () => {
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
