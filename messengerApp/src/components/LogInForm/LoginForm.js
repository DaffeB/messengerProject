


import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../authentication/firebase';

const LoginForm = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)



    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Loggin in')
                const user = userCredential.user
                console.log(user)
                navigation.navigate('ScreensTabs');
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 100

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});

export default LoginForm;