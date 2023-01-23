import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GoToProfile = () => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('ProfileScreenDetails')}>
            <Image style={{ width: 20, height: 20 }} source={require('../assets/images/users/man1.png')} />
        </Pressable>
    )
}

export default GoToProfile

const styles = StyleSheet.create({})

