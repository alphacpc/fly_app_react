import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


import auth from '../firebase';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () =>{
        try{
            await auth.createUserWithEmailAndPassword(email, password);

        }catch(err){
            console.log(err);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Entrer votre adresse email"
                    style={styles.inputText}
                    value={email} onChangeText={ text => setEmail(text)}
                />
                <TextInput
                    placeholder="Entrer votre mot de passe"
                    style={styles.inputText}
                    value={password} onChangeText={ text => setPassword(text)}
                    secureTextEntry
                />
            </View>

            <View>
                <TouchableOpacity
                    onPress={handleSignup}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Connexion</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    inputContainer:{
        width: '80%'
    },
    inputText:{
        backgroundColor:'greenyellow',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:10,
        marginTop:20
    },
    button:{
        backgroundColor:'#0782f9',
        padding: 15,
        borderRadius:10,
        alignItems:'center',
        marginTop:10
    },
    buttonText:{
        color:'white'
    }
})
