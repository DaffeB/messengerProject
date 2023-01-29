import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GoToProfile = (props) => {
    const navigation = useNavigation();
    const selectedUserIndex = 2;  // set the index of the user you want to navigate to


    return (
        <Pressable onPress={() => navigation.navigate('ProfileScreenDetails', { index: selectedUserIndex })}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <Image style={{ width: 25, height: 25 }} source={require('../assets/images/users/man1.png')} />
                <Text>{props.username}</Text>
            </View>
        </Pressable>
    )
}

export default GoToProfile

const styles = StyleSheet.create({})

