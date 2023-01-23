import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Cusomisation from '../components/Cusomisation'

const ProfileScreenDetails = () => {


    return (
        <View>

            <View>
                <View style={styles.content}>
                    <Image style={{ width: 70, height: 70 }} source={require('../assets/images/users/man1.png')} />
                    <Text style={styles.friendProfileName}>Aley</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20, width: 100, justifyContent: 'space-around' }}>
                        <Image source={require('../assets/iconsFriendsProfile/facebookIcon.png')} />
                        <Image source={require('../assets/iconsFriendsProfile/bellIcon.png')} />
                    </View>


                </View>
                <Cusomisation />


                <View>

                </View>


            </View>
        </View>
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
        paddingTop: 20
    },

})