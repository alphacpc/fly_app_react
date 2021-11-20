import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button as RNButton} from 'react-native';
import {Button, InputField, ErrorMessage} from '../components';
import Firebase from '../config/firebase';

const auth  = Firebase.auth();

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [loginError, setLoginError] = useState('');
    


  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };


    return (
        <View>
            <StatusBar style='dark-content'/>
            <Text>Login</Text>
            <InputField
                inputStyle={{fontSize:14}}
                containerStyle={{backgroundColor:'#fff',marginBottom:20}}
                leftIcon='email'
                placeholder="Entrer votre adresse email"
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <InputField
                inputStyle={{fontSize:14}}
                containerStyle={{backgroundColor:'#fff',marginBottom:20}}
                leftIcon='lock'
                placeholder="Entrer votre mot de passe"
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                textContentType='password'
                rightIcon={rightIcon}
                value={password}
                onChangeText={text => setPassword(text)}
                handlePasswordVisibility={handlePasswordVisibility}
            />
            {loginError ? <ErrorMessage err={loginError} visible={true}/> : null}

            <Button
                onPress={onLogin}
                backgroundColor="#f57c00"
                title='Login'
                titleColor="#fff"
                titleSize={20}
                containerStyle={{marginBottom:24}}
            />
            <RNButton
                onPress={() => navigation.navigate('Signup')}
                title='Creer un compte !'
                color="#fff"
            />

        </View>
    )
}

export default LoginScreen;
