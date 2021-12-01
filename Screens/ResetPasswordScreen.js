import React, {useState} from 'react';
import { StyleSheet, Text, Button, Image, Dimensions, View, TextInput, ScrollView, KeyboardAvoidingView, ActivityIndicator, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Firebase from '../firebase/firebase';

const screenWidth = Dimensions.get("screen").width;  

const ResetPasswordScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayPassword, setDisplayPassword] = useState(false);
    const [submitLoader, setSubmitLoader] = useState(false);


    const handleRedirectSignup = () => {
        navigation.navigate("Register")
    }

    const handleDisplayPassword = () =>{
        setDisplayPassword(!displayPassword);
    }

    const handleSubmit = async() =>{
        setSubmitLoader(true);
        try{
            await Firebase.connectUser(email,password);
            navigation.navigate("Home");
            setSubmitLoader(false);
            setEmail("");
            setPassword("");
        }
        catch(error){
            console.log(error);
        }
    }

    const checkEyes = (displayPassword) ? <FontAwesome name="eye-slash" size={14} color="black" /> :
    <FontAwesome name="eye" size={14} color="black" /> 


    return (
        <SafeAreaView style={styles.SigninContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ViewWelcome}>
            <Image source={require("./../assets/images/logo3.png")} style={styles.travelImage}/>
            <Text style={styles.TextMessage}>Bienvenue sr Tooky</Text>
        </View>

        {/* Fields form */}
        <View style={styles.ViewTextInput}>

            <TextInput  style={styles.TextInput} value={email} onChangeText={text => setEmail(text)} 
                        placeholder="Entrer votre adresse e-mail"/>
            
            <View style={styles.ViewPassword}>
                <TextInput value={password} style={styles.TextInputPassword} onChangeText={text => setPassword(text)} 
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
            <TouchableOpacity onPress={handleSubmit} style={styles.TouchableButton}>
                <Text style={styles.TouchableTextButton}>Connexion</Text>
                {(submitLoader) ? <ActivityIndicator color="#d2d2d2"/> : null}
            </TouchableOpacity>
        </View>

        {/* Alredy Account connect */}
        <View style={styles.ViewAlreadyAccount}>
            <Text style={styles.TextAlreadyAccount}>Vous n'avez pas de compte !</Text>
            <Button style={styles.ButtonAlreadyAccount} 
                color="orangered" title="s'inscrire" onPress={handleRedirectSignup}/>
        </View>
    </ScrollView>
</SafeAreaView>
    )
}

export default ResetPasswordScreen


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
    //Fiel Password
    TextInputPassword:{
        letterSpacing:1.4,
        width:'90%'
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
        // fontFamily:'Inter_600SemiBold',
        letterSpacing: 2,
        paddingRight:5
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

