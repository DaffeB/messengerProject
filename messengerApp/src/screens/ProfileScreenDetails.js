import DATA from '../const/Data'
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
// import TryIt from '../components/TryIt'
import { ScrollView } from 'react-native-gesture-handler'
import { GlobalStyles } from '../const/styles'
// import TryItAgain from '../components/TryItAgain'
import Cusomisation from '../components/ProfileDetailsScreenOfFriens/Cusomisation'
import MoreActions from '../components/ProfileDetailsScreenOfFriens/MoreActions'
import PrivacyAndSupport from '../components/ProfileDetailsScreenOfFriens/PrivacyAndSupport'
import { SafeAreaView } from 'react-native-safe-area-context'




function ProfileScreenDetails({ route }) {

    const { userName } = route.params;



    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View>
                        <View style={styles.content}>
                            <Image style={{ width: 70, height: 70 }} source={require('../assets/images/users/man1.png')} />
                            <Text style={styles.friendProfileName}>User: {userName}</Text>
                            <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20, width: 100, justifyContent: 'space-around' }}>
                                <Image source={require('../assets/iconsFriendsProfile/facebookIcon.png')} />
                                <Image source={require('../assets/iconsFriendsProfile/bellIcon.png')} />
                            </View>
                        </View>
                        <View>

                        </View>
                        {/* <TryItAgain /> */}
                        <Cusomisation />
                        {/* <TryIt /> */}
                        <MoreActions />
                        <PrivacyAndSupport />
                        <View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView>


    )
}

export default ProfileScreenDetails

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        marginTop: 20
    },
    friendProfileName: {
        fontWeight: '800',
        fontSize: 24,
        paddingTop: 20,
        color: 'red'
    },

})