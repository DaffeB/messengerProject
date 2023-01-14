import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SearchBar from '../../components/SearchBar'

const PeopleScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }} >
            <SearchBar />
        </View>
    )
}

export default PeopleScreen

const styles = StyleSheet.create({})