import React, {useState} from 'react';
import { StyleSheet, Text, Button, Image, Dimensions, View, TextInput, ScrollView, KeyboardAvoidingView, ActivityIndicator, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Firebase from '../firebase/firebase';

const screenWidth = Dimensions.get("screen").width;  

const ResetPasswordScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [submitLoader, setSubmitLoader] = useState(false);
    const [message, setMessage] = useState("");
    // const [message, setMessage] = useState("Désolé cet adresse mail n'existe pas, veuillez réessayer avec un autre !");
    const [messageStatus, setMessageStatus] = useState(false);

    const handleRedirectSignin = () => {
        navigation.navigate("Login")
    }

    const displayMessage = (message !== "")? (
         <Text style={(messageStatus)? styles.PositiveMessage : styles.NegativeMessage} >{message}</Text>
    ): null;

    const handleSubmit = async() =>{
        setSubmitLoader(true);
        try{
            await Firebase.resetPasssword(email);
            setMessageStatus(true);
            setMessage(`veuillez vérifier votre boîte de réception, un mail a été envoyé à l'adresse ${email} !`);
            setTimeout(()=>{
                //navigation.navigate("Login");
            },5000)
            setSubmitLoader(false);
            setEmail("");
        }
        catch(error){
            setMessage("Désolé cet adresse mail n'existe pas, veuillez réessayer avec un autre !");
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={styles.SigninContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ViewWelcome}>
            <Image source={require("./../assets/images/logo3.png")} style={styles.travelImage}/>
            <Text style={styles.TextMessageWelcome}>Bienvenue sur Tooky,</Text>
            <Text style={styles.TextMessageAction}>Vous voulez Réinitialiser votre mot de passe</Text>
        </View>

        <View>{displayMessage}</View>
        
        {/* Fields form */}
        <View style={styles.ViewTextInput}>
            <TextInput  style={styles.TextInput} value={email} onChangeText={text => setEmail(text)} 
                        placeholder="Entrer votre adresse e-mail"/>
        </View>

        {/* Button signup */}
        <View>
            <TouchableOpacity onPress={handleSubmit} style={styles.TouchableButton}>
                <Text style={styles.TouchableTextButton}>Envoyer</Text>
                {(submitLoader) ? <ActivityIndicator color="#d2d2d2"/> : null}
            </TouchableOpacity>
        </View>

        {/* Alredy Account connect */}
        <View style={styles.ViewAlreadyAccount}>
            <Text style={styles.TextAlreadyAccount}>Vous avez deja un compte !</Text>
            <Button style={styles.ButtonAlreadyAccount} 
                color="orangered" title="se connecter" onPress={handleRedirectSignin}/>
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
        backgroundColor:'black'
    },
    ViewWelcome:{
        display: 'flex',
        // flexDirection:"row-reverse",
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        width: screenWidth,
        paddingHorizontal: 10,
    },
    TextMessageWelcome:{
        fontSize: 45,
        letterSpacing: 0,
        width: '100%',
        color:'#ffffff',
        fontWeight: 'bold'
    },
    TextMessageAction:{
        fontSize: 24,
        letterSpacing: 1.2,
        width: '100%',
        color:'#ffffff'
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
        fontWeight:'bold',
        // fontFamily:'Inter_600SemiBold',
        letterSpacing: 1.4,
        paddingRight:5
    },
    // Already Account
    ViewAlreadyAccount:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        marginTop: 10,
    },
    ButtonAlreadyAccount:{
        marginLeft:0,    
    },
    TextAlreadyAccount:{
        marginRight:5,
        color:"#ffffff"
    },
    //Style From Message
    NegativeMessage:{
        backgroundColor:'#f05',
        color:'#ffffff',
        paddingHorizontal: 15,
        paddingVertical:5,
        marginTop:10,
        marginBottom: -10,
        letterSpacing: 1,
        fontSize: 14,
        lineHeight:20,
        borderRadius:4
    },
    PositiveMessage:{
        backgroundColor:'greenyellow',
        color:'#000',
        paddingHorizontal: 15,
        paddingVertical:5,
        marginTop:10,
        marginBottom: -10,
        letterSpacing: 1,
        fontSize: 14,
        lineHeight:20,
        borderRadius:4
    }
})

