


import React, { useState } from 'react';
import { Image } from 'react-native';
import Panda from '../../assets/Panda';
import HappyPanda from '../../assets/HappyPanda';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../authentication/firebase';

const LoginForm = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)


    const options = {
        password: password,
        email: email,
        passwordLength: 8,
        containsLetter: true,
        containsNumber: true
    }

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password, options)
            .then((userCredential) => {
                console.log('Account created')
                const user = userCredential.user
                console.log(user)
                navigation.navigate('LoginForm');
                setAccountCreated(true);
            })
            .catch(error => {
                console.log(error)
            })
    }


    // const handleCreateAccount = () => {
    //     if (password.length === 5) {
    //         return (
    //             <Panda />

    //         )
    //     }
    //     // if (password.length === 11) {
    //     //     return (
    //     //         <HappyPanda />

    //     //     )
    //     // }
    //     else {
    //         createUserWithEmailAndPassword(auth, email, password)
    //             .then((userCredential) => {
    //                 console.log('Account created')
    //                 const user = userCredential.user
    //                 console.log(user)
    //                 navigation.navigate('LoginForm');
    //                 return <HappyPanda />


    //             })
    //             .catch(error => {
    //                 console.log(error)

    //             })
    //     }
    // }


    const handleLoginAccount = () => {

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
            <>
                {accountCreated ? <HappyPanda /> : <Panda />}
            </>

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
            <TouchableOpacity style={styles.buttonContainerLogin} onPress={handleLoginAccount}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainerCreate} onPress={handleCreateAccount}>
                <Text style={styles.buttonText}>CREATE</Text>
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
    buttonContainerLogin: {
        backgroundColor: '#22333b',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    buttonContainerCreate: {
        backgroundColor: '#1b3a4b',
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    pandaImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 10
    }

});

export default LoginForm;