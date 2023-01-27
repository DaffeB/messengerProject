import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GoToProfile = () => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('ProfileScreenDetails')}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <Image style={{ width: 25, height: 25 }} source={require('../assets/images/users/man1.png')} />
            </View>

        </Pressable>
    )
}

export default GoToProfile

const styles = StyleSheet.create({})

