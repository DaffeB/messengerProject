import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Panda = () => {
    return (
        <View style={{ marginTop: 100 }}>
            <Text style={{ fontWeight: '600', fontSize: 20, paddingHorizontal: 50, justifyContent: 'center' }}>Panda u merzite qe ti nuk po e hap nje llogari te ne</Text>
            <Image style={{ width: 100, height: 100, marginLeft: 120 }} source={require('../assets/unhappyPanda.png')} />
        </View>
    )
}

export default Panda

const styles = StyleSheet.create({})