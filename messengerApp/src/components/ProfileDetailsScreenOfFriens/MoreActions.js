import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../const/styles';
import { Image } from 'react-native';

const MoreActions = () => {
    return (
        <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
            <Text style={styles.title}>More actions</Text>
            <View style={{
                width: '100%',
                height: 400, flexDirection: 'column',
                backgroundColor: GlobalStyles.colors.greyThree, borderWidth: 1,
                borderColor: GlobalStyles.colors.greyThree, borderRadius: 10,

            }}>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/chatGroupIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Create group chat with Aley
                        </Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/viewMedia.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            View media, files and links
                        </Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/pinnedMessage.png')} />
                    </View>
                    <View style={styles.borderColor}>
                        <Text style={{ marginTop: 15 }}>
                            Pinned messages
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/secretConversationIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Go to secret conversation
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/searchIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Search in conversation
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/bellIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Notifications and sounds
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/bellIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Notifications and sounds
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/shareIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: 'transparent', borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Share contact
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );

}

export default MoreActions

const styles = StyleSheet.create({
    title: {
        paddingBottom: 10,
        color: GlobalStyles.colors.greyFive,
        marginLeft: 15

    },

    icons: {
        width: 25,
        height: 25,
        marginRight: 20
    },

    lines: {
        height: 50, width: '20%', alignItems: 'center', justifyContent: 'center'
    },
    borderColor: {
        height: 50,
        borderBottomColor: GlobalStyles.colors.greyFive,
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        width: '80%'
    }
})