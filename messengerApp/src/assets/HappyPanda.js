import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const HappyPanda = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: '500', marginHorizontal: 20 }}>Thank you for comming to panda's world! </Text>
            <Image style={{ width: 150, height: 150, marginLeft: 100 }} source={require('./HappyPanda.png')} />
        </View>
    )
}

export default HappyPanda

const styles = StyleSheet.create({})