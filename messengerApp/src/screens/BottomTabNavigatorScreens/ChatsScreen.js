import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import SearchBar from '../../components/SearchBar'
import Stories from '../../components/Stories'
import Messages from '../../components/Messages'





const ChatsScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }} >
            <SearchBar />
            <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 16 }}>
            </View>
            {/* <Messages /> */}


        </View>
    )
}

export default ChatsScreen

const styles = StyleSheet.create({})




