import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import SearchBar from '../../components/SearchBar'


const ChatsScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }} >
            <SearchBar />

        </View>
    )
}

export default ChatsScreen

const styles = StyleSheet.create({})