
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { GlobalStyles } from '../const/styles'

const TryIt = () => {
    return (
        <View style={{ paddingHorizontal: 16, width: '100%' }} >
            <Text style={styles.title}>Cusomisation</Text>

            <View style={{ borderWidth: 1, paddingLeft: 16, borderRadius: 10, height: '66%', borderColor: GlobalStyles.colors.greyFive, backgroundColor: GlobalStyles.colors.greyThree }}>
                <View style={[styles.details, { marginTop: 10 }]}>
                    <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/themeIcon.png')} />


                    <View style={styles.bottomLine}>
                        <Text style={styles.detailsInfo}>
                            Theme</Text>

                    </View>

                </View>

                <View style={styles.details}>
                    <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/lips.png')} />
                    <View style={styles.bottomLine}>
                        <Text style={styles.detailsInfo}>Quick reaction</Text>
                    </View>
                </View>

                <View style={styles.details}>
                    <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/nicknamesIcon.png')} />
                    <View style={styles.bottomLine}>
                        <Text style={styles.detailsInfo}>Nicknames</Text>
                    </View>
                </View>

                <View style={[styles.details, { marginBottom: 10 }]}>
                    <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/wordsEffectIcon.png')} />
                    <View>
                        <Text style={styles.detailsInfo}>Words effect</Text>
                    </View>

                </View>
            </View>
        </View >
    )
}

export default TryIt

const styles = StyleSheet.create({
    title: {
        paddingBottom: 10,
        color: GlobalStyles.colors.greyFive

    },

    icons: {
        width: 25,
        height: 25,
        marginRight: 20
    },
    details: {

        flexDirection: 'row',
        height: '26%',
        paddingVertical: 15,
        paddingLeft: 10,


    },
    bottomLine: {
        borderBottomColor: GlobalStyles.colors.greyFive,
        borderBottomWidth: 1,
        width: '86%',
        paddingVertical: 0


    },
    detailsInfo: {
        fontSize: 15,
        fontWeight: '600'
    }

})