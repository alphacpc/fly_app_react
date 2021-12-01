import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, Text, Image, View, TextInput, ScrollView, KeyboardAvoidingView, Button, Dimensions, Pressable, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

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

import Firebase from '../firebase/firebase';

const screenWidth = Dimensions.get("screen").width;

const RegisterScreen = ({navigation}) => {

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

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayPassword, setDisplayPassword] = useState(false);
    const [submitLoader, setSubmitLoader] = useState(false);


    const handleRedirectSignin = () => {
        navigation.navigate("Login");
    }
    
    const handleDisplayPassword = () => {
        setDisplayPassword(!displayPassword);
    }

    const checkEyes = (displayPassword) ? <FontAwesome name="eye-slash" size={14} color="black" /> :
    <FontAwesome name="eye" size={14} color="black" /> 
    
    const handleSubmit = async() =>{
        setSubmitLoader(true);
        try{
            if(fname!="" || lname!="" || email!="" || password!=""){
                const newUser = await Firebase.singupUser(email.toLocaleLowerCase(),password);
                console.log(newUser.user.uid)
                if(newUser){
                    Firebase.currentUser(newUser.user.uid).set({"Firstname":fname, "Lastname":lname,"Addresse email": email});
                }
                setSubmitLoader(false);
                navigation.navigate("Login");
                setEmail("");
                setfname("");
                setlname("");
                setPassword("");
            }
            
        }catch(error){
            console.log(error);
        }
    }

    return( (!fontsLoaded) ? <LoginScreen/> : 
        <SafeAreaView style={styles.SignupContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ViewWelcome}>
                <Image source={require("./../assets/images/logo3.png")} style={styles.travelImage}/>
                <Text style={styles.TextMessage}>Créer un compte sur Tooky</Text>
            </View>

            {/* Fields form */}
            <View style={styles.ViewTextInput}>
                <TextInput  style={styles.TextInput} value={fname} onChangeText={text => setFname(text)} 
                            placeholder="Entrer votre prenom"/>
                
                <TextInput  style={styles.TextInput} value={lname} onChangeText={text => setLname(text)} 
                            placeholder="Entrer votre nom de famille"/>

                <TextInput  style={styles.TextInput} value={email} onChangeText={text => setEmail(text)} 
                            placeholder="Entrer votre adresse e-mail"/>

                
                <View style={styles.ViewPassword}>
                    <TextInput value={password} onChangeText={text => setPassword(text)} 
                            placeholder="Entrer votre mot de passe" secureTextEntry={displayPassword}/>
                    <Pressable onPress={handleDisplayPassword}>{checkEyes}</Pressable>

                </View>
            </View>

            {/* Forget password */}
            <View style={styles.ViewForgetPassword}>
                <Pressable onPress={() => navigation.navigate("ResetPassword")}>
                    <Text style={styles.TextForgetPassword}>Mot de passe oublie</Text>
                </Pressable>
            </View>

            {/* Button signup */}
            <View>
                <TouchableOpacity style={styles.TouchableButton} onPress={handleSubmit}>
                    <Text style={styles.TouchableTextButton}>Inscription</Text>
                    {(submitLoader) ? <ActivityIndicator color="#d2d2d2"/> : null}
                </TouchableOpacity>
            </View>

            {/* Alredy Account connect */}
            <View style={styles.ViewAlreadyAccount}>
                <Text style={styles.TextAlreadyAccount}>Vous avez deja un compte !</Text>
                <Button style={styles.ButtonAlreadyAccount} 
                    color="orangered" title="se connecter" onPress={ handleRedirectSignin }/>
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
        backgroundColor:'#2FDD92',
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
    // View Password
    ViewPassword:{
        backgroundColor:'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 20,
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
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
        marginBottom: 20,
        flexDirection:'row',
        justifyContent:'center'
    },
    TouchableTextButton:{
        textAlign:'center',
        fontFamily:'Inter_600SemiBold',
        letterSpacing: 2,
        marginRight:4
    },
    // Already Account
    ViewAlreadyAccount:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        marginTop: 30,
        marginBottom: 40
    },
    ButtonAlreadyAccount:{
        marginLeft:0,    
    },
    TextAlreadyAccount:{
        marginRight:5
    }
})
