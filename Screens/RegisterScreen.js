import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, Text, Image, View, TextInput, ScrollView, KeyboardAvoidingView, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
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
import LoginScreen from './LoginScreen';

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const RegisterScreen = () => {

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

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return( (!fontsLoaded) ? <LoginScreen/> : 
        <SafeAreaView style={styles.SignupContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ViewWelcome}>
                <Image source={require("./../assets/images/logo3.png")} style={styles.travelImage}/>
                <Text style={styles.TextMessage}>Créer un compte sur Tooky</Text>
            </View>

            {/* Fields form */}
            <View style={styles.ViewTextInput}>
                <TextInput  style={styles.TextInput} value={username} onChangeText={text => setUsername(text)} 
                            placeholder="Entrer votre nom d'utilisateur"/>
                
                <TextInput  style={styles.TextInput} value={email} onChangeText={text => setEmail(text)} 
                            placeholder="Entrer votre adresse e-mail"/>
                
                <TextInput  style={styles.TextInput} value={password} onChangeText={text => setPassword(text)} 
                            placeholder="Entrer votre mot de passe" secureTextEntry/>
            </View>

            {/* Forget password */}
            <View style={styles.ViewForgetPassword}>
                <Text style={styles.TextForgetPassword}>Mot de passe oublie</Text>
            </View>

            {/* Button signup */}
            <View>
                <TouchableOpacity style={styles.TouchableButton}>
                    <Text style={styles.TouchableTextButton}>Inscription</Text>
                </TouchableOpacity>
            </View>

            {/* Alredy Account connect */}
            <View style={styles.ViewAlreadyAccount}>
                <Text style={styles.TextAlreadyAccount}>Vous avez deja un compte !</Text>
                <Button style={styles.ButtonAlreadyAccount} 
                    color="orangered" title="se connecter"/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    SignupContainer:{
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
        backgroundColor:'#2FDD92'
    },
    ViewWelcome:{
        display: 'flex',
        flexDirection:"row-reverse",
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        width: screenWidth,
        paddingHorizontal: 10,
    },
    TextMessage:{
        fontSize: 35,
        letterSpacing: 2,
        width: '50%',
        fontFamily: 'Inter_800ExtraBold'
    },
    travelImage:{
        width: '50%',
        height: screenWidth / 2,
    },
    //Fields   
    ViewTextInput:{
        paddingHorizontal: 5,
        marginVertical: 20,
    },
    TextInput:{
        backgroundColor:'white',
        paddingVertical: 10,
        paddingLeft: 15,
        marginVertical: 10,
        borderRadius: 20,
        letterSpacing: 1.4,
    },
    // Forget password
    ViewForgetPassword:{
        marginBottom: 20,
        width:'100%'
    },
    TextForgetPassword:{
        textAlign:'right'
    },
    // Touchable Button
    TouchableButton:{
        backgroundColor:'yellow',
        paddingVertical:15,
        borderRadius: 30,
        marginBottom: 20
    },
    TouchableTextButton:{
        textAlign:'center',
        fontFamily:'Inter_600SemiBold',
        letterSpacing: 2,
    },
    // Already Account
    ViewAlreadyAccount:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        marginTop: 30,
    },
    ButtonAlreadyAccount:{
        marginLeft:0,    
    },
    TextAlreadyAccount:{
        marginRight:5
    }
})
