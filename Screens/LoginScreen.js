import React, {useState, useContext} from 'react';
import { StyleSheet, Text, Button, Image, Dimensions, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import FirebaseContext from "../firebase/FirebaseContext";

const screenWidth = Dimensions.get("screen").width;    

const LoginScreen = ({navigation}) => {

    // const firebase = useContext(FirebaseContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRedirecSignup = () => {
        navigation.navigate("Register")
    }
    
    return (
        <SafeAreaView style={styles.SigninContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ViewWelcome}>
                    <Image source={require("./../assets/images/logo3.png")} style={styles.travelImage}/>
                    <Text style={styles.TextMessage}>Bienvenue sur Tooky</Text>
                </View>

                {/* Fields form */}
                <View style={styles.ViewTextInput}>

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
                        <Text style={styles.TouchableTextButton}>Connexion</Text>
                    </TouchableOpacity>
                </View>

                {/* Alredy Account connect */}
                <View style={styles.ViewAlreadyAccount}>
                    <Text style={styles.TextAlreadyAccount}>Vous n'avez pas de compte !</Text>
                    <Button style={styles.ButtonAlreadyAccount} 
                        color="orangered" title="s'inscrire" onPress={handleRedirecSignup}/>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    SigninContainer:{
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
        // backgroundColor:'#2FDD92'
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
        letterSpacing: 0,
        width: '50%',
        fontWeight: 'bold'
        // fontFamily: 'Inter_800ExtraBold'
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
        // fontFamily:'Inter_600SemiBold',
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
