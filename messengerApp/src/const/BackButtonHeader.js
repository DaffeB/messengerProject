import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import React from 'react'

const BackButtonHeader = () => {
    return (
        <Pressable onPress={() => navigation.goBack()}>
            <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/goBackLeft.png')} />
        </Pressable>
    )
}

export default BackButtonHeader

const styles = StyleSheet.create({})