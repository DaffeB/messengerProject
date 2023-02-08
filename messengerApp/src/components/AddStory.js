import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { GlobalStyles } from '../const/styles'

const AddStory = () => {

    return (
        <View style={{ marginRight: 30 }}>
            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: GlobalStyles.colors.greySix }}>

            </TouchableOpacity >
        </View >
    )
}

export default AddStory

const styles = StyleSheet.create({})